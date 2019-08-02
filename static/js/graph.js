var numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

var Action= [11, 11, 23, 14, 23, 20, 21, 29, 34, 34, 73];
var Adventure= [5, 6, 1, 9, 6, 5, 6, 6, 8, 10, 17];
var Animation= [2, 3, 2, 4, 5, 2, 2, 3, 4, 4, 18];
var Bigography= [2, 3, 3, 3, 2, 2, 2, 8, 4, 10, 25];
var Comedy= [7, 6, 8, 10, 9, 14, 15, 13, 21, 23, 49];
var Crime= [5, 9, 1, 1, 4, 2, 4, 8, 6, 9, 22];
var Drama= [10, 11, 10, 10, 7, 12, 12, 16, 16, 33, 58];
var Fantasy= [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1];
var Horror= [1, 2, 3, 3, 2, 2, 2, 5, 3, 2, 21];
var Sci-fi= [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2];
var Thriller= [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 8];
var Mystery= [1, 0, 0, 0, 2, 3, 0, 2, 1, 2, 2];
var Romance= [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1];

var dates = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];

var bar_ctx = document.getElementById('stacked-bar-chart');

var bar_chart = new Chart(bar_ctx, {
    type: 'bar',
    data: {
        labels: dates,
        datasets: [{
                label: 'Action',
                data: Action,
                backgroundColor: "#512DA8",
                hoverBackgroundColor: "#7E57C2",
                hoverBorderWidth: 0
            },
            {
                label: 'Adventure',
                data: Adventure,
                backgroundColor: "#FFA000",
                hoverBackgroundColor: "#FFCA28",
                hoverBorderWidth: 0
            },
            {
                label: 'Animation',
                data: Animation,
                backgroundColor: "#D32F2F",
                hoverBackgroundColor: "#EF5350",
                hoverBorderWidth: 0
            },
            {
                label: 'Bigography',
                data: Bigography,
                backgroundColor: "#D32F2F",
                hoverBackgroundColor: "#EF5350",
                hoverBorderWidth: 0
            },
            {
                label: 'Comedy',
                data: Comedy,
                backgroundColor: "#D32F2F",
                hoverBackgroundColor: "#EF5350",
                hoverBorderWidth: 0
            },
            {
                label: 'Crime',
                data: Crime,
                backgroundColor: "#D32F2F",
                hoverBackgroundColor: "#EF5350",
                hoverBorderWidth: 0
            },
            {
                label: 'Drama',
                data: Drama,
                backgroundColor: "#D32F2F",
                hoverBackgroundColor: "#EF5350",
                hoverBorderWidth: 0
            },
            {
                label: 'Fantasy',
                data: Fantasy,
                backgroundColor: "#D32F2F",
                hoverBackgroundColor: "#EF5350",
                hoverBorderWidth: 0
            },
            {
                label: 'Horror',
                data: Horror,
                backgroundColor: "#D32F2F",
                hoverBackgroundColor: "#EF5350",
                hoverBorderWidth: 0
            },
            {
                label: 'Sci-fi',
                data: Sci-fi,
                backgroundColor: "#D32F2F",
                hoverBackgroundColor: "#EF5350",
                hoverBorderWidth: 0
            },
            {
                label: 'Thriller',
                data: Thriller,
                backgroundColor: "#D32F2F",
                hoverBackgroundColor: "#EF5350",
                hoverBorderWidth: 0
            },
            {
                label: 'Mystery',
                data: Mystery,
                backgroundColor: "#D32F2F",
                hoverBackgroundColor: "#EF5350",
                hoverBorderWidth: 0
            },
            {
                label: 'Romance',
                data: Romance,
                backgroundColor: "#D32F2F",
                hoverBackgroundColor: "#EF5350",
                hoverBorderWidth: 0
            },
        ]
    },
    options: {
        animation: {
            duration: 10,
        },
        tooltips: {
            mode: 'label',
            callbacks: {
                label: function(tooltipItem, data) {
                    return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
                }
            }
        },
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: { display: false },
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    callback: function(value) { return numberWithCommas(value); },
                },
            }],
        },
        legend: { display: true }
    },
    plugins: [{
        beforeInit: function(chart) {
            chart.data.labels.forEach(function(value, index, array) {
                var a = [];
                a.push(value.slice(0, 5));
                var i = 1;
                while (value.length > (i * 5)) {
                    a.push(value.slice(i * 5, (i + 1) * 5));
                    i++;
                }
                array[index] = a;
            })
        }
    }]
});


//Second Bar Chart
queue()
    .defer(d3.csv, "data/imdb.csv")
    .await(makeGraphs);

function makeGraphs(error, imdbData) {
    var ndx = crossfilter(imdbData);

    imdbData.forEach(function(d) {
        d.Runtime = parseInt(d.Runtime);
    })

    show_rating(ndx);
    show_average_runtime(ndx);

    dc.renderAll();
}


//Third Bar chart
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
    var dim = ndx.dimension(dc.pluck('Title'));

    function add_item(p, v) {
        p.count++;
        p.total += v.Runtime;
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
            p.total -= v.Runtime;
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
