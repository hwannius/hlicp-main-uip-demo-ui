/*
 * App URI: pb/guide/Stepper
 * Source Location: pb/guide/Stepper.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("pb/guide/Stepper", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * Stepper.js
			 * Created at 2022. 11. 4. 오전 9:02:36.
			 *
			 * @author ryu
			 ************************************************/;
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 3160px)", "Hlicp-WIDE");
			app.supportMedia("all and (min-width: 1600px) and (max-width: 3159px)", "Hlicp-FULL");
			app.supportMedia("all and (min-width: 790px) and (max-width: 1599px)", "Hlicp-DIV");
			app.supportMedia("all and (max-width: 789px)", "Hlicp-POP");
			
			// Configure root container
			var container = app.getContainer();
			container.style.setClasses(["pb-body"]);
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_1.spacing = 14;
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			group_1.style.setClasses(["pb-content"]);
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.scrollable = false;
			verticalLayout_2.spacing = 20;
			verticalLayout_2.leftMargin = 50;
			verticalLayout_2.rightMargin = 50;
			verticalLayout_2.topMargin = 0;
			verticalLayout_2.bottomMargin = 20;
			group_1.setLayout(verticalLayout_2);
			(function(container){
				var userDefinedControl_1 = new udc.hk.pb.Breadcrumbs();
				container.addChild(userDefinedControl_1, {
					"autoSize": "height",
					"width": "1544px",
					"height": "174px"
				});
				var output_1 = new cpr.controls.Output();
				output_1.value = "\u203b 기타 지시문 작성";
				output_1.style.setClasses(["text-red"]);
				container.addChild(output_1, {
					"autoSize": "height",
					"width": "100px",
					"height": "20px",
					"minHeight": 20
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "1644px",
				"height": "242px"
			});
			
			var group_2 = new cpr.controls.Container();
			group_2.style.setClasses(["pb-content"]);
			var verticalLayout_3 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_3.scrollable = false;
			verticalLayout_3.spacing = 40;
			verticalLayout_3.leftMargin = 50;
			verticalLayout_3.rightMargin = 50;
			verticalLayout_3.topMargin = 50;
			verticalLayout_3.bottomMargin = 50;
			group_2.setLayout(verticalLayout_3);
			(function(container){
				var group_3 = new cpr.controls.Container();
				group_3.clipContent = false;
				var verticalLayout_4 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_4.scrollable = false;
				verticalLayout_4.spacing = 14;
				group_3.setLayout(verticalLayout_4);
				(function(container){
					var userDefinedControl_2 = new udc.hk.pb.SectionTitle();
					userDefinedControl_2.title = "스테퍼";
					container.addChild(userDefinedControl_2, {
						"width": "1544px",
						"height": "29px"
					});
					var group_4 = new cpr.controls.Container();
					group_4.clipContent = false;
					var flowLayout_1 = new cpr.controls.layouts.FlowLayout();
					flowLayout_1.scrollable = false;
					flowLayout_1.horizontalSpacing = 30;
					flowLayout_1.verticalSpacing = 10;
					group_4.setLayout(flowLayout_1);
					(function(container){
						var group_5 = new cpr.controls.Container();
						group_5.clipContent = false;
						group_5.style.setClasses(["stepper"]);
						var formLayout_1 = new cpr.controls.layouts.FormLayout();
						formLayout_1.scrollable = false;
						formLayout_1.topMargin = "0px";
						formLayout_1.rightMargin = "0px";
						formLayout_1.bottomMargin = "0px";
						formLayout_1.leftMargin = "0px";
						formLayout_1.horizontalSpacing = "0px";
						formLayout_1.verticalSpacing = "0px";
						formLayout_1.setColumns(["1fr"]);
						formLayout_1.setRows(["1fr", "1fr", "1fr", "1fr", "1fr"]);
						formLayout_1.setRowMinHeight(0, 152);
						formLayout_1.setRowMinHeight(1, 152);
						formLayout_1.setRowMinHeight(2, 152);
						formLayout_1.setRowMinHeight(3, 152);
						formLayout_1.setRowMinHeight(4, 152);
						group_5.setLayout(formLayout_1);
						(function(container){
							var group_6 = new cpr.controls.Container();
							group_6.clipContent = false;
							group_6.style.setClasses(["stepper-item", "on"]);
							var formLayout_2 = new cpr.controls.layouts.FormLayout();
							formLayout_2.scrollable = false;
							formLayout_2.topMargin = "1fr";
							formLayout_2.rightMargin = "15px";
							formLayout_2.bottomMargin = "1fr";
							formLayout_2.leftMargin = "15px";
							formLayout_2.horizontalSpacing = "0px";
							formLayout_2.verticalSpacing = "10px";
							formLayout_2.setColumns(["1fr"]);
							formLayout_2.setRows(["34px", "21px"]);
							formLayout_2.setRowAutoSizing(1, true);
							group_6.setLayout(formLayout_2);
							(function(container){
								var output_2 = new cpr.controls.Output();
								output_2.value = "01";
								output_2.style.setClasses(["step-order"]);
								container.addChild(output_2, {
									"colIndex": 0,
									"rowIndex": 0,
									"horizontalAlign": "center",
									"width": 34
								});
								var group_7 = new cpr.controls.Container();
								var verticalLayout_5 = new cpr.controls.layouts.VerticalLayout();
								verticalLayout_5.scrollable = false;
								verticalLayout_5.spacing = 4;
								group_7.setLayout(verticalLayout_5);
								(function(container){
									var output_3 = new cpr.controls.Output();
									output_3.value = "고객정보";
									output_3.style.setClasses(["tit"]);
									container.addChild(output_3, {
										"autoSize": "height",
										"width": "90px",
										"height": "21px"
									});
									var output_4 = new cpr.controls.Output();
									output_4.value = "(진행중)";
									output_4.style.setClasses(["text-white"]);
									container.addChild(output_4, {
										"autoSize": "height",
										"width": "90px",
										"height": "14px"
									});
								})(group_7);
								container.addChild(group_7, {
									"colIndex": 0,
									"rowIndex": 1
								});
							})(group_6);
							container.addChild(group_6, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var group_8 = new cpr.controls.Container();
							group_8.clipContent = false;
							group_8.style.setClasses(["stepper-item"]);
							var formLayout_3 = new cpr.controls.layouts.FormLayout();
							formLayout_3.scrollable = false;
							formLayout_3.topMargin = "1fr";
							formLayout_3.rightMargin = "15px";
							formLayout_3.bottomMargin = "1fr";
							formLayout_3.leftMargin = "15px";
							formLayout_3.horizontalSpacing = "0px";
							formLayout_3.verticalSpacing = "10px";
							formLayout_3.setColumns(["1fr"]);
							formLayout_3.setRows(["34px", "21px"]);
							formLayout_3.setRowAutoSizing(1, true);
							group_8.setLayout(formLayout_3);
							(function(container){
								var output_5 = new cpr.controls.Output();
								output_5.value = "02";
								output_5.style.setClasses(["step-order"]);
								container.addChild(output_5, {
									"colIndex": 0,
									"rowIndex": 0,
									"horizontalAlign": "center",
									"width": 34
								});
								var group_9 = new cpr.controls.Container();
								var verticalLayout_6 = new cpr.controls.layouts.VerticalLayout();
								verticalLayout_6.scrollable = false;
								verticalLayout_6.spacing = 4;
								group_9.setLayout(verticalLayout_6);
								(function(container){
									var output_6 = new cpr.controls.Output();
									output_6.value = "가입설계";
									output_6.style.setClasses(["tit"]);
									container.addChild(output_6, {
										"autoSize": "height",
										"width": "90px",
										"height": "21px"
									});
									var output_7 = new cpr.controls.Output();
									output_7.visible = false;
									output_7.value = "(진행중)";
									output_7.style.setClasses(["text-white"]);
									container.addChild(output_7, {
										"autoSize": "height",
										"width": "90px",
										"height": "14px"
									});
								})(group_9);
								container.addChild(group_9, {
									"colIndex": 0,
									"rowIndex": 1
								});
							})(group_8);
							container.addChild(group_8, {
								"colIndex": 0,
								"rowIndex": 1
							});
							var group_10 = new cpr.controls.Container();
							group_10.clipContent = false;
							group_10.style.setClasses(["stepper-item"]);
							var formLayout_4 = new cpr.controls.layouts.FormLayout();
							formLayout_4.scrollable = false;
							formLayout_4.topMargin = "1fr";
							formLayout_4.rightMargin = "15px";
							formLayout_4.bottomMargin = "1fr";
							formLayout_4.leftMargin = "15px";
							formLayout_4.horizontalSpacing = "0px";
							formLayout_4.verticalSpacing = "10px";
							formLayout_4.setColumns(["1fr"]);
							formLayout_4.setRows(["34px", "21px"]);
							formLayout_4.setRowAutoSizing(1, true);
							group_10.setLayout(formLayout_4);
							(function(container){
								var output_8 = new cpr.controls.Output();
								output_8.value = "03";
								output_8.style.setClasses(["step-order"]);
								container.addChild(output_8, {
									"colIndex": 0,
									"rowIndex": 0,
									"horizontalAlign": "center",
									"width": 34
								});
								var group_11 = new cpr.controls.Container();
								var verticalLayout_7 = new cpr.controls.layouts.VerticalLayout();
								verticalLayout_7.scrollable = false;
								verticalLayout_7.spacing = 4;
								group_11.setLayout(verticalLayout_7);
								(function(container){
									var output_9 = new cpr.controls.Output();
									output_9.value = "알릴의무";
									output_9.style.setClasses(["tit"]);
									container.addChild(output_9, {
										"autoSize": "height",
										"width": "90px",
										"height": "21px"
									});
									var output_10 = new cpr.controls.Output();
									output_10.visible = false;
									output_10.value = "(진행중)";
									output_10.style.setClasses(["text-white"]);
									container.addChild(output_10, {
										"autoSize": "height",
										"width": "90px",
										"height": "14px"
									});
								})(group_11);
								container.addChild(group_11, {
									"colIndex": 0,
									"rowIndex": 1
								});
							})(group_10);
							container.addChild(group_10, {
								"colIndex": 0,
								"rowIndex": 2
							});
							var group_12 = new cpr.controls.Container();
							group_12.clipContent = false;
							group_12.style.setClasses(["stepper-item"]);
							var formLayout_5 = new cpr.controls.layouts.FormLayout();
							formLayout_5.scrollable = false;
							formLayout_5.topMargin = "1fr";
							formLayout_5.rightMargin = "15px";
							formLayout_5.bottomMargin = "1fr";
							formLayout_5.leftMargin = "15px";
							formLayout_5.horizontalSpacing = "0px";
							formLayout_5.verticalSpacing = "10px";
							formLayout_5.setColumns(["1fr"]);
							formLayout_5.setRows(["34px", "21px"]);
							formLayout_5.setRowAutoSizing(1, true);
							group_12.setLayout(formLayout_5);
							(function(container){
								var output_11 = new cpr.controls.Output();
								output_11.value = "04";
								output_11.style.setClasses(["step-order"]);
								container.addChild(output_11, {
									"colIndex": 0,
									"rowIndex": 0,
									"horizontalAlign": "center",
									"width": 34
								});
								var group_13 = new cpr.controls.Container();
								var verticalLayout_8 = new cpr.controls.layouts.VerticalLayout();
								verticalLayout_8.scrollable = false;
								verticalLayout_8.spacing = 4;
								group_13.setLayout(verticalLayout_8);
								(function(container){
									var output_12 = new cpr.controls.Output();
									output_12.value = "심사요청";
									output_12.style.setClasses(["tit"]);
									container.addChild(output_12, {
										"autoSize": "height",
										"width": "90px",
										"height": "21px"
									});
									var output_13 = new cpr.controls.Output();
									output_13.visible = false;
									output_13.value = "(진행중)";
									output_13.style.setClasses(["text-white"]);
									container.addChild(output_13, {
										"autoSize": "height",
										"width": "90px",
										"height": "14px"
									});
								})(group_13);
								container.addChild(group_13, {
									"colIndex": 0,
									"rowIndex": 1
								});
							})(group_12);
							container.addChild(group_12, {
								"colIndex": 0,
								"rowIndex": 3
							});
							var group_14 = new cpr.controls.Container();
							group_14.clipContent = false;
							group_14.style.setClasses(["stepper-item"]);
							var formLayout_6 = new cpr.controls.layouts.FormLayout();
							formLayout_6.scrollable = false;
							formLayout_6.topMargin = "1fr";
							formLayout_6.rightMargin = "15px";
							formLayout_6.bottomMargin = "1fr";
							formLayout_6.leftMargin = "15px";
							formLayout_6.horizontalSpacing = "0px";
							formLayout_6.verticalSpacing = "10px";
							formLayout_6.setColumns(["1fr"]);
							formLayout_6.setRows(["34px", "21px"]);
							formLayout_6.setRowAutoSizing(1, true);
							group_14.setLayout(formLayout_6);
							(function(container){
								var output_14 = new cpr.controls.Output();
								output_14.value = "05";
								output_14.style.setClasses(["step-order"]);
								container.addChild(output_14, {
									"colIndex": 0,
									"rowIndex": 0,
									"horizontalAlign": "center",
									"width": 34
								});
								var group_15 = new cpr.controls.Container();
								var verticalLayout_9 = new cpr.controls.layouts.VerticalLayout();
								verticalLayout_9.scrollable = false;
								verticalLayout_9.spacing = 4;
								group_15.setLayout(verticalLayout_9);
								(function(container){
									var output_15 = new cpr.controls.Output();
									output_15.value = "수납";
									output_15.style.setClasses(["tit"]);
									container.addChild(output_15, {
										"autoSize": "height",
										"width": "90px",
										"height": "21px"
									});
									var output_16 = new cpr.controls.Output();
									output_16.visible = false;
									output_16.value = "(진행중)";
									output_16.style.setClasses(["text-white"]);
									container.addChild(output_16, {
										"autoSize": "height",
										"width": "90px",
										"height": "14px"
									});
								})(group_15);
								container.addChild(group_15, {
									"colIndex": 0,
									"rowIndex": 1
								});
							})(group_14);
							container.addChild(group_14, {
								"colIndex": 0,
								"rowIndex": 4
							});
						})(group_5);
						container.addChild(group_5, {
							"width": "120px",
							"height": "756px"
						});
					})(group_4);
					container.addChild(group_4, {
						"autoSize": "height",
						"width": "400px",
						"height": "817px"
					});
				})(group_3);
				container.addChild(group_3, {
					"autoSize": "height",
					"width": "1544px",
					"height": "860px"
				});
				var group_16 = new cpr.controls.Container();
				var verticalLayout_10 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_10.scrollable = false;
				verticalLayout_10.spacing = 14;
				group_16.setLayout(verticalLayout_10);
				(function(container){
					var userDefinedControl_3 = new udc.hk.pb.SectionTitle();
					userDefinedControl_3.title = "기본속성";
					userDefinedControl_3.subText = "● = 사용 / ○ = 미사용 / △ = 상황에 따라 사용 / ★ = 필수로 작성";
					userDefinedControl_3.subTextStyle = "text-red";
					container.addChild(userDefinedControl_3, {
						"autoSize": "none",
						"width": "1544px",
						"height": "29px"
					});
					var group_17 = new cpr.controls.Container();
					group_17.style.setClasses(["pb-table"]);
					var formLayout_7 = new cpr.controls.layouts.FormLayout();
					formLayout_7.scrollable = false;
					formLayout_7.topMargin = "4px";
					formLayout_7.rightMargin = "4px";
					formLayout_7.bottomMargin = "4px";
					formLayout_7.leftMargin = "4px";
					formLayout_7.horizontalSpacing = "8px";
					formLayout_7.verticalSpacing = "8px";
					formLayout_7.horizontalSeparatorWidth = 1;
					formLayout_7.verticalSeparatorWidth = 1;
					formLayout_7.setColumns(["150px", "60px", "220px", "1fr"]);
					formLayout_7.setUseColumnShade(0, true);
					formLayout_7.setRows(["28px", "26px", "26px", "26px"]);
					formLayout_7.setUseRowShade(0, true);
					formLayout_7.setRowAutoSizing(1, true);
					formLayout_7.setRowAutoSizing(2, true);
					formLayout_7.setRowAutoSizing(3, true);
					group_17.setLayout(formLayout_7);
					(function(container){
						var output_17 = new cpr.controls.Output();
						output_17.value = "속성명";
						output_17.style.setClasses(["pb-label"]);
						container.addChild(output_17, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_18 = new cpr.controls.Output();
						output_18.value = "사용여부";
						output_18.style.setClasses(["pb-label"]);
						container.addChild(output_18, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_19 = new cpr.controls.Output();
						output_19.value = "적용값";
						output_19.style.setClasses(["pb-label"]);
						container.addChild(output_19, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var output_20 = new cpr.controls.Output();
						output_20.value = "내용";
						output_20.style.setClasses(["pb-label"]);
						container.addChild(output_20, {
							"colIndex": 3,
							"rowIndex": 0
						});
						var output_21 = new cpr.controls.Output();
						output_21.value = "clipContent";
						output_21.unselectable = false;
						output_21.style.setClasses(["pb-label"]);
						container.addChild(output_21, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var output_22 = new cpr.controls.Output();
						output_22.value = "●";
						output_22.style.setClasses(["text-center"]);
						container.addChild(output_22, {
							"colIndex": 1,
							"rowIndex": 1
						});
						var output_23 = new cpr.controls.Output();
						output_23.value = "false";
						output_23.style.setClasses(["text-center"]);
						container.addChild(output_23, {
							"colIndex": 2,
							"rowIndex": 1
						});
						var output_24 = new cpr.controls.Output();
						output_24.value = "자식 컨트롤 클립핑을 적용하지 않도록 값을 설정. stepper를 기준으로 상위/하위 그룹 모두 해당 속성이 false 처리되어야 함.";
						container.addChild(output_24, {
							"colIndex": 3,
							"rowIndex": 1
						});
						var output_25 = new cpr.controls.Output();
						output_25.value = "fieldLabel";
						output_25.unselectable = false;
						output_25.style.setClasses(["pb-label"]);
						container.addChild(output_25, {
							"colIndex": 0,
							"rowIndex": 2
						});
						var output_26 = new cpr.controls.Output();
						output_26.value = "★";
						output_26.style.setClasses(["text-center"]);
						container.addChild(output_26, {
							"colIndex": 1,
							"rowIndex": 2
						});
						var output_27 = new cpr.controls.Output();
						output_27.value = "(논리적 레이블 값)";
						output_27.style.setClasses(["text-center"]);
						container.addChild(output_27, {
							"colIndex": 2,
							"rowIndex": 2
						});
						var output_28 = new cpr.controls.Output();
						output_28.value = "폼인 경우 1:1로 대응하는 레이블(라벨)의 값을 입력하거나 컨트롤에서 입력되는 값의 논리적인 레이블(라벨)의 값을 입력";
						container.addChild(output_28, {
							"colIndex": 3,
							"rowIndex": 2
						});
						var output_29 = new cpr.controls.Output();
						output_29.value = "tooltip";
						output_29.unselectable = false;
						output_29.style.setClasses(["pb-label"]);
						container.addChild(output_29, {
							"colIndex": 0,
							"rowIndex": 3
						});
						var output_30 = new cpr.controls.Output();
						output_30.value = "△";
						output_30.style.setClasses(["text-center"]);
						container.addChild(output_30, {
							"colIndex": 1,
							"rowIndex": 3
						});
						var output_31 = new cpr.controls.Output();
						output_31.value = "(컨트롤의 힌트)";
						output_31.style.setClasses(["text-center"]);
						container.addChild(output_31, {
							"colIndex": 2,
							"rowIndex": 3
						});
						var output_32 = new cpr.controls.Output();
						output_32.value = "마우스 오버 시 인풋박스에 대한 힌트 제공 필요할 때 사용. 해당 속성을 작성하면 title 속성으로 적용됨";
						container.addChild(output_32, {
							"colIndex": 3,
							"rowIndex": 3
						});
					})(group_17);
					container.addChild(group_17, {
						"autoSize": "height",
						"width": "400px",
						"height": "140px"
					});
				})(group_16);
				container.addChild(group_16, {
					"autoSize": "height",
					"width": "1544px",
					"height": "183px"
				});
				var group_18 = new cpr.controls.Container();
				var verticalLayout_11 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_11.scrollable = false;
				verticalLayout_11.spacing = 14;
				group_18.setLayout(verticalLayout_11);
				(function(container){
					var userDefinedControl_4 = new udc.hk.pb.SectionTitle();
					userDefinedControl_4.title = "기본속성 - 레이아웃";
					userDefinedControl_4.subText = "● = 사용 / ○ = 미사용 / △ = 상황에 따라 사용 / ★ = 필수로 작성";
					userDefinedControl_4.subTextStyle = "text-red";
					container.addChild(userDefinedControl_4, {
						"autoSize": "none",
						"width": "1544px",
						"height": "29px"
					});
					var group_19 = new cpr.controls.Container();
					group_19.style.setClasses(["pb-table"]);
					var formLayout_8 = new cpr.controls.layouts.FormLayout();
					formLayout_8.scrollable = false;
					formLayout_8.topMargin = "4px";
					formLayout_8.rightMargin = "4px";
					formLayout_8.bottomMargin = "4px";
					formLayout_8.leftMargin = "4px";
					formLayout_8.horizontalSpacing = "8px";
					formLayout_8.verticalSpacing = "8px";
					formLayout_8.horizontalSeparatorWidth = 1;
					formLayout_8.verticalSeparatorWidth = 1;
					formLayout_8.setColumns(["150px", "60px", "220px", "1fr"]);
					formLayout_8.setUseColumnShade(0, true);
					formLayout_8.setRows(["28px", "26px"]);
					formLayout_8.setUseRowShade(0, true);
					formLayout_8.setRowAutoSizing(1, true);
					group_19.setLayout(formLayout_8);
					(function(container){
						var output_33 = new cpr.controls.Output();
						output_33.value = "속성명";
						output_33.style.setClasses(["pb-label"]);
						container.addChild(output_33, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_34 = new cpr.controls.Output();
						output_34.value = "사용여부";
						output_34.style.setClasses(["pb-label"]);
						container.addChild(output_34, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_35 = new cpr.controls.Output();
						output_35.value = "적용값";
						output_35.style.setClasses(["pb-label"]);
						container.addChild(output_35, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var output_36 = new cpr.controls.Output();
						output_36.value = "내용";
						output_36.style.setClasses(["pb-label"]);
						container.addChild(output_36, {
							"colIndex": 3,
							"rowIndex": 0
						});
						var output_37 = new cpr.controls.Output();
						output_37.value = "scrollable";
						output_37.unselectable = false;
						output_37.style.setClasses(["pb-label"]);
						container.addChild(output_37, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var output_38 = new cpr.controls.Output();
						output_38.value = "○";
						output_38.style.setClasses(["text-center"]);
						container.addChild(output_38, {
							"colIndex": 1,
							"rowIndex": 1
						});
						var output_39 = new cpr.controls.Output();
						output_39.value = "false";
						output_39.style.setClasses(["text-center"]);
						container.addChild(output_39, {
							"colIndex": 2,
							"rowIndex": 1
						});
						var output_40 = new cpr.controls.Output();
						output_40.value = "자식 컨트롤 클립핑을 적용하지 않도록 스크롤이 발생하지 않도록 함. stepper를 기준으로 상위/하위 그룹 모두 해당 속성이 false 처리되어야 함.";
						container.addChild(output_40, {
							"colIndex": 3,
							"rowIndex": 1
						});
					})(group_19);
					container.addChild(group_19, {
						"autoSize": "height",
						"width": "400px",
						"height": "72px"
					});
				})(group_18);
				container.addChild(group_18, {
					"autoSize": "height",
					"width": "1500px",
					"height": "183px"
				});
			})(group_2);
			container.addChild(group_2, {
				"autoSize": "height",
				"width": "1644px",
				"height": "1534px"
			});
		}
	});
	app.title = "[디자인가이드] 스테퍼";
	cpr.core.Platform.INSTANCE.register(app);
})();
