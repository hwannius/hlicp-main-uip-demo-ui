/*
 * App URI: pb/guide/Typography
 * Source Location: pb/guide/Typography.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("pb/guide/Typography", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * Typography.js
			 * Created at 2022. 5. 27. 오전 11:46:24.
			 *
			 * @author ryu
			 ************************************************/;
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
				output_1.value = "\u203b 폰트 특성상 폰트가 약간 아래로 치우치는 경향이 있으며, 이는 툴과 무관합니다.";
				output_1.style.setClasses(["text-red"]);
				container.addChild(output_1, {
					"autoSize": "height",
					"width": "100px",
					"height": "20px"
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
					userDefinedControl_2.title = "Spoqa Han Sans Neo";
					container.addChild(userDefinedControl_2, {
						"autoSize": "none",
						"width": "1544px",
						"height": "29px"
					});
					var group_4 = new cpr.controls.Container();
					group_4.style.setClasses(["pb-table"]);
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
					formLayout_1.setColumns(["150px", "1fr"]);
					formLayout_1.setUseColumnShade(0, true);
					formLayout_1.setRows(["28px", "28px", "28px", "28px"]);
					formLayout_1.setUseRowShade(0, true);
					group_4.setLayout(formLayout_1);
					(function(container){
						var output_2 = new cpr.controls.Output();
						output_2.value = "폰트 굵기";
						output_2.style.setClasses(["pb-label"]);
						container.addChild(output_2, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_3 = new cpr.controls.Output();
						output_3.value = "예시";
						output_3.style.setClasses(["pb-label"]);
						container.addChild(output_3, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_4 = new cpr.controls.Output();
						output_4.value = "Regular";
						output_4.style.setClasses(["pb-label"]);
						container.addChild(output_4, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var output_5 = new cpr.controls.Output();
						output_5.value = "Medium";
						output_5.style.setClasses(["pb-label"]);
						container.addChild(output_5, {
							"colIndex": 0,
							"rowIndex": 2
						});
						var output_6 = new cpr.controls.Output();
						output_6.value = "Bold";
						output_6.style.setClasses(["pb-label"]);
						container.addChild(output_6, {
							"colIndex": 0,
							"rowIndex": 3
						});
						var output_7 = new cpr.controls.Output();
						output_7.value = "가나다라마바사아자차카타파하 / ABCDEFGHIJKLMNOPQRSTUVWXYZ / abcdefghijklmnopqrstuvwxyz / 1234567890 / ~!@#$%^&*()-_+=";
						container.addChild(output_7, {
							"colIndex": 1,
							"rowIndex": 1
						});
						var output_8 = new cpr.controls.Output();
						output_8.value = "가나다라마바사아자차카타파하 / ABCDEFGHIJKLMNOPQRSTUVWXYZ / abcdefghijklmnopqrstuvwxyz / 1234567890 / ~!@#$%^&*()-_+=";
						output_8.style.setClasses(["fw-medium"]);
						container.addChild(output_8, {
							"colIndex": 1,
							"rowIndex": 2
						});
						var output_9 = new cpr.controls.Output();
						output_9.value = "가나다라마바사아자차카타파하 / ABCDEFGHIJKLMNOPQRSTUVWXYZ / abcdefghijklmnopqrstuvwxyz / 1234567890 / ~!@#$%^&*()-_+=";
						output_9.style.setClasses(["fw-bold"]);
						container.addChild(output_9, {
							"colIndex": 1,
							"rowIndex": 3
						});
					})(group_4);
					container.addChild(group_4, {
						"autoSize": "height",
						"width": "400px",
						"height": "146px"
					});
				})(group_3);
				container.addChild(group_3, {
					"autoSize": "height",
					"width": "1544px",
					"height": "190px"
				});
			})(group_2);
			container.addChild(group_2, {
				"autoSize": "height",
				"width": "400px",
				"height": "283px"
			});
			
			var group_5 = new cpr.controls.Container();
			group_5.style.setClasses(["pb-content"]);
			var verticalLayout_5 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_5.scrollable = false;
			verticalLayout_5.spacing = 40;
			verticalLayout_5.leftMargin = 50;
			verticalLayout_5.rightMargin = 50;
			verticalLayout_5.topMargin = 50;
			verticalLayout_5.bottomMargin = 50;
			group_5.setLayout(verticalLayout_5);
			(function(container){
				var group_6 = new cpr.controls.Container();
				var verticalLayout_6 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_6.scrollable = false;
				verticalLayout_6.spacing = 14;
				group_6.setLayout(verticalLayout_6);
				(function(container){
					var userDefinedControl_3 = new udc.hk.pb.SectionTitle();
					userDefinedControl_3.title = "타이포그래피";
					userDefinedControl_3.subText = "행간은 normal(약 글꼴 크기 * 1.5)로 통일한다. 아웃풋의 높이는 텍스트 길이와 line-height를 고려하여 적용한다.";
					container.addChild(userDefinedControl_3, {
						"width": "1544px",
						"height": "29px"
					});
					var group_7 = new cpr.controls.Container();
					var verticalLayout_7 = new cpr.controls.layouts.VerticalLayout();
					verticalLayout_7.scrollable = false;
					verticalLayout_7.spacing = 8;
					group_7.setLayout(verticalLayout_7);
					(function(container){
						var output_10 = new cpr.controls.Output();
						output_10.value = "Heading 1";
						output_10.style.setClasses(["h1"]);
						container.addChild(output_10, {
							"autoSize": "height",
							"width": "100px",
							"height": "33px"
						});
						var output_11 = new cpr.controls.Output();
						output_11.value = "Heading 2";
						output_11.style.setClasses(["h2"]);
						container.addChild(output_11, {
							"autoSize": "height",
							"width": "100px",
							"height": "29px"
						});
						var output_12 = new cpr.controls.Output();
						output_12.value = "Heading 3";
						output_12.style.setClasses(["h3"]);
						container.addChild(output_12, {
							"autoSize": "height",
							"width": "100px",
							"height": "24px"
						});
						var output_13 = new cpr.controls.Output();
						output_13.value = "Heading 4";
						output_13.style.setClasses(["h4"]);
						container.addChild(output_13, {
							"autoSize": "height",
							"width": "100px",
							"height": "21px"
						});
						var output_14 = new cpr.controls.Output();
						output_14.value = "Heading 5";
						output_14.style.setClasses(["h5"]);
						container.addChild(output_14, {
							"autoSize": "height",
							"width": "100px",
							"height": "19px"
						});
						var output_15 = new cpr.controls.Output();
						output_15.value = "Heading 6";
						output_15.style.setClasses(["h6"]);
						container.addChild(output_15, {
							"autoSize": "height",
							"width": "100px",
							"height": "17px"
						});
						var output_16 = new cpr.controls.Output();
						output_16.value = "Caption";
						output_16.style.setClasses(["caption"]);
						container.addChild(output_16, {
							"autoSize": "height",
							"width": "100px",
							"height": "15px"
						});
						var output_17 = new cpr.controls.Output();
						output_17.value = "Caption (highlight)";
						output_17.style.setClasses(["info-caption"]);
						container.addChild(output_17, {
							"autoSize": "height",
							"width": "100px",
							"height": "15px"
						});
					})(group_7);
					container.addChild(group_7, {
						"autoSize": "height",
						"width": "400px",
						"height": "258px"
					});
				})(group_6);
				container.addChild(group_6, {
					"autoSize": "height",
					"width": "1544px",
					"height": "301px"
				});
			})(group_5);
			container.addChild(group_5, {
				"autoSize": "height",
				"width": "400px",
				"height": "389px"
			});
			
			var group_8 = new cpr.controls.Container();
			group_8.style.setClasses(["pb-content"]);
			var verticalLayout_8 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_8.scrollable = false;
			verticalLayout_8.spacing = 40;
			verticalLayout_8.leftMargin = 50;
			verticalLayout_8.rightMargin = 50;
			verticalLayout_8.topMargin = 50;
			verticalLayout_8.bottomMargin = 50;
			group_8.setLayout(verticalLayout_8);
			(function(container){
				var group_9 = new cpr.controls.Container();
				var verticalLayout_9 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_9.scrollable = false;
				verticalLayout_9.spacing = 14;
				group_9.setLayout(verticalLayout_9);
				(function(container){
					var userDefinedControl_4 = new udc.hk.pb.SectionTitle();
					userDefinedControl_4.title = "클래스 - 글꼴 크기";
					userDefinedControl_4.subText = "타이포그래피에서 설명하는 타이틀 이외에 적용 가능합니다";
					userDefinedControl_4.subTextStyle = "text-blue";
					container.addChild(userDefinedControl_4, {
						"autoSize": "none",
						"width": "1544px",
						"height": "29px"
					});
					var group_10 = new cpr.controls.Container();
					group_10.style.setClasses(["pb-table"]);
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
					formLayout_2.setColumns(["150px", "250px", "2fr"]);
					formLayout_2.setUseColumnShade(0, true);
					formLayout_2.setRows(["28px", "28px", "28px", "28px"]);
					formLayout_2.setUseRowShade(0, true);
					group_10.setLayout(formLayout_2);
					(function(container){
						var output_18 = new cpr.controls.Output();
						output_18.value = "클래스명";
						output_18.style.setClasses(["pb-label"]);
						container.addChild(output_18, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_19 = new cpr.controls.Output();
						output_19.value = "적용";
						output_19.style.setClasses(["pb-label"]);
						container.addChild(output_19, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_20 = new cpr.controls.Output();
						output_20.value = "사용 예시";
						output_20.style.setClasses(["pb-label"]);
						container.addChild(output_20, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var output_21 = new cpr.controls.Output();
						output_21.value = "fs-sm";
						output_21.unselectable = false;
						output_21.style.setClasses(["pb-label"]);
						container.addChild(output_21, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var output_22 = new cpr.controls.Output();
						output_22.value = "동해물과 백두산이 마르고 닳도록";
						output_22.style.setClasses(["fs-sm"]);
						container.addChild(output_22, {
							"colIndex": 1,
							"rowIndex": 1
						});
						var output_23 = new cpr.controls.Output();
						output_23.value = "= 10px";
						container.addChild(output_23, {
							"colIndex": 2,
							"rowIndex": 1
						});
						var output_24 = new cpr.controls.Output();
						output_24.value = "fs-md";
						output_24.unselectable = false;
						output_24.style.setClasses(["pb-label"]);
						container.addChild(output_24, {
							"colIndex": 0,
							"rowIndex": 2
						});
						var output_25 = new cpr.controls.Output();
						output_25.value = "동해물과 백두산이 마르고 닳도록";
						output_25.style.setClasses(["fs-md"]);
						container.addChild(output_25, {
							"colIndex": 1,
							"rowIndex": 2
						});
						var output_26 = new cpr.controls.Output();
						output_26.value = "= 14px";
						container.addChild(output_26, {
							"colIndex": 2,
							"rowIndex": 2
						});
						var output_27 = new cpr.controls.Output();
						output_27.value = "fs-lg";
						output_27.unselectable = false;
						output_27.style.setClasses(["pb-label"]);
						container.addChild(output_27, {
							"colIndex": 0,
							"rowIndex": 3
						});
						var output_28 = new cpr.controls.Output();
						output_28.value = "동해물과 백두산이 마르고 닳도록";
						output_28.style.setClasses(["fs-lg"]);
						container.addChild(output_28, {
							"colIndex": 1,
							"rowIndex": 3
						});
						var output_29 = new cpr.controls.Output();
						output_29.value = "= 16px";
						container.addChild(output_29, {
							"colIndex": 2,
							"rowIndex": 3
						});
					})(group_10);
					container.addChild(group_10, {
						"autoSize": "height",
						"width": "400px",
						"height": "146px"
					});
				})(group_9);
				container.addChild(group_9, {
					"autoSize": "height",
					"width": "1544px",
					"height": "190px"
				});
			})(group_8);
			container.addChild(group_8, {
				"autoSize": "height",
				"width": "1644px",
				"height": "302px"
			});
			
			var group_11 = new cpr.controls.Container();
			group_11.style.setClasses(["pb-content"]);
			var verticalLayout_10 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_10.scrollable = false;
			verticalLayout_10.spacing = 40;
			verticalLayout_10.leftMargin = 50;
			verticalLayout_10.rightMargin = 50;
			verticalLayout_10.topMargin = 50;
			verticalLayout_10.bottomMargin = 50;
			group_11.setLayout(verticalLayout_10);
			(function(container){
				var group_12 = new cpr.controls.Container();
				var verticalLayout_11 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_11.scrollable = false;
				verticalLayout_11.spacing = 14;
				group_12.setLayout(verticalLayout_11);
				(function(container){
					var userDefinedControl_5 = new udc.hk.pb.SectionTitle();
					userDefinedControl_5.title = "클래스 - 글꼴 굵기";
					container.addChild(userDefinedControl_5, {
						"autoSize": "none",
						"width": "1544px",
						"height": "29px"
					});
					var group_13 = new cpr.controls.Container();
					group_13.style.setClasses(["pb-table"]);
					var formLayout_3 = new cpr.controls.layouts.FormLayout();
					formLayout_3.scrollable = false;
					formLayout_3.topMargin = "4px";
					formLayout_3.rightMargin = "4px";
					formLayout_3.bottomMargin = "4px";
					formLayout_3.leftMargin = "4px";
					formLayout_3.horizontalSpacing = "8px";
					formLayout_3.verticalSpacing = "8px";
					formLayout_3.horizontalSeparatorWidth = 1;
					formLayout_3.verticalSeparatorWidth = 1;
					formLayout_3.setColumns(["150px", "200px", "2fr"]);
					formLayout_3.setUseColumnShade(0, true);
					formLayout_3.setRows(["28px", "28px", "28px", "28px"]);
					formLayout_3.setUseRowShade(0, true);
					group_13.setLayout(formLayout_3);
					(function(container){
						var output_30 = new cpr.controls.Output();
						output_30.value = "클래스명";
						output_30.style.setClasses(["pb-label"]);
						container.addChild(output_30, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_31 = new cpr.controls.Output();
						output_31.value = "적용";
						output_31.style.setClasses(["pb-label"]);
						container.addChild(output_31, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_32 = new cpr.controls.Output();
						output_32.value = "사용 예시";
						output_32.style.setClasses(["pb-label"]);
						container.addChild(output_32, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var output_33 = new cpr.controls.Output();
						output_33.value = "fw-normal";
						output_33.unselectable = false;
						output_33.style.setClasses(["pb-label"]);
						container.addChild(output_33, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var output_34 = new cpr.controls.Output();
						output_34.value = "동해물과 백두산이 마르고 닳도록";
						output_34.style.setClasses(["fw-normal"]);
						container.addChild(output_34, {
							"colIndex": 1,
							"rowIndex": 1
						});
						var output_35 = new cpr.controls.Output();
						output_35.value = "기본 스타일에 굵기가 400 이상으로 적용되어 있는 경우 이를 해제할 때 사용 (700 -> 400 으로 변경 시)";
						container.addChild(output_35, {
							"colIndex": 2,
							"rowIndex": 1
						});
						var output_36 = new cpr.controls.Output();
						output_36.value = "fw-medium";
						output_36.unselectable = false;
						output_36.style.setClasses(["pb-label"]);
						container.addChild(output_36, {
							"colIndex": 0,
							"rowIndex": 2
						});
						var output_37 = new cpr.controls.Output();
						output_37.value = "동해물과 백두산이 마르고 닳도록";
						output_37.style.setClasses(["fw-medium"]);
						container.addChild(output_37, {
							"colIndex": 1,
							"rowIndex": 2
						});
						var output_38 = new cpr.controls.Output();
						output_38.value = "";
						container.addChild(output_38, {
							"colIndex": 2,
							"rowIndex": 2
						});
						var output_39 = new cpr.controls.Output();
						output_39.value = "fw-bold";
						output_39.unselectable = false;
						output_39.style.setClasses(["pb-label"]);
						container.addChild(output_39, {
							"colIndex": 0,
							"rowIndex": 3
						});
						var output_40 = new cpr.controls.Output();
						output_40.value = "동해물과 백두산이 마르고 닳도록";
						output_40.style.setClasses(["fw-bold"]);
						container.addChild(output_40, {
							"colIndex": 1,
							"rowIndex": 3
						});
						var output_41 = new cpr.controls.Output();
						output_41.value = "";
						container.addChild(output_41, {
							"colIndex": 2,
							"rowIndex": 3
						});
					})(group_13);
					container.addChild(group_13, {
						"autoSize": "height",
						"width": "400px",
						"height": "146px"
					});
				})(group_12);
				container.addChild(group_12, {
					"autoSize": "height",
					"width": "1544px",
					"height": "190px"
				});
			})(group_11);
			container.addChild(group_11, {
				"autoSize": "height",
				"width": "1644px",
				"height": "281px"
			});
			
			var group_14 = new cpr.controls.Container();
			group_14.style.setClasses(["pb-content"]);
			var verticalLayout_12 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_12.scrollable = false;
			verticalLayout_12.spacing = 40;
			verticalLayout_12.leftMargin = 50;
			verticalLayout_12.rightMargin = 50;
			verticalLayout_12.topMargin = 50;
			verticalLayout_12.bottomMargin = 50;
			group_14.setLayout(verticalLayout_12);
			(function(container){
				var group_15 = new cpr.controls.Container();
				var verticalLayout_13 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_13.scrollable = false;
				verticalLayout_13.spacing = 14;
				group_15.setLayout(verticalLayout_13);
				(function(container){
					var userDefinedControl_6 = new udc.hk.pb.SectionTitle();
					userDefinedControl_6.title = "클래스 - 글꼴 꾸밈";
					container.addChild(userDefinedControl_6, {
						"autoSize": "none",
						"width": "1544px",
						"height": "29px"
					});
					var group_16 = new cpr.controls.Container();
					group_16.style.setClasses(["pb-table"]);
					var formLayout_4 = new cpr.controls.layouts.FormLayout();
					formLayout_4.scrollable = false;
					formLayout_4.topMargin = "4px";
					formLayout_4.rightMargin = "4px";
					formLayout_4.bottomMargin = "4px";
					formLayout_4.leftMargin = "4px";
					formLayout_4.horizontalSpacing = "8px";
					formLayout_4.verticalSpacing = "8px";
					formLayout_4.horizontalSeparatorWidth = 1;
					formLayout_4.verticalSeparatorWidth = 1;
					formLayout_4.setColumns(["150px", "200px", "2fr"]);
					formLayout_4.setUseColumnShade(0, true);
					formLayout_4.setRows(["28px", "28px", "28px", "28px"]);
					formLayout_4.setUseRowShade(0, true);
					group_16.setLayout(formLayout_4);
					(function(container){
						var output_42 = new cpr.controls.Output();
						output_42.value = "클래스명";
						output_42.style.setClasses(["pb-label"]);
						container.addChild(output_42, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_43 = new cpr.controls.Output();
						output_43.value = "적용";
						output_43.style.setClasses(["pb-label"]);
						container.addChild(output_43, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_44 = new cpr.controls.Output();
						output_44.value = "사용 예시";
						output_44.style.setClasses(["pb-label"]);
						container.addChild(output_44, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var output_45 = new cpr.controls.Output();
						output_45.value = "text-underline";
						output_45.unselectable = false;
						output_45.style.setClasses(["pb-label"]);
						container.addChild(output_45, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var output_46 = new cpr.controls.Output();
						output_46.value = "동해물과 백두산이 마르고 닳도록";
						output_46.style.setClasses(["text-underline"]);
						container.addChild(output_46, {
							"colIndex": 1,
							"rowIndex": 1
						});
						var output_47 = new cpr.controls.Output();
						output_47.value = "";
						container.addChild(output_47, {
							"colIndex": 2,
							"rowIndex": 1
						});
						var output_48 = new cpr.controls.Output();
						output_48.value = "hyper-text";
						output_48.unselectable = false;
						output_48.style.setClasses(["pb-label"]);
						if(typeof onOutputValueChange == "function") {
							output_48.addEventListener("value-change", onOutputValueChange);
						}
						container.addChild(output_48, {
							"colIndex": 0,
							"rowIndex": 2
						});
						var output_49 = new cpr.controls.Output();
						output_49.value = "동해물과 백두산이 마르고 닳도록";
						output_49.style.setClasses(["hyper-text"]);
						container.addChild(output_49, {
							"colIndex": 1,
							"rowIndex": 2
						});
						var output_50 = new cpr.controls.Output();
						output_50.value = "";
						container.addChild(output_50, {
							"colIndex": 2,
							"rowIndex": 2
						});
						var output_51 = new cpr.controls.Output();
						output_51.value = "text-link";
						output_51.unselectable = false;
						output_51.style.setClasses(["pb-label"]);
						container.addChild(output_51, {
							"colIndex": 0,
							"rowIndex": 3
						});
						var output_52 = new cpr.controls.Output();
						output_52.value = "동해물과 백두산이 마르고 닳도록";
						output_52.style.setClasses(["text-link"]);
						container.addChild(output_52, {
							"colIndex": 1,
							"rowIndex": 3
						});
						var output_53 = new cpr.controls.Output();
						output_53.value = "마우스 호버 시 밑줄이 표시되는 클래스";
						container.addChild(output_53, {
							"colIndex": 2,
							"rowIndex": 3
						});
					})(group_16);
					container.addChild(group_16, {
						"autoSize": "height",
						"width": "400px",
						"height": "146px"
					});
				})(group_15);
				container.addChild(group_15, {
					"autoSize": "height",
					"width": "1544px",
					"height": "190px"
				});
			})(group_14);
			container.addChild(group_14, {
				"autoSize": "height",
				"width": "1644px",
				"height": "281px"
			});
		}
	});
	app.title = "[디자인가이드] 타이포그래피";
	cpr.core.Platform.INSTANCE.register(app);
})();