queue()
    .defer(d3.csv, "data/imdbs.csv")
    .await(makeGraphs);

function makeGraphs(error, imdbsData) {
    var ndx = crossfilter(imdbsData);

    imdbsData.forEach(function(d) {
        d.Revenue = parseInt(d.Revenue);
    })

    show_genre_selector(ndx);
    show_year_selector(ndx);
    show_movie_year(ndx);
    show_ratings_genre(ndx);
    show_stacked_chart(ndx);
    show_revenue_genre(ndx);
    show_runtime_genre(ndx);

    dc.renderAll();
}


//Genre Selector
function show_genre_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Genre'));
    var group = dim.group();

    dc.selectMenu("#genre-selector")
        .dimension(dim)
        .group(group);
}

//Year Selector
function show_year_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Year'));
    var group = dim.group();

    dc.selectMenu("#year-selector")
        .dimension(dim)
        .group(group);
}



// Bar Chart 
function show_movie_year(ndx) {
    var dim = ndx.dimension(dc.pluck('Year'));
    var group = dim.group();

    dc.barChart("#movie-year")
        .width(500)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(1500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Year")
        .yAxisLabel("Total")
        .yAxis().ticks(6);

}


//Pie Chart
function show_ratings_genre(ndx) {
    var rating_dim = ndx.dimension(dc.pluck('Genre'));
    var total_rating_per_genre = rating_dim.group().reduceSum(dc.pluck('Rating'));

    dc.pieChart('#rating')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(rating_dim)
        .group(total_rating_per_genre);
}

function show_revenue_genre(ndx) {
    var revenue_dim = ndx.dimension(dc.pluck('Genre'));
    var total_revenue_per_genre = revenue_dim.group().reduceSum(dc.pluck('Revenue'));


    dc.pieChart('#revenue')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(revenue_dim)
        .group(total_revenue_per_genre);
}

function show_runtime_genre(ndx) {
    var runtime_dim = ndx.dimension(dc.pluck('Genre'));
    var total_runtime_per_genre = runtime_dim.group().reduceSum(dc.pluck('Runtime'));


    dc.pieChart('#runtime')
        .height(330)
        .radius(90)
        .transitionDuration(1500)
        .dimension(runtime_dim)
        .group(total_runtime_per_genre);
}


// Stacked Chart

function show_stacked_chart(ndx) {
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
        .height(300)
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
        .yAxisLabel("Revenue")
        .xAxisLabel("Year")
        .legend(dc.legend().x(400).y(0).itemHeight(15).gap(5));

    stackedChart.margins().right = 0;


}
