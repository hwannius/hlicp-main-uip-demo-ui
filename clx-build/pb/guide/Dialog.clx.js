/*
 * App URI: pb/guide/Dialog
 * Source Location: pb/guide/Dialog.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("pb/guide/Dialog", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * Dialog.js
			 * Created at 2022. 9. 28. 오후 2:14:39.
			 *
			 * @author ryu
			 ************************************************/

			/*
			 * "일반" 버튼(btnPop)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnPopClick(e){
				app.getRootAppInstance().openDialog("pb/guide/Dialog_A", {width: 800, height: 580}, function(dialog) {
				});
			};
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1644px)", "default");
			app.supportMedia("all and (max-width: 1643px)", "tablet");
			
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
				var verticalLayout_4 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_4.scrollable = false;
				verticalLayout_4.spacing = 14;
				group_3.setLayout(verticalLayout_4);
				(function(container){
					var userDefinedControl_2 = new udc.hk.pb.SectionTitle();
					userDefinedControl_2.title = "다이얼로그";
					userDefinedControl_2.subText = "다이얼로그(팝업)을 띄우는 버튼의 타입은 \"link\"로 설정해야 합니다.";
					userDefinedControl_2.subTextStyle = "text-blue";
					container.addChild(userDefinedControl_2, {
						"width": "1544px",
						"height": "29px"
					});
					var group_4 = new cpr.controls.Container();
					var flowLayout_1 = new cpr.controls.layouts.FlowLayout();
					flowLayout_1.scrollable = false;
					flowLayout_1.horizontalSpacing = 10;
					flowLayout_1.verticalSpacing = 10;
					group_4.setLayout(flowLayout_1);
					(function(container){
						var button_1 = new cpr.controls.Button("btnPop");
						button_1.value = "일반";
						button_1.ariaButtonType = "link";
						if(typeof onBtnPopClick == "function") {
							button_1.addEventListener("click", onBtnPopClick);
						}
						container.addChild(button_1, {
							"width": "46px",
							"height": "26px"
						});
					})(group_4);
					container.addChild(group_4, {
						"autoSize": "height",
						"width": "1544px",
						"height": "33px"
					});
				})(group_3);
				container.addChild(group_3, {
					"autoSize": "height",
					"width": "1544px",
					"height": "76px"
				});
				var group_5 = new cpr.controls.Container();
				var verticalLayout_5 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_5.scrollable = false;
				verticalLayout_5.spacing = 14;
				group_5.setLayout(verticalLayout_5);
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
					var group_6 = new cpr.controls.Container();
					group_6.style.setClasses(["pb-table"]);
					var formLayout_1 = new cpr.controls.layouts.FormLayout();
					formLayout_1.scrollable = false;
					formLayout_1.topMargin = "4px";
					formLayout_1.rightMargin = "4px";
					formLayout_1.bottomMargin = "4px";
					formLayout_1.leftMargin = "4px";
					formLayout_1.horizontalSpacing = "8px";
					formLayout_1.verticalSpacing = "8px";
					formLayout_1.horizontalSeparatorWidth = 1;
					formLayout_1.verticalSeparatorWidth = 1;
					formLayout_1.setColumns(["150px", "60px", "220px", "1fr"]);
					formLayout_1.setUseColumnShade(0, true);
					formLayout_1.setRows(["28px", "28px", "28px", "28px", "28px", "28px", "28px", "28px", "28px", "28px"]);
					formLayout_1.setUseRowShade(0, true);
					formLayout_1.setRowAutoSizing(1, true);
					formLayout_1.setRowAutoSizing(2, true);
					formLayout_1.setRowAutoSizing(3, true);
					formLayout_1.setRowAutoSizing(4, true);
					formLayout_1.setRowAutoSizing(5, true);
					formLayout_1.setRowAutoSizing(6, true);
					formLayout_1.setRowAutoSizing(7, true);
					formLayout_1.setRowAutoSizing(8, true);
					formLayout_1.setRowAutoSizing(9, true);
					group_6.setLayout(formLayout_1);
					(function(container){
						var output_2 = new cpr.controls.Output();
						output_2.value = "속성명";
						output_2.style.setClasses(["pb-label"]);
						container.addChild(output_2, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_3 = new cpr.controls.Output();
						output_3.value = "사용여부";
						output_3.style.setClasses(["pb-label"]);
						container.addChild(output_3, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_4 = new cpr.controls.Output();
						output_4.value = "적용값";
						output_4.style.setClasses(["pb-label"]);
						container.addChild(output_4, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var output_5 = new cpr.controls.Output();
						output_5.value = "내용";
						output_5.style.setClasses(["pb-label"]);
						container.addChild(output_5, {
							"colIndex": 3,
							"rowIndex": 0
						});
						var output_6 = new cpr.controls.Output();
						output_6.value = "fieldLabel";
						output_6.style.setClasses(["pb-label"]);
						container.addChild(output_6, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var output_7 = new cpr.controls.Output();
						output_7.value = "★";
						output_7.style.setClasses(["text-center"]);
						container.addChild(output_7, {
							"colIndex": 1,
							"rowIndex": 1
						});
						var output_8 = new cpr.controls.Output();
						output_8.value = "(논리적 레이블 값)";
						output_8.style.setClasses(["text-center"]);
						container.addChild(output_8, {
							"colIndex": 2,
							"rowIndex": 1
						});
						var output_9 = new cpr.controls.Output();
						output_9.value = "다이얼로그의 제목을 논리적 레이블로 제공";
						container.addChild(output_9, {
							"colIndex": 3,
							"rowIndex": 1
						});
						var output_10 = new cpr.controls.Output();
						output_10.value = "headerClose";
						output_10.style.setClasses(["pb-label"]);
						container.addChild(output_10, {
							"colIndex": 0,
							"rowIndex": 2
						});
						var output_11 = new cpr.controls.Output();
						output_11.value = "●";
						output_11.style.setClasses(["text-center"]);
						container.addChild(output_11, {
							"colIndex": 1,
							"rowIndex": 2
						});
						var output_12 = new cpr.controls.Output();
						output_12.value = "true";
						output_12.style.setClasses(["text-center"]);
						container.addChild(output_12, {
							"colIndex": 2,
							"rowIndex": 2
						});
						var output_13 = new cpr.controls.Output();
						output_13.value = "다이얼로그를 닫을 수 있는 버튼 항상 표시";
						container.addChild(output_13, {
							"colIndex": 3,
							"rowIndex": 2
						});
						var output_14 = new cpr.controls.Output();
						output_14.value = "headerMax";
						output_14.style.setClasses(["pb-label"]);
						container.addChild(output_14, {
							"colIndex": 0,
							"rowIndex": 3
						});
						var output_15 = new cpr.controls.Output();
						output_15.value = "○";
						output_15.style.setClasses(["text-center"]);
						container.addChild(output_15, {
							"colIndex": 1,
							"rowIndex": 3
						});
						var output_16 = new cpr.controls.Output();
						output_16.value = "false";
						output_16.style.setClasses(["text-center"]);
						container.addChild(output_16, {
							"colIndex": 2,
							"rowIndex": 3
						});
						var output_17 = new cpr.controls.Output();
						output_17.value = "다이얼로그 최대화 기능을 사용하는 경우 사용";
						container.addChild(output_17, {
							"colIndex": 3,
							"rowIndex": 3
						});
						var output_18 = new cpr.controls.Output();
						output_18.value = "headerMin";
						output_18.style.setClasses(["pb-label"]);
						container.addChild(output_18, {
							"colIndex": 0,
							"rowIndex": 4
						});
						var output_19 = new cpr.controls.Output();
						output_19.value = "○";
						output_19.style.setClasses(["text-center"]);
						container.addChild(output_19, {
							"colIndex": 1,
							"rowIndex": 4
						});
						var output_20 = new cpr.controls.Output();
						output_20.value = "false";
						output_20.style.setClasses(["text-center"]);
						container.addChild(output_20, {
							"colIndex": 2,
							"rowIndex": 4
						});
						var output_21 = new cpr.controls.Output();
						output_21.value = "다이얼로그 최소화 기능을 사용하는 경우 사용. 단, 최소화에 따른 다이얼로그 표시는 제공하지 않음";
						container.addChild(output_21, {
							"colIndex": 3,
							"rowIndex": 4
						});
						var output_22 = new cpr.controls.Output();
						output_22.value = "headerMovable";
						output_22.style.setClasses(["pb-label"]);
						container.addChild(output_22, {
							"colIndex": 0,
							"rowIndex": 5
						});
						var output_23 = new cpr.controls.Output();
						output_23.value = "●";
						output_23.style.setClasses(["text-center"]);
						container.addChild(output_23, {
							"colIndex": 1,
							"rowIndex": 5
						});
						var output_24 = new cpr.controls.Output();
						output_24.value = "true";
						output_24.style.setClasses(["text-center"]);
						container.addChild(output_24, {
							"colIndex": 2,
							"rowIndex": 5
						});
						var output_25 = new cpr.controls.Output();
						output_25.value = "다이얼로그 헤더를 통해 다이얼로그의 위치를 이동할 수 있도록 속성 설정";
						container.addChild(output_25, {
							"colIndex": 3,
							"rowIndex": 5
						});
						var output_26 = new cpr.controls.Output();
						output_26.value = "headerTitle";
						output_26.style.setClasses(["pb-label"]);
						container.addChild(output_26, {
							"colIndex": 0,
							"rowIndex": 6
						});
						var output_27 = new cpr.controls.Output();
						output_27.value = "●";
						output_27.style.setClasses(["text-center"]);
						container.addChild(output_27, {
							"colIndex": 1,
							"rowIndex": 6
						});
						var output_28 = new cpr.controls.Output();
						output_28.value = "(다이얼로그 타이틀 작성)";
						output_28.style.setClasses(["text-center"]);
						container.addChild(output_28, {
							"colIndex": 2,
							"rowIndex": 6
						});
						var output_29 = new cpr.controls.Output();
						output_29.value = "다이얼로그에 대한 타이틀을 작성";
						container.addChild(output_29, {
							"colIndex": 3,
							"rowIndex": 6
						});
						var output_30 = new cpr.controls.Output();
						output_30.value = "headerVisible";
						output_30.style.setClasses(["pb-label"]);
						container.addChild(output_30, {
							"colIndex": 0,
							"rowIndex": 7
						});
						var output_31 = new cpr.controls.Output();
						output_31.value = "△";
						output_31.style.setClasses(["text-center"]);
						container.addChild(output_31, {
							"colIndex": 1,
							"rowIndex": 7
						});
						var output_32 = new cpr.controls.Output();
						output_32.value = "(상황에 맞게 설정)";
						output_32.style.setClasses(["text-center"]);
						container.addChild(output_32, {
							"colIndex": 2,
							"rowIndex": 7
						});
						var output_33 = new cpr.controls.Output();
						output_33.value = "다이얼로그에서 헤더가 표시되지 않아야 하는 경우 해당 속성 사용";
						container.addChild(output_33, {
							"colIndex": 3,
							"rowIndex": 7
						});
						var output_34 = new cpr.controls.Output();
						output_34.value = "modal";
						output_34.style.setClasses(["pb-label"]);
						container.addChild(output_34, {
							"colIndex": 0,
							"rowIndex": 8
						});
						var output_35 = new cpr.controls.Output();
						output_35.value = "●";
						output_35.style.setClasses(["text-center"]);
						container.addChild(output_35, {
							"colIndex": 1,
							"rowIndex": 8
						});
						var output_36 = new cpr.controls.Output();
						output_36.value = "true";
						output_36.style.setClasses(["text-center"]);
						container.addChild(output_36, {
							"colIndex": 2,
							"rowIndex": 8
						});
						var output_37 = new cpr.controls.Output();
						output_37.value = "모달을 표시하여 레이어드 팝업으로 사용. 모달을 표시하지 않는 경우에는 윈도우 팝업을 사용";
						container.addChild(output_37, {
							"colIndex": 3,
							"rowIndex": 8
						});
						var output_38 = new cpr.controls.Output();
						output_38.value = "resizable";
						output_38.style.setClasses(["pb-label"]);
						container.addChild(output_38, {
							"colIndex": 0,
							"rowIndex": 9
						});
						var output_39 = new cpr.controls.Output();
						output_39.value = "○";
						output_39.style.setClasses(["text-center"]);
						container.addChild(output_39, {
							"colIndex": 1,
							"rowIndex": 9
						});
						var output_40 = new cpr.controls.Output();
						output_40.value = "false";
						output_40.style.setClasses(["text-center"]);
						container.addChild(output_40, {
							"colIndex": 2,
							"rowIndex": 9
						});
						var output_41 = new cpr.controls.Output();
						output_41.value = "다이얼로그의 크기를 변경하지 않도록 해당 속성을 사용하지 않음";
						container.addChild(output_41, {
							"colIndex": 3,
							"rowIndex": 9
						});
					})(group_6);
					container.addChild(group_6, {
						"autoSize": "height",
						"width": "400px",
						"height": "362px"
					});
				})(group_5);
				container.addChild(group_5, {
					"autoSize": "height",
					"width": "1544px",
					"height": "422px"
				});
			})(group_2);
			container.addChild(group_2, {
				"autoSize": "height",
				"width": "1644px",
				"height": "661px"
			});
			
			var group_7 = new cpr.controls.Container();
			group_7.style.setClasses(["pb-content"]);
			var verticalLayout_6 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_6.scrollable = false;
			verticalLayout_6.spacing = 40;
			verticalLayout_6.leftMargin = 50;
			verticalLayout_6.rightMargin = 50;
			verticalLayout_6.topMargin = 50;
			verticalLayout_6.bottomMargin = 50;
			group_7.setLayout(verticalLayout_6);
			(function(container){
				var group_8 = new cpr.controls.Container();
				var verticalLayout_7 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_7.scrollable = false;
				verticalLayout_7.spacing = 14;
				group_8.setLayout(verticalLayout_7);
				(function(container){
					var userDefinedControl_4 = new udc.hk.pb.SectionTitle();
					userDefinedControl_4.title = "팝업 너비 규정";
					userDefinedControl_4.subTextStyle = "text-blue";
					userDefinedControl_4.subText = "팝업은 400px/767px/1000px 너비를 사용합니다.";
					container.addChild(userDefinedControl_4, {
						"autoSize": "none",
						"width": "1544px",
						"height": "29px"
					});
					var output_42 = new cpr.controls.Output();
					output_42.value = "\u203b 아래의 구조는 다이얼로그를 확인하기 위한 용도로 화면 작성 시 사용하지 않도록 주의합니다.";
					output_42.style.setClasses(["text-red"]);
					container.addChild(output_42, {
						"width": "100px",
						"height": "20px"
					});
					var group_9 = new cpr.controls.Container();
					group_9.style.setClasses(["cl-overlay"]);
					var verticalLayout_8 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_8.scrollable = false;
					verticalLayout_8.distribution = "leading";
					verticalLayout_8.spacing = 20;
					verticalLayout_8.leftMargin = 20;
					verticalLayout_8.rightMargin = 20;
					verticalLayout_8.topMargin = 20;
					verticalLayout_8.bottomMargin = 20;
					group_9.setLayout(verticalLayout_8);
					(function(container){
						var group_10 = new cpr.controls.Container();
						group_10.style.setClasses(["cl-dialog"]);
						var xYLayout_1 = new cpr.controls.layouts.XYLayout();
						group_10.setLayout(xYLayout_1);
						(function(container){
							var group_11 = new cpr.controls.Container();
							group_11.style.setClasses(["cl-dialog-header"]);
							var xYLayout_2 = new cpr.controls.layouts.XYLayout();
							group_11.setLayout(xYLayout_2);
							(function(container){
								var output_43 = new cpr.controls.Output();
								output_43.value = "Popup Width 400px";
								output_43.style.setClasses(["cl-text"]);
								container.addChild(output_43, {
									"top": "0px",
									"right": "18px",
									"bottom": "0px",
									"left": "0px"
								});
								var group_12 = new cpr.controls.Container();
								group_12.style.setClasses(["cl-dialog-close"]);
								var xYLayout_3 = new cpr.controls.layouts.XYLayout();
								group_12.setLayout(xYLayout_3);
								container.addChild(group_12, {
									"right": "0px",
									"width": "18px",
									"height": "18px",
									"top": "calc(50% - 9px)"
								});
							})(group_11);
							container.addChild(group_11, {
								"top": "0px",
								"right": "0px",
								"left": "0px",
								"height": "45px"
							});
							var output_44 = new cpr.controls.Output();
							output_44.value = "콘텐트";
							output_44.style.setClasses(["bg-primary-dim", "text-primary", "text-center"]);
							container.addChild(output_44, {
								"top": "65px",
								"right": "20px",
								"bottom": "20px",
								"left": "20px"
							});
						})(group_10);
						container.addChild(group_10, {
							"width": "400px",
							"height": "233px"
						});
						var group_13 = new cpr.controls.Container();
						group_13.style.setClasses(["cl-dialog"]);
						var xYLayout_4 = new cpr.controls.layouts.XYLayout();
						group_13.setLayout(xYLayout_4);
						(function(container){
							var group_14 = new cpr.controls.Container();
							group_14.style.setClasses(["cl-dialog-header"]);
							var xYLayout_5 = new cpr.controls.layouts.XYLayout();
							group_14.setLayout(xYLayout_5);
							(function(container){
								var output_45 = new cpr.controls.Output();
								output_45.value = "Popup Width 767px";
								output_45.style.setClasses(["cl-text"]);
								container.addChild(output_45, {
									"top": "0px",
									"right": "18px",
									"bottom": "0px",
									"left": "0px"
								});
								var group_15 = new cpr.controls.Container();
								group_15.style.setClasses(["cl-dialog-close"]);
								var xYLayout_6 = new cpr.controls.layouts.XYLayout();
								group_15.setLayout(xYLayout_6);
								container.addChild(group_15, {
									"right": "0px",
									"width": "18px",
									"height": "18px",
									"top": "calc(50% - 9px)"
								});
							})(group_14);
							container.addChild(group_14, {
								"top": "0px",
								"right": "0px",
								"left": "0px",
								"height": "45px"
							});
							var output_46 = new cpr.controls.Output();
							output_46.value = "콘텐트";
							output_46.style.setClasses(["bg-primary-dim", "text-primary", "text-center"]);
							container.addChild(output_46, {
								"top": "65px",
								"right": "20px",
								"bottom": "20px",
								"left": "20px"
							});
						})(group_13);
						container.addChild(group_13, {
							"autoSize": "none",
							"width": "767px",
							"height": "233px"
						});
						var group_16 = new cpr.controls.Container();
						group_16.style.setClasses(["cl-dialog"]);
						var xYLayout_7 = new cpr.controls.layouts.XYLayout();
						group_16.setLayout(xYLayout_7);
						(function(container){
							var group_17 = new cpr.controls.Container();
							group_17.style.setClasses(["cl-dialog-header"]);
							var xYLayout_8 = new cpr.controls.layouts.XYLayout();
							group_17.setLayout(xYLayout_8);
							(function(container){
								var output_47 = new cpr.controls.Output();
								output_47.value = "Popup Width 1000px";
								output_47.style.setClasses(["cl-text"]);
								container.addChild(output_47, {
									"top": "0px",
									"right": "18px",
									"bottom": "0px",
									"left": "0px"
								});
								var group_18 = new cpr.controls.Container();
								group_18.style.setClasses(["cl-dialog-close"]);
								var xYLayout_9 = new cpr.controls.layouts.XYLayout();
								group_18.setLayout(xYLayout_9);
								container.addChild(group_18, {
									"right": "0px",
									"width": "18px",
									"height": "18px",
									"top": "calc(50% - 9px)"
								});
							})(group_17);
							container.addChild(group_17, {
								"top": "0px",
								"right": "0px",
								"left": "0px",
								"height": "45px"
							});
							var output_48 = new cpr.controls.Output();
							output_48.value = "콘텐트";
							output_48.style.setClasses(["bg-primary-dim", "text-primary", "text-center"]);
							container.addChild(output_48, {
								"top": "65px",
								"right": "20px",
								"bottom": "20px",
								"left": "20px"
							});
						})(group_16);
						container.addChild(group_16, {
							"autoSize": "none",
							"width": "1000px",
							"height": "233px"
						});
					})(group_9);
					container.addChild(group_9, {
						"autoSize": "height",
						"width": "400px",
						"height": "877px"
					});
				})(group_8);
				container.addChild(group_8, {
					"autoSize": "height",
					"width": "1544px",
					"height": "991px"
				});
			})(group_7);
			container.addChild(group_7, {
				"autoSize": "height",
				"width": "1644px",
				"height": "1086px"
			});
			
			var group_19 = new cpr.controls.Container();
			group_19.style.setClasses(["pb-content"]);
			var verticalLayout_9 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_9.scrollable = false;
			verticalLayout_9.spacing = 40;
			verticalLayout_9.leftMargin = 50;
			verticalLayout_9.rightMargin = 50;
			verticalLayout_9.topMargin = 50;
			verticalLayout_9.bottomMargin = 50;
			group_19.setLayout(verticalLayout_9);
			(function(container){
				var group_20 = new cpr.controls.Container();
				var verticalLayout_10 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_10.scrollable = false;
				verticalLayout_10.spacing = 14;
				group_20.setLayout(verticalLayout_10);
				(function(container){
					var userDefinedControl_5 = new udc.hk.pb.SectionTitle("sectiontitle2");
					userDefinedControl_5.title = "팝업 - 확장 사용";
					userDefinedControl_5.subText = "단은 최대 4단까지만 사용하며, 특수한 경우 폼의 단 원칙을 유동적으로 변경할 수 있다.";
					userDefinedControl_5.subTextStyle = "text-red";
					container.addChild(userDefinedControl_5, {
						"autoSize": "none",
						"width": "1544px",
						"height": "29px"
					});
					var group_21 = new cpr.controls.Container();
					var verticalLayout_11 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_11.scrollable = false;
					verticalLayout_11.spacing = 6;
					group_21.setLayout(verticalLayout_11);
					(function(container){
						var output_49 = new cpr.controls.Output();
						output_49.value = "Toast Popup";
						output_49.style.setClasses(["h5"]);
						container.addChild(output_49, {
							"autoSize": "height",
							"width": "100px",
							"height": "24px"
						});
						var output_50 = new cpr.controls.Output();
						output_50.value = "- 구분, 항목 등을 선택할 때 사용\n- 버튼 영역 없이 사용할 수 있음";
						output_50.style.setClasses(["caption"]);
						container.addChild(output_50, {
							"autoSize": "height",
							"width": "100px",
							"height": "40px"
						});
						var group_22 = new cpr.controls.Container();
						var verticalLayout_12 = new cpr.controls.layouts.VerticalLayout();
						verticalLayout_12.scrollable = false;
						verticalLayout_12.distribution = "leading";
						verticalLayout_12.spacing = 0;
						group_22.setLayout(verticalLayout_12);
						(function(container){
							var group_23 = new cpr.controls.Container();
							var flowLayout_2 = new cpr.controls.layouts.FlowLayout();
							flowLayout_2.scrollable = false;
							flowLayout_2.verticalSpacing = 0;
							flowLayout_2.horizontalAlign = "right";
							group_23.setLayout(flowLayout_2);
							(function(container){
								var button_2 = new cpr.controls.Button();
								button_2.value = "항목닫기";
								button_2.style.setClasses(["btn-secondary01"]);
								container.addChild(button_2, {
									"autoSize": "width",
									"width": "60px",
									"height": "26px"
								});
							})(group_23);
							container.addChild(group_23, {
								"width": "346px",
								"height": "26px"
							});
							var group_24 = new cpr.controls.Container();
							group_24.style.setClasses(["border", "rounded-sm"]);
							var verticalLayout_13 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_13.spacing = 20;
							verticalLayout_13.leftMargin = 20;
							verticalLayout_13.rightMargin = 20;
							verticalLayout_13.topMargin = 20;
							verticalLayout_13.bottomMargin = 20;
							group_24.setLayout(verticalLayout_13);
							(function(container){
								var checkBoxGroup_1 = new cpr.controls.CheckBoxGroup();
								checkBoxGroup_1.colCount = 4;
								checkBoxGroup_1.horizontalSpacing = 0;
								checkBoxGroup_1.verticalSpacing = 20;
								(function(checkBoxGroup_1){
									checkBoxGroup_1.addItem(new cpr.controls.Item("모집채널", "value1"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("계약상태", "value2"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("계약번호", "value3"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("보험코드", "value4"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("보험종류", "value5"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("계약일", "value6"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("만기일", "value7"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("계약자", "value8"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("피보험자", "value9"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("합보험", "value10"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("최종납입", "value11"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("납입횟수", "value12"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("납입주기", "value13"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("수금방법", "value14"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("납입기간", "value15"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("보험기간", "value16"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("실손", "value17"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("면제", "value18"));
									checkBoxGroup_1.addItem(new cpr.controls.Item("구증번", "value19"));
								})(checkBoxGroup_1);
								container.addChild(checkBoxGroup_1, {
									"autoSize": "height",
									"width": "200px",
									"height": "157px"
								});
								var group_25 = new cpr.controls.Container();
								var flowLayout_3 = new cpr.controls.layouts.FlowLayout();
								flowLayout_3.scrollable = false;
								flowLayout_3.horizontalSpacing = 10;
								flowLayout_3.verticalSpacing = 0;
								flowLayout_3.horizontalAlign = "center";
								group_25.setLayout(flowLayout_3);
								(function(container){
									var button_3 = new cpr.controls.Button();
									button_3.value = "취소";
									button_3.style.setClasses(["btn-md", "btn-primary04"]);
									container.addChild(button_3, {
										"width": "43px",
										"height": "30px"
									});
									var button_4 = new cpr.controls.Button();
									button_4.value = "확인";
									button_4.style.setClasses(["btn-md", "btn-primary01"]);
									container.addChild(button_4, {
										"width": "43px",
										"height": "30px"
									});
								})(group_25);
								container.addChild(group_25, {
									"width": "400px",
									"height": "30px"
								});
							})(group_24);
							container.addChild(group_24, {
								"autoSize": "none",
								"width": "346px",
								"height": "247px"
							});
						})(group_22);
						container.addChild(group_22, {
							"width": "400px",
							"height": "294px"
						});
					})(group_21);
					container.addChild(group_21, {
						"autoSize": "height",
						"width": "400px",
						"height": "350px"
					});
				})(group_20);
				container.addChild(group_20, {
					"autoSize": "height",
					"width": "1544px",
					"height": "406px"
				});
			})(group_19);
			container.addChild(group_19, {
				"autoSize": "height",
				"width": "1644px",
				"height": "480px"
			});
		}
	});
	app.title = "[디자인가이드] 다이얼로그(팝업)";
	cpr.core.Platform.INSTANCE.register(app);
})();