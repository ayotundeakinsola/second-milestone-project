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
    var group = dim.group();

     dc.barChart("#movie-year")
        .width(800)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Year")
        .yAxis().ticks(6);   
        
}


