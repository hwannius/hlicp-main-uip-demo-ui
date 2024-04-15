/*
 * App URI: sfa/영업/SLEA01M0
 * Source Location: sfa/영업/SLEA01M0.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("sfa/영업/SLEA01M0", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * SLEA01M0.js
			 * Created at 2024. 4. 2. 오후 1:44:29.
			 *
			 * @author User
			 ************************************************/

			/*
			 * "이전" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e){
				var button = e.control;
				//화면이동(현재 화면에서 리로드)
				var host = app.getHost(); // 부모 임베디드 앱
				cpr.core.App.load("sfa/영업/SLEA02M1_3", function(loadedApp) {
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
				cpr.core.App.load("sfa/영업/SLFC01M0", function(loadedApp) {
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
				output_1.value = "기본사항조회";
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
				"width": "1560px",
				"height": "35px"
			});
			
			var group_3 = new cpr.controls.Container("grpBody");
			group_3.style.setClasses(["grid-content-body"]);
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.scrollable = false;
			verticalLayout_2.spacing = 7;
			group_3.setLayout(verticalLayout_2);
			(function(container){
				var group_4 = new cpr.controls.Container();
				var verticalLayout_3 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_3.spacing = 10;
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
					formLayout_2.setColumns(["0px", "1fr", "0px", "1fr", "0px", "1fr", "63px"]);
					formLayout_2.setColumnAutoSizing(0, true);
					formLayout_2.setColumnAutoSizing(2, true);
					formLayout_2.setColumnAutoSizing(4, true);
					formLayout_2.setColumnAutoSizing(6, true);
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
						group_6.style.setClasses(["btn-flow-area"]);
						var flowLayout_2 = new cpr.controls.layouts.FlowLayout();
						flowLayout_2.scrollable = false;
						flowLayout_2.verticalSpacing = 0;
						flowLayout_2.horizontalAlign = "right";
						flowLayout_2.lineWrap = false;
						flowLayout_2.leftMargin = 20;
						group_6.setLayout(flowLayout_2);
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
						})(group_6);
						container.addChild(group_6, {
							"colIndex": 6,
							"rowIndex": 0,
							"colSpan": 1,
							"rowSpan": 1,
							"verticalAlign": "center",
							"height": 26
						});
						var group_7 = new cpr.controls.Container("grp17");
						group_7.style.setClasses(["form-inside"]);
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
						group_7.setLayout(formLayout_3);
						(function(container){
							var searchInput_1 = new cpr.controls.SearchInput();
							searchInput_1.value = "008001";
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
							var inputBox_1 = new cpr.controls.InputBox("ipb44");
							inputBox_1.enabled = false;
							inputBox_1.value = "노*지점";
							container.addChild(inputBox_1, {
								"colIndex": 1,
								"rowIndex": 0
							});
						})(group_7);
						container.addChild(group_7, {
							"colIndex": 1,
							"rowIndex": 0
						});
					})(group_5);
					container.addChild(group_5, {
						"autoSize": "height",
						"width": "2774px",
						"height": "40px"
					});
				})(group_4);
				container.addChild(group_4, {
					"autoSize": "height",
					"width": "2774px",
					"height": "40px"
				});
				var group_8 = new cpr.controls.Container();
				group_8.style.setClasses(["form-box"]);
				var verticalLayout_4 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_4.scrollable = false;
				verticalLayout_4.spacing = 8;
				group_8.setLayout(verticalLayout_4);
				(function(container){
					var group_9 = new cpr.controls.Container("grp3");
					group_9.style.setClasses(["form-title-box"]);
					var verticalLayout_5 = new cpr.controls.layouts.VerticalLayout();
					group_9.setLayout(verticalLayout_5);
					(function(container){
						var output_3 = new cpr.controls.Output();
						output_3.value = "조직속성";
						output_3.style.setClasses(["form-title"]);
						container.addChild(output_3, {
							"autoSize": "height",
							"width": "300px",
							"height": "17px"
						});
					})(group_9);
					container.addChild(group_9, {
						"autoSize": "height",
						"width": "300px",
						"height": "17px"
					});
					var group_10 = new cpr.controls.Container("grp4");
					group_10.style.setClasses(["form-normal"]);
					var formLayout_4 = new cpr.controls.layouts.FormLayout();
					formLayout_4.scrollable = false;
					formLayout_4.topMargin = "2px";
					formLayout_4.rightMargin = "5px";
					formLayout_4.bottomMargin = "2px";
					formLayout_4.leftMargin = "5px";
					formLayout_4.horizontalSpacing = "11px";
					formLayout_4.verticalSpacing = "5px";
					formLayout_4.horizontalSeparatorWidth = 1;
					formLayout_4.verticalSeparatorWidth = 1;
					formLayout_4.setColumns(["110px", "1fr", "1fr", "1fr", "1fr", "1fr", "1fr", "1fr"]);
					formLayout_4.setUseColumnShade(0, true);
					formLayout_4.setColumnAutoSizing(0, true);
					formLayout_4.setRows(["26px", "26px"]);
					formLayout_4.setUseRowShade(0, true);
					group_10.setLayout(formLayout_4);
					(function(container){
						var output_4 = new cpr.controls.Output();
						output_4.value = "속성";
						output_4.style.setClasses(["label"]);
						container.addChild(output_4, {
							"colIndex": 0,
							"rowIndex": 0,
							"colSpan": 1,
							"rowSpan": 2
						});
						var output_5 = new cpr.controls.Output();
						output_5.value = "조직유형";
						output_5.style.setClasses(["label"]);
						container.addChild(output_5, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_6 = new cpr.controls.Output();
						output_6.value = "조직종류";
						output_6.style.setClasses(["label"]);
						container.addChild(output_6, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var output_7 = new cpr.controls.Output();
						output_7.value = "조직속성";
						output_7.style.setClasses(["label"]);
						container.addChild(output_7, {
							"colIndex": 3,
							"rowIndex": 0
						});
						var output_8 = new cpr.controls.Output();
						output_8.value = "조직특성";
						output_8.style.setClasses(["label"]);
						container.addChild(output_8, {
							"colIndex": 4,
							"rowIndex": 0
						});
						var output_9 = new cpr.controls.Output();
						output_9.value = "조직등급";
						output_9.style.setClasses(["label"]);
						container.addChild(output_9, {
							"colIndex": 5,
							"rowIndex": 0
						});
						var output_10 = new cpr.controls.Output();
						output_10.value = "창구여부";
						output_10.style.setClasses(["label"]);
						container.addChild(output_10, {
							"colIndex": 6,
							"rowIndex": 0
						});
						var output_11 = new cpr.controls.Output();
						output_11.value = "육성실운영";
						output_11.style.setClasses(["label"]);
						container.addChild(output_11, {
							"colIndex": 7,
							"rowIndex": 0
						});
						var inputBox_2 = new cpr.controls.InputBox("ipb2");
						inputBox_2.value = "영업소";
						container.addChild(inputBox_2, {
							"colIndex": 1,
							"rowIndex": 1
						});
						var inputBox_3 = new cpr.controls.InputBox("ipb5");
						inputBox_3.value = "개인";
						container.addChild(inputBox_3, {
							"colIndex": 2,
							"rowIndex": 1
						});
						var inputBox_4 = new cpr.controls.InputBox("ipb4");
						inputBox_4.value = "영업지점";
						container.addChild(inputBox_4, {
							"colIndex": 3,
							"rowIndex": 1
						});
						var inputBox_5 = new cpr.controls.InputBox("ipb6");
						inputBox_5.value = "미부여";
						container.addChild(inputBox_5, {
							"colIndex": 4,
							"rowIndex": 1
						});
						var inputBox_6 = new cpr.controls.InputBox("ipb7");
						container.addChild(inputBox_6, {
							"colIndex": 5,
							"rowIndex": 1
						});
						var inputBox_7 = new cpr.controls.InputBox("ipb9");
						inputBox_7.value = "Y";
						container.addChild(inputBox_7, {
							"colIndex": 6,
							"rowIndex": 1
						});
						var inputBox_8 = new cpr.controls.InputBox("ipb8");
						inputBox_8.value = "통합운영";
						container.addChild(inputBox_8, {
							"colIndex": 7,
							"rowIndex": 1
						});
					})(group_10);
					container.addChild(group_10, {
						"autoSize": "height",
						"width": "1333px",
						"height": "64px"
					});
				})(group_8);
				container.addChild(group_8, {
					"autoSize": "height",
					"width": "1333px",
					"height": "94px"
				});
				var group_11 = new cpr.controls.Container();
				group_11.style.setClasses(["form-box"]);
				var verticalLayout_6 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_6.scrollable = false;
				verticalLayout_6.spacing = 8;
				group_11.setLayout(verticalLayout_6);
				(function(container){
					var group_12 = new cpr.controls.Container("grp13");
					group_12.style.setClasses(["form-title-box"]);
					var verticalLayout_7 = new cpr.controls.layouts.VerticalLayout();
					group_12.setLayout(verticalLayout_7);
					(function(container){
						var output_12 = new cpr.controls.Output();
						output_12.value = "기본정보";
						output_12.style.setClasses(["form-title"]);
						container.addChild(output_12, {
							"autoSize": "height",
							"width": "300px",
							"height": "17px"
						});
					})(group_12);
					container.addChild(group_12, {
						"autoSize": "height",
						"width": "300px",
						"height": "17px"
					});
					var group_13 = new cpr.controls.Container("grp14");
					group_13.style.setClasses(["form-normal"]);
					var formLayout_5 = new cpr.controls.layouts.FormLayout();
					formLayout_5.scrollable = false;
					formLayout_5.topMargin = "2px";
					formLayout_5.rightMargin = "5px";
					formLayout_5.bottomMargin = "2px";
					formLayout_5.leftMargin = "5px";
					formLayout_5.horizontalSpacing = "11px";
					formLayout_5.verticalSpacing = "5px";
					formLayout_5.horizontalSeparatorWidth = 1;
					formLayout_5.verticalSeparatorWidth = 1;
					formLayout_5.setColumns(["110px", "110px", "1fr", "110px", "1fr", "110px", "1fr"]);
					formLayout_5.setUseColumnShade(0, true);
					formLayout_5.setUseColumnShade(1, true);
					formLayout_5.setUseColumnShade(3, true);
					formLayout_5.setUseColumnShade(5, true);
					formLayout_5.setColumnAutoSizing(0, true);
					formLayout_5.setColumnAutoSizing(1, true);
					formLayout_5.setColumnAutoSizing(3, true);
					formLayout_5.setColumnAutoSizing(5, true);
					formLayout_5.setRows(["26px", "26px", "26px", "26px", "26px", "26px", "26px", "26px", "26px", "26px", "26px", "26px"]);
					group_13.setLayout(formLayout_5);
					(function(container){
						var output_13 = new cpr.controls.Output();
						output_13.value = "소속";
						output_13.style.setClasses(["label"]);
						container.addChild(output_13, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_14 = new cpr.controls.Output();
						output_14.value = "지원단(본부)";
						output_14.style.setClasses(["label"]);
						container.addChild(output_14, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var inputBox_9 = new cpr.controls.InputBox("ipb3");
						inputBox_9.value = "000530(서울지역본부)";
						container.addChild(inputBox_9, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var output_15 = new cpr.controls.Output();
						output_15.value = "지점";
						output_15.style.setClasses(["label"]);
						container.addChild(output_15, {
							"colIndex": 3,
							"rowIndex": 0
						});
						var inputBox_10 = new cpr.controls.InputBox("ipb10");
						inputBox_10.value = "000111(노*지점)";
						container.addChild(inputBox_10, {
							"colIndex": 4,
							"rowIndex": 0,
							"colSpan": 3,
							"rowSpan": 1
						});
						var output_16 = new cpr.controls.Output();
						output_16.value = "지역";
						output_16.style.setClasses(["label"]);
						container.addChild(output_16, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var output_17 = new cpr.controls.Output();
						output_17.value = "시도구분";
						output_17.style.setClasses(["label"]);
						container.addChild(output_17, {
							"colIndex": 1,
							"rowIndex": 1
						});
						var inputBox_11 = new cpr.controls.InputBox("ipb26");
						inputBox_11.value = "서울(01)";
						container.addChild(inputBox_11, {
							"colIndex": 2,
							"rowIndex": 1
						});
						var output_18 = new cpr.controls.Output();
						output_18.value = "지역구분";
						output_18.style.setClasses(["label"]);
						container.addChild(output_18, {
							"colIndex": 3,
							"rowIndex": 1
						});
						var inputBox_12 = new cpr.controls.InputBox("ipb11");
						inputBox_12.value = "000111(노*지점)";
						container.addChild(inputBox_12, {
							"colIndex": 4,
							"rowIndex": 1,
							"colSpan": 3,
							"rowSpan": 1
						});
						var output_19 = new cpr.controls.Output();
						output_19.value = "소속장";
						output_19.style.setClasses(["label"]);
						container.addChild(output_19, {
							"colIndex": 0,
							"rowIndex": 2
						});
						var output_20 = new cpr.controls.Output();
						output_20.value = "부임년월";
						output_20.style.setClasses(["label"]);
						container.addChild(output_20, {
							"colIndex": 1,
							"rowIndex": 2
						});
						var inputBox_13 = new cpr.controls.InputBox("ipb27");
						inputBox_13.value = "2023-12";
						container.addChild(inputBox_13, {
							"colIndex": 2,
							"rowIndex": 2
						});
						var output_21 = new cpr.controls.Output();
						output_21.value = "소속장명";
						output_21.style.setClasses(["label"]);
						container.addChild(output_21, {
							"colIndex": 3,
							"rowIndex": 2
						});
						var group_14 = new cpr.controls.Container("grp2");
						group_14.style.setClasses(["form-inside"]);
						var formLayout_6 = new cpr.controls.layouts.FormLayout();
						formLayout_6.scrollable = false;
						formLayout_6.topMargin = "0px";
						formLayout_6.rightMargin = "0px";
						formLayout_6.bottomMargin = "0px";
						formLayout_6.leftMargin = "0px";
						formLayout_6.horizontalSpacing = "5px";
						formLayout_6.verticalSpacing = "0px";
						formLayout_6.setColumns(["1fr", "2fr"]);
						formLayout_6.setRows(["1fr"]);
						group_14.setLayout(formLayout_6);
						(function(container){
							var inputBox_14 = new cpr.controls.InputBox("ipb12");
							inputBox_14.value = "1000102449";
							container.addChild(inputBox_14, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var inputBox_15 = new cpr.controls.InputBox("ipb13");
							inputBox_15.value = "김*국";
							container.addChild(inputBox_15, {
								"colIndex": 1,
								"rowIndex": 0
							});
						})(group_14);
						container.addChild(group_14, {
							"colIndex": 4,
							"rowIndex": 2,
							"colSpan": 3,
							"rowSpan": 1
						});
						var output_22 = new cpr.controls.Output();
						output_22.value = "개소";
						output_22.style.setClasses(["label"]);
						container.addChild(output_22, {
							"colIndex": 0,
							"rowIndex": 3
						});
						var output_23 = new cpr.controls.Output();
						output_23.value = "설치년월";
						output_23.style.setClasses(["label"]);
						container.addChild(output_23, {
							"colIndex": 1,
							"rowIndex": 3
						});
						var inputBox_16 = new cpr.controls.InputBox("ipb28");
						inputBox_16.value = "2013-01";
						container.addChild(inputBox_16, {
							"colIndex": 2,
							"rowIndex": 3
						});
						var output_24 = new cpr.controls.Output();
						output_24.value = "모조직";
						output_24.style.setClasses(["label"]);
						container.addChild(output_24, {
							"colIndex": 3,
							"rowIndex": 3
						});
						var inputBox_17 = new cpr.controls.InputBox("ipb14");
						inputBox_17.value = "";
						container.addChild(inputBox_17, {
							"colIndex": 4,
							"rowIndex": 3,
							"colSpan": 3,
							"rowSpan": 1
						});
						var output_25 = new cpr.controls.Output();
						output_25.value = "분할";
						output_25.style.setClasses(["label"]);
						container.addChild(output_25, {
							"colIndex": 0,
							"rowIndex": 4
						});
						var output_26 = new cpr.controls.Output();
						output_26.value = "분할년월";
						output_26.style.setClasses(["label"]);
						container.addChild(output_26, {
							"colIndex": 1,
							"rowIndex": 4
						});
						var inputBox_18 = new cpr.controls.InputBox("ipb29");
						inputBox_18.value = "";
						container.addChild(inputBox_18, {
							"colIndex": 2,
							"rowIndex": 4
						});
						var output_27 = new cpr.controls.Output();
						output_27.value = "자조직";
						output_27.style.setClasses(["label"]);
						container.addChild(output_27, {
							"colIndex": 3,
							"rowIndex": 4
						});
						var inputBox_19 = new cpr.controls.InputBox("ipb15");
						inputBox_19.value = "";
						container.addChild(inputBox_19, {
							"colIndex": 4,
							"rowIndex": 4,
							"colSpan": 3,
							"rowSpan": 1
						});
						var output_28 = new cpr.controls.Output();
						output_28.value = "흡수";
						output_28.style.setClasses(["label"]);
						container.addChild(output_28, {
							"colIndex": 0,
							"rowIndex": 5
						});
						var output_29 = new cpr.controls.Output();
						output_29.value = "흡수년월";
						output_29.style.setClasses(["label"]);
						container.addChild(output_29, {
							"colIndex": 1,
							"rowIndex": 5
						});
						var inputBox_20 = new cpr.controls.InputBox("ipb30");
						inputBox_20.value = "2021-10";
						container.addChild(inputBox_20, {
							"colIndex": 2,
							"rowIndex": 5
						});
						var output_30 = new cpr.controls.Output();
						output_30.value = "흡수조직";
						output_30.style.setClasses(["label"]);
						container.addChild(output_30, {
							"colIndex": 3,
							"rowIndex": 5
						});
						var inputBox_21 = new cpr.controls.InputBox("ipb16");
						inputBox_21.value = "";
						container.addChild(inputBox_21, {
							"colIndex": 4,
							"rowIndex": 5
						});
						var output_31 = new cpr.controls.Output();
						output_31.value = "발의부서";
						output_31.style.setClasses(["label"]);
						container.addChild(output_31, {
							"colIndex": 5,
							"rowIndex": 5
						});
						var inputBox_22 = new cpr.controls.InputBox("ipb17");
						inputBox_22.value = "노*지점(008001)";
						container.addChild(inputBox_22, {
							"colIndex": 6,
							"rowIndex": 5
						});
						var output_32 = new cpr.controls.Output();
						output_32.value = "폐쇄";
						output_32.style.setClasses(["label"]);
						container.addChild(output_32, {
							"colIndex": 0,
							"rowIndex": 6
						});
						var output_33 = new cpr.controls.Output();
						output_33.value = "폐쇄년월";
						output_33.style.setClasses(["label"]);
						container.addChild(output_33, {
							"colIndex": 1,
							"rowIndex": 6
						});
						var inputBox_23 = new cpr.controls.InputBox("ipb31");
						inputBox_23.value = "";
						container.addChild(inputBox_23, {
							"colIndex": 2,
							"rowIndex": 6
						});
						var output_34 = new cpr.controls.Output();
						output_34.value = "폐쇄조직";
						output_34.style.setClasses(["label"]);
						container.addChild(output_34, {
							"colIndex": 3,
							"rowIndex": 6
						});
						var inputBox_24 = new cpr.controls.InputBox("ipb18");
						inputBox_24.value = "장*지점(008001)";
						container.addChild(inputBox_24, {
							"colIndex": 4,
							"rowIndex": 6,
							"colSpan": 3,
							"rowSpan": 1
						});
						var output_35 = new cpr.controls.Output();
						output_35.value = "기타";
						output_35.style.setClasses(["label"]);
						container.addChild(output_35, {
							"colIndex": 0,
							"rowIndex": 7,
							"colSpan": 1,
							"rowSpan": 3
						});
						var output_36 = new cpr.controls.Output();
						output_36.value = "외곽구분";
						output_36.style.setClasses(["label"]);
						container.addChild(output_36, {
							"colIndex": 1,
							"rowIndex": 7
						});
						var inputBox_25 = new cpr.controls.InputBox("ipb32");
						inputBox_25.value = "N";
						container.addChild(inputBox_25, {
							"colIndex": 2,
							"rowIndex": 7
						});
						var output_37 = new cpr.controls.Output();
						output_37.value = "사업부문구분";
						output_37.style.setClasses(["label"]);
						container.addChild(output_37, {
							"colIndex": 3,
							"rowIndex": 7
						});
						var inputBox_26 = new cpr.controls.InputBox("ipb19");
						inputBox_26.value = "FP";
						container.addChild(inputBox_26, {
							"colIndex": 4,
							"rowIndex": 7
						});
						var output_38 = new cpr.controls.Output();
						output_38.value = "사업자등록번호";
						output_38.style.setClasses(["label"]);
						container.addChild(output_38, {
							"colIndex": 5,
							"rowIndex": 7
						});
						var inputBox_27 = new cpr.controls.InputBox("ipb20");
						inputBox_27.value = "";
						container.addChild(inputBox_27, {
							"colIndex": 6,
							"rowIndex": 7
						});
						var output_39 = new cpr.controls.Output();
						output_39.value = "대리점관계";
						output_39.style.setClasses(["label"]);
						container.addChild(output_39, {
							"colIndex": 1,
							"rowIndex": 8
						});
						var inputBox_28 = new cpr.controls.InputBox("ipb33");
						inputBox_28.value = "";
						container.addChild(inputBox_28, {
							"colIndex": 2,
							"rowIndex": 8
						});
						var output_40 = new cpr.controls.Output();
						output_40.value = "제휴BM";
						output_40.style.setClasses(["label"]);
						container.addChild(output_40, {
							"colIndex": 3,
							"rowIndex": 8
						});
						var group_15 = new cpr.controls.Container("grp5");
						group_15.style.setClasses(["form-inside"]);
						var formLayout_7 = new cpr.controls.layouts.FormLayout();
						formLayout_7.scrollable = false;
						formLayout_7.topMargin = "0px";
						formLayout_7.rightMargin = "0px";
						formLayout_7.bottomMargin = "0px";
						formLayout_7.leftMargin = "0px";
						formLayout_7.horizontalSpacing = "5px";
						formLayout_7.verticalSpacing = "0px";
						formLayout_7.setColumns(["1fr", "2fr"]);
						formLayout_7.setRows(["1fr"]);
						group_15.setLayout(formLayout_7);
						(function(container){
							var inputBox_29 = new cpr.controls.InputBox("ipb22");
							inputBox_29.value = "";
							container.addChild(inputBox_29, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var inputBox_30 = new cpr.controls.InputBox("ipb23");
							inputBox_30.value = "";
							container.addChild(inputBox_30, {
								"colIndex": 1,
								"rowIndex": 0
							});
						})(group_15);
						container.addChild(group_15, {
							"colIndex": 4,
							"rowIndex": 8
						});
						var output_41 = new cpr.controls.Output();
						output_41.value = "출장소명";
						output_41.style.setClasses(["label"]);
						container.addChild(output_41, {
							"colIndex": 5,
							"rowIndex": 8
						});
						var inputBox_31 = new cpr.controls.InputBox("ipb21");
						inputBox_31.value = "";
						container.addChild(inputBox_31, {
							"colIndex": 6,
							"rowIndex": 8
						});
						var output_42 = new cpr.controls.Output();
						output_42.value = "대리점등록번호";
						output_42.style.setClasses(["label"]);
						container.addChild(output_42, {
							"colIndex": 1,
							"rowIndex": 9
						});
						var inputBox_32 = new cpr.controls.InputBox("ipb34");
						inputBox_32.value = "";
						container.addChild(inputBox_32, {
							"colIndex": 2,
							"rowIndex": 9
						});
						var output_43 = new cpr.controls.Output();
						output_43.value = "관리BM";
						output_43.style.setClasses(["label"]);
						container.addChild(output_43, {
							"colIndex": 3,
							"rowIndex": 9
						});
						var group_16 = new cpr.controls.Container("grp6");
						group_16.style.setClasses(["form-inside"]);
						var formLayout_8 = new cpr.controls.layouts.FormLayout();
						formLayout_8.scrollable = false;
						formLayout_8.topMargin = "0px";
						formLayout_8.rightMargin = "0px";
						formLayout_8.bottomMargin = "0px";
						formLayout_8.leftMargin = "0px";
						formLayout_8.horizontalSpacing = "5px";
						formLayout_8.verticalSpacing = "0px";
						formLayout_8.setColumns(["1fr", "2fr"]);
						formLayout_8.setRows(["1fr"]);
						group_16.setLayout(formLayout_8);
						(function(container){
							var inputBox_33 = new cpr.controls.InputBox("ipb24");
							inputBox_33.value = "";
							container.addChild(inputBox_33, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var inputBox_34 = new cpr.controls.InputBox("ipb25");
							inputBox_34.value = "";
							container.addChild(inputBox_34, {
								"colIndex": 1,
								"rowIndex": 0
							});
						})(group_16);
						container.addChild(group_16, {
							"colIndex": 4,
							"rowIndex": 9,
							"colSpan": 3,
							"rowSpan": 1
						});
						var output_44 = new cpr.controls.Output();
						output_44.value = "주소정보";
						output_44.style.setClasses(["label"]);
						container.addChild(output_44, {
							"colIndex": 0,
							"rowIndex": 10,
							"colSpan": 1,
							"rowSpan": 2
						});
						var output_45 = new cpr.controls.Output();
						output_45.value = "전화번호";
						output_45.style.setClasses(["label"]);
						container.addChild(output_45, {
							"colIndex": 1,
							"rowIndex": 10
						});
						var group_17 = new cpr.controls.Container("grp8");
						group_17.style.setClasses(["form-inside"]);
						var formLayout_9 = new cpr.controls.layouts.FormLayout();
						formLayout_9.scrollable = false;
						formLayout_9.topMargin = "0px";
						formLayout_9.rightMargin = "0px";
						formLayout_9.bottomMargin = "0px";
						formLayout_9.leftMargin = "0px";
						formLayout_9.horizontalSpacing = "0px";
						formLayout_9.verticalSpacing = "0px";
						formLayout_9.setColumns(["60px", "10px", "60px", "10px", "60px"]);
						formLayout_9.setRows(["1fr"]);
						group_17.setLayout(formLayout_9);
						(function(container){
							var inputBox_35 = new cpr.controls.InputBox("ipb38");
							inputBox_35.value = "02";
							container.addChild(inputBox_35, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var output_46 = new cpr.controls.Output();
							output_46.value = "-";
							output_46.style.setClasses(["text-center"]);
							container.addChild(output_46, {
								"colIndex": 1,
								"rowIndex": 0
							});
							var inputBox_36 = new cpr.controls.InputBox("ipb39");
							inputBox_36.value = "992";
							container.addChild(inputBox_36, {
								"colIndex": 2,
								"rowIndex": 0
							});
							var output_47 = new cpr.controls.Output();
							output_47.value = "-";
							output_47.style.setClasses(["text-center"]);
							container.addChild(output_47, {
								"colIndex": 3,
								"rowIndex": 0
							});
							var inputBox_37 = new cpr.controls.InputBox("ipb40");
							inputBox_37.value = "****";
							container.addChild(inputBox_37, {
								"colIndex": 4,
								"rowIndex": 0
							});
						})(group_17);
						container.addChild(group_17, {
							"colIndex": 2,
							"rowIndex": 10
						});
						var output_48 = new cpr.controls.Output();
						output_48.value = "팩스번호";
						output_48.style.setClasses(["label"]);
						container.addChild(output_48, {
							"colIndex": 3,
							"rowIndex": 10
						});
						var group_18 = new cpr.controls.Container("grp7");
						group_18.style.setClasses(["form-inside"]);
						var formLayout_10 = new cpr.controls.layouts.FormLayout();
						formLayout_10.scrollable = false;
						formLayout_10.topMargin = "0px";
						formLayout_10.rightMargin = "0px";
						formLayout_10.bottomMargin = "0px";
						formLayout_10.leftMargin = "0px";
						formLayout_10.horizontalSpacing = "0px";
						formLayout_10.verticalSpacing = "0px";
						formLayout_10.setColumns(["60px", "10px", "60px", "10px", "60px"]);
						formLayout_10.setRows(["1fr"]);
						group_18.setLayout(formLayout_10);
						(function(container){
							var inputBox_38 = new cpr.controls.InputBox("ipb35");
							inputBox_38.value = "02";
							container.addChild(inputBox_38, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var output_49 = new cpr.controls.Output();
							output_49.value = "-";
							output_49.style.setClasses(["text-center"]);
							container.addChild(output_49, {
								"colIndex": 1,
								"rowIndex": 0
							});
							var inputBox_39 = new cpr.controls.InputBox("ipb36");
							inputBox_39.value = "992";
							container.addChild(inputBox_39, {
								"colIndex": 2,
								"rowIndex": 0
							});
							var output_50 = new cpr.controls.Output();
							output_50.value = "-";
							output_50.style.setClasses(["text-center"]);
							container.addChild(output_50, {
								"colIndex": 3,
								"rowIndex": 0
							});
							var inputBox_40 = new cpr.controls.InputBox("ipb37");
							inputBox_40.value = "****";
							container.addChild(inputBox_40, {
								"colIndex": 4,
								"rowIndex": 0
							});
						})(group_18);
						container.addChild(group_18, {
							"colIndex": 4,
							"rowIndex": 10,
							"colSpan": 3,
							"rowSpan": 1
						});
						var output_51 = new cpr.controls.Output();
						output_51.value = "우편번호";
						output_51.style.setClasses(["label"]);
						container.addChild(output_51, {
							"colIndex": 1,
							"rowIndex": 11
						});
						var group_19 = new cpr.controls.Container("grp9");
						group_19.style.setClasses(["form-inside"]);
						var formLayout_11 = new cpr.controls.layouts.FormLayout();
						formLayout_11.scrollable = false;
						formLayout_11.topMargin = "0px";
						formLayout_11.rightMargin = "0px";
						formLayout_11.bottomMargin = "0px";
						formLayout_11.leftMargin = "0px";
						formLayout_11.horizontalSpacing = "5px";
						formLayout_11.verticalSpacing = "0px";
						formLayout_11.setColumns(["1fr", "6fr", "63px"]);
						formLayout_11.setColumnAutoSizing(2, true);
						formLayout_11.setRows(["1fr"]);
						group_19.setLayout(formLayout_11);
						(function(container){
							var group_20 = new cpr.controls.Container("grp10");
							group_20.style.setClasses(["form-inside"]);
							var formLayout_12 = new cpr.controls.layouts.FormLayout();
							formLayout_12.scrollable = false;
							formLayout_12.topMargin = "0px";
							formLayout_12.rightMargin = "0px";
							formLayout_12.bottomMargin = "0px";
							formLayout_12.leftMargin = "0px";
							formLayout_12.horizontalSpacing = "0px";
							formLayout_12.verticalSpacing = "0px";
							formLayout_12.setColumns(["1fr", "10px", "1fr"]);
							formLayout_12.setRows(["1fr"]);
							group_20.setLayout(formLayout_12);
							(function(container){
								var inputBox_41 = new cpr.controls.InputBox("ipb41");
								inputBox_41.value = "142";
								container.addChild(inputBox_41, {
									"colIndex": 0,
									"rowIndex": 0
								});
								var output_52 = new cpr.controls.Output();
								output_52.value = "-";
								output_52.style.setClasses(["text-center"]);
								container.addChild(output_52, {
									"colIndex": 1,
									"rowIndex": 0
								});
								var inputBox_42 = new cpr.controls.InputBox("ipb42");
								inputBox_42.value = "***";
								container.addChild(inputBox_42, {
									"colIndex": 2,
									"rowIndex": 0
								});
							})(group_20);
							container.addChild(group_20, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var inputBox_43 = new cpr.controls.InputBox("ipb43");
							inputBox_43.value = "서울 **로 **빌딩";
							container.addChild(inputBox_43, {
								"colIndex": 1,
								"rowIndex": 0
							});
							var button_5 = new cpr.controls.Button("btn1");
							button_5.value = "주소관리";
							button_5.style.setClasses(["btn-primary04"]);
							container.addChild(button_5, {
								"colIndex": 2,
								"rowIndex": 0
							});
						})(group_19);
						container.addChild(group_19, {
							"colIndex": 2,
							"rowIndex": 11,
							"colSpan": 5,
							"rowSpan": 1,
							"width": 557,
							"height": 25
						});
					})(group_13);
					container.addChild(group_13, {
						"autoSize": "height",
						"width": "1617px",
						"height": "374px"
					});
				})(group_11);
				container.addChild(group_11, {
					"autoSize": "height",
					"width": "1617px",
					"height": "404px"
				});
			})(group_3);
			container.addChild(group_3, {
				"autoSize": "height",
				"width": "1617px",
				"height": "552px"
			});
		}
	});
	app.title = "기본사항조회";
	cpr.core.Platform.INSTANCE.register(app);
})();
