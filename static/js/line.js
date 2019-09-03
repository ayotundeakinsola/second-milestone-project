// Line Chart
queue()
    .defer(d3.csv, "data/imdbs.csv")
    .await(makeGraphs);

function makeGraphs(error, imdbsData) {
    
    var ndx = crossfilter(imdbsData);
    var parseYear = d3.time.format("%Y").parse;
    imdbsData.forEach(function(d) {
        d.Year = parseYear(d.Year);
    });
    var year_dim = ndx.dimension(dc.pluck('Year'));
    var minYear = year_dim.bottom(1)[0].Year;
    var maxYear = year_dim.top(1)[0].Year;

    function revenue_by_genre(Genre) {
        return function(d) {
            if (d.Genre === Genre) {
                return +d.Revenue;
            }
            else {
                return 0;
            }
        }
    }
    var ActionRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Action'));

    var AdventureRevenueByyear = year_dim.group().reduceSum(revenue_by_genre('Adventure'));

    var AnimationRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Animation'));

    var BiographyRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Biography'));

    var ComedyRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Comedy'));

    var DramaRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Drama'));

    var FantasyRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Fantasy'));

    var HorrorRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Horror'));

    var MysteryRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Mystery'));

    var RomanceRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Romance'));

    var ScifiRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Scifi'));

    var ThrillerRevenueByYear = year_dim.group().reduceSum(revenue_by_genre('Thriller'));

    var compositeChart = dc.compositeChart('#composite-chart');
    compositeChart
        .width(990)
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
            .group(AnimationRevenueByYear, 'Animation')
            dc.lineChart(compositeChart)
            .colors('#d62728')
            .group(BiographyRevenueByYear, 'Biography')
            dc.lineChart(compositeChart)
            .colors('#9467bd')
            .group(ComedyRevenueByYear, 'Comedy')
            dc.lineChart(compositeChart)
            .colors('#8c564b')
            .group(CrimeRevenueByYear, 'Crime')
            dc.lineChart(compositeChart)
            .colors('#e377c2')
            .group(DramaRevenueByYear, 'Drama')
            dc.lineChart(compositeChart)
            .colors('#7f7f7f')
            .group(FantasyRevenueByYear, 'Fantasy')
            dc.lineChart(compositeChart)
            .colors('#bcbd22')
            .group(HorrorRevenueByYear, 'Horror')
            dc.lineChart(compositeChart)
            .colors('#17becf')
            .group(MysteryRevenueByYear, 'Mystery')
            dc.lineChart(compositeChart)
            .colors('#1f77b4')
            .group(RomanceRevenueByYear, 'Romance')
            dc.lineChart(compositeChart)
            .colors('#ff7f0e')
            .group(ScifiRevenueByYear, 'Scifi')
            dc.lineChart(compositeChart)
            .colors('#2ca02c')
            .group(ThrillerRevenueByYear, 'Thriller')
        ])
        .brushOn(false)
}
