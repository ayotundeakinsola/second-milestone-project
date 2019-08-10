//Stacked Bar Chart 
queue()
    .defer(d3.csv, "data/imdbs.csv")
    .await(makeGraphs);

function makeGraphs(error, imdbsData) {

    var ndx = crossfilter(imdbsData);

    var year_dim = ndx.dimension(dc.pluck('Year'));

    var RevenueByYearGenreAction = year_dim.group().reduceSum(function(d) {
        if (d.Genre === 'Action') {
            return +d.Revenue;
        }
        else {
            return 0;
        }
    });

    var RevenueByYearGenreAdventure = year_dim.group().reduceSum(function(d) {
        if (d.Genre === 'Adventure') {
            return +d.Revenue;
        }
        else {
            return 0;
        }
    });

    var RevenueByYearGenreAnimation = year_dim.group().reduceSum(function(d) {
        if (d.Genre === 'Animation') {
            return +d.Revenue;
        }
        else {
            return 0;
        }
    });

    var RevenueByYearGenreBiography = year_dim.group().reduceSum(function(d) {
        if (d.Genre === 'Biography') {
            return +d.Revenue;
        }
        else {
            return 0;
        }
    });

    var RevenueByYearGenreComedy = year_dim.group().reduceSum(function(d) {
        if (d.Genre === 'Comedy') {
            return +d.Revenue;
        }
        else {
            return 0;
        }
    });

    var RevenueByYearGenreCrime = year_dim.group().reduceSum(function(d) {
        if (d.Genre === 'Crime') {
            return +d.Revenue;
        }
        else {
            return 0;
        }
    });

    var RevenueByYearGenreDrama = year_dim.group().reduceSum(function(d) {
        if (d.Genre === 'Drama') {
            return +d.Revenue;
        }
        else {
            return 0;
        }
    });

    var RevenueByYearGenreFantasy = year_dim.group().reduceSum(function(d) {
        if (d.Genre === 'Fantasy') {
            return +d.Revenue;
        }
        else {
            return 0;
        }
    });

    var RevenueByYearGenreHorror = year_dim.group().reduceSum(function(d) {
        if (d.Genre === 'Horror') {
            return +d.Revenue;
        }
        else {
            return 0;
        }
    });

    var RevenueByYearGenreMystery = year_dim.group().reduceSum(function(d) {
        if (d.Genre === 'Mystery') {
            return +d.Revenue;
        }
        else {
            return 0;
        }
    });

    var RevenueByYearGenreRomance = year_dim.group().reduceSum(function(d) {
        if (d.Genre === 'Romance') {
            return +d.Revenue;
        }
        else {
            return 0;
        }
    });
    var RevenueByYearGenreScifi = year_dim.group().reduceSum(function(d) {
        if (d.Genre === 'Scifi') {
            return +d.Revenue;
        }
        else {
            return 0;
        }
    });

    var RevenueByYearGenreThriller = year_dim.group().reduceSum(function(d) {
        if (d.Genre === 'Thriller') {
            return +d.Revenue;
        }
        else {
            return 0;
        }
    });

    var stackedChart = dc.barChart("#stacked-chart");
    stackedChart
        .width(500)
        .height(500)
        .dimension(year_dim)
        .group(RevenueByYearGenreAction, "Action")
        .stack(RevenueByYearGenreAdventure, "Adventure")
        .stack(RevenueByYearGenreAnimation, "Animation")
        .stack(RevenueByYearGenreBiography, "Biography")
        .stack(RevenueByYearGenreComedy, "Comedy")
        .stack(RevenueByYearGenreCrime, "Crime")
        .stack(RevenueByYearGenreDrama, "Drama")
        .stack(RevenueByYearGenreFantasy, "Fantasy")
        .stack(RevenueByYearGenreHorror, "Horror")
        .stack(RevenueByYearGenreMystery, "Mystery")
        .stack(RevenueByYearGenreRomance, "Romance")
        .stack(RevenueByYearGenreScifi, "Scifi")
        .stack(RevenueByYearGenreThriller, "Thriller")
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(420).y(0).itemHeight(15).gap(5));

    stackedChart.margins().right = 100;

    dc.renderAll();
}

// Bar Chart
function makeGraphs(error, transactionsData) {
    var ndx = crossfilter(transactionsData);
    var name_dim = ndx.dimension(dc.pluck('name'));
    var total_spend_per_person = name_dim.group().reduceSum(dc.pluck('spend'));
    dc.pieChart('#per-person-chart')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(name_dim)
        .group(total_spend_per_person);

    var store_dim = ndx.dimension(dc.pluck('store'));
    var total_spend_per_store = store_dim.group().reduceSum(dc.pluck('spend'));
    dc.pieChart('#per-store-chart')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(store_dim)
        .group(total_spend_per_store);

    var state_dim = ndx.dimension(dc.pluck('state'));
    var total_spend_per_state = state_dim.group().reduceSum(dc.pluck('spend'));
    dc.pieChart('#per-state-chart')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(state_dim)
        .group(total_spend_per_state);
