var responsiveOptions = [
    ['screen and (min-width: 640px)', {
        chartPadding: 30,
        labelOffset: 100,
        labelDirection: 'explode',
        labelInterpolationFnc: function(value) {
        return value;
        }
    }],
    ['screen and (min-width: 1024px)', {
        chartPadding: 0,
        labelOffset: 100,
        labelOffset: 80,
        chartPadding: 0
    }]
];

var options = {
    donut: true,
    donutWidth: 35,
    donutSolid: true,
    startAngle: 270,
    showLabel: true,
};

var user_statistics_data = {
    series: [25, 15, 60],
};

var money_statistics_data = {
    series: [30, 30, 40],
};

var wager_statistics_data = {
    series: [70, 30],
};

var transaction_statistics_data = {
    series: [60, 40],
};

new Chartist.Pie("#user_statistics", user_statistics_data, options, responsiveOptions);
new Chartist.Pie("#money_statistics", money_statistics_data, options, responsiveOptions);
new Chartist.Pie("#wager_statistics", wager_statistics_data, options, responsiveOptions);
new Chartist.Pie("#transaction_statistics", transaction_statistics_data, options, responsiveOptions);



var statistics_summary_data = {};
var statistics_summary_options = {};


new Chartist.Bar(
    "#statistics_summary",
    {
        labels: [
            "6/1",
            "6/2",
            "6/3",
            "6/4",
            "6/5",
            "6/6",
            "6/7",
            "6/8",
            "6/9",
            "6/10",
            "6/11",
            "6/12",
        ],
        series: [
            [
                1000000,
                1000000,
                2000000,
                1000000,
                1000000,
                1000000,
                1000000,
                1000000,
                1000000,
                3000000,
                1000000,
                1000000,
                1000000,
                2000000,
            ],
            [
                1500000,
                1600000,
                1700000,
                1000000,
                1700000,
                1200000,
                1000000,
                1600000,
                1000000,
                1200000,
                1300000,
                1000000,
                1500000,
                1000000,
            ],
        ],
    },
    {
        stackBars: true,
        axisY: {
            showGrid: true,
            labelInterpolationFnc: function (value) {
                return value / 1000 + "M";
            },
        },
        axisX: {
            showGrid: false,
            labelOffset: {
                y: 5,
            },
        },
        lineSmooth: true,
        fullWidth: true,
        maintainAspectRatio: false,
        seriesBarDistance: 1000000,
        height: "262px",
    }
).on("draw", function (data) {
    if (data.type === "bar") {
        data.element.attr({
            style: "stroke-width: 50px",
        });
    }
});
