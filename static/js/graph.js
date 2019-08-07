/* Stacked Bar Chart */
queue()
            .defer(d3.csv, "data/imdb.csv")
            .await(makeGraphs);

        function makeGraphs(error, imdbData) {
            var ndx = crossfilter(imdbData);
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
             var RevenueByYearGenreCFantasy = year_dim.group().reduceSum(function(d) {
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
             var RevenueByYearGenreSci-Fi = year_dim.group().reduceSum(function(d) {
                if (d.Genre === 'Sci-Fi') {
                    return +d.Revenue;
                }
                else {
                    return 0;
                }
            });
             var RevenueByYearGenreThriller = year_dim.group().reduceSum(function(d) {
                if (d.Genre === 'Thriller) {
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
            var stackedChart = dc.barChart("#stacked-chart");
            stackedChart
                .width(500)
                .height(500)
                .dimension(name_dim)
                .group(spendByNameStoreA, "Store A")
                .stack(spendByNameStoreB, "Store B")
                .x(d3.scale.ordinal())
                .xUnits(dc.units.ordinal)
                .legend(dc.legend().x(420).y(0).itemHeight(15).gap(5));
            stackedChart.margins().right = 100;
            dc.renderAll();
        }