//Stacked Bar Chart 
queue()
    .defer(d3.csv, "data/imdbs.csv")
    .await(makeGraphs);

function makeGraphs(error, imdbsData) {
    var ndx = crossfilter(imdbsData);

    show_revenue_genre(ndx);

    dc.renderAll();
}

function show_revenue_genre(ndx) {
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

    var RevenueByYearperGenre = dim.group().reduce(add_item, remove_item, initialise);
}
