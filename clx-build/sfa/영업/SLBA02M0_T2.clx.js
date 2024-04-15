/*
 * App URI: sfa/영업/SLBA02M0_T2
 * Source Location: sfa/영업/SLBA02M0_T2.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("sfa/영업/SLBA02M0_T2", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * SLBA02M0_T1.js
			 * Created at 2024. 4. 1. 오후 5:29:24.
			 *
			 * @author chwec
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds2");
			dataSet_1.parseData({
				"columns" : [
					{"name": "column1"},
					{"name": "column2"}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("ds3");
			dataSet_2.parseData({
				"columns": [
					{"name": "column1"},
					{"name": "column2"}
				],
				"rows": [
					{"column1": "변액보험판매력강화교", "column2": "201409"},
					{"column1": "KFP보수", "column2": "201303"},
					{"column1": "이동KFP센터", "column2": "201208"},
					{"column1": "재점설계순회", "column2": "201107"},
					{"column1": "팀장능력개발(합숙)", "column2": "201105"},
					{"column1": "순회교육", "column2": "201010"},
					{"column1": "순회교육", "column2": "201006"},
					{"column1": "순회교육", "column2": "200908"}
				]
			});
			app.register(dataSet_2);
			
			var dataSet_3 = new cpr.data.DataSet("ds4");
			dataSet_3.parseData({
				"columns": [
					{"name": "column1"},
					{"name": "column2"},
					{"name": "column3"}
				],
				"rows": [
					{"column1": "보장성보험판매자격", "column2": "해당없음", "column3": "202403"},
					{"column1": "연금저축성보험판매자격", "column2": "해당없음", "column3": "202403"},
					{"column1": "변액보험판매자격", "column2": "변액보험판매", "column3": "201409"},
					{"column1": "계약전환자격", "column2": "계약전환자격인증", "column3": "201310"},
					{"column1": "트레이너자격", "column2": "트레이너", "column3": "201302"},
					{"column1": "KFP인증자격", "column2": "KFP인증", "column3": "201210"},
					{"column1": "KSP인증자격", "column2": "KSP인증", "column3": "201011"}
				]
			});
			app.register(dataSet_3);
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
			verticalLayout_1.leftMargin = 0;
			verticalLayout_1.rightMargin = 0;
			verticalLayout_1.topMargin = 0;
			verticalLayout_1.bottomMargin = 0;
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container("grpBody");
			group_1.style.setClasses(["grid-content-body"]);
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.spacing = 7;
			group_1.setLayout(verticalLayout_2);
			(function(container){
				var group_2 = new cpr.controls.Container();
				group_2.style.setClasses(["division-area"]);
				var formLayout_1 = new cpr.controls.layouts.FormLayout();
				formLayout_1.scrollable = false;
				formLayout_1.topMargin = "0px";
				formLayout_1.rightMargin = "0px";
				formLayout_1.bottomMargin = "0px";
				formLayout_1.leftMargin = "0px";
				formLayout_1.horizontalSpacing = "20px";
				formLayout_1.verticalSpacing = "12px";
				formLayout_1.setColumns(["3fr", "2fr", "2fr"]);
				formLayout_1.setRows(["1fr"]);
				group_2.setLayout(formLayout_1);
				(function(container){
					var group_3 = new cpr.controls.Container();
					var verticalLayout_3 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_3.spacing = 8;
					group_3.setLayout(verticalLayout_3);
					(function(container){
						var group_4 = new cpr.controls.Container();
						group_4.style.setClasses(["grid-box", "box-spacing-free"]);
						var verticalLayout_4 = new cpr.controls.layouts.VerticalLayout();
						verticalLayout_4.spacing = 8;
						group_4.setLayout(verticalLayout_4);
						(function(container){
							var grid_1 = new cpr.controls.Grid("grd6");
							grid_1.init({
								"dataSet": app.lookup("ds4"),
								"columns": [
									{"width": "200px"},
									{"width": "100px"},
									{"width": "100px"}
								],
								"header": {
									"rows": [
										{"height": "31px"},
										{"height": "31px"}
									],
									"cells": [
										{
											"constraint": {"rowIndex": 1, "colIndex": 0},
											"configurator": function(cell){
												cell.filterable = false;
												cell.sortable = false;
												cell.targetColumnName = "column1";
												cell.text = "자격명";
											}
										},
										{
											"constraint": {"rowIndex": 1, "colIndex": 1},
											"configurator": function(cell){
												cell.filterable = false;
												cell.sortable = false;
												cell.targetColumnName = "column2";
												cell.text = "급수";
											}
										},
										{
											"constraint": {"rowIndex": 1, "colIndex": 2},
											"configurator": function(cell){
												cell.filterable = false;
												cell.sortable = false;
												cell.targetColumnName = "column3";
												cell.text = "취득월";
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 0, "rowSpan": 1, "colSpan": 3},
											"configurator": function(cell){
												cell.text = "자격취득 현황";
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
												cell.columnName = "column1";
												cell.control = (function(){
													var output_1 = new cpr.controls.Output();
													output_1.bind("value").toDataColumn("column1");
													return output_1;
												})();
												cell.controlConstraint = {};
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 1},
											"configurator": function(cell){
												cell.columnName = "column2";
												cell.control = (function(){
													var output_2 = new cpr.controls.Output();
													output_2.bind("value").toDataColumn("column2");
													return output_2;
												})();
												cell.controlConstraint = {};
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 2},
											"configurator": function(cell){
												cell.columnName = "column3";
												cell.control = (function(){
													var dateInput_1 = new cpr.controls.DateInput("dti2");
													dateInput_1.calendarType = "yearmonth";
													dateInput_1.mask = "YYYY-MM";
													dateInput_1.bind("value").toDataColumn("column3");
													return dateInput_1;
												})();
												cell.controlConstraint = {
													"horizontalAlign": "fill",
													"width": 120
												};
											}
										}
									]
								}
							});
							grid_1.style.setClasses(["list-normal"]);
							container.addChild(grid_1, {
								"width": "400px",
								"height": "185px"
							});
						})(group_4);
						container.addChild(group_4, {
							"autoSize": "height",
							"width": "1600px",
							"height": "498px"
						});
					})(group_3);
					container.addChild(group_3, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var group_5 = new cpr.controls.Container();
					var verticalLayout_5 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_5.spacing = 8;
					group_5.setLayout(verticalLayout_5);
					(function(container){
						var group_6 = new cpr.controls.Container();
						group_6.style.setClasses(["grid-box", "box-spacing-free"]);
						var verticalLayout_6 = new cpr.controls.layouts.VerticalLayout();
						verticalLayout_6.spacing = 8;
						group_6.setLayout(verticalLayout_6);
						(function(container){
							var grid_2 = new cpr.controls.Grid("grd5");
							grid_2.init({
								"dataSet": app.lookup("ds3"),
								"columns": [
									{"width": "200px"},
									{"width": "100px"}
								],
								"header": {
									"rows": [
										{"height": "31px"},
										{"height": "31px"}
									],
									"cells": [
										{
											"constraint": {"rowIndex": 1, "colIndex": 0},
											"configurator": function(cell){
												cell.filterable = false;
												cell.sortable = false;
												cell.targetColumnName = "column1";
												cell.text = "과정명";
											}
										},
										{
											"constraint": {"rowIndex": 1, "colIndex": 1},
											"configurator": function(cell){
												cell.filterable = false;
												cell.sortable = false;
												cell.targetColumnName = "column2";
												cell.text = "이수월";
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 0, "rowSpan": 1, "colSpan": 2},
											"configurator": function(cell){
												cell.text = "교육이수 현황";
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
												cell.columnName = "column1";
												cell.control = (function(){
													var output_3 = new cpr.controls.Output();
													output_3.bind("value").toDataColumn("column1");
													return output_3;
												})();
												cell.controlConstraint = {};
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 1},
											"configurator": function(cell){
												cell.columnName = "column2";
												cell.control = (function(){
													var dateInput_2 = new cpr.controls.DateInput("dti1");
													dateInput_2.calendarType = "yearmonth";
													dateInput_2.mask = "YYYY-MM";
													dateInput_2.bind("value").toDataColumn("column2");
													return dateInput_2;
												})();
												cell.controlConstraint = {
													"horizontalAlign": "fill",
													"width": 120
												};
											}
										}
									]
								}
							});
							grid_2.style.setClasses(["list-normal"]);
							container.addChild(grid_2, {
								"width": "400px",
								"height": "185px"
							});
						})(group_6);
						container.addChild(group_6, {
							"autoSize": "height",
							"width": "1600px",
							"height": "498px"
						});
					})(group_5);
					container.addChild(group_5, {
						"colIndex": 1,
						"rowIndex": 0
					});
					var group_7 = new cpr.controls.Container();
					var verticalLayout_7 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_7.spacing = 8;
					group_7.setLayout(verticalLayout_7);
					(function(container){
						var group_8 = new cpr.controls.Container();
						group_8.style.setClasses(["grid-box", "box-spacing-free"]);
						var verticalLayout_8 = new cpr.controls.layouts.VerticalLayout();
						verticalLayout_8.spacing = 8;
						group_8.setLayout(verticalLayout_8);
						(function(container){
							var grid_3 = new cpr.controls.Grid("grd4");
							grid_3.init({
								"dataSet": app.lookup("ds2"),
								"columns": [
									{"width": "100px"},
									{"width": "100px"}
								],
								"header": {
									"rows": [
										{"height": "31px"},
										{"height": "31px"}
									],
									"cells": [
										{
											"constraint": {"rowIndex": 1, "colIndex": 0},
											"configurator": function(cell){
												cell.filterable = false;
												cell.sortable = false;
												cell.targetColumnName = "column1";
												cell.text = "기수";
											}
										},
										{
											"constraint": {"rowIndex": 1, "colIndex": 1},
											"configurator": function(cell){
												cell.filterable = false;
												cell.sortable = false;
												cell.targetColumnName = "column2";
												cell.text = "취득월";
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 0, "rowSpan": 1, "colSpan": 2},
											"configurator": function(cell){
												cell.text = "K-리더스 현황";
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
												cell.columnName = "column1";
												cell.control = (function(){
													var output_4 = new cpr.controls.Output();
													output_4.bind("value").toDataColumn("column1");
													return output_4;
												})();
												cell.controlConstraint = {};
											}
										},
										{
											"constraint": {"rowIndex": 0, "colIndex": 1},
											"configurator": function(cell){
												cell.columnName = "column2";
												cell.control = (function(){
													var output_5 = new cpr.controls.Output();
													output_5.bind("value").toDataColumn("column2");
													return output_5;
												})();
												cell.controlConstraint = {};
											}
										}
									]
								}
							});
							grid_3.style.setClasses(["list-normal"]);
							container.addChild(grid_3, {
								"width": "400px",
								"height": "185px"
							});
						})(group_8);
						container.addChild(group_8, {
							"autoSize": "height",
							"width": "1600px",
							"height": "498px"
						});
					})(group_7);
					container.addChild(group_7, {
						"colIndex": 2,
						"rowIndex": 0
					});
				})(group_2);
				container.addChild(group_2, {
					"autoSize": "height",
					"width": "1558px",
					"height": "498px"
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "1560px",
				"height": "498px"
			});
		}
	});
	app.title = "인사세부사항(교육/자격)";
	cpr.core.Platform.INSTANCE.register(app);
})();
