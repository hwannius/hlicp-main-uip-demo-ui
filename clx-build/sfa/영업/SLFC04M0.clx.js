/*
 * App URI: sfa/영업/SLFC04M0
 * Source Location: sfa/영업/SLFC04M0.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("sfa/영업/SLFC04M0", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * ${filename}
			 * Created at ${date} ${time}.
			 *
			 * @author ${user}
			 ************************************************/
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("dsSet1");
			dataSet_1.parseData({
				"columns": [
					{"name": "column2"},
					{"name": "column3"},
					{"name": "column11"},
					{"name": "column4"},
					{"name": "column5"},
					{"name": "column6"},
					{"name": "column7"},
					{"name": "column8"},
					{"name": "column9"},
					{"name": "column10"}
				],
				"rows": [
					{"column2": "서울중앙TFP2", "column3": "김희진", "column11": "20141111", "column4": "201406", "column5": "10", "column6": "김희진", "column7": "5.00", "column8": "5", "column9": "2731", "column10": "3885"},
					{"column2": "서울중앙TFP2", "column3": "김희진", "column11": "20141111", "column4": "201406", "column5": "10", "column6": "김희진", "column7": "5.00", "column8": "5", "column9": "2731", "column10": "3885"},
					{"column2": "서울중앙TFP2", "column3": "김희진", "column11": "20141111", "column4": "201406", "column5": "10", "column6": "김희진", "column7": "5.00", "column8": "5", "column9": "2731", "column10": "3885"},
					{"column2": "서울중앙TFP2", "column3": "김희진", "column11": "20141111", "column4": "201406", "column5": "10", "column6": "김희진", "column7": "5.00", "column8": "5", "column9": "2731", "column10": "3885"},
					{"column2": "서울중앙TFP2", "column3": "김희진", "column11": "20141111", "column4": "201406", "column5": "10", "column6": "김희진", "column7": "5.00", "column8": "5", "column9": "2731", "column10": "3885"},
					{"column2": "서울중앙TFP2", "column3": "김희진", "column11": "20141111", "column4": "201406", "column5": "10", "column6": "김희진", "column7": "5.00", "column8": "5", "column9": "2731", "column10": "3885"},
					{"column2": "서울중앙TFP2", "column3": "김희진", "column11": "20141111", "column4": "201406", "column5": "10", "column6": "김희진", "column7": "5.00", "column8": "5", "column9": "2731", "column10": "3885"},
					{"column2": "서울중앙TFP2", "column3": "김희진", "column11": "20141111", "column4": "201406", "column5": "10", "column6": "김희진", "column7": "5.00", "column8": "5", "column9": "2731", "column10": "3885"},
					{"column2": "서울중앙TFP2", "column3": "김희진", "column11": "20141111", "column4": "201406", "column5": "10", "column6": "김희진", "column7": "5.00", "column8": "5", "column9": "2731", "column10": "3885"},
					{"column2": "서울중앙TFP2", "column3": "김희진", "column4": "201406", "column5": "10", "column6": "김희진", "column7": "5.00", "column8": "5", "column9": "2731", "column10": "3885", "column11": "20141111"}
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
			formLayout_1.setColumns(["1fr", "1fr"]);
			formLayout_1.setRows(["1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output("optTitle2");
				output_1.value = "구분별신계약순위";
				output_1.style.setClasses(["navi-left"]);
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var group_2 = new cpr.controls.Container("grpNavi2");
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
				"width": "1600px",
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
					var group_5 = new cpr.controls.Container();
					group_5.style.setClasses(["search-box"]);
					var formLayout_2 = new cpr.controls.layouts.FormLayout();
					formLayout_2.scrollable = false;
					formLayout_2.topMargin = "6px";
					formLayout_2.rightMargin = "20px";
					formLayout_2.bottomMargin = "6px";
					formLayout_2.leftMargin = "20px";
					formLayout_2.horizontalSpacing = "20px";
					formLayout_2.verticalSpacing = "8px";
					formLayout_2.setColumns(["0px", "1fr", "0px", "1fr", "0px", "1fr", "50px", "1fr", "50px", "2fr", "63px"]);
					formLayout_2.setColumnAutoSizing(0, true);
					formLayout_2.setColumnAutoSizing(2, true);
					formLayout_2.setColumnAutoSizing(4, true);
					formLayout_2.setColumnAutoSizing(6, true);
					formLayout_2.setColumnAutoSizing(8, true);
					formLayout_2.setColumnAutoSizing(10, true);
					formLayout_2.setRows(["26px"]);
					group_5.setLayout(formLayout_2);
					(function(container){
						var output_7 = new cpr.controls.Output();
						output_7.value = "채널";
						output_7.style.setClasses(["label", "required"]);
						container.addChild(output_7, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var comboBox_1 = new cpr.controls.ComboBox("cmb1");
						comboBox_1.value = "1";
						(function(comboBox_1){
							comboBox_1.addItem(new cpr.controls.Item(" TM", "1"));
						})(comboBox_1);
						container.addChild(comboBox_1, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_8 = new cpr.controls.Output();
						output_8.value = "조회구분";
						output_8.style.setClasses(["label", "required"]);
						container.addChild(output_8, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var inputBox_1 = new cpr.controls.InputBox("ipb1");
						container.addChild(inputBox_1, {
							"colIndex": 3,
							"rowIndex": 0
						});
						var output_9 = new cpr.controls.Output();
						output_9.value = "교차구분";
						output_9.style.setClasses(["label", "required"]);
						container.addChild(output_9, {
							"colIndex": 4,
							"rowIndex": 0
						});
						var radioButton_1 = new cpr.controls.RadioButton("rdb1");
						(function(radioButton_1){
							radioButton_1.addItem(new cpr.controls.Item("전체", "value1"));
							radioButton_1.addItem(new cpr.controls.Item("교차", "value2"));
						})(radioButton_1);
						container.addChild(radioButton_1, {
							"colIndex": 5,
							"rowIndex": 0
						});
						var output_10 = new cpr.controls.Output();
						output_10.value = "순위건수";
						output_10.style.setClasses(["label", "required"]);
						container.addChild(output_10, {
							"colIndex": 6,
							"rowIndex": 0
						});
						var comboBox_2 = new cpr.controls.ComboBox("cmb2");
						comboBox_2.value = "1";
						(function(comboBox_2){
							comboBox_2.addItem(new cpr.controls.Item("500", "1"));
						})(comboBox_2);
						container.addChild(comboBox_2, {
							"colIndex": 7,
							"rowIndex": 0
						});
						var output_11 = new cpr.controls.Output();
						output_11.value = "정렬구분";
						output_11.style.setClasses(["label", "required"]);
						container.addChild(output_11, {
							"colIndex": 8,
							"rowIndex": 0
						});
						var radioButton_2 = new cpr.controls.RadioButton("rdb2");
						(function(radioButton_2){
							radioButton_2.addItem(new cpr.controls.Item("환산월초", "value1"));
							radioButton_2.addItem(new cpr.controls.Item("월납초회", "value2"));
							radioButton_2.addItem(new cpr.controls.Item("건수", "value3"));
						})(radioButton_2);
						container.addChild(radioButton_2, {
							"colIndex": 9,
							"rowIndex": 0
						});
						var group_6 = new cpr.controls.Container();
						group_6.style.setClasses(["btn-flow-area"]);
						var flowLayout_2 = new cpr.controls.layouts.FlowLayout();
						flowLayout_2.scrollable = false;
						flowLayout_2.verticalSpacing = 0;
						flowLayout_2.horizontalAlign = "right";
						flowLayout_2.lineWrap = false;
						flowLayout_2.leftMargin = 20;
						group_6.setLayout(flowLayout_2);
						(function(container){
							var button_1 = new cpr.controls.Button();
							button_1.value = "조회";
							button_1.style.setClasses(["btn-search"]);
							container.addChild(button_1, {
								"width": "49px",
								"height": "26px"
							});
							var button_2 = new cpr.controls.Button();
							button_2.value = "";
							button_2.style.setClasses(["btn-reset"]);
							container.addChild(button_2, {
								"width": "26px",
								"height": "26px"
							});
						})(group_6);
						container.addChild(group_6, {
							"colIndex": 10,
							"rowIndex": 0,
							"colSpan": 1,
							"rowSpan": 1,
							"verticalAlign": "center",
							"height": 26
						});
					})(group_5);
					container.addChild(group_5, {
						"autoSize": "none",
						"width": "4096px",
						"height": "40px"
					});
				})(group_4);
				container.addChild(group_4, {
					"autoSize": "height",
					"width": "4096px",
					"height": "40px"
				});
				var group_7 = new cpr.controls.Container();
				group_7.style.setClasses(["tab-box"]);
				var verticalLayout_4 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_4.spacing = 8;
				group_7.setLayout(verticalLayout_4);
				(function(container){
					var tabFolder_1 = new cpr.controls.TabFolder();
					
					var tabItem_1 = (function(tabFolder){
						var tabItem_1 = new cpr.controls.TabItem();
						tabItem_1.text = "조직별";
						var group_8 = new cpr.controls.Container();
						group_8.style.setClasses(["tab-area"]);
						var verticalLayout_5 = new cpr.controls.layouts.VerticalLayout();
						group_8.setLayout(verticalLayout_5);
						(function(container){
							var embeddedApp_1 = new cpr.controls.EmbeddedApp("ea2");
							container.addChild(embeddedApp_1, {
								"autoSize": "height",
								"width": "1578px",
								"height": "240px"
							});
						})(group_8);
						tabItem_1.content = group_8;
						return tabItem_1;
					})(tabFolder_1);
					tabFolder_1.addTabItem(tabItem_1);
					
					var tabItem_2 = (function(tabFolder){
						var tabItem_2 = new cpr.controls.TabItem();
						tabItem_2.text = "팀별";
						var group_9 = new cpr.controls.Container();
						group_9.style.setClasses(["tab-area"]);
						var verticalLayout_6 = new cpr.controls.layouts.VerticalLayout();
						verticalLayout_6.spacing = 12;
						group_9.setLayout(verticalLayout_6);
						(function(container){
							var embeddedApp_2 = new cpr.controls.EmbeddedApp("ea1");
							container.addChild(embeddedApp_2, {
								"autoSize": "height",
								"width": "320px",
								"height": "240px"
							});
						})(group_9);
						tabItem_2.content = group_9;
						return tabItem_2;
					})(tabFolder_1);
					tabFolder_1.addTabItem(tabItem_2);
					
					var tabItem_3 = (function(tabFolder){
						var tabItem_3 = new cpr.controls.TabItem();
						tabItem_3.text = "설계사별";
						var group_10 = new cpr.controls.Container();
						group_10.style.setClasses(["tab-area"]);
						var verticalLayout_7 = new cpr.controls.layouts.VerticalLayout();
						verticalLayout_7.spacing = 12;
						group_10.setLayout(verticalLayout_7);
						(function(container){
							var group_11 = new cpr.controls.Container();
							var verticalLayout_8 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_8.spacing = 8;
							group_11.setLayout(verticalLayout_8);
							(function(container){
								var group_12 = new cpr.controls.Container("grpBodyGroundGrid2");
								group_12.style.setClasses(["grid-box", "box-spacing-free"]);
								var verticalLayout_9 = new cpr.controls.layouts.VerticalLayout();
								verticalLayout_9.spacing = 8;
								group_12.setLayout(verticalLayout_9);
								(function(container){
									var grid_1 = new cpr.controls.Grid("grd2");
									grid_1.fieldLabel = "계약별세부계산내역";
									grid_1.readOnly = true;
									grid_1.init({
										"dataSet": app.lookup("dsSet1"),
										"columnMovable": true,
										"autoFit": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
										"resizableColumns": "all",
										"noDataMessage": "DATA가 없습니다.",
										"columns": [
											{"width": "48px"},
											{"width": "300px"},
											{"width": "100px"},
											{"width": "100px"},
											{"width": "100px"},
											{"width": "100px"},
											{"width": "100px"},
											{"width": "100px"},
											{"width": "100px"},
											{"width": "100px"},
											{"width": "100px"}
										],
										"header": {
											"rows": [{"height": "31px"}],
											"cells": [
												{
													"constraint": {"rowIndex": 0, "colIndex": 1},
													"configurator": function(cell){
														cell.filterable = false;
														cell.sortable = false;
														cell.targetColumnName = "column2";
														cell.text = "지점";
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 2},
													"configurator": function(cell){
														cell.filterable = false;
														cell.sortable = false;
														cell.targetColumnName = "column3";
														cell.text = "성명";
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 4},
													"configurator": function(cell){
														cell.filterable = false;
														cell.sortable = false;
														cell.targetColumnName = "column4";
														cell.text = "차월";
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 5},
													"configurator": function(cell){
														cell.filterable = false;
														cell.sortable = false;
														cell.targetColumnName = "column5";
														cell.text = "팀";
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 6},
													"configurator": function(cell){
														cell.filterable = false;
														cell.sortable = false;
														cell.targetColumnName = "column6";
														cell.text = "담당SM(FM)";
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 7},
													"configurator": function(cell){
														cell.filterable = false;
														cell.sortable = false;
														cell.targetColumnName = "column7";
														cell.text = "환산건수";
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 8},
													"configurator": function(cell){
														cell.filterable = false;
														cell.sortable = false;
														cell.targetColumnName = "column8";
														cell.text = "건수";
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 9},
													"configurator": function(cell){
														cell.filterable = false;
														cell.sortable = false;
														cell.targetColumnName = "column9";
														cell.text = "월납초회";
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 10},
													"configurator": function(cell){
														cell.filterable = false;
														cell.sortable = false;
														cell.targetColumnName = "column10";
														cell.text = "환산월초";
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 3},
													"configurator": function(cell){
														cell.text = "위촉월";
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 0},
													"configurator": function(cell){
														cell.text = "순위";
													}
												}
											]
										},
										"detail": {
											"rows": [{"height": "31px"}],
											"cells": [
												{
													"constraint": {"rowIndex": 0, "colIndex": 1},
													"configurator": function(cell){
														cell.columnName = "column2";
														cell.control = (function(){
															var output_12 = new cpr.controls.Output();
															output_12.style.setClasses(["text-left"]);
															output_12.bind("value").toDataColumn("column2");
															return output_12;
														})();
														cell.controlConstraint = {};
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 2},
													"configurator": function(cell){
														cell.columnName = "column3";
														cell.control = (function(){
															var output_13 = new cpr.controls.Output();
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
															output_14.dataType = "number";
															output_14.format = "s#,##0";
															output_14.style.setClasses(["text-right"]);
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
															output_16.style.setClasses(["text-center"]);
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
															output_17.dataType = "number";
															output_17.format = "s#,##00";
															output_17.style.setClasses(["text-right"]);
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
															output_18.dataType = "number";
															output_18.format = "s#,##0";
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
															output_19.dataType = "number";
															output_19.format = "s#,##0";
															output_19.style.setClasses(["text-right"]);
															output_19.bind("value").toDataColumn("column9");
															return output_19;
														})();
														cell.controlConstraint = {};
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 10},
													"configurator": function(cell){
														cell.columnName = "column10";
														cell.control = (function(){
															var output_20 = new cpr.controls.Output();
															output_20.dataType = "number";
															output_20.format = "s#,##0";
															output_20.style.setClasses(["text-right"]);
															output_20.bind("value").toDataColumn("column10");
															return output_20;
														})();
														cell.controlConstraint = {};
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 3},
													"configurator": function(cell){
														cell.columnName = "column11";
														cell.control = (function(){
															var output_21 = new cpr.controls.Output("opt28");
															output_21.value = "20241231";
															output_21.dataType = "date";
															output_21.format = "YYYY-MM-DD";
															output_21.bind("value").toDataColumn("column11");
															return output_21;
														})();
														cell.controlConstraint = {};
													}
												},
												{
													"constraint": {"rowIndex": 0, "colIndex": 0},
													"configurator": function(cell){
														cell.columnType = "rowindex";
													}
												}
											]
										}
									});
									grid_1.style.setClasses(["list-normal"]);
									container.addChild(grid_1, {
										"autoSize": "none",
										"width": "1598px",
										"height": "498px"
									});
								})(group_12);
								container.addChild(group_12, {
									"autoSize": "height",
									"width": "1600px",
									"height": "503px"
								});
								var group_13 = new cpr.controls.Container();
								group_13.style.setClasses(["button-table-area"]);
								var formLayout_3 = new cpr.controls.layouts.FormLayout();
								formLayout_3.scrollable = false;
								formLayout_3.topMargin = "0px";
								formLayout_3.rightMargin = "0px";
								formLayout_3.bottomMargin = "0px";
								formLayout_3.leftMargin = "0px";
								formLayout_3.horizontalSpacing = "0px";
								formLayout_3.verticalSpacing = "0px";
								formLayout_3.setColumns(["1fr", "43px", "1fr"]);
								formLayout_3.setColumnAutoSizing(1, true);
								formLayout_3.setRows(["1fr"]);
								group_13.setLayout(formLayout_3);
								(function(container){
									var group_14 = new cpr.controls.Container();
									group_14.style.setClasses(["button-table-bottom-left-area"]);
									var flowLayout_3 = new cpr.controls.layouts.FlowLayout();
									flowLayout_3.scrollable = false;
									flowLayout_3.horizontalSpacing = 10;
									flowLayout_3.verticalSpacing = 0;
									flowLayout_3.lineWrap = false;
									group_14.setLayout(flowLayout_3);
									(function(container){
										var button_3 = new cpr.controls.Button("btn1");
										button_3.value = "엑셀다운로드";
										button_3.style.setClasses(["btn-secondary01", "btn-md"]);
										container.addChild(button_3, {
											"autoSize": "width",
											"width": "100px",
											"height": "30px"
										});
									})(group_14);
									container.addChild(group_14, {
										"colIndex": 0,
										"rowIndex": 0
									});
									var group_15 = new cpr.controls.Container();
									group_15.style.setClasses(["button-table-bottom-center-area"]);
									var flowLayout_4 = new cpr.controls.layouts.FlowLayout();
									flowLayout_4.scrollable = false;
									flowLayout_4.horizontalSpacing = 10;
									flowLayout_4.verticalSpacing = 0;
									flowLayout_4.horizontalAlign = "center";
									group_15.setLayout(flowLayout_4);
									container.addChild(group_15, {
										"colIndex": 1,
										"rowIndex": 0
									});
									var group_16 = new cpr.controls.Container();
									group_16.style.setClasses(["button-table-bottom-right-area"]);
									var flowLayout_5 = new cpr.controls.layouts.FlowLayout();
									flowLayout_5.scrollable = false;
									flowLayout_5.horizontalSpacing = 10;
									flowLayout_5.verticalSpacing = 0;
									flowLayout_5.horizontalAlign = "right";
									flowLayout_5.lineWrap = false;
									group_16.setLayout(flowLayout_5);
									container.addChild(group_16, {
										"colIndex": 2,
										"rowIndex": 0
									});
								})(group_13);
								container.addChild(group_13, {
									"autoSize": "height",
									"width": "1600px",
									"height": "30px"
								});
							})(group_11);
							container.addChild(group_11, {
								"autoSize": "height",
								"width": "374px",
								"height": "541px"
							});
						})(group_10);
						tabItem_3.content = group_10;
						return tabItem_3;
					})(tabFolder_1);
					tabFolder_1.addTabItem(tabItem_3);
					tabFolder_1.setSelectedTabItem(tabItem_3);
					container.addChild(tabFolder_1, {
						"autoSize": "height",
						"width": "767px",
						"height": "609px"
					});
				})(group_7);
				container.addChild(group_7, {
					"autoSize": "height",
					"width": "1600px",
					"height": "614px"
				});
				var group_17 = new cpr.controls.Container();
				group_17.style.setClasses(["commentary"]);
				var verticalLayout_10 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_10.scrollable = false;
				verticalLayout_10.spacing = 8;
				verticalLayout_10.leftMargin = 10;
				verticalLayout_10.rightMargin = 10;
				verticalLayout_10.topMargin = 10;
				verticalLayout_10.bottomMargin = 10;
				group_17.setLayout(verticalLayout_10);
				(function(container){
					var output_22 = new cpr.controls.Output();
					output_22.value = "단위 : 명, 건, 천원";
					container.addChild(output_22, {
						"autoSize": "height",
						"width": "904px",
						"height": "20px"
					});
				})(group_17);
				container.addChild(group_17, {
					"autoSize": "height",
					"width": "1600px",
					"height": "42px"
				});
			})(group_3);
			container.addChild(group_3, {
				"autoSize": "height",
				"width": "4096px",
				"height": "710px"
			});
		}
	});
	app.title = "구분별신계약순위";
	cpr.core.Platform.INSTANCE.register(app);
})();
