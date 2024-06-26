/*
 * App URI: sfa/보전/CSBE00P1
 * Source Location: sfa/보전/CSBE00P1.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("sfa/보전/CSBE00P1", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * PPC100PA.js
			 * Created at 2024. 4. 2. 오후 2:16:33.
			 *
			 * @author chwec
			 ************************************************/;
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds1");
			dataSet_1.parseData({
				"columns": [
					{"name": "카드회사"},
					{"name": "카드번호"},
					{"name": "유효년월"},
					{"name": "카드상태"},
					{"name": "소유자명"},
					{"name": "소유자주민등록번호"},
					{"name": "처리일자"},
					{"name": "처리사원번호"},
					{"name": "처리사원명"}
				],
				"rows": [{"카드회사": "국민카드", "카드번호": "40921601234", "유효년월": "202508", "카드상태": "정상", "소유자명": "김흥국", "소유자주민등록번호": "6204291234567", "처리일자": "20241113", "처리사원번호": "100700811", "처리사원명": "김은경"}]
			});
			app.register(dataSet_1);
			app.supportMedia("all and (min-width: 3160px)", "Hlicp-WIDE");
			app.supportMedia("all and (min-width: 1600px) and (max-width: 3159px)", "Hlicp-FULL");
			app.supportMedia("all and (min-width: 790px) and (max-width: 1599px)", "Hlicp-DIV");
			app.supportMedia("all and (max-width: 789px)", "Hlicp-POP");
			
			// Configure root container
			var container = app.getContainer();
			container.style.setClasses(["pop-content-body"]);
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_1.spacing = 10;
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.spacing = 15;
			group_1.setLayout(verticalLayout_2);
			(function(container){
				var group_2 = new cpr.controls.Container();
				var verticalLayout_3 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_3.spacing = 10;
				group_2.setLayout(verticalLayout_3);
				(function(container){
					var group_3 = new cpr.controls.Container();
					group_3.style.setClasses(["search-box"]);
					var formLayout_1 = new cpr.controls.layouts.FormLayout();
					formLayout_1.scrollable = false;
					formLayout_1.topMargin = "6px";
					formLayout_1.rightMargin = "20px";
					formLayout_1.bottomMargin = "6px";
					formLayout_1.leftMargin = "20px";
					formLayout_1.horizontalSpacing = "20px";
					formLayout_1.verticalSpacing = "8px";
					formLayout_1.setColumns(["0px", "1fr", "0px", "1fr", "63px"]);
					formLayout_1.setColumnAutoSizing(0, true);
					formLayout_1.setColumnAutoSizing(2, true);
					formLayout_1.setColumnAutoSizing(4, true);
					formLayout_1.setRows(["26px", "26px"]);
					group_3.setLayout(formLayout_1);
					(function(container){
						var output_1 = new cpr.controls.Output();
						output_1.value = "고객명";
						output_1.style.setClasses(["label"]);
						container.addChild(output_1, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var inputBox_1 = new cpr.controls.InputBox("ipb2");
						inputBox_1.value = "김흥국";
						container.addChild(inputBox_1, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_2 = new cpr.controls.Output();
						output_2.value = "주민등록번호";
						output_2.style.setClasses(["label", "required"]);
						container.addChild(output_2, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var maskEditor_1 = new cpr.controls.MaskEditor("mse2");
						maskEditor_1.value = "6204291234567";
						maskEditor_1.mask = "000000-0******";
						maskEditor_1.style.css({
							"border-right-style" : "dashed",
							"border-top-width" : "3px",
							"border-bottom-color" : "red",
							"border-left-style" : "dashed",
							"border-right-width" : "3px",
							"border-bottom-width" : "3px",
							"border-left-color" : "red",
							"border-top-color" : "red",
							"border-bottom-style" : "dashed",
							"border-right-color" : "red",
							"border-left-width" : "3px",
							"border-top-style" : "dashed"
						});
						container.addChild(maskEditor_1, {
							"colIndex": 3,
							"rowIndex": 0
						});
						var group_4 = new cpr.controls.Container();
						group_4.style.setClasses(["btn-flow-area"]);
						var flowLayout_1 = new cpr.controls.layouts.FlowLayout();
						flowLayout_1.scrollable = false;
						flowLayout_1.verticalSpacing = 0;
						flowLayout_1.horizontalAlign = "right";
						flowLayout_1.lineWrap = false;
						flowLayout_1.leftMargin = 20;
						group_4.setLayout(flowLayout_1);
						(function(container){
							var button_1 = new cpr.controls.Button();
							button_1.value = "조회";
							button_1.style.setClasses(["btn-primary03"]);
							container.addChild(button_1, {
								"autoSize": "width",
								"width": "43px",
								"height": "26px"
							});
						})(group_4);
						container.addChild(group_4, {
							"colIndex": 4,
							"rowIndex": 0,
							"colSpan": 1,
							"rowSpan": 2,
							"verticalAlign": "center",
							"height": 26
						});
						var output_3 = new cpr.controls.Output();
						output_3.value = "기업(단체)";
						output_3.style.setClasses(["label"]);
						container.addChild(output_3, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var group_5 = new cpr.controls.Container("grp2");
						group_5.childCombinatorClass = "first-control-spacing";
						group_5.style.setClasses(["form-inside"]);
						var flowLayout_2 = new cpr.controls.layouts.FlowLayout();
						flowLayout_2.scrollable = false;
						flowLayout_2.horizontalSpacing = 20;
						flowLayout_2.verticalSpacing = 2;
						group_5.setLayout(flowLayout_2);
						(function(container){
							var searchInput_1 = new cpr.controls.SearchInput();
							searchInput_1.placeholder = "____-____-______";
							searchInput_1.style.css({
								"border-right-style" : "dashed",
								"border-top-width" : "3px",
								"border-bottom-color" : "red",
								"border-left-style" : "dashed",
								"border-right-width" : "3px",
								"border-bottom-width" : "3px",
								"border-left-color" : "red",
								"border-top-color" : "red",
								"border-bottom-style" : "dashed",
								"border-right-color" : "red",
								"border-left-width" : "3px",
								"border-top-style" : "dashed"
							});
							container.addChild(searchInput_1, {
								"autoSize": "none",
								"width": "140px",
								"height": "26px"
							});
							var checkBox_1 = new cpr.controls.CheckBox("cbx1");
							checkBox_1.text = "예외처리";
							container.addChild(checkBox_1, {
								"autoSize": "both",
								"width": "100px",
								"height": "26px",
								"minHeight": 26
							});
						})(group_5);
						container.addChild(group_5, {
							"colIndex": 1,
							"rowIndex": 1,
							"colSpan": 3,
							"rowSpan": 1
						});
					})(group_3);
					container.addChild(group_3, {
						"autoSize": "height",
						"width": "729px",
						"height": "74px"
					});
				})(group_2);
				container.addChild(group_2, {
					"autoSize": "height",
					"width": "729px",
					"height": "74px"
				});
				var group_6 = new cpr.controls.Container();
				group_6.style.setClasses(["grid-box", "box-spacing-free"]);
				var verticalLayout_4 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_4.spacing = 8;
				group_6.setLayout(verticalLayout_4);
				(function(container){
					var grid_1 = new cpr.controls.Grid("grd2");
					grid_1.readOnly = true;
					grid_1.init({
						"dataSet": app.lookup("ds1"),
						"columnMovable": true,
						"autoFit": "1, 2, 3, 4, 5, 6, 7, 8, 9",
						"resizableColumns": "1, 2, 3, 4, 5, 6, 7, 8, 9",
						"columns": [
							{"width": "32px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "100px"},
							{"width": "120px"},
							{"width": "100px"},
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
										cell.targetColumnName = "카드회사";
										cell.text = "선택";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "카드회사";
										cell.text = "카드회사";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "카드번호";
										cell.text = "카드번호";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "유효년월";
										cell.text = "유효년월";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "카드상태";
										cell.text = "카드상태";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "소유자명";
										cell.text = "소유자명";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 6},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "소유자주민등록번호";
										cell.text = "소유자주민등록번호";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 7},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "처리일자";
										cell.text = "처리일자";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 8},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "처리사원번호";
										cell.text = "처리사원번호";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 9},
									"configurator": function(cell){
										cell.filterable = false;
										cell.sortable = false;
										cell.targetColumnName = "처리사원명";
										cell.text = "처리사원명";
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
										cell.columnType = "radio";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.columnName = "카드회사";
										cell.control = (function(){
											var output_4 = new cpr.controls.Output();
											output_4.style.setClasses(["text-center"]);
											output_4.bind("value").toDataColumn("카드회사");
											return output_4;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.columnName = "카드번호";
										cell.control = (function(){
											var output_5 = new cpr.controls.Output();
											output_5.style.setClasses(["text-center"]);
											output_5.bind("value").toDataColumn("카드번호");
											return output_5;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.columnName = "유효년월";
										cell.control = (function(){
											var output_6 = new cpr.controls.Output();
											output_6.dataType = "date";
											output_6.format = "YYYY-MM";
											output_6.bind("value").toDataColumn("유효년월");
											return output_6;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 4},
									"configurator": function(cell){
										cell.columnName = "카드상태";
										cell.control = (function(){
											var output_7 = new cpr.controls.Output();
											output_7.style.setClasses(["text-center"]);
											output_7.bind("value").toDataColumn("카드상태");
											return output_7;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 5},
									"configurator": function(cell){
										cell.columnName = "소유자명";
										cell.control = (function(){
											var output_8 = new cpr.controls.Output();
											output_8.style.setClasses(["text-center"]);
											output_8.bind("value").toDataColumn("소유자명");
											return output_8;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 6},
									"configurator": function(cell){
										cell.columnName = "소유자주민등록번호";
										cell.control = (function(){
											var output_9 = new cpr.controls.Output();
											output_9.format = "000000-0******";
											output_9.style.setClasses(["text-center"]);
											output_9.bind("value").toDataColumn("소유자주민등록번호");
											return output_9;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 7},
									"configurator": function(cell){
										cell.columnName = "처리일자";
										cell.control = (function(){
											var output_10 = new cpr.controls.Output();
											output_10.dataType = "date";
											output_10.format = "YYYY-MM-DD";
											output_10.bind("value").toDataColumn("처리일자");
											return output_10;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 8},
									"configurator": function(cell){
										cell.columnName = "처리사원번호";
										cell.control = (function(){
											var output_11 = new cpr.controls.Output();
											output_11.style.setClasses(["text-center"]);
											output_11.bind("value").toDataColumn("처리사원번호");
											return output_11;
										})();
										cell.controlConstraint = {};
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 9},
									"configurator": function(cell){
										cell.columnName = "처리사원명";
										cell.control = (function(){
											var output_12 = new cpr.controls.Output();
											output_12.style.setClasses(["text-center"]);
											output_12.bind("value").toDataColumn("처리사원명");
											return output_12;
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
						"height": "343px"
					});
				})(group_6);
				container.addChild(group_6, {
					"autoSize": "height",
					"width": "729px",
					"height": "343px"
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "729px",
				"height": "434px"
			});
			
			var group_7 = new cpr.controls.Container();
			group_7.style.setClasses(["button-table-area"]);
			var formLayout_2 = new cpr.controls.layouts.FormLayout();
			formLayout_2.scrollable = false;
			formLayout_2.topMargin = "0px";
			formLayout_2.rightMargin = "0px";
			formLayout_2.bottomMargin = "0px";
			formLayout_2.leftMargin = "0px";
			formLayout_2.horizontalSpacing = "0px";
			formLayout_2.verticalSpacing = "0px";
			formLayout_2.setColumns(["1fr", "43px", "1fr"]);
			formLayout_2.setColumnAutoSizing(1, true);
			formLayout_2.setRows(["1fr"]);
			group_7.setLayout(formLayout_2);
			(function(container){
				var group_8 = new cpr.controls.Container();
				group_8.style.setClasses(["button-table-bottom-left-area"]);
				var flowLayout_3 = new cpr.controls.layouts.FlowLayout();
				flowLayout_3.scrollable = false;
				flowLayout_3.horizontalSpacing = 10;
				flowLayout_3.verticalSpacing = 0;
				flowLayout_3.lineWrap = false;
				group_8.setLayout(flowLayout_3);
				(function(container){
					var group_9 = new cpr.controls.Container();
					group_9.style.css({
						"border-right-style" : "dashed",
						"border-top-width" : "3px",
						"border-bottom-color" : "red",
						"border-left-style" : "dashed",
						"border-right-width" : "3px",
						"border-bottom-width" : "3px",
						"border-left-color" : "red",
						"border-top-color" : "red",
						"border-bottom-style" : "dashed",
						"border-right-color" : "red",
						"border-left-width" : "3px",
						"border-top-style" : "dashed"
					});
					var flowLayout_4 = new cpr.controls.layouts.FlowLayout();
					flowLayout_4.scrollable = false;
					flowLayout_4.horizontalSpacing = 10;
					flowLayout_4.verticalSpacing = 0;
					flowLayout_4.lineWrap = false;
					group_9.setLayout(flowLayout_4);
					(function(container){
						var button_2 = new cpr.controls.Button();
						button_2.value = "행추가";
						button_2.style.setClasses(["btn-secondary01", "btn-md"]);
						container.addChild(button_2, {
							"autoSize": "width",
							"width": "60px",
							"height": "30px"
						});
						var button_3 = new cpr.controls.Button();
						button_3.value = "행삭제";
						button_3.style.setClasses(["btn-secondary01", "btn-md"]);
						container.addChild(button_3, {
							"autoSize": "width",
							"width": "60px",
							"height": "30px"
						});
					})(group_9);
					container.addChild(group_9, {
						"width": "147px",
						"height": "30px"
					});
				})(group_8);
				container.addChild(group_8, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var group_10 = new cpr.controls.Container();
				group_10.style.setClasses(["button-table-bottom-center-area"]);
				var flowLayout_5 = new cpr.controls.layouts.FlowLayout();
				flowLayout_5.scrollable = false;
				flowLayout_5.horizontalSpacing = 10;
				flowLayout_5.verticalSpacing = 0;
				flowLayout_5.horizontalAlign = "center";
				group_10.setLayout(flowLayout_5);
				container.addChild(group_10, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var group_11 = new cpr.controls.Container();
				group_11.style.setClasses(["button-table-bottom-right-area"]);
				var flowLayout_6 = new cpr.controls.layouts.FlowLayout();
				flowLayout_6.scrollable = false;
				flowLayout_6.horizontalSpacing = 10;
				flowLayout_6.verticalSpacing = 0;
				flowLayout_6.horizontalAlign = "right";
				flowLayout_6.lineWrap = false;
				group_11.setLayout(flowLayout_6);
				(function(container){
					var button_4 = new cpr.controls.Button();
					button_4.value = "실시간 카드확인";
					button_4.style.setClasses(["btn-primary04", "btn-md"]);
					button_4.style.css({
						"border-right-style" : "dashed",
						"border-top-width" : "3px",
						"border-bottom-color" : "red",
						"border-left-style" : "dashed",
						"border-right-width" : "3px",
						"border-bottom-width" : "3px",
						"border-left-color" : "red",
						"border-top-color" : "red",
						"border-bottom-style" : "dashed",
						"border-right-color" : "red",
						"border-left-width" : "3px",
						"border-top-style" : "dashed"
					});
					container.addChild(button_4, {
						"autoSize": "width",
						"width": "60px",
						"height": "30px"
					});
					var button_5 = new cpr.controls.Button();
					button_5.value = "수정";
					button_5.style.setClasses(["btn-primary03", "btn-md"]);
					container.addChild(button_5, {
						"autoSize": "width",
						"width": "60px",
						"height": "30px"
					});
					var button_6 = new cpr.controls.Button();
					button_6.value = "등록";
					button_6.style.setClasses(["btn-primary03", "btn-md"]);
					container.addChild(button_6, {
						"autoSize": "width",
						"width": "60px",
						"height": "30px"
					});
					var button_7 = new cpr.controls.Button();
					button_7.value = "삭제";
					button_7.style.setClasses(["btn-primary03", "btn-md"]);
					container.addChild(button_7, {
						"autoSize": "width",
						"width": "60px",
						"height": "30px"
					});
				})(group_11);
				container.addChild(group_11, {
					"colIndex": 2,
					"rowIndex": 0
				});
			})(group_7);
			container.addChild(group_7, {
				"autoSize": "height",
				"width": "767px",
				"height": "30px"
			});
		}
	});
	app.title = "신용카드 등록관리";
	cpr.core.Platform.INSTANCE.register(app);
})();
