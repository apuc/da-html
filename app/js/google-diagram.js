google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Language', 'Speakers (in millions)'],
        ['Донецк',  5.85],
        ['Макеевка',  1.66],
        ['Ростов', 1.316],
    ]);

    var options = {
        legend: 'none',
        pieSliceText: 'label',
        pieStartAngle: 200,
        height: 250,
        width: 250,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}