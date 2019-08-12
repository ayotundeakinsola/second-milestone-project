queue()
    .defer(d3.csv, "data/imdbs.csv")
    .await(makeGraphs);

function makeGraphs(error, imdbsData) {
    var ndx = crossfilter(imdbsData);
    
    imdbsData.forEach(function(d){
        d.Revenue = parseInt(d.Revenue);
    })

    show_genre_selector(ndx);
    show_movie_year(ndx);

    dc.renderAll();
}


//Genre Selector
function show_genre_selector(ndx){
     var dim = ndx.dimension(dc.pluck('Genre'));
     var group = dim.group();
     
      dc.selectMenu("#genre-selector")
        .dimension(dim)
        .group(group);
}



// Bar Chart 
function show_movie_year(ndx) {
    var dim = ndx.dimension(dc.pluck('Year'));


    function add_item(p, v) {
        p.count++;
        p.total += v.Revenue;
        return p;
    }

    function remove_item(p, v) {
        p.count--;
        if (p.count == 0) {
            p.total = 0;
        }
        else {
            p.total -= v.Revenue;
        }
        return p;
    }

    function initialise() {
        return { count: 0, total: 0 };
    }

    var TotalMoviePerYear = dim.group().reduce(add_item, remove_item, initialise);
    
    
     dc.barChart("#movie-year")
        .width(800)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(TotalMoviePerYear)
        .valueAccessor(function(d){
            return d.value.count;
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Year")
        .yAxis().ticks(6);   
        
}


