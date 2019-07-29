queue()
    .defer(d3.csv, "data/imdb.csv")
    .await(makeGraphs);

function makeGraphs(error, imdbData) {
    debugger;
    var ndx = crossfilter(imdbData);

    show_rating(ndx);
    
    dc.renderAll();
}

function show_rating(ndx) {
    var dim = ndx.dimension(dc.pluck('Rating'));
    var group = dim.group();

    dc.barchart("#rating")
        .width(400)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Movie")
        .yAxisLabel("Rating")
        .yAxis().ticks(10);
}
