/*
 * App URI: app/240228/UW008
 * Source Location: app/240228/UW008.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("app/240228/UW008", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * UW008.js
			 * Created at 2024. 2. 28. 오후 1:38:50.
			 *
			 * @author syj66
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds1");
			dataSet_1.parseData({
				"columns": [
					{"name": "column1"},
					{"name": "column2"},
					{"name": "column3"},
					{"name": "column4"}
				],
				"rows": [
					{"column2": "질병수술특약", "column3": "100", "column4": "S0", "column1": "20930"},
					{"column2": "질병수술특약", "column3": "500", "column4": "U0", "column1": "66435"},
					{"column2": "질병수술특약", "column3": "600", "column4": "A0(300)E011(99),E022(05),E023(05)", "column1": "67288"},
					{"column2": "질병수술특약", "column3": "", "column4": "", "column1": "67289"},
					{"column2": "질병수술특약", "column3": "1000", "column4": "A0(300)C0(03),E022(0 5),E023(05)", "column1": "67216"},
					{"column2": "질병수술특약", "column3": "", "column4": "", "column1": "67217"},
					{"column2": "질병수술특약", "column3": "250", "column4": "RA(0 1)", "column1": "67535"},
					{"column1": "67466", "column2": "질병수술특약", "column3": "1000", "column4": "E00 3(0 3),E0 35(0 3)"},
					{"column1": "67453", "column2": "질병수술특약", "column3": "3000", "column4": "E00 3(99),E0 35(9 9)"},
					{"column1": "67388", "column2": "질병수술특약", "column3": "1000", "column4": "D0"},
					{"column1": "67601", "column2": "질병수술특약", "column3": "1000", "column4": "P0"}
				]
			});
			app.register(dataSet_1);
			app.supportMedia("all and (min-width: 3160px)", "Hlicp-WIDE");
			app.supportMedia("all and (min-width: 1600px) and (max-width: 3159px)", "Hlicp-FULL");
			app.supportMedia("all and (min-width: 790px) and (max-width: 1599px)", "Hlicp-DIV");
			app.supportMedia("all and (max-width: 789px)", "Hlicp-POP");
			
			// Configure root container
			var container = app.getContainer();
			container.style.setClasses(["grid-window-body"]);
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_1.spacing = 0;
			verticalLayout_1.leftMargin = 20;
			verticalLayout_1.rightMargin = 20;
			verticalLayout_1.topMargin = 20;
			verticalLayout_1.bottomMargin = 10;
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container("grpAppTitle");
			group_1.style.setClasses(["app-title"]);
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "0px";
			formLayout_1.verticalSpacing = "0px";
			formLayout_1.setColumns(["1fr"]);
			formLayout_1.setRows(["1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output("optTitle");
				output_1.value = "선심사결과목록조회";
				output_1.style.setClasses(["navi-left"]);
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "1150px",
				"height": "35px"
			});
			
			var group_2 = new cpr.controls.Container("grpBody");
			group_2.style.setClasses(["grid-content-body"]);
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.spacing = 7;
			group_2.setLayout(verticalLayout_2);
			(function(container){
				var group_3 = new cpr.controls.Container();
				var verticalLayout_3 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_3.spacing = 8;
				group_3.setLayout(verticalLayout_3);
				(function(container){
					var group_4 = new cpr.controls.Container("grpBodyGroundGrid");
					group_4.style.setClasses(["grid-box"]);
					var verticalLayout_4 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_4.spacing = 4;
					group_4.setLayout(verticalLayout_4);
					(function(container){
						var group_5 = new cpr.controls.Container("grpGridTitle");
						group_5.style.setClasses(["button-table-area"]);
						var formLayout_2 = new cpr.controls.layouts.FormLayout();
						formLayout_2.scrollable = false;
						formLayout_2.topMargin = "0px";
						formLayout_2.rightMargin = "0px";
						formLayout_2.bottomMargin = "0px";
						formLayout_2.leftMargin = "0px";
						formLayout_2.horizontalSpacing = "0px";
						formLayout_2.verticalSpacing = "0px";
						formLayout_2.setColumns(["0px", "1fr"]);
						formLayout_2.setColumnAutoSizing(0, true);
						formLayout_2.setRows(["1fr"]);
						group_5.setLayout(formLayout_2);
						(function(container){
							var group_6 = new cpr.controls.Container("grp4");
							group_6.style.setClasses(["button-table-top-area"]);
							var flowLayout_1 = new cpr.controls.layouts.FlowLayout();
							flowLayout_1.scrollable = false;
							flowLayout_1.horizontalSpacing = 5;
							flowLayout_1.verticalSpacing = 5;
							flowLayout_1.horizontalAlign = "right";
							flowLayout_1.lineWrap = false;
							group_6.setLayout(flowLayout_1);
							(function(container){
								var checkBox_1 = new cpr.controls.CheckBox("cbx1");
								checkBox_1.text = "전체";
								container.addChild(checkBox_1, {
									"autoSize": "width",
									"width": "100px",
									"height": "26px"
								});
							})(group_6);
							container.addChild(group_6, {
								"colIndex": 1,
								"rowIndex": 0
							});
							var group_7 = new cpr.controls.Container("grp1");
							group_7.style.setClasses(["grid-title-box"]);
							var verticalLayout_5 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_5.spacing = 0;
							group_7.setLayout(verticalLayout_5);
							container.addChild(group_7, {
								"colIndex": 0,
								"rowIndex": 0
							});
						})(group_5);
						container.addChild(group_5, {
							"autoSize": "height",
							"width": "729px",
							"height": "26px"
						});
						var grid_1 = new cpr.controls.Grid("grd1");
						grid_1.init({
							"dataSet": app.lookup("ds1"),
							"columnMovable": true,
							"autoFit": "2, 4",
							"resizableColumns": "all",
							"columns": [
								{
									"width": "48px",
									"visible": false
								},
								{"width": "100px"},
								{"width": "200px"},
								{"width": "100px"},
								{"width": "100px"}
							],
							"header": {
								"rows": [{"height": "31px"}],
								"cells": [
									{
										"constraint": {"rowIndex": 0, "colIndex": 0},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.text = "NO";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 1, "rowSpan": 1, "colSpan": 2},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "column2";
											cell.text = "보험명";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "column3";
											cell.text = "계약금액(만)";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 4},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "column4";
											cell.text = "협산결과";
										}
									}
								]
							},
							"detail": {
								"rows": [{"height": "31px"}],
								"cells": [
									{
										"constraint": {"rowIndex": 0, "colIndex": 0},
										"configurator": function(cell){
											cell.columnType = "rowindex";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 2},
										"configurator": function(cell){
											cell.columnName = "column2";
											cell.control = (function(){
												var output_2 = new cpr.controls.Output();
												output_2.value = "Output";
												output_2.bind("value").toDataColumn("column2");
												return output_2;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.columnName = "column3";
											cell.control = (function(){
												var output_3 = new cpr.controls.Output();
												output_3.value = "Output";
												output_3.dataType = "number";
												output_3.format = "s#,##0";
												output_3.style.setClasses(["text-right"]);
												output_3.bind("value").toDataColumn("column3");
												return output_3;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 4},
										"configurator": function(cell){
											cell.columnName = "column4";
											cell.control = (function(){
												var output_4 = new cpr.controls.Output();
												output_4.value = "Output";
												output_4.style.setClasses(["text-center"]);
												output_4.bind("value").toDataColumn("column4");
												return output_4;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 1},
										"configurator": function(cell){
											cell.columnName = "column1";
											cell.control = (function(){
												var output_5 = new cpr.controls.Output();
												output_5.style.setClasses(["text-center"]);
												output_5.bind("value").toDataColumn("column1");
												return output_5;
											})();
											cell.controlConstraint = {};
										}
									}
								]
							}
						});
						grid_1.style.setClasses(["list-normal"]);
						container.addChild(grid_1, {
							"autoSize": "none",
							"width": "400px",
							"height": "561px"
						});
					})(group_4);
					container.addChild(group_4, {
						"autoSize": "height",
						"width": "1600px",
						"height": "523px"
					});
				})(group_3);
				container.addChild(group_3, {
					"autoSize": "height",
					"width": "1600px",
					"height": "565px"
				});
			})(group_2);
			container.addChild(group_2, {
				"autoSize": "height",
				"width": "1600px",
				"height": "875px"
			});
		}
	});
	app.title = "선심사결과목록조회";
	cpr.core.Platform.INSTANCE.register(app);
})();
