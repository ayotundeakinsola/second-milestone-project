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
var Scifi= [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2];
var Thriller= [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 8];
var Mystery= [1, 0, 0, 0, 2, 3, 0, 2, 1, 2, 2];
var Romance= [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1];

var dates = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];

var bar_ctx = document.getElementById('bar-chart');

var bar-chart = new Chart(bar_ctx, {
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
                backgroundColor: "#0000ff",
                hoverBackgroundColor: "#6666ff",
                hoverBorderWidth: 0
            },
            {
                label: 'Comedy',
                data: Comedy,
                backgroundColor: "#996633",
                hoverBackgroundColor: "#cc9966",
                hoverBorderWidth: 0
            },
            {
                label: 'Crime',
                data: Crime,
                backgroundColor: "#ccff33",
                hoverBackgroundColor: "#e6ff99",
                hoverBorderWidth: 0
            },
            {
                label: 'Drama',
                data: Drama,
                backgroundColor: "#ff9933",
                hoverBackgroundColor: "#ffcc99",
                hoverBorderWidth: 0
            },
            {
                label: 'Fantasy',
                data: Fantasy,
                backgroundColor: "#00ffff",
                hoverBackgroundColor: "#66ffff",
                hoverBorderWidth: 0
            },
            {
                label: 'Horror',
                data: Horror,
                backgroundColor: " #000080",
                hoverBackgroundColor: "#0000e6",
                hoverBorderWidth: 0
            },
            {
                label: 'Sci-fi',
                data: Scifi,
                backgroundColor: "#00cc00",
                hoverBackgroundColor: "#33ff33",
                hoverBorderWidth: 0
            },
            {
                label: 'Thriller',
                data: Thriller,
                backgroundColor: "#000000",
                hoverBackgroundColor: "#666666",
                hoverBorderWidth: 0
            },
            {
                label: 'Mystery',
                data: Mystery,
                backgroundColor: "#669999",
                hoverBackgroundColor: "#a3c2c2",
                hoverBorderWidth: 0
            },
            {
                label: 'Romance',
                data: Romance,
                backgroundColor: "#ff0000",
                hoverBackgroundColor: "#ff6666",
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
