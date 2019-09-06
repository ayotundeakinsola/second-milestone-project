queue()
    .defer(d3.csv, "data/imdbs.csv")
    .await(makeGraphs);

function makeGraphs(error, imdbsData) {
    var ndx = crossfilter(imdbsData);

    imdbsData.forEach(function(d) {
        d.revenue_parsed = (d.Revenue);
    });


    var parseYear = d3.time.format("%Y").parse;
    imdbsData.forEach(function(d) {
        d.year_parsed = parseYear(d.Year);
    });

    show_genre_selector(ndx);
    show_year_selector(ndx);
    show_movie_year(ndx);
    show_ratings_genre(ndx);
    show_stacked_chart(ndx);
    show_runtime_genre(ndx);
    show_revenue_genre(ndx);

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
        .margins({ top: 10, right: 50, bottom: 40, left: 50 })
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
        .radius(150)
        .transitionDuration(1500)
        .dimension(rating_dim)
        .group(total_rating_per_genre);
}

function show_runtime_genre(ndx) {
    var runtime_dim = ndx.dimension(dc.pluck('Genre'));
    var total_runtime_per_genre = runtime_dim.group().reduceSum(dc.pluck('Runtime'));


    dc.pieChart('#runtime')
        .height(330)
        .radius(150)
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
        .width(700)
        .height(400)
        .margins({ top: 10, right: 50, bottom: 40, left: 50 })
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
        .legend(dc.legend().x(600).y(0).itemHeight(15).gap(5));

    stackedChart.margins().right = 0;

}

// Line Chart

function show_revenue_genre(ndx) {


    var year_dim = ndx.dimension(dc.pluck('year_parsed'));
    var minYear = year_dim.bottom(1)[0].year_parsed;
    var maxYear = year_dim.top(1)[0].year_parsed;

    function revenue_by_genre(Genre) {
        return function(d) {
            if (d.Genre === Genre) {
                return +d.revenue_parsed;
            }
            else {
                return 0;
            }
        }
    }
    var ActionRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Action'));

    var AdventureRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Adventure'));

    var AnimationRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Animation'));

    var BiographyRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Biography'));

    var ComedyRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Comedy'));

    var CrimeRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Crime'));

    var DramaRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Drama'));

    var FantasyRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Fantasy'));

    var HorrorRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Horror'));

    var MysteryRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Mystery'));

    var RomanceRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Romance'));

    var ScifiRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Scifi'));

    var ThrillerRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Thriller'));

    var compositeChart = dc.compositeChart('#composite-chart');
    compositeChart
        .width(900)
        .height(200)
        .dimension(year_dim)
        .x(d3.time.scale().domain([minYear, maxYear]))
        .yAxisLabel("Revenue")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .renderHorizontalGridLines(true)
        .compose([
            dc.lineChart(compositeChart)
            .colors('#1f77b4')
            .group(ActionRevenueByYear, 'Action'),
            dc.lineChart(compositeChart)
            .colors('#ff7f0e')
            .group(AdventureRevenueByYear, 'Adventure'),
            dc.lineChart(compositeChart)
            .colors('#2ca02c')
            .group(AnimationRevenueByYear, 'Animation'),
            dc.lineChart(compositeChart)
            .colors('#d62728')
            .group(BiographyRevenueByYear, 'Biography'),
            dc.lineChart(compositeChart)
            .colors('#9467bd')
            .group(ComedyRevenueByYear, 'Comedy'),
            dc.lineChart(compositeChart)
            .colors('#8c564b')
            .group(CrimeRevenueByYear, 'Crime'),
            dc.lineChart(compositeChart)
            .colors('#e377c2')
            .group(DramaRevenueByYear, 'Drama'),
            dc.lineChart(compositeChart)
            .colors('#7f7f7f')
            .group(FantasyRevenueByYear, 'Fantasy'),
            dc.lineChart(compositeChart)
            .colors('#bcbd22')
            .group(HorrorRevenueByYear, 'Horror'),
            dc.lineChart(compositeChart)
            .colors('#17becf')
            .group(MysteryRevenueByYear, 'Mystery'),
            dc.lineChart(compositeChart)
            .colors('#1f77b4')
            .group(RomanceRevenueByYear, 'Romance'),
            dc.lineChart(compositeChart)
            .colors('#ff7f0e')
            .group(ScifiRevenueByYear, 'Scifi'),
            dc.lineChart(compositeChart)
            .colors('#2ca02c')
            .group(ThrillerRevenueByYear, 'Thriller')
        ])
        .brushOn(false)
        .render();
}
