/*
 * App URI: sfa/영업/SLAA05M0
 * Source Location: sfa/영업/SLAA05M0.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("sfa/영업/SLAA05M0", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * SLAA01M0.js
			 * Created at 2024. 4. 1. 오후 1:37:16.
			 *
			 * @author chwec
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds1");
			dataSet_1.parseData({
				"columns": [
					{
						"name": "column1",
						"info": ""
					},
					{"name": "column11"},
					{
						"name": "column2",
						"info": ""
					},
					{
						"name": "column3",
						"info": ""
					},
					{
						"name": "column4",
						"info": ""
					},
					{
						"name": "column5",
						"info": ""
					},
					{
						"name": "column6",
						"info": ""
					},
					{
						"name": "column7",
						"info": ""
					},
					{
						"name": "column8",
						"info": ""
					},
					{"name": "column9"},
					{"name": "column10"}
				],
				"rows": [{"column1": "008003", "column2": "홍길동", "column3": "800111-1111111", "column4": "20131021", "column5": "54", "column6": "점수미달", "column7": "20131021", "column8": "54", "column9": "점수미달", "column10": "", "column11": "광화문지점"}]
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
			formLayout_1.setColumns(["1fr", "1fr"]);
			formLayout_1.setRows(["1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output("optTitle");
				output_1.value = "시험응시/합격";
				output_1.style.setClasses(["navi-left"]);
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var group_2 = new cpr.controls.Container("grpNavi");
				group_2.style.setClasses(["breadcrumbs"]);
				var flowLayout_1 = new cpr.controls.layouts.FlowLayout();
				flowLayout_1.scrollable = false;
				flowLayout_1.horizontalSpacing = 5;
				flowLayout_1.verticalSpacing = 0;
				flowLayout_1.horizontalAlign = "right";
				flowLayout_1.verticalAlign = "middle";
				flowLayout_1.lineWrap = false;
				group_2.setLayout(flowLayout_1);
				(function(container){
					var output_2 = new cpr.controls.Output();
					output_2.value = "";
					output_2.style.setClasses(["home"]);
					container.addChild(output_2, {
						"width": "20px",
						"height": "20px"
					});
					var output_3 = new cpr.controls.Output();
					output_3.value = "1Depth";
					output_3.style.setClasses(["breadcrumb-item"]);
					container.addChild(output_3, {
						"autoSize": "width",
						"width": "45px",
						"height": "17px"
					});
					var output_4 = new cpr.controls.Output();
					output_4.value = "2Depth";
					output_4.style.setClasses(["breadcrumb-item"]);
					container.addChild(output_4, {
						"autoSize": "width",
						"width": "45px",
						"height": "17px"
					});
					var output_5 = new cpr.controls.Output();
					output_5.value = "3Depth";
					output_5.style.setClasses(["breadcrumb-item"]);
					container.addChild(output_5, {
						"autoSize": "width",
						"width": "45px",
						"height": "17px"
					});
					var output_6 = new cpr.controls.Output();
					output_6.value = "4Depth";
					output_6.style.setClasses(["breadcrumb-item"]);
					container.addChild(output_6, {
						"autoSize": "width",
						"width": "45px",
						"height": "17px"
					});
				})(group_2);
				container.addChild(group_2, {
					"colIndex": 1,
					"rowIndex": 0
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "1150px",
				"height": "35px"
			});
			
			var group_3 = new cpr.controls.Container("grpBody");
			group_3.style.setClasses(["grid-content-body"]);
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.spacing = 7;
			group_3.setLayout(verticalLayout_2);
			(function(container){
				var group_4 = new cpr.controls.Container("grpTopSearch");
				var verticalLayout_3 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_3.spacing = 12;
				group_4.setLayout(verticalLayout_3);
				(function(container){
					var group_5 = new cpr.controls.Container("grpTopSearchBox");
					group_5.style.setClasses(["search-box"]);
					var formLayout_2 = new cpr.controls.layouts.FormLayout();
					formLayout_2.scrollable = false;
					formLayout_2.topMargin = "6px";
					formLayout_2.rightMargin = "20px";
					formLayout_2.bottomMargin = "6px";
					formLayout_2.leftMargin = "20px";
					formLayout_2.horizontalSpacing = "20px";
					formLayout_2.verticalSpacing = "8px";
					formLayout_2.setColumns(["0px", "1fr", "0px", "1fr", "0px", "2fr", "63px"]);
					formLayout_2.setColumnAutoSizing(0, true);
					formLayout_2.setColumnAutoSizing(2, true);
					formLayout_2.setColumnAutoSizing(4, true);
					formLayout_2.setColumnAutoSizing(6, true);
					formLayout_2.setRows(["26px"]);
					group_5.setLayout(formLayout_2);
					(function(container){
						var output_7 = new cpr.controls.Output();
						output_7.value = "조직번호";
						output_7.style.setClasses(["label", "required"]);
						container.addChild(output_7, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var group_6 = new cpr.controls.Container();
						group_6.style.setClasses(["form-inside"]);
						var formLayout_3 = new cpr.controls.layouts.FormLayout();
						formLayout_3.scrollable = false;
						formLayout_3.topMargin = "0px";
						formLayout_3.rightMargin = "0px";
						formLayout_3.bottomMargin = "0px";
						formLayout_3.leftMargin = "0px";
						formLayout_3.horizontalSpacing = "5px";
						formLayout_3.verticalSpacing = "5px";
						formLayout_3.setColumns(["120px", "1fr"]);
						formLayout_3.setRows(["1fr"]);
						group_6.setLayout(formLayout_3);
						(function(container){
							var searchInput_1 = new cpr.controls.SearchInput();
							searchInput_1.value = "008003";
							container.addChild(searchInput_1, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var inputBox_1 = new cpr.controls.InputBox("ipb2");
							inputBox_1.value = "광화문지점";
							container.addChild(inputBox_1, {
								"colIndex": 1,
								"rowIndex": 0
							});
						})(group_6);
						container.addChild(group_6, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_8 = new cpr.controls.Output();
						output_8.value = "응시일자";
						output_8.style.setClasses(["label", "required"]);
						container.addChild(output_8, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var group_7 = new cpr.controls.Container();
						group_7.style.setClasses(["form-inside"]);
						var formLayout_4 = new cpr.controls.layouts.FormLayout();
						formLayout_4.scrollable = false;
						formLayout_4.topMargin = "0px";
						formLayout_4.rightMargin = "0px";
						formLayout_4.bottomMargin = "0px";
						formLayout_4.leftMargin = "0px";
						formLayout_4.horizontalSpacing = "0px";
						formLayout_4.verticalSpacing = "0px";
						formLayout_4.setColumns(["1fr", "10px", "1fr"]);
						formLayout_4.setRows(["1fr"]);
						group_7.setLayout(formLayout_4);
						(function(container){
							var dateInput_1 = new cpr.controls.DateInput("dti1");
							dateInput_1.value = "20130101";
							container.addChild(dateInput_1, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var output_9 = new cpr.controls.Output();
							output_9.value = "-";
							output_9.style.setClasses(["text-center"]);
							container.addChild(output_9, {
								"colIndex": 1,
								"rowIndex": 0
							});
							var dateInput_2 = new cpr.controls.DateInput("dti2");
							dateInput_2.value = "20150319";
							container.addChild(dateInput_2, {
								"colIndex": 2,
								"rowIndex": 0
							});
						})(group_7);
						container.addChild(group_7, {
							"colIndex": 3,
							"rowIndex": 0
						});
						var group_8 = new cpr.controls.Container();
						group_8.style.setClasses(["btn-flow-area"]);
						var flowLayout_2 = new cpr.controls.layouts.FlowLayout();
						flowLayout_2.scrollable = false;
						flowLayout_2.verticalSpacing = 0;
						flowLayout_2.horizontalAlign = "right";
						flowLayout_2.lineWrap = false;
						flowLayout_2.leftMargin = 20;
						group_8.setLayout(flowLayout_2);
						(function(container){
							var button_1 = new cpr.controls.Button();
							button_1.value = "조회";
							button_1.style.setClasses(["btn-search"]);
							container.addChild(button_1, {
								"width": "49px",
								"height": "26px"
							});
						})(group_8);
						container.addChild(group_8, {
							"colIndex": 6,
							"rowIndex": 0,
							"colSpan": 1,
							"rowSpan": 1,
							"verticalAlign": "center",
							"height": 26
						});
					})(group_5);
					container.addChild(group_5, {
						"autoSize": "height",
						"width": "2738px",
						"height": "40px"
					});
				})(group_4);
				container.addChild(group_4, {
					"autoSize": "height",
					"width": "2738px",
					"height": "40px"
				});
				var group_9 = new cpr.controls.Container();
				var verticalLayout_4 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_4.spacing = 8;
				group_9.setLayout(verticalLayout_4);
				(function(container){
					var group_10 = new cpr.controls.Container("grpBodyGroundGrid");
					group_10.style.setClasses(["grid-box"]);
					var verticalLayout_5 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_5.spacing = 8;
					group_10.setLayout(verticalLayout_5);
					(function(container){
						var grid_1 = new cpr.controls.Grid("grd1");
						grid_1.init({
							"dataSet": app.lookup("ds1"),
							"columns": [
								{"width": "70px"},
								{"width": "230px"},
								{"width": "100px"},
								{"width": "150px"},
								{"width": "100px"},
								{"width": "100px"},
								{"width": "100px"},
								{"width": "100px"},
								{"width": "100px"},
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
										"constraint": {"rowIndex": 0, "colIndex": 0, "rowSpan": 2, "colSpan": 2},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "column1";
											cell.text = "소속";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 2, "rowSpan": 2, "colSpan": 1},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "column2";
											cell.text = "성명";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3, "rowSpan": 2, "colSpan": 1},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "column3";
											cell.text = "주민등록번호";
										}
									},
									{
										"constraint": {"rowIndex": 1, "colIndex": 4},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "column4";
											cell.text = "응시일자";
										}
									},
									{
										"constraint": {"rowIndex": 1, "colIndex": 5},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "column5";
											cell.text = "점수";
										}
									},
									{
										"constraint": {"rowIndex": 1, "colIndex": 6},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "column6";
											cell.text = "합격";
										}
									},
									{
										"constraint": {"rowIndex": 1, "colIndex": 7},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "column7";
											cell.text = "응시일자";
										}
									},
									{
										"constraint": {"rowIndex": 1, "colIndex": 8},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "column8";
											cell.text = "점수";
										}
									},
									{
										"constraint": {"rowIndex": 1, "colIndex": 9},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "column9";
											cell.text = "합격";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 10, "rowSpan": 2, "colSpan": 1},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "column10";
											cell.text = "협회사항";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 4, "rowSpan": 1, "colSpan": 3},
										"configurator": function(cell){
											cell.text = "생명보험";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 7, "rowSpan": 1, "colSpan": 3},
										"configurator": function(cell){
											cell.text = "제3보험";
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
												var output_10 = new cpr.controls.Output();
												output_10.style.setClasses(["text-center"]);
												output_10.bind("value").toDataColumn("column1");
												return output_10;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 1},
										"configurator": function(cell){
											cell.columnName = "column11";
											cell.control = (function(){
												var output_11 = new cpr.controls.Output();
												output_11.bind("value").toDataColumn("column11");
												return output_11;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 2},
										"configurator": function(cell){
											cell.columnName = "column2";
											cell.control = (function(){
												var output_12 = new cpr.controls.Output();
												output_12.style.setClasses(["text-center"]);
												output_12.bind("value").toDataColumn("column2");
												return output_12;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.columnName = "column3";
											cell.control = (function(){
												var output_13 = new cpr.controls.Output();
												output_13.value = "Output";
												output_13.format = "000000-0******";
												output_13.style.setClasses(["text-center"]);
												output_13.bind("value").toDataColumn("column3");
												return output_13;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 4},
										"configurator": function(cell){
											cell.columnName = "column4";
											cell.control = (function(){
												var output_14 = new cpr.controls.Output();
												output_14.dataType = "date";
												output_14.format = "YYYY-MM-DD";
												output_14.bind("value").toDataColumn("column4");
												return output_14;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 5},
										"configurator": function(cell){
											cell.columnName = "column5";
											cell.control = (function(){
												var output_15 = new cpr.controls.Output();
												output_15.style.setClasses(["text-right"]);
												output_15.bind("value").toDataColumn("column5");
												return output_15;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 6},
										"configurator": function(cell){
											cell.columnName = "column6";
											cell.control = (function(){
												var output_16 = new cpr.controls.Output();
												output_16.bind("value").toDataColumn("column6");
												return output_16;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 7},
										"configurator": function(cell){
											cell.columnName = "column7";
											cell.control = (function(){
												var output_17 = new cpr.controls.Output();
												output_17.dataType = "date";
												output_17.format = "YYYY-MM-DD";
												output_17.bind("value").toDataColumn("column7");
												return output_17;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 8},
										"configurator": function(cell){
											cell.columnName = "column8";
											cell.control = (function(){
												var output_18 = new cpr.controls.Output();
												output_18.style.setClasses(["text-right"]);
												output_18.bind("value").toDataColumn("column8");
												return output_18;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 9},
										"configurator": function(cell){
											cell.columnName = "column9";
											cell.control = (function(){
												var output_19 = new cpr.controls.Output();
												output_19.bind("value").toDataColumn("column9");
												return output_19;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 10},
										"configurator": function(cell){
											cell.control = (function(){
												var button_2 = new cpr.controls.Button("btn1");
												button_2.value = "협회사항조회";
												button_2.style.setClasses(["btn-primary04"]);
												return button_2;
											})();
											cell.controlConstraint = {};
										}
									}
								]
							}
						});
						grid_1.style.setClasses(["list-normal"]);
						container.addChild(grid_1, {
							"width": "400px",
							"height": "498px"
						});
					})(group_10);
					container.addChild(group_10, {
						"autoSize": "height",
						"width": "1600px",
						"height": "503px"
					});
					var group_11 = new cpr.controls.Container();
					group_11.style.setClasses(["commentary"]);
					var verticalLayout_6 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_6.scrollable = false;
					verticalLayout_6.spacing = 8;
					verticalLayout_6.leftMargin = 10;
					verticalLayout_6.rightMargin = 10;
					verticalLayout_6.topMargin = 10;
					verticalLayout_6.bottomMargin = 10;
					group_11.setLayout(verticalLayout_6);
					(function(container){
						var output_20 = new cpr.controls.Output();
						output_20.value = "- 리스트의 대상자 더블클리시 '증원자원조회' 팝업이 열리고 협회사항 버튼 클릭시 '협회사항조회' 화면으로 이동합니다.";
						container.addChild(output_20, {
							"autoSize": "height",
							"width": "904px",
							"height": "24px"
						});
					})(group_11);
					container.addChild(group_11, {
						"autoSize": "height",
						"width": "1560px",
						"height": "46px"
					});
					var group_12 = new cpr.controls.Container();
					group_12.style.setClasses(["button-table-area"]);
					var formLayout_5 = new cpr.controls.layouts.FormLayout();
					formLayout_5.scrollable = false;
					formLayout_5.topMargin = "0px";
					formLayout_5.rightMargin = "0px";
					formLayout_5.bottomMargin = "0px";
					formLayout_5.leftMargin = "0px";
					formLayout_5.horizontalSpacing = "0px";
					formLayout_5.verticalSpacing = "0px";
					formLayout_5.setColumns(["1fr", "43px", "1fr"]);
					formLayout_5.setColumnAutoSizing(1, true);
					formLayout_5.setRows(["1fr"]);
					group_12.setLayout(formLayout_5);
					(function(container){
						var group_13 = new cpr.controls.Container();
						group_13.style.setClasses(["button-table-bottom-left-area"]);
						var flowLayout_3 = new cpr.controls.layouts.FlowLayout();
						flowLayout_3.scrollable = false;
						flowLayout_3.horizontalSpacing = 10;
						flowLayout_3.verticalSpacing = 0;
						flowLayout_3.lineWrap = false;
						group_13.setLayout(flowLayout_3);
						container.addChild(group_13, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var group_14 = new cpr.controls.Container();
						group_14.style.setClasses(["button-table-bottom-center-area"]);
						var flowLayout_4 = new cpr.controls.layouts.FlowLayout();
						flowLayout_4.scrollable = false;
						flowLayout_4.horizontalSpacing = 10;
						flowLayout_4.verticalSpacing = 0;
						flowLayout_4.horizontalAlign = "center";
						group_14.setLayout(flowLayout_4);
						container.addChild(group_14, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var group_15 = new cpr.controls.Container();
						group_15.style.setClasses(["button-table-bottom-right-area"]);
						var flowLayout_5 = new cpr.controls.layouts.FlowLayout();
						flowLayout_5.scrollable = false;
						flowLayout_5.horizontalSpacing = 10;
						flowLayout_5.verticalSpacing = 0;
						flowLayout_5.horizontalAlign = "right";
						flowLayout_5.lineWrap = false;
						group_15.setLayout(flowLayout_5);
						(function(container){
							var button_3 = new cpr.controls.Button();
							button_3.value = "다음";
							button_3.style.setClasses(["btn-primary04"]);
							container.addChild(button_3, {
								"autoSize": "width",
								"width": "60px",
								"height": "30px"
							});
						})(group_15);
						container.addChild(group_15, {
							"colIndex": 2,
							"rowIndex": 0
						});
					})(group_12);
					container.addChild(group_12, {
						"autoSize": "height",
						"width": "1600px",
						"height": "30px"
					});
				})(group_9);
				container.addChild(group_9, {
					"autoSize": "height",
					"width": "1560px",
					"height": "595px"
				});
			})(group_3);
			container.addChild(group_3, {
				"autoSize": "height",
				"width": "2738px",
				"height": "642px"
			});
		}
	});
	app.title = "시험응시/합격";
	cpr.core.Platform.INSTANCE.register(app);
})();
