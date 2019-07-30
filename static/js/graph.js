queue()
    .defer(d3.csv, "data/imdb.csv")
    .await(makeGraphs);

function makeGraphs(error, imdbData) {
    var ndx = crossfilter(imdbData);

    imdbData.forEach(function(d) {
        d.Title = parseInt(d.Title);
    })

    show_rating(ndx);
    show_average_runtime(ndx);

    dc.renderAll();
}

function show_rating(ndx) {
    var dim = ndx.dimension(dc.pluck('Rating'));
    var group = dim.group();

    dc.barChart("#rating")
        .width(900)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Movie")
        .yAxisLabel("Rating")
        .yAxis().ticks(15);
}

function show_average_runtime(ndx) {
    var dim = ndx.dimension(dc.pluck('Runtime'));

    function add_item(p, v) {
        p.count++;
        p.total += v.Title;
        p.average = p.total / p.count;
        return p;
    }

    function remove_item(p, v) {
        p.count--;
        if (p.count == 0) {
            p.total = 0;
            p.average = 0;
        }
        else {
            p.total -= v.Title;
            p.average = p.total / p.count;
        }
        return p;
    }

    function initialise() {
        return { count: 0, total: 0, average: 0 };
    }

    var averageRuntimeofMovie = dim.group().reduce(add_item, remove_item, initialise);

    dc.barChart("#average-runtime")
        .width(900)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(averageRuntimeofMovie)
        .valueAccessor(function(d) {
            return d.value.average.toFixed(2);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Title")
        .yAxisLabel("Runtime")
        .yAxis().ticks(15);

}
