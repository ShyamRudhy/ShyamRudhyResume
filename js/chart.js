var chart;
		var legend;

		var chartData = [{
				country: "Adobe xd",
				value: 280
			},
			{
				country: "Adobe Illustor",
				value: 220
			},
			{
				country: "Adobe Photoshop",
				value: 350
			},
			{
				country: "DBMS",
				value: 200
			},
			{
				country: "C++",
				value: 250
			},
			{
				country: "Java",
				value: 150
			}
		];

		AmCharts.ready(function () {
			// PIE CHART
			chart = new AmCharts.AmPieChart();
			chart.dataProvider = chartData;
			chart.titleField = "country";
			chart.valueField = "value";
			chart.outlineColor = "";
			chart.outlineAlpha = 0.8;
			chart.outlineThickness = 2;
			// this makes the chart 3D
			chart.depth3D = 20;
			chart.angle = 30;

			// WRITE
			chart.write("chartdiv");
		});