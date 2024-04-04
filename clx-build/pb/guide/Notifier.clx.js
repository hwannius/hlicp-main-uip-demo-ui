/*
 * App URI: pb/guide/Notifier
 * Source Location: pb/guide/Notifier.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("pb/guide/Notifier", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * Notifier.js
			 * Created at 2022. 9. 20. 오후 3:14:55.
			 *
			 * @author ryu
			 ************************************************/

			/**
			 * @type {Number}
			 */
			var moInterval = null;

			/**
			 * 알림을 발생시킵니다.
			 */
			function notify() {
				var notifier = app.lookup("notifier");
				notifier.notify("알림 메세지");
			}

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				var notifier = app.lookup("notifier");
				notifier.notify("알림 메세지");

				// Interval 실행
				moInterval = setInterval(notify, notifier.delay);
			}

			/*
			 * 루트 컨테이너에서 unload 이벤트 발생 시 호출.
			 * 앱이 언로드된 후 발생하는 이벤트입니다.
			 */
			function onBodyUnload(e){
				// Interval 제거
				clearInterval(moInterval);
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
					userDefinedControl_2.title = "알림";
					container.addChild(userDefinedControl_2, {
						"width": "1544px",
						"height": "29px"
					});
					var group_4 = new cpr.controls.Container();
					var flowLayout_1 = new cpr.controls.layouts.FlowLayout();
					flowLayout_1.scrollable = false;
					flowLayout_1.horizontalSpacing = 30;
					flowLayout_1.verticalSpacing = 10;
					group_4.setLayout(flowLayout_1);
					(function(container){
						var notifier_1 = new cpr.controls.Notifier("notifier");
						notifier_1.maxNotifyCount = 1;
						notifier_1.scope = "app";
						notifier_1.close = true;
						notifier_1.successClose = true;
						notifier_1.infoClose = true;
						notifier_1.warningClose = true;
						notifier_1.dangerClose = true;
						container.addChild(notifier_1, {
							"width": "284px",
							"height": "50px"
						});
					})(group_4);
					container.addChild(group_4, {
						"autoSize": "height",
						"width": "400px",
						"height": "60px"
					});
				})(group_3);
				container.addChild(group_3, {
					"autoSize": "height",
					"width": "1544px",
					"height": "99px"
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
					formLayout_1.setRows(["28px", "26px", "26px", "26px", "26px", "26px"]);
					formLayout_1.setUseRowShade(0, true);
					formLayout_1.setRowAutoSizing(1, true);
					formLayout_1.setRowAutoSizing(2, true);
					formLayout_1.setRowAutoSizing(3, true);
					formLayout_1.setRowAutoSizing(4, true);
					formLayout_1.setRowAutoSizing(5, true);
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
						output_6.value = "animation";
						output_6.unselectable = false;
						output_6.style.setClasses(["pb-label"]);
						container.addChild(output_6, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var output_7 = new cpr.controls.Output();
						output_7.value = "○";
						output_7.style.setClasses(["text-center"]);
						container.addChild(output_7, {
							"colIndex": 1,
							"rowIndex": 1
						});
						var output_8 = new cpr.controls.Output();
						output_8.value = "미적용";
						output_8.style.setClasses(["text-center"]);
						container.addChild(output_8, {
							"colIndex": 2,
							"rowIndex": 1
						});
						var output_9 = new cpr.controls.Output();
						output_9.value = "알림창이 나타날 때 효과.";
						container.addChild(output_9, {
							"colIndex": 3,
							"rowIndex": 1
						});
						var output_10 = new cpr.controls.Output();
						output_10.value = "close";
						output_10.unselectable = false;
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
						output_12.value = "\"hover\" | \"click\"";
						output_12.style.setClasses(["text-center"]);
						container.addChild(output_12, {
							"colIndex": 2,
							"rowIndex": 2
						});
						var output_13 = new cpr.controls.Output();
						output_13.value = "웹 접근성 심사 필요 시 아이템에 하위 메뉴가 존재할 경우 반드시 \"click\"으로 값을 설정하여 ENTER 키 입력으로 하위 메뉴에 접근할 수 있도록 해야 함. (기본값: hover)";
						container.addChild(output_13, {
							"colIndex": 3,
							"rowIndex": 2
						});
						var output_14 = new cpr.controls.Output();
						output_14.value = "delay";
						output_14.unselectable = false;
						output_14.style.setClasses(["pb-label"]);
						container.addChild(output_14, {
							"colIndex": 0,
							"rowIndex": 3
						});
						var output_15 = new cpr.controls.Output();
						output_15.value = "●";
						output_15.style.setClasses(["text-center"]);
						container.addChild(output_15, {
							"colIndex": 1,
							"rowIndex": 3
						});
						var output_16 = new cpr.controls.Output();
						output_16.value = "(millisecond 기준으로 작성)";
						output_16.style.setClasses(["text-center"]);
						container.addChild(output_16, {
							"colIndex": 2,
							"rowIndex": 3
						});
						var output_17 = new cpr.controls.Output();
						output_17.value = "알림이 표시되는 시간.";
						container.addChild(output_17, {
							"colIndex": 3,
							"rowIndex": 3
						});
						var output_18 = new cpr.controls.Output();
						output_18.value = "maxNotifyCount";
						output_18.unselectable = false;
						output_18.style.setClasses(["pb-label"]);
						container.addChild(output_18, {
							"colIndex": 0,
							"rowIndex": 4
						});
						var output_19 = new cpr.controls.Output();
						output_19.value = "●";
						output_19.style.setClasses(["text-center"]);
						container.addChild(output_19, {
							"colIndex": 1,
							"rowIndex": 4
						});
						var output_20 = new cpr.controls.Output();
						output_20.value = "1";
						output_20.style.setClasses(["text-center"]);
						container.addChild(output_20, {
							"colIndex": 2,
							"rowIndex": 4
						});
						var output_21 = new cpr.controls.Output();
						output_21.value = "표시할 수 있는 알림 개수";
						container.addChild(output_21, {
							"colIndex": 3,
							"rowIndex": 4
						});
						var output_22 = new cpr.controls.Output();
						output_22.value = "scope";
						output_22.unselectable = false;
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
						output_24.value = "\"system\" | \"app\"";
						output_24.style.setClasses(["text-center"]);
						container.addChild(output_24, {
							"colIndex": 2,
							"rowIndex": 5
						});
						var output_25 = new cpr.controls.Output();
						output_25.value = "알림 컨트롤을 메인에서만 사용하는 경우에는 \"system\"으로 값을 설정하고, 알림 컨트롤이 귀속된 앱을 기준으로 알림 컨트롤을 사용하는 경우에는 \"app\"으로 값 설정";
						container.addChild(output_25, {
							"colIndex": 3,
							"rowIndex": 5
						});
					})(group_6);
					container.addChild(group_6, {
						"autoSize": "height",
						"width": "400px",
						"height": "208px"
					});
				})(group_5);
				container.addChild(group_5, {
					"autoSize": "height",
					"width": "1544px",
					"height": "261px"
				});
			})(group_2);
			container.addChild(group_2, {
				"autoSize": "height",
				"width": "1644px",
				"height": "480px"
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
					userDefinedControl_4.title = "알림 상태 종류";
					userDefinedControl_4.subText = "알림 컨트롤과 비슷한 형태로 표시되도록 작성되었으므로 실제 적용 시 API를 참고하여 알림 상태를 적용한다.";
					userDefinedControl_4.subTextStyle = "text-red";
					container.addChild(userDefinedControl_4, {
						"autoSize": "none",
						"width": "1544px",
						"height": "29px"
					});
					var group_9 = new cpr.controls.Container();
					group_9.style.setClasses(["pb-table"]);
					var formLayout_2 = new cpr.controls.layouts.FormLayout();
					formLayout_2.scrollable = false;
					formLayout_2.topMargin = "4px";
					formLayout_2.rightMargin = "4px";
					formLayout_2.bottomMargin = "4px";
					formLayout_2.leftMargin = "4px";
					formLayout_2.horizontalSpacing = "8px";
					formLayout_2.verticalSpacing = "8px";
					formLayout_2.horizontalSeparatorWidth = 1;
					formLayout_2.verticalSeparatorWidth = 1;
					formLayout_2.setColumns(["150px", "1fr", "2fr"]);
					formLayout_2.setUseColumnShade(0, true);
					formLayout_2.setRows(["28px", "40px", "40px", "40px", "40px", "40px"]);
					formLayout_2.setUseRowShade(0, true);
					group_9.setLayout(formLayout_2);
					(function(container){
						var output_26 = new cpr.controls.Output();
						output_26.value = "상태";
						output_26.style.setClasses(["pb-label"]);
						container.addChild(output_26, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_27 = new cpr.controls.Output();
						output_27.value = "적용";
						output_27.style.setClasses(["pb-label"]);
						container.addChild(output_27, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_28 = new cpr.controls.Output();
						output_28.value = "내용";
						output_28.style.setClasses(["pb-label"]);
						container.addChild(output_28, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var output_29 = new cpr.controls.Output();
						output_29.value = "default";
						output_29.unselectable = false;
						output_29.style.setClasses(["pb-label"]);
						container.addChild(output_29, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var group_10 = new cpr.controls.Container();
						group_10.style.setClasses(["cl-notifier-item", "cl-notifier-default", "m-0"]);
						var xYLayout_1 = new cpr.controls.layouts.XYLayout();
						xYLayout_1.scrollable = false;
						group_10.setLayout(xYLayout_1);
						(function(container){
							var group_11 = new cpr.controls.Container();
							group_11.style.setClasses(["cl-notifier-icon", "cl-notifier-default-icon"]);
							var xYLayout_2 = new cpr.controls.layouts.XYLayout();
							group_11.setLayout(xYLayout_2);
							container.addChild(group_11, {
								"left": "0px",
								"width": "24px",
								"height": "24px",
								"top": "calc(50% - 12px)"
							});
							var output_30 = new cpr.controls.Output();
							output_30.value = "메세지를 입력하세요";
							container.addChild(output_30, {
								"right": "17px",
								"left": "24px",
								"height": "19px",
								"top": "calc(50% - 9px)"
							});
							var group_12 = new cpr.controls.Container();
							group_12.style.setClasses(["cl-notifier-closebutton"]);
							var xYLayout_3 = new cpr.controls.layouts.XYLayout();
							group_12.setLayout(xYLayout_3);
							container.addChild(group_12, {
								"right": "0px",
								"width": "16px",
								"height": "16px",
								"top": "calc(50% - 8px)"
							});
						})(group_10);
						container.addChild(group_10, {
							"colIndex": 1,
							"rowIndex": 1
						});
						var output_31 = new cpr.controls.Output();
						container.addChild(output_31, {
							"colIndex": 2,
							"rowIndex": 1
						});
						var output_32 = new cpr.controls.Output();
						output_32.value = "info";
						output_32.unselectable = false;
						output_32.style.setClasses(["pb-label"]);
						container.addChild(output_32, {
							"colIndex": 0,
							"rowIndex": 2
						});
						var group_13 = new cpr.controls.Container();
						group_13.style.setClasses(["cl-notifier-item", "cl-notifier-info", "m-0"]);
						var xYLayout_4 = new cpr.controls.layouts.XYLayout();
						xYLayout_4.scrollable = false;
						group_13.setLayout(xYLayout_4);
						(function(container){
							var group_14 = new cpr.controls.Container();
							group_14.style.setClasses(["cl-notifier-icon", "cl-notifier-info-icon"]);
							var xYLayout_5 = new cpr.controls.layouts.XYLayout();
							group_14.setLayout(xYLayout_5);
							container.addChild(group_14, {
								"left": "0px",
								"width": "24px",
								"height": "24px",
								"top": "calc(50% - 12px)"
							});
							var output_33 = new cpr.controls.Output();
							output_33.value = "메세지를 입력하세요";
							container.addChild(output_33, {
								"right": "17px",
								"left": "24px",
								"height": "19px",
								"top": "calc(50% - 9px)"
							});
							var group_15 = new cpr.controls.Container();
							group_15.style.setClasses(["cl-notifier-closebutton"]);
							var xYLayout_6 = new cpr.controls.layouts.XYLayout();
							group_15.setLayout(xYLayout_6);
							container.addChild(group_15, {
								"right": "0px",
								"width": "16px",
								"height": "16px",
								"top": "calc(50% - 8px)"
							});
						})(group_13);
						container.addChild(group_13, {
							"colIndex": 1,
							"rowIndex": 2
						});
						var output_34 = new cpr.controls.Output();
						container.addChild(output_34, {
							"colIndex": 2,
							"rowIndex": 2
						});
						var output_35 = new cpr.controls.Output();
						output_35.value = "success";
						output_35.unselectable = false;
						output_35.style.setClasses(["pb-label"]);
						container.addChild(output_35, {
							"colIndex": 0,
							"rowIndex": 3
						});
						var group_16 = new cpr.controls.Container();
						group_16.style.setClasses(["cl-notifier-item", "cl-notifier-success", "m-0"]);
						var xYLayout_7 = new cpr.controls.layouts.XYLayout();
						xYLayout_7.scrollable = false;
						group_16.setLayout(xYLayout_7);
						(function(container){
							var group_17 = new cpr.controls.Container();
							group_17.style.setClasses(["cl-notifier-icon", "cl-notifier-success-icon"]);
							var xYLayout_8 = new cpr.controls.layouts.XYLayout();
							group_17.setLayout(xYLayout_8);
							container.addChild(group_17, {
								"left": "0px",
								"width": "24px",
								"height": "24px",
								"top": "calc(50% - 12px)"
							});
							var output_36 = new cpr.controls.Output();
							output_36.value = "메세지를 입력하세요";
							container.addChild(output_36, {
								"right": "17px",
								"left": "24px",
								"height": "19px",
								"top": "calc(50% - 9px)"
							});
							var group_18 = new cpr.controls.Container();
							group_18.style.setClasses(["cl-notifier-closebutton"]);
							var xYLayout_9 = new cpr.controls.layouts.XYLayout();
							group_18.setLayout(xYLayout_9);
							container.addChild(group_18, {
								"right": "0px",
								"width": "16px",
								"height": "16px",
								"top": "calc(50% - 8px)"
							});
						})(group_16);
						container.addChild(group_16, {
							"colIndex": 1,
							"rowIndex": 3
						});
						var output_37 = new cpr.controls.Output();
						container.addChild(output_37, {
							"colIndex": 2,
							"rowIndex": 3
						});
						var output_38 = new cpr.controls.Output();
						output_38.value = "warning";
						output_38.unselectable = false;
						output_38.style.setClasses(["pb-label"]);
						container.addChild(output_38, {
							"colIndex": 0,
							"rowIndex": 4
						});
						var group_19 = new cpr.controls.Container();
						group_19.style.setClasses(["cl-notifier-item", "cl-notifier-warning", "m-0"]);
						var xYLayout_10 = new cpr.controls.layouts.XYLayout();
						xYLayout_10.scrollable = false;
						group_19.setLayout(xYLayout_10);
						(function(container){
							var group_20 = new cpr.controls.Container();
							group_20.style.setClasses(["cl-notifier-icon", "cl-notifier-warning-icon"]);
							var xYLayout_11 = new cpr.controls.layouts.XYLayout();
							group_20.setLayout(xYLayout_11);
							container.addChild(group_20, {
								"left": "0px",
								"width": "24px",
								"height": "24px",
								"top": "calc(50% - 12px)"
							});
							var output_39 = new cpr.controls.Output();
							output_39.value = "메세지를 입력하세요";
							container.addChild(output_39, {
								"right": "17px",
								"left": "24px",
								"height": "19px",
								"top": "calc(50% - 9px)"
							});
							var group_21 = new cpr.controls.Container();
							group_21.style.setClasses(["cl-notifier-closebutton"]);
							var xYLayout_12 = new cpr.controls.layouts.XYLayout();
							group_21.setLayout(xYLayout_12);
							container.addChild(group_21, {
								"right": "0px",
								"width": "16px",
								"height": "16px",
								"top": "calc(50% - 8px)"
							});
						})(group_19);
						container.addChild(group_19, {
							"colIndex": 1,
							"rowIndex": 4
						});
						var output_40 = new cpr.controls.Output();
						container.addChild(output_40, {
							"colIndex": 2,
							"rowIndex": 4
						});
						var output_41 = new cpr.controls.Output();
						output_41.value = "danger";
						output_41.unselectable = false;
						output_41.style.setClasses(["pb-label"]);
						container.addChild(output_41, {
							"colIndex": 0,
							"rowIndex": 5
						});
						var group_22 = new cpr.controls.Container();
						group_22.style.setClasses(["cl-notifier-item", "cl-notifier-danger", "m-0"]);
						var xYLayout_13 = new cpr.controls.layouts.XYLayout();
						xYLayout_13.scrollable = false;
						group_22.setLayout(xYLayout_13);
						(function(container){
							var group_23 = new cpr.controls.Container();
							group_23.style.setClasses(["cl-notifier-icon", "cl-notifier-danger-icon"]);
							var xYLayout_14 = new cpr.controls.layouts.XYLayout();
							group_23.setLayout(xYLayout_14);
							container.addChild(group_23, {
								"left": "0px",
								"width": "24px",
								"height": "24px",
								"top": "calc(50% - 12px)"
							});
							var output_42 = new cpr.controls.Output();
							output_42.value = "메세지를 입력하세요";
							container.addChild(output_42, {
								"right": "17px",
								"left": "24px",
								"height": "19px",
								"top": "calc(50% - 9px)"
							});
							var group_24 = new cpr.controls.Container();
							group_24.style.setClasses(["cl-notifier-closebutton"]);
							var xYLayout_15 = new cpr.controls.layouts.XYLayout();
							group_24.setLayout(xYLayout_15);
							container.addChild(group_24, {
								"right": "0px",
								"width": "16px",
								"height": "16px",
								"top": "calc(50% - 8px)"
							});
						})(group_22);
						container.addChild(group_22, {
							"colIndex": 1,
							"rowIndex": 5
						});
						var output_43 = new cpr.controls.Output();
						container.addChild(output_43, {
							"colIndex": 2,
							"rowIndex": 5
						});
					})(group_9);
					container.addChild(group_9, {
						"autoSize": "height",
						"width": "400px",
						"height": "278px"
					});
				})(group_8);
				container.addChild(group_8, {
					"autoSize": "height",
					"width": "1544px",
					"height": "321px"
				});
			})(group_7);
			container.addChild(group_7, {
				"autoSize": "height",
				"width": "1644px",
				"height": "400px"
			});
			
			var group_25 = new cpr.controls.Container();
			group_25.style.setClasses(["pb-content"]);
			var verticalLayout_8 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_8.scrollable = false;
			verticalLayout_8.spacing = 40;
			verticalLayout_8.leftMargin = 50;
			verticalLayout_8.rightMargin = 50;
			verticalLayout_8.topMargin = 50;
			verticalLayout_8.bottomMargin = 50;
			group_25.setLayout(verticalLayout_8);
			(function(container){
				var group_26 = new cpr.controls.Container();
				var verticalLayout_9 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_9.scrollable = false;
				verticalLayout_9.spacing = 14;
				group_26.setLayout(verticalLayout_9);
				(function(container){
					var userDefinedControl_5 = new udc.hk.pb.SectionTitle();
					userDefinedControl_5.title = "토스트 메세지";
					userDefinedControl_5.subText = "화면에 대한 메세지를 표시할 때는 아래의 영역을 사용한다.";
					userDefinedControl_5.subTextStyle = "text-red";
					container.addChild(userDefinedControl_5, {
						"autoSize": "none",
						"width": "1544px",
						"height": "29px"
					});
					var group_27 = new cpr.controls.Container();
					group_27.style.setClasses(["toast"]);
					var verticalLayout_10 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_10.scrollable = false;
					verticalLayout_10.spacing = 0;
					verticalLayout_10.leftMargin = 12;
					verticalLayout_10.rightMargin = 12;
					verticalLayout_10.topMargin = 12;
					verticalLayout_10.bottomMargin = 12;
					group_27.setLayout(verticalLayout_10);
					(function(container){
						var output_44 = new cpr.controls.Output();
						output_44.value = "월 대체 처리가능 상품이 아닙니다.";
						container.addChild(output_44, {
							"autoSize": "height",
							"width": "100px",
							"height": "15px"
						});
					})(group_27);
					container.addChild(group_27, {
						"autoSize": "height",
						"width": "400px",
						"height": "38px",
						"minHeight": 38
					});
				})(group_26);
				container.addChild(group_26, {
					"autoSize": "height",
					"width": "1544px",
					"height": "321px"
				});
			})(group_25);
			container.addChild(group_25, {
				"autoSize": "height",
				"width": "1644px",
				"height": "400px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
			if(typeof onBodyUnload == "function"){
				app.addEventListener("unload", onBodyUnload);
			}
		}
	});
	app.title = "[디자인가이드] 알림";
	cpr.core.Platform.INSTANCE.register(app);
})();
