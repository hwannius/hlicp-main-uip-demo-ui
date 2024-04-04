/*
 * App URI: pb/guide/TabFolder
 * Source Location: pb/guide/TabFolder.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("pb/guide/TabFolder", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * TabFolder.js
			 * Created at 2022. 9. 20. 오후 4:49:08.
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
					userDefinedControl_2.title = "탭폴더";
					userDefinedControl_2.subText = "탭폴더 컨트롤은 \"tab-box\" 클래스가 적용된 그룹에 배치되어야 합니다.";
					userDefinedControl_2.subTextStyle = "text-blue";
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
						var tabFolder_1 = new cpr.controls.TabFolder();
						var group_5 = new cpr.controls.Container();
						group_5.style.setClasses(["button-table-top-area"]);
						var flowLayout_2 = new cpr.controls.layouts.FlowLayout();
						flowLayout_2.scrollable = false;
						flowLayout_2.horizontalSpacing = 5;
						flowLayout_2.verticalSpacing = 0;
						flowLayout_2.horizontalAlign = "right";
						flowLayout_2.lineWrap = false;
						flowLayout_2.topMargin = 10;
						group_5.setLayout(flowLayout_2);
						(function(container){
							var button_1 = new cpr.controls.Button();
							button_1.value = "버튼";
							button_1.style.setClasses(["btn-primary04"]);
							container.addChild(button_1, {
								"autoSize": "width",
								"width": "43px",
								"height": "26px"
							});
							var button_2 = new cpr.controls.Button();
							button_2.value = "버튼";
							button_2.style.setClasses(["btn-primary04"]);
							container.addChild(button_2, {
								"autoSize": "width",
								"width": "43px",
								"height": "26px"
							});
						})(group_5);
						tabFolder_1.addHeaderControl(group_5, {"position": "right", "width": 91});
						
						var tabItem_1 = (function(tabFolder){
							var tabItem_1 = new cpr.controls.TabItem();
							tabItem_1.text = "선택되지 않은 탭";
							var group_6 = new cpr.controls.Container();
							group_6.style.setClasses(["tab-area"]);
							var verticalLayout_5 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_5.spacing = 12;
							verticalLayout_5.leftMargin = 10;
							verticalLayout_5.rightMargin = 10;
							verticalLayout_5.topMargin = 10;
							verticalLayout_5.bottomMargin = 10;
							group_6.setLayout(verticalLayout_5);
							(function(container){
								var output_2 = new cpr.controls.Output();
								output_2.value = "콘텐트";
								output_2.style.setClasses(["bg-secondary-dim", "text-secondary", "text-center"]);
								container.addChild(output_2, {
									"autoSize": "none",
									"width": "778px",
									"height": "140px"
								});
							})(group_6);
							tabItem_1.content = group_6;
							return tabItem_1;
						})(tabFolder_1);
						tabFolder_1.addTabItem(tabItem_1);
						
						var tabItem_2 = (function(tabFolder){
							var tabItem_2 = new cpr.controls.TabItem();
							tabItem_2.text = "선택된 탭";
							var group_7 = new cpr.controls.Container();
							group_7.style.setClasses(["tab-area"]);
							var verticalLayout_6 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_6.spacing = 12;
							verticalLayout_6.leftMargin = 10;
							verticalLayout_6.rightMargin = 10;
							verticalLayout_6.topMargin = 10;
							verticalLayout_6.bottomMargin = 10;
							group_7.setLayout(verticalLayout_6);
							(function(container){
								var output_3 = new cpr.controls.Output();
								output_3.value = "콘텐트";
								output_3.style.setClasses(["bg-secondary-dim", "text-secondary", "text-center"]);
								container.addChild(output_3, {
									"width": "780px",
									"height": "140px"
								});
							})(group_7);
							tabItem_2.content = group_7;
							return tabItem_2;
						})(tabFolder_1);
						tabFolder_1.addTabItem(tabItem_2);
						
						var tabItem_3 = (function(tabFolder){
							var tabItem_3 = new cpr.controls.TabItem();
							tabItem_3.text = "비활성화 탭";
							tabItem_3.enabled = false;
							var group_8 = new cpr.controls.Container();
							group_8.style.setClasses(["tab-area"]);
							var verticalLayout_7 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_7.spacing = 12;
							verticalLayout_7.leftMargin = 10;
							verticalLayout_7.rightMargin = 10;
							verticalLayout_7.topMargin = 10;
							verticalLayout_7.bottomMargin = 10;
							group_8.setLayout(verticalLayout_7);
							tabItem_3.content = group_8;
							return tabItem_3;
						})(tabFolder_1);
						tabFolder_1.addTabItem(tabItem_3);
						tabFolder_1.setSelectedTabItem(tabItem_2);
						container.addChild(tabFolder_1, {
							"autoSize": "height",
							"width": "800px",
							"height": "200px"
						});
					})(group_4);
					container.addChild(group_4, {
						"autoSize": "height",
						"width": "400px",
						"height": "201px"
					});
				})(group_3);
				container.addChild(group_3, {
					"autoSize": "height",
					"width": "1544px",
					"height": "244px"
				});
				var group_9 = new cpr.controls.Container();
				var verticalLayout_8 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_8.scrollable = false;
				verticalLayout_8.spacing = 14;
				group_9.setLayout(verticalLayout_8);
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
					var group_10 = new cpr.controls.Container();
					group_10.style.setClasses(["pb-table"]);
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
					formLayout_1.setRows(["28px", "26px", "26px", "26px", "26px", "26px", "26px", "26px", "26px", "26px", "26px", "26px", "26px", "26px"]);
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
					formLayout_1.setRowAutoSizing(10, true);
					formLayout_1.setRowAutoSizing(11, true);
					formLayout_1.setRowAutoSizing(12, true);
					formLayout_1.setRowAutoSizing(13, true);
					group_10.setLayout(formLayout_1);
					(function(container){
						var output_4 = new cpr.controls.Output();
						output_4.value = "속성명";
						output_4.style.setClasses(["pb-label"]);
						container.addChild(output_4, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_5 = new cpr.controls.Output();
						output_5.value = "사용여부";
						output_5.style.setClasses(["pb-label"]);
						container.addChild(output_5, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_6 = new cpr.controls.Output();
						output_6.value = "적용값";
						output_6.style.setClasses(["pb-label"]);
						container.addChild(output_6, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var output_7 = new cpr.controls.Output();
						output_7.value = "내용";
						output_7.style.setClasses(["pb-label"]);
						container.addChild(output_7, {
							"colIndex": 3,
							"rowIndex": 0
						});
						var output_8 = new cpr.controls.Output();
						output_8.value = "fieldLabel";
						output_8.unselectable = false;
						output_8.style.setClasses(["pb-label"]);
						container.addChild(output_8, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var output_9 = new cpr.controls.Output();
						output_9.value = "★";
						output_9.style.setClasses(["text-center"]);
						container.addChild(output_9, {
							"colIndex": 1,
							"rowIndex": 1
						});
						var output_10 = new cpr.controls.Output();
						output_10.value = "(논리적 레이블 값)";
						output_10.style.setClasses(["text-center"]);
						container.addChild(output_10, {
							"colIndex": 2,
							"rowIndex": 1
						});
						var output_11 = new cpr.controls.Output();
						output_11.value = "폼인 경우 1:1로 대응하는 레이블(라벨)의 값을 입력하거나 컨트롤에서 입력되는 값의 논리적인 레이블(라벨)의 값을 입력";
						container.addChild(output_11, {
							"colIndex": 3,
							"rowIndex": 1
						});
						var output_12 = new cpr.controls.Output();
						output_12.value = "headerArrowPosition";
						output_12.unselectable = false;
						output_12.style.setClasses(["pb-label"]);
						container.addChild(output_12, {
							"colIndex": 0,
							"rowIndex": 2
						});
						var output_13 = new cpr.controls.Output();
						output_13.value = "●";
						output_13.style.setClasses(["text-center"]);
						container.addChild(output_13, {
							"colIndex": 1,
							"rowIndex": 2
						});
						var output_14 = new cpr.controls.Output();
						output_14.value = "\"both\"";
						output_14.style.setClasses(["text-center"]);
						container.addChild(output_14, {
							"colIndex": 2,
							"rowIndex": 2
						});
						var output_15 = new cpr.controls.Output();
						output_15.value = "탭 폴더의 화살표 위치를 우측으로 고정함";
						container.addChild(output_15, {
							"colIndex": 3,
							"rowIndex": 2
						});
						var output_16 = new cpr.controls.Output();
						output_16.value = "headerArrowVisible";
						output_16.unselectable = false;
						output_16.style.setClasses(["pb-label"]);
						container.addChild(output_16, {
							"colIndex": 0,
							"rowIndex": 3
						});
						var output_17 = new cpr.controls.Output();
						output_17.value = "●";
						output_17.style.setClasses(["text-center"]);
						container.addChild(output_17, {
							"colIndex": 1,
							"rowIndex": 3
						});
						var output_18 = new cpr.controls.Output();
						output_18.value = "\"auto\" | \"show\"";
						output_18.style.setClasses(["text-center"]);
						container.addChild(output_18, {
							"colIndex": 2,
							"rowIndex": 3
						});
						var output_19 = new cpr.controls.Output();
						output_19.value = "탭 폴더의 화살표를 자동 또는 항상 표시로 설정할 수 있음";
						container.addChild(output_19, {
							"colIndex": 3,
							"rowIndex": 3
						});
						var output_20 = new cpr.controls.Output();
						output_20.value = "headerCheckable";
						output_20.unselectable = false;
						output_20.style.setClasses(["pb-label"]);
						container.addChild(output_20, {
							"colIndex": 0,
							"rowIndex": 4
						});
						var output_21 = new cpr.controls.Output();
						output_21.value = "○";
						output_21.style.setClasses(["text-center"]);
						container.addChild(output_21, {
							"colIndex": 1,
							"rowIndex": 4
						});
						var output_22 = new cpr.controls.Output();
						output_22.value = "false";
						output_22.style.setClasses(["text-center"]);
						container.addChild(output_22, {
							"colIndex": 2,
							"rowIndex": 4
						});
						var output_23 = new cpr.controls.Output();
						output_23.value = "탭 폴더 헤더의 아이템에서 체크박스를 사용할 것인지에 대한 여부. 체크박스 기능을 사용하지 않음";
						container.addChild(output_23, {
							"colIndex": 3,
							"rowIndex": 4
						});
						var output_24 = new cpr.controls.Output();
						output_24.value = "headerPosition";
						output_24.unselectable = false;
						output_24.style.setClasses(["pb-label"]);
						container.addChild(output_24, {
							"colIndex": 0,
							"rowIndex": 5
						});
						var output_25 = new cpr.controls.Output();
						output_25.value = "●";
						output_25.style.setClasses(["text-center"]);
						container.addChild(output_25, {
							"colIndex": 1,
							"rowIndex": 5
						});
						var output_26 = new cpr.controls.Output();
						output_26.value = "\"top\"";
						output_26.style.setClasses(["text-center"]);
						container.addChild(output_26, {
							"colIndex": 2,
							"rowIndex": 5
						});
						var output_27 = new cpr.controls.Output();
						output_27.value = "탭 폴더 헤더의 위치를 위로 표시";
						container.addChild(output_27, {
							"colIndex": 3,
							"rowIndex": 5
						});
						var output_28 = new cpr.controls.Output();
						output_28.value = "hideHeader";
						output_28.unselectable = false;
						output_28.style.setClasses(["pb-label"]);
						container.addChild(output_28, {
							"colIndex": 0,
							"rowIndex": 6
						});
						var output_29 = new cpr.controls.Output();
						output_29.value = "●";
						output_29.style.setClasses(["text-center"]);
						container.addChild(output_29, {
							"colIndex": 1,
							"rowIndex": 6
						});
						var output_30 = new cpr.controls.Output();
						output_30.value = "true | false";
						output_30.style.setClasses(["text-center"]);
						container.addChild(output_30, {
							"colIndex": 2,
							"rowIndex": 6
						});
						var output_31 = new cpr.controls.Output();
						output_31.value = "기본적으로 탭 폴더 헤더를 항상 표시하나 상황에 따라 탭 폴더의 헤더를 숨길 수 있음";
						container.addChild(output_31, {
							"colIndex": 3,
							"rowIndex": 6
						});
						var output_32 = new cpr.controls.Output();
						output_32.value = "itemAlign";
						output_32.unselectable = false;
						output_32.style.setClasses(["pb-label"]);
						container.addChild(output_32, {
							"colIndex": 0,
							"rowIndex": 7
						});
						var output_33 = new cpr.controls.Output();
						output_33.value = "●";
						output_33.style.setClasses(["text-center"]);
						container.addChild(output_33, {
							"colIndex": 1,
							"rowIndex": 7
						});
						var output_34 = new cpr.controls.Output();
						output_34.value = "\"leading\"";
						output_34.style.setClasses(["text-center"]);
						container.addChild(output_34, {
							"colIndex": 2,
							"rowIndex": 7
						});
						var output_35 = new cpr.controls.Output();
						output_35.value = "탭 아이템의 정렬을 왼쪽으로 함";
						container.addChild(output_35, {
							"colIndex": 3,
							"rowIndex": 7
						});
						var output_36 = new cpr.controls.Output();
						output_36.value = "itemSizing";
						output_36.unselectable = false;
						output_36.style.setClasses(["pb-label"]);
						container.addChild(output_36, {
							"colIndex": 0,
							"rowIndex": 8
						});
						var output_37 = new cpr.controls.Output();
						output_37.value = "●";
						output_37.style.setClasses(["text-center"]);
						container.addChild(output_37, {
							"colIndex": 1,
							"rowIndex": 8
						});
						var output_38 = new cpr.controls.Output();
						output_38.value = "\"fixed\"";
						output_38.style.setClasses(["text-center"]);
						container.addChild(output_38, {
							"colIndex": 2,
							"rowIndex": 8
						});
						var output_39 = new cpr.controls.Output();
						output_39.value = "텍스트 크기에 따라 탭 아이템의 너비가 자동으로 늘거나 줄 수 있도록 \"auto\"로 값을 설정";
						container.addChild(output_39, {
							"colIndex": 3,
							"rowIndex": 8
						});
						var output_40 = new cpr.controls.Output();
						output_40.value = "itemSpacing";
						output_40.unselectable = false;
						output_40.style.setClasses(["pb-label"]);
						container.addChild(output_40, {
							"colIndex": 0,
							"rowIndex": 9
						});
						var output_41 = new cpr.controls.Output();
						output_41.value = "●";
						output_41.style.setClasses(["text-center"]);
						container.addChild(output_41, {
							"colIndex": 1,
							"rowIndex": 9
						});
						var output_42 = new cpr.controls.Output();
						output_42.value = "-1";
						output_42.style.setClasses(["text-center"]);
						container.addChild(output_42, {
							"colIndex": 2,
							"rowIndex": 9
						});
						var output_43 = new cpr.controls.Output();
						output_43.value = "탭 아이템 간 간격";
						container.addChild(output_43, {
							"colIndex": 3,
							"rowIndex": 9
						});
						var output_44 = new cpr.controls.Output();
						output_44.value = "preferredItemWidth";
						output_44.unselectable = false;
						output_44.style.setClasses(["pb-label"]);
						container.addChild(output_44, {
							"colIndex": 0,
							"rowIndex": 10
						});
						var output_45 = new cpr.controls.Output();
						output_45.value = "●";
						output_45.style.setClasses(["text-center"]);
						container.addChild(output_45, {
							"colIndex": 1,
							"rowIndex": 10
						});
						var output_46 = new cpr.controls.Output();
						output_46.value = "160";
						output_46.style.setClasses(["text-center"]);
						container.addChild(output_46, {
							"colIndex": 2,
							"rowIndex": 10
						});
						var output_47 = new cpr.controls.Output();
						output_47.value = "itemSizing 속성을 \"auto\"로 사용하므로 해당 속성을 적용하지 않음. 만약 특수한 경우에 해당하는 탭에서 itemSizing 속성을 \"fixed\"로 변경하는 경우 해당 속성을 반드시 확인해야 함";
						container.addChild(output_47, {
							"colIndex": 3,
							"rowIndex": 10
						});
						var output_48 = new cpr.controls.Output();
						output_48.value = "showCloseOnlyActive";
						output_48.unselectable = false;
						output_48.style.setClasses(["pb-label"]);
						container.addChild(output_48, {
							"colIndex": 0,
							"rowIndex": 11
						});
						var output_49 = new cpr.controls.Output();
						output_49.value = "○";
						output_49.style.setClasses(["text-center"]);
						container.addChild(output_49, {
							"colIndex": 1,
							"rowIndex": 11
						});
						var output_50 = new cpr.controls.Output();
						output_50.value = "false";
						output_50.style.setClasses(["text-center"]);
						container.addChild(output_50, {
							"colIndex": 2,
							"rowIndex": 11
						});
						var output_51 = new cpr.controls.Output();
						output_51.value = "일반적인 탭에서는 \"closable=false\"를 적용하나, MDI폴더 같은 경우에는 닫기 버튼을 표시할 수 있음. 그러나 모든 탭 아이템을 닫을 수 있도록 표시하기 때문에 해당 속성은 사용하지 않음";
						container.addChild(output_51, {
							"colIndex": 3,
							"rowIndex": 11
						});
						var output_52 = new cpr.controls.Output();
						output_52.value = "tooltip";
						output_52.unselectable = false;
						output_52.style.setClasses(["pb-label"]);
						container.addChild(output_52, {
							"colIndex": 0,
							"rowIndex": 12
						});
						var output_53 = new cpr.controls.Output();
						output_53.value = "△";
						output_53.style.setClasses(["text-center"]);
						container.addChild(output_53, {
							"colIndex": 1,
							"rowIndex": 12
						});
						var output_54 = new cpr.controls.Output();
						output_54.value = "(컨트롤의 힌트)";
						output_54.style.setClasses(["text-center"]);
						container.addChild(output_54, {
							"colIndex": 2,
							"rowIndex": 12
						});
						var output_55 = new cpr.controls.Output();
						output_55.value = "마우스 오버 시 인풋박스에 대한 힌트 제공 필요할 때 사용. 해당 속성을 작성하면 title 속성으로 적용됨";
						container.addChild(output_55, {
							"colIndex": 3,
							"rowIndex": 12
						});
						var output_56 = new cpr.controls.Output();
						output_56.value = "useItemTextEllipsis";
						output_56.unselectable = false;
						output_56.style.setClasses(["pb-label"]);
						container.addChild(output_56, {
							"colIndex": 0,
							"rowIndex": 13
						});
						var output_57 = new cpr.controls.Output();
						output_57.value = "○";
						output_57.style.setClasses(["text-center"]);
						container.addChild(output_57, {
							"colIndex": 1,
							"rowIndex": 13
						});
						var output_58 = new cpr.controls.Output();
						output_58.value = "false";
						output_58.style.setClasses(["text-center"]);
						container.addChild(output_58, {
							"colIndex": 2,
							"rowIndex": 13
						});
						var output_59 = new cpr.controls.Output();
						output_59.value = "탭 아이템의 텍스트를 모두 표시할 수 있도록 말줄임 표시를 하지 않음";
						container.addChild(output_59, {
							"colIndex": 3,
							"rowIndex": 13
						});
					})(group_10);
					container.addChild(group_10, {
						"autoSize": "height",
						"width": "400px",
						"height": "480px"
					});
				})(group_9);
				container.addChild(group_9, {
					"autoSize": "height",
					"width": "1544px",
					"height": "591px"
				});
			})(group_2);
			container.addChild(group_2, {
				"autoSize": "height",
				"width": "1644px",
				"height": "970px"
			});
			
			var group_11 = new cpr.controls.Container();
			group_11.style.setClasses(["pb-content"]);
			var verticalLayout_9 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_9.scrollable = false;
			verticalLayout_9.spacing = 40;
			verticalLayout_9.leftMargin = 50;
			verticalLayout_9.rightMargin = 50;
			verticalLayout_9.topMargin = 50;
			verticalLayout_9.bottomMargin = 50;
			group_11.setLayout(verticalLayout_9);
			(function(container){
				var group_12 = new cpr.controls.Container();
				var verticalLayout_10 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_10.scrollable = false;
				verticalLayout_10.spacing = 14;
				group_12.setLayout(verticalLayout_10);
				(function(container){
					var userDefinedControl_4 = new udc.hk.pb.SectionTitle("sectiontitle1");
					userDefinedControl_4.title = "클래스";
					container.addChild(userDefinedControl_4, {
						"autoSize": "none",
						"width": "1544px",
						"height": "29px"
					});
					var group_13 = new cpr.controls.Container();
					group_13.style.setClasses(["pb-table"]);
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
					formLayout_2.setColumns(["150px", "600px", "1fr"]);
					formLayout_2.setUseColumnShade(0, true);
					formLayout_2.setRows(["28px", "200px", "200px", "200px", "200px"]);
					formLayout_2.setUseRowShade(0, true);
					group_13.setLayout(formLayout_2);
					(function(container){
						var output_60 = new cpr.controls.Output();
						output_60.value = "클래스명";
						output_60.style.setClasses(["pb-label"]);
						container.addChild(output_60, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_61 = new cpr.controls.Output();
						output_61.value = "적용";
						output_61.style.setClasses(["pb-label"]);
						container.addChild(output_61, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var output_62 = new cpr.controls.Output();
						output_62.value = "내용";
						output_62.style.setClasses(["pb-label"]);
						container.addChild(output_62, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var output_63 = new cpr.controls.Output();
						output_63.value = "use-closable";
						output_63.style.setClasses(["pb-label"]);
						container.addChild(output_63, {
							"colIndex": 0,
							"rowIndex": 1
						});
						var tabFolder_2 = new cpr.controls.TabFolder();
						tabFolder_2.style.setClasses(["use-closable"]);
						
						var tabItem_4 = (function(tabFolder){
							var tabItem_4 = new cpr.controls.TabItem();
							tabItem_4.text = "아이템";
							tabItem_4.closable = true;
							var group_14 = new cpr.controls.Container();
							group_14.style.setClasses(["tab-area"]);
							var verticalLayout_11 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_11.spacing = 12;
							verticalLayout_11.leftMargin = 10;
							verticalLayout_11.rightMargin = 10;
							verticalLayout_11.topMargin = 10;
							verticalLayout_11.bottomMargin = 10;
							group_14.setLayout(verticalLayout_11);
							tabItem_4.content = group_14;
							return tabItem_4;
						})(tabFolder_2);
						tabFolder_2.addTabItem(tabItem_4);
						
						var tabItem_5 = (function(tabFolder){
							var tabItem_5 = new cpr.controls.TabItem();
							tabItem_5.text = "아이템";
							tabItem_5.closable = true;
							var group_15 = new cpr.controls.Container();
							group_15.style.setClasses(["tab-area"]);
							var verticalLayout_12 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_12.spacing = 12;
							verticalLayout_12.leftMargin = 10;
							verticalLayout_12.rightMargin = 10;
							verticalLayout_12.topMargin = 10;
							verticalLayout_12.bottomMargin = 10;
							group_15.setLayout(verticalLayout_12);
							tabItem_5.content = group_15;
							return tabItem_5;
						})(tabFolder_2);
						tabFolder_2.addTabItem(tabItem_5);
						
						var tabItem_6 = (function(tabFolder){
							var tabItem_6 = new cpr.controls.TabItem();
							tabItem_6.text = "아이템";
							tabItem_6.closable = true;
							var group_16 = new cpr.controls.Container();
							group_16.style.setClasses(["tab-area"]);
							var verticalLayout_13 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_13.spacing = 12;
							verticalLayout_13.leftMargin = 10;
							verticalLayout_13.rightMargin = 10;
							verticalLayout_13.topMargin = 10;
							verticalLayout_13.bottomMargin = 10;
							group_16.setLayout(verticalLayout_13);
							tabItem_6.content = group_16;
							return tabItem_6;
						})(tabFolder_2);
						tabFolder_2.addTabItem(tabItem_6);
						tabFolder_2.setSelectedTabItem(tabItem_4);
						container.addChild(tabFolder_2, {
							"colIndex": 1,
							"rowIndex": 1
						});
						var output_64 = new cpr.controls.Output();
						output_64.value = "탭 아이템에 닫기 버튼을 사용하는 경우 텍스트의 중앙 정렬을 맞추기 위해 적용하는 클래스";
						container.addChild(output_64, {
							"colIndex": 2,
							"rowIndex": 1
						});
						var output_65 = new cpr.controls.Output();
						output_65.value = "btn-tab-trailing";
						output_65.style.setClasses(["pb-label"]);
						container.addChild(output_65, {
							"colIndex": 0,
							"rowIndex": 2
						});
						var tabFolder_3 = new cpr.controls.TabFolder();
						tabFolder_3.style.setClasses(["use-closable"]);
						var group_17 = new cpr.controls.Container();
						var xYLayout_1 = new cpr.controls.layouts.XYLayout();
						xYLayout_1.scrollable = false;
						group_17.setLayout(xYLayout_1);
						(function(container){
							var button_3 = new cpr.controls.Button();
							button_3.value = "추가";
							button_3.style.setClasses(["btn-tab-trailing"]);
							container.addChild(button_3, {
								"top": "0px",
								"right": "0px",
								"bottom": "0px",
								"left": "0px"
							});
						})(group_17);
						tabFolder_3.addHeaderControl(group_17, {"position": "trailing", "width": 160});
						
						var tabItem_7 = (function(tabFolder){
							var tabItem_7 = new cpr.controls.TabItem();
							tabItem_7.text = "아이템";
							tabItem_7.closable = true;
							var group_18 = new cpr.controls.Container();
							group_18.style.setClasses(["tab-area"]);
							var verticalLayout_14 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_14.spacing = 12;
							verticalLayout_14.leftMargin = 10;
							verticalLayout_14.rightMargin = 10;
							verticalLayout_14.topMargin = 10;
							verticalLayout_14.bottomMargin = 10;
							group_18.setLayout(verticalLayout_14);
							tabItem_7.content = group_18;
							return tabItem_7;
						})(tabFolder_3);
						tabFolder_3.addTabItem(tabItem_7);
						
						var tabItem_8 = (function(tabFolder){
							var tabItem_8 = new cpr.controls.TabItem();
							tabItem_8.text = "아이템";
							tabItem_8.closable = true;
							var group_19 = new cpr.controls.Container();
							group_19.style.setClasses(["tab-area"]);
							var verticalLayout_15 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_15.spacing = 12;
							verticalLayout_15.leftMargin = 10;
							verticalLayout_15.rightMargin = 10;
							verticalLayout_15.topMargin = 10;
							verticalLayout_15.bottomMargin = 10;
							group_19.setLayout(verticalLayout_15);
							tabItem_8.content = group_19;
							return tabItem_8;
						})(tabFolder_3);
						tabFolder_3.addTabItem(tabItem_8);
						tabFolder_3.setSelectedTabItem(tabItem_7);
						container.addChild(tabFolder_3, {
							"colIndex": 1,
							"rowIndex": 2
						});
						var output_66 = new cpr.controls.Output();
						output_66.value = "해당 컨트롤은 버튼에 적용하는 클래스로, 탭 헤더의 컨트롤 중 \"trailing\" 으로 아이템을 추가하는 버튼을 사용하는 경우 다음과 같이 적용함";
						container.addChild(output_66, {
							"colIndex": 2,
							"rowIndex": 2
						});
						var output_67 = new cpr.controls.Output();
						output_67.value = "button-table-top-area";
						output_67.style.setClasses(["pb-label"]);
						container.addChild(output_67, {
							"colIndex": 0,
							"rowIndex": 3
						});
						var tabFolder_4 = new cpr.controls.TabFolder();
						var group_20 = new cpr.controls.Container();
						group_20.style.setClasses(["button-table-top-area"]);
						var flowLayout_3 = new cpr.controls.layouts.FlowLayout();
						flowLayout_3.scrollable = false;
						flowLayout_3.horizontalSpacing = 5;
						flowLayout_3.verticalSpacing = 0;
						flowLayout_3.horizontalAlign = "right";
						flowLayout_3.lineWrap = false;
						flowLayout_3.topMargin = 10;
						group_20.setLayout(flowLayout_3);
						(function(container){
							var button_4 = new cpr.controls.Button();
							button_4.value = "버튼";
							button_4.style.setClasses(["btn-primary04"]);
							container.addChild(button_4, {
								"autoSize": "width",
								"width": "43px",
								"height": "26px"
							});
							var button_5 = new cpr.controls.Button();
							button_5.value = "버튼";
							button_5.style.setClasses(["btn-primary04"]);
							container.addChild(button_5, {
								"autoSize": "width",
								"width": "43px",
								"height": "26px"
							});
						})(group_20);
						tabFolder_4.addHeaderControl(group_20, {"position": "right", "width": 91});
						
						var tabItem_9 = (function(tabFolder){
							var tabItem_9 = new cpr.controls.TabItem();
							tabItem_9.text = "아이템";
							tabItem_9.closable = true;
							var group_21 = new cpr.controls.Container();
							group_21.style.setClasses(["tab-area"]);
							var verticalLayout_16 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_16.spacing = 12;
							verticalLayout_16.leftMargin = 10;
							verticalLayout_16.rightMargin = 10;
							verticalLayout_16.topMargin = 10;
							verticalLayout_16.bottomMargin = 10;
							group_21.setLayout(verticalLayout_16);
							tabItem_9.content = group_21;
							return tabItem_9;
						})(tabFolder_4);
						tabFolder_4.addTabItem(tabItem_9);
						
						var tabItem_10 = (function(tabFolder){
							var tabItem_10 = new cpr.controls.TabItem();
							tabItem_10.text = "아이템";
							tabItem_10.closable = true;
							var group_22 = new cpr.controls.Container();
							group_22.style.setClasses(["tab-area"]);
							var verticalLayout_17 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_17.spacing = 12;
							verticalLayout_17.leftMargin = 10;
							verticalLayout_17.rightMargin = 10;
							verticalLayout_17.topMargin = 10;
							verticalLayout_17.bottomMargin = 10;
							group_22.setLayout(verticalLayout_17);
							tabItem_10.content = group_22;
							return tabItem_10;
						})(tabFolder_4);
						tabFolder_4.addTabItem(tabItem_10);
						
						var tabItem_11 = (function(tabFolder){
							var tabItem_11 = new cpr.controls.TabItem();
							tabItem_11.text = "아이템";
							tabItem_11.closable = true;
							var group_23 = new cpr.controls.Container();
							group_23.style.setClasses(["tab-area"]);
							var verticalLayout_18 = new cpr.controls.layouts.VerticalLayout();
							verticalLayout_18.spacing = 12;
							verticalLayout_18.leftMargin = 10;
							verticalLayout_18.rightMargin = 10;
							verticalLayout_18.topMargin = 10;
							verticalLayout_18.bottomMargin = 10;
							group_23.setLayout(verticalLayout_18);
							tabItem_11.content = group_23;
							return tabItem_11;
						})(tabFolder_4);
						tabFolder_4.addTabItem(tabItem_11);
						tabFolder_4.setSelectedTabItem(tabItem_9);
						container.addChild(tabFolder_4, {
							"colIndex": 1,
							"rowIndex": 3
						});
						var output_68 = new cpr.controls.Output();
						output_68.value = "해당 컨트롤은 버튼이 배치되는 그룹 영역에 적용하는 클래스로, 탭 헤더의 컨트롤 중 \"right\"로 추가되는 영역에 적용. 해당 영역의 너비는 버튼이 모두 표시될 수 있는 크기로 설정해야 한다.\n\n플로우 레이아웃\n- margin : 10px 0px 0px 0px\n- horizontalAlign : right\n- horizontalSpacing : 5\n- verticalSpacing : 0\n- lineWrap : false\n- scrollable : false";
						container.addChild(output_68, {
							"colIndex": 2,
							"rowIndex": 3
						});
						var output_69 = new cpr.controls.Output();
						output_69.value = "has-detail";
						output_69.style.setClasses(["pb-label"]);
						container.addChild(output_69, {
							"colIndex": 0,
							"rowIndex": 4
						});
						var tabFolder_5 = new cpr.controls.TabFolder();
						tabFolder_5.itemDisplayExp = "text + sstr(\"\\n보험료 : 34,520원\", [\"caption\"])";
						tabFolder_5.preferredItemWidth = 238;
						tabFolder_5.style.header.setClasses(["has-detail"]);
						var group_24 = new cpr.controls.Container();
						var flowLayout_4 = new cpr.controls.layouts.FlowLayout();
						flowLayout_4.scrollable = false;
						flowLayout_4.horizontalSpacing = 5;
						flowLayout_4.verticalSpacing = 0;
						flowLayout_4.horizontalAlign = "right";
						flowLayout_4.lineWrap = false;
						group_24.setLayout(flowLayout_4);
						(function(container){
							var button_6 = new cpr.controls.Button();
							button_6.value = "가설복사";
							button_6.style.setClasses(["btn-secondary01"]);
							container.addChild(button_6, {
								"width": "64px",
								"height": "61px"
							});
						})(group_24);
						tabFolder_5.addHeaderControl(group_24, {"position": "right", "width": 64});
						
						var tabItem_12 = (function(tabFolder){
							var tabItem_12 = new cpr.controls.TabItem();
							tabItem_12.text = "가설(설계번호)";
							tabItem_12.closable = true;
							var group_25 = new cpr.controls.Container();
							var xYLayout_2 = new cpr.controls.layouts.XYLayout();
							group_25.setLayout(xYLayout_2);
							tabItem_12.content = group_25;
							return tabItem_12;
						})(tabFolder_5);
						tabFolder_5.addTabItem(tabItem_12);
						
						var tabItem_13 = (function(tabFolder){
							var tabItem_13 = new cpr.controls.TabItem();
							tabItem_13.text = "가설(설계번호)";
							tabItem_13.closable = true;
							var group_26 = new cpr.controls.Container();
							var xYLayout_3 = new cpr.controls.layouts.XYLayout();
							group_26.setLayout(xYLayout_3);
							tabItem_13.content = group_26;
							return tabItem_13;
						})(tabFolder_5);
						tabFolder_5.addTabItem(tabItem_13);
						tabFolder_5.setSelectedTabItem(tabItem_12);
						container.addChild(tabFolder_5, {
							"colIndex": 1,
							"rowIndex": 4
						});
						var output_70 = new cpr.controls.Output();
						output_70.value = "해당 클래스는 탭 폴더의 헤더 스타일러에 적용하며, preferredItemWidth=238로 설정. 디테일 내용은 itemDisplayExp 속성을 사용하여 추가하며, 복잡한 로직이 필요한 경우 앱 함수 또는 공통 함수를 통해 StyledString을 추가하세요.";
						container.addChild(output_70, {
							"colIndex": 2,
							"rowIndex": 4
						});
					})(group_13);
					container.addChild(group_13, {
						"autoSize": "height",
						"width": "400px",
						"height": "870px"
					});
				})(group_12);
				container.addChild(group_12, {
					"autoSize": "height",
					"width": "1544px",
					"height": "978px"
				});
			})(group_11);
			container.addChild(group_11, {
				"autoSize": "height",
				"width": "1644px",
				"height": "1059px"
			});
		}
	});
	app.title = "[디자인가이드] 탭폴더";
	cpr.core.Platform.INSTANCE.register(app);
})();
