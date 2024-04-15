/*
 * App URI: sfa/영업/SLAB02M0
 * Source Location: sfa/영업/SLAB02M0.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("sfa/영업/SLAB02M0", { 
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

			/*
			 * "이전" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e){
				var button = e.control;
				//화면이동(현재 화면에서 리로드)
				var host = app.getHost(); // 부모 임베디드 앱
				cpr.core.App.load("sfa/영업/SLBB02M0", function(loadedApp) {
				    if (loadedApp) {
				        host.app = loadedApp;
				        host.initValue = {
				            "param": "param"
				        }
				    }
				});
			}

			/*
			 * "다음" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(e){
				var button = e.control;
				//화면이동(현재 화면에서 리로드)
				var host = app.getHost(); // 부모 임베디드 앱
				cpr.core.App.load("sfa/영업/SLAB02M1", function(loadedApp) {
				    if (loadedApp) {
				        host.app = loadedApp;
				        host.initValue = {
				            "param": "param"
				        }
				    }
				});
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds1");
			dataSet_1.parseData({
				"columns" : [
					{"name": "소속"},
					{"name": "사원번호"},
					{"name": "성명"},
					{"name": "주민등록번호"},
					{"name": "지역코드"},
					{"name": "등록구분"},
					{"name": "등록번호"},
					{"name": "등록신청구분"},
					{"name": "등록일자"},
					{"name": "등록결과"},
					{"name": "우편번호"},
					{"name": "주소"}
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
				output_1.value = "모집인등록신청/결과";
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
					var button_1 = new cpr.controls.Button();
					button_1.value = "이전";
					button_1.style.setClasses(["btn-primary04", "btn-md"]);
					if(typeof onButtonClick == "function") {
						button_1.addEventListener("click", onButtonClick);
					}
					container.addChild(button_1, {
						"autoSize": "width",
						"width": "49px",
						"height": "26px"
					});
					var button_2 = new cpr.controls.Button();
					button_2.value = "다음";
					button_2.style.setClasses(["btn-primary04", "btn-md"]);
					if(typeof onButtonClick2 == "function") {
						button_2.addEventListener("click", onButtonClick2);
					}
					container.addChild(button_2, {
						"autoSize": "width",
						"width": "49px",
						"height": "26px"
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
					formLayout_2.setColumns(["0px", "1fr", "0px", "1fr", "0px", "1fr", "0px", "1fr", "63px"]);
					formLayout_2.setColumnAutoSizing(0, true);
					formLayout_2.setColumnAutoSizing(2, true);
					formLayout_2.setColumnAutoSizing(4, true);
					formLayout_2.setColumnAutoSizing(6, true);
					formLayout_2.setColumnAutoSizing(8, true);
					formLayout_2.setRows(["26px"]);
					group_5.setLayout(formLayout_2);
					(function(container){
						var output_2 = new cpr.controls.Output();
						output_2.value = "조직번호";
						output_2.style.setClasses(["label", "required"]);
						container.addChild(output_2, {
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
						formLayout_3.setColumns(["1fr", "1fr"]);
						formLayout_3.setRows(["1fr"]);
						group_6.setLayout(formLayout_3);
						(function(container){
							var inputBox_1 = new cpr.controls.InputBox("ipb6");
							inputBox_1.value = "전사";
							container.addChild(inputBox_1, {
								"colIndex": 1,
								"rowIndex": 0
							});
							var searchInput_1 = new cpr.controls.SearchInput();
							searchInput_1.value = "00000";
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
								"colIndex": 0,
								"rowIndex": 0
							});
						})(group_6);
						container.addChild(group_6, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_3 = new cpr.controls.Output();
						output_3.value = "등록일자";
						output_3.style.setClasses(["label", "required"]);
						container.addChild(output_3, {
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
							dateInput_1.value = "20240319";
							dateInput_1.style.css({
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
							container.addChild(dateInput_1, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var output_4 = new cpr.controls.Output();
							output_4.value = "-";
							output_4.style.setClasses(["text-center"]);
							container.addChild(output_4, {
								"colIndex": 1,
								"rowIndex": 0
							});
							var dateInput_2 = new cpr.controls.DateInput("dti2");
							dateInput_2.value = "20240319";
							dateInput_2.style.css({
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
							container.addChild(dateInput_2, {
								"colIndex": 2,
								"rowIndex": 0
							});
						})(group_7);
						container.addChild(group_7, {
							"colIndex": 3,
							"rowIndex": 0
						});
						var output_5 = new cpr.controls.Output();
						output_5.value = "조회구분";
						output_5.style.setClasses(["label", "required"]);
						container.addChild(output_5, {
							"colIndex": 4,
							"rowIndex": 0
						});
						var comboBox_1 = new cpr.controls.ComboBox("cmb1");
						comboBox_1.value = "1";
						comboBox_1.style.css({
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
						(function(comboBox_1){
							comboBox_1.addItem(new cpr.controls.Item("생명보험", "1"));
						})(comboBox_1);
						container.addChild(comboBox_1, {
							"colIndex": 5,
							"rowIndex": 0
						});
						var output_6 = new cpr.controls.Output();
						output_6.value = "모집인유형";
						output_6.style.setClasses(["label", "required"]);
						container.addChild(output_6, {
							"colIndex": 6,
							"rowIndex": 0
						});
						var comboBox_2 = new cpr.controls.ComboBox("cmb2");
						comboBox_2.value = "1";
						comboBox_2.style.css({
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
						(function(comboBox_2){
							comboBox_2.addItem(new cpr.controls.Item("모집인", "1"));
						})(comboBox_2);
						container.addChild(comboBox_2, {
							"colIndex": 7,
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
							var button_3 = new cpr.controls.Button();
							button_3.value = "조회";
							button_3.style.setClasses(["btn-search"]);
							container.addChild(button_3, {
								"width": "49px",
								"height": "26px"
							});
							var button_4 = new cpr.controls.Button();
							button_4.value = "";
							button_4.style.setClasses(["btn-reset"]);
							container.addChild(button_4, {
								"width": "26px",
								"height": "26px"
							});
						})(group_8);
						container.addChild(group_8, {
							"colIndex": 8,
							"rowIndex": 0,
							"colSpan": 1,
							"rowSpan": 1,
							"verticalAlign": "center",
							"height": 26
						});
					})(group_5);
					container.addChild(group_5, {
						"autoSize": "none",
						"width": "4236px",
						"height": "40px"
					});
				})(group_4);
				container.addChild(group_4, {
					"autoSize": "height",
					"width": "4236px",
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
						grid_1.readOnly = true;
						grid_1.init({
							"dataSet": app.lookup("ds1"),
							"columnMovable": true,
							"autoFit": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12",
							"resizableColumns": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12",
							"columns": [
								{"width": "32px"},
								{"width": "100px"},
								{"width": "100px"},
								{"width": "100px"},
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
										"constraint": {"rowIndex": 0, "colIndex": 0},
										"configurator": function(cell){
											cell.columnType = "checkbox";
											cell.filterable = false;
											cell.sortable = false;
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 1},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "소속";
											cell.text = "소속";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 2},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "사원번호";
											cell.text = "사원번호";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "성명";
											cell.text = "성명";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 4},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "주민등록번호";
											cell.text = "주민등록번호";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 5},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "지역코드";
											cell.text = "지역코드";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 6},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "등록구분";
											cell.text = "등록구분";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 8},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "등록신청구분";
											cell.text = "등록신청구분";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 9},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "등록일자";
											cell.text = "등록일자";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 10},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "등록결과";
											cell.text = "등록결과";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 11},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "우편번호";
											cell.text = "우편번호";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 12},
										"configurator": function(cell){
											cell.filterable = false;
											cell.sortable = false;
											cell.targetColumnName = "주소";
											cell.text = "주소";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 7},
										"configurator": function(cell){
											cell.text = "등록번호";
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
											cell.columnType = "checkbox";
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 1},
										"configurator": function(cell){
											cell.columnName = "소속";
											cell.control = (function(){
												var output_7 = new cpr.controls.Output();
												output_7.bind("value").toDataColumn("소속");
												return output_7;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 2},
										"configurator": function(cell){
											cell.columnName = "사원번호";
											cell.control = (function(){
												var output_8 = new cpr.controls.Output();
												output_8.bind("value").toDataColumn("사원번호");
												return output_8;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 3},
										"configurator": function(cell){
											cell.columnName = "성명";
											cell.control = (function(){
												var output_9 = new cpr.controls.Output();
												output_9.bind("value").toDataColumn("성명");
												return output_9;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 4},
										"configurator": function(cell){
											cell.columnName = "주민등록번호";
											cell.control = (function(){
												var output_10 = new cpr.controls.Output();
												output_10.bind("value").toDataColumn("주민등록번호");
												return output_10;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 5},
										"configurator": function(cell){
											cell.columnName = "지역코드";
											cell.control = (function(){
												var output_11 = new cpr.controls.Output();
												output_11.bind("value").toDataColumn("지역코드");
												return output_11;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 6},
										"configurator": function(cell){
											cell.columnName = "등록구분";
											cell.control = (function(){
												var output_12 = new cpr.controls.Output();
												output_12.bind("value").toDataColumn("등록구분");
												return output_12;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 8},
										"configurator": function(cell){
											cell.columnName = "등록신청구분";
											cell.control = (function(){
												var output_13 = new cpr.controls.Output();
												output_13.bind("value").toDataColumn("등록신청구분");
												return output_13;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 9},
										"configurator": function(cell){
											cell.columnName = "등록일자";
											cell.control = (function(){
												var output_14 = new cpr.controls.Output();
												output_14.bind("value").toDataColumn("등록일자");
												return output_14;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 10},
										"configurator": function(cell){
											cell.columnName = "등록결과";
											cell.control = (function(){
												var output_15 = new cpr.controls.Output();
												output_15.bind("value").toDataColumn("등록결과");
												return output_15;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 11},
										"configurator": function(cell){
											cell.columnName = "우편번호";
											cell.control = (function(){
												var output_16 = new cpr.controls.Output();
												output_16.bind("value").toDataColumn("우편번호");
												return output_16;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 12},
										"configurator": function(cell){
											cell.columnName = "주소";
											cell.control = (function(){
												var output_17 = new cpr.controls.Output();
												output_17.bind("value").toDataColumn("주소");
												return output_17;
											})();
											cell.controlConstraint = {};
										}
									},
									{
										"constraint": {"rowIndex": 0, "colIndex": 7},
										"configurator": function(cell){
											cell.columnName = "등록번호";
											cell.control = (function(){
												var output_18 = new cpr.controls.Output();
												output_18.bind("value").toDataColumn("등록번호");
												return output_18;
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
					group_11.style.setClasses(["button-table-area"]);
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
					group_11.setLayout(formLayout_5);
					(function(container){
						var group_12 = new cpr.controls.Container();
						group_12.style.setClasses(["button-table-bottom-left-area"]);
						var flowLayout_3 = new cpr.controls.layouts.FlowLayout();
						flowLayout_3.scrollable = false;
						flowLayout_3.horizontalSpacing = 10;
						flowLayout_3.verticalSpacing = 0;
						flowLayout_3.lineWrap = false;
						group_12.setLayout(flowLayout_3);
						(function(container){
							var button_5 = new cpr.controls.Button("btn1");
							button_5.value = "엑셀다운로드";
							button_5.style.setClasses(["btn-secondary01", "btn-md"]);
							container.addChild(button_5, {
								"autoSize": "width",
								"width": "110px",
								"height": "30px"
							});
						})(group_12);
						container.addChild(group_12, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var group_13 = new cpr.controls.Container();
						group_13.style.setClasses(["button-table-bottom-center-area"]);
						var flowLayout_4 = new cpr.controls.layouts.FlowLayout();
						flowLayout_4.scrollable = false;
						flowLayout_4.horizontalSpacing = 10;
						flowLayout_4.verticalSpacing = 0;
						flowLayout_4.horizontalAlign = "center";
						group_13.setLayout(flowLayout_4);
						container.addChild(group_13, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var group_14 = new cpr.controls.Container();
						group_14.style.setClasses(["button-table-bottom-right-area"]);
						var flowLayout_5 = new cpr.controls.layouts.FlowLayout();
						flowLayout_5.scrollable = false;
						flowLayout_5.horizontalSpacing = 10;
						flowLayout_5.verticalSpacing = 0;
						flowLayout_5.horizontalAlign = "right";
						flowLayout_5.lineWrap = false;
						group_14.setLayout(flowLayout_5);
						(function(container){
							var button_6 = new cpr.controls.Button();
							button_6.value = "저장";
							button_6.style.setClasses(["btn-primary03", "btn-md"]);
							container.addChild(button_6, {
								"autoSize": "width",
								"width": "60px",
								"height": "30px"
							});
							var button_7 = new cpr.controls.Button();
							button_7.value = "다음";
							button_7.style.setClasses(["btn-primary04", "btn-md"]);
							container.addChild(button_7, {
								"autoSize": "width",
								"width": "60px",
								"height": "30px"
							});
						})(group_14);
						container.addChild(group_14, {
							"colIndex": 2,
							"rowIndex": 0
						});
					})(group_11);
					container.addChild(group_11, {
						"autoSize": "height",
						"width": "1600px",
						"height": "30px"
					});
				})(group_9);
				container.addChild(group_9, {
					"autoSize": "height",
					"width": "1600px",
					"height": "541px"
				});
			})(group_3);
			container.addChild(group_3, {
				"autoSize": "height",
				"width": "4236px",
				"height": "588px"
			});
		}
	});
	app.title = "모집인등록신청/결과";
	cpr.core.Platform.INSTANCE.register(app);
})();
