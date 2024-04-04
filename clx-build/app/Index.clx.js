/*
 * App URI: app/Index
 * Source Location: app/Index.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("app/Index", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * Index.js
			 * Created at 2022. 11. 17. 오전 10:43:30.
			 *
			 * @author ryu
			 ************************************************/

			var util = createCommonUtil()

			/**
			 * 화면을 호출하여 MDI 페이지에 추가하는 함수입니다. 외부에서 호출될 수 있습니다.
			 * @param {cpr.data.Row} poRow 선택된 데이터 로우 (데이터셋)
			 * @param {Object} poInitParam? 오픈될 메뉴에 전달할 파라미터
			 * @param {readyCallback?:(embApp:cpr.controls.EmbeddedApp)=>null} poOptions? 옵션 파라미터
			 */
			function openPage(poRow, poInitParam,poOptions){
				var voRow = poRow;
				var vsCallPage = ValueUtil.fixNull(voRow.getValue("appId"));
				
				if(vsCallPage == "") {
					return;
				}
				var vcMdiCn = app.lookup("mdiCn");
				
				var vsAppId = "";
				if(vsCallPage.indexOf(".clx") != -1) {
					vsAppId = vsCallPage.substring(0,vsCallPage.lastIndexOf(".clx"));
				}
				var voOpenedTab = vcMdiCn.findItemWithAppID(vsAppId);
				if(voOpenedTab) {
					vcMdiCn.setSelectedTabItem(voOpenedTab);
					return;
				}
				
				var mdiCn = app.lookup("mdiCn");
				var vMaxWindowCnt = 20; 
				//오픈 창갯수 제한
				if(mdiCn.getTabItems().length > vMaxWindowCnt-1){
					//프로그램 탭은 @개를 초과할 수 없습니다. \n열려있는 프로그램을 닫은후 선택해 주세요.
					util.Msg.alertDlg(app, "INF-M012", [vMaxWindowCnt]);
					return false;
				}
				var vsSavedItem= sessionStorage.getItem("openedMenus");
				var vaObjectItem = ValueUtil.fixNull(vsSavedItem) == "" ? [] : JSON.parse(vsSavedItem);
				var vaOpenedMenuID = vaObjectItem.map(function(each){
					var voMenuInfo = JSON.parse(each)["row"];
					var vsRowPageId = voMenuInfo["value"];
					return vsRowPageId;
				});
				
				vcMdiCn.addItemWithApp(vsAppId, true, function( /* cpr.controls.TabItem */ tabItem) {
						tabItem.text = voRow.getValue("label");
						var voMenuInfo = {
							"row" : voRow.getRowData()
						}
						if(ValueUtil.fixNull(poInitParam) != "") {
							voMenuInfo["initParam"] = poInitParam;
						}
						/** @type cpr.controls.EmbeddedApp */
						var vcEmb = tabItem.content;
						//임베디드앱이 준비가 되면 처리할 작업 등록
						if(vaOpenedMenuID.indexOf(voRow.getValue("value")) != -1) {
							tabItem.checked = true;
						}
						vcEmb.ready(function( /* cpr.controls.EmbeddedApp */ e) {
							
							if(!ValueUtil.isNull(poInitParam)){
								vcEmb.setAppProperty("initValue", poInitParam);
							}
							
							if(ValueUtil.fixNull(poOptions) != "" && poOptions["readyCallback"]) {
								poOptions["readyCallback"].call(null, e);
							}
						});
						
					});	
			}


			/*
			 * 체크 박스에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnHideClick(e){
				var btnHide = e.control;
				
				var vbExpanded = app.lookup("grpSidebar").visible;
				if (vbExpanded){
					app.lookup("grpSidebar").visible = false;
					app.lookup("grpMSidebar").visible = true;
					app.getContainer().updateConstraint(btnHide, {
						left: "12px"
					});
					app.getContainer().updateConstraint(app.lookup("grpNavbr"), {
						left: "46px"
					});
					app.getContainer().updateConstraint(app.lookup("mdiCn"), {
						left: "46px"
					});
				} else {
					app.lookup("grpSidebar").visible = true;
					app.lookup("grpMSidebar").visible = false;
					app.getContainer().updateConstraint(btnHide, {
						left: "280px"
					});
					app.getContainer().updateConstraint(app.lookup("grpNavbr"), {
						left: "280px"
					});
					app.getContainer().updateConstraint(app.lookup("mdiCn"), {
						left: "280px"
					});
				}
			}

			/*
			 * 버튼(btnClose)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnCloseClick(e){
				var btnClose = e.control;
				
				app.lookup("mdiCn").closeAll();
			}

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				
				app.lookup("treMenu").expandAllItems();
				app.lookup("mdiCn").closeAll();
				app.lookup("treMenu").selectItemByValue("uw001");
			}

			/*
			 * 사이드 내비게이션에서 selection-change 이벤트 발생 시 호출.
			 * 선택된 Item 값이 저장된 후에 발생하는 이벤트.
			 */
			function onTreMenuSelectionChange(e){
				var voItemRow = e.newSelection[0].row;
				var vsCallPage = voItemRow.getValue("appId");
				if (ValueUtil.fixNull(vsCallPage) != ""){
					openPage(voItemRow, true);
				}
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("dsMn");
			dataSet_1.parseData({
				"columns": [
					{"name": "label"},
					{"name": "value"},
					{"name": "parent"},
					{"name": "appId"}
				],
				"rows": [
					{"label": "계약변경", "value": "value0", "parent": "", "appId": ""},
					{"label": "심사메인", "value": "uw001", "parent": "value0", "appId": "app/240228/UW001.clx"},
					{"label": "SFA시연화면", "value": "value1", "parent": "", "appId": ""},
					{"label": "상품", "value": "value2", "parent": "value1", "appId": ""},
					{"label": "보험료/준비급 조회", "value": "보험료+준비급 조회", "parent": "value2", "appId": "sfa/상품/보험료+준비급 조회.clx"},
					{"label": "계산상세내역조회", "value": "PDAL11M0", "parent": "value2", "appId": "sfa/상품/PDAL11M0.clx"},
					{"label": "테스트이력조회", "value": "PDAL01M0", "parent": "value2", "appId": "sfa/상품/PDAL01M0.clx"},
					{"label": "갱신정보관리", "value": "PDAI11M0", "parent": "value2", "appId": "sfa/상품/PDAI11M0.clx"},
					{"label": "영업", "value": "value3", "parent": "value1", "appId": ""},
					{"label": "기본정보등록", "value": "SLAA01M0", "parent": "value3", "appId": "sfa/영업/SLAA01M0.clx"},
					{"label": "FTP교육대상자선정", "value": "SLCA01M0", "parent": "value3", "appId": "sfa/영업/SLCA01M0.clx"},
					{"label": "챌린지교육대상자선정", "value": "SLCA01M2", "parent": "value3", "appId": "sfa/영업/SLCA01M2.clx"},
					{"label": "시험응시/합격", "value": "SLAA05M0", "parent": "value3", "appId": "sfa/영업/SLAA05M0.clx"},
					{"label": "협회사항조회", "value": "SLAB01M0", "parent": "value3", "appId": "sfa/영업/SLAB01M0.clx"},
					{"label": "신규위촉재위촉", "value": "SLBB02M0", "parent": "value3", "appId": "sfa/영업/SLBB02M0.clx"},
					{"label": "모집인등록신청/결과", "value": "SLAB02M0", "parent": "value3", "appId": "sfa/영업/SLAB02M0.clx"},
					{"label": "모집인등록말소/결과", "value": "SLAB02M1", "parent": "value3", "appId": "sfa/영업/SLAB02M1.clx"},
					{"label": "기본사항일부정정", "value": "SLBC02M0", "parent": "value3", "appId": "sfa/영업/SLBC02M0.clx"},
					{"label": "인사세부사항", "value": "SLBA02M0", "parent": "value3", "appId": "sfa/영업/SLBA02M0.clx"},
					{"label": "교육대상자입력", "value": "SLCB01M2", "parent": "value3", "appId": "sfa/영업/SLCB01M2.clx"},
					{"label": "일자별교육관리", "value": "SLCB01M1", "parent": "value3", "appId": "sfa/영업/SLCB01M1.clx"},
					{"label": "교육수료처리", "value": "SLCB01M3", "parent": "value3", "appId": "sfa/영업/SLCB01M3.clx"},
					{"label": "수작업수수료관리", "value": "SLGD01M0", "parent": "value3", "appId": "sfa/영업/SLGD01M0.clx"},
					{"label": "수수료지급상세현황", "value": "SLGA30M0", "parent": "value3", "appId": "sfa/영업/SLGA30M0.clx"},
					{"label": "기본사항처리", "value": "SLEA02M1", "parent": "value3", "appId": "sfa/영업/SLEA02M1.clx"},
					{"label": "기본사항조회", "value": "SLEA01M0", "parent": "value3", "appId": "sfa/영업/SLEA01M0.clx"},
					{"label": "실시간신계약실적", "value": "SLFC01M0", "parent": "value3", "appId": "sfa/영업/SLFC01M0.clx"},
					{"label": "구분별신계약순위", "value": "SLFC04M0", "parent": "value3", "appId": "sfa/영업/SLFC04M0.clx"},
					{"label": "월별/상품별신계약실적", "value": "SLFC02M1", "parent": "value3", "appId": "sfa/영업/SLFC02M1.clx"},
					{"label": "월별신계약건별현황", "value": "SLFC03M0", "parent": "value3", "appId": "sfa/영업/SLFC03M0.clx"},
					{"label": "조직별계속보험료", "value": "SLFD01M2", "parent": "value3", "appId": "sfa/영업/SLFD01M2.clx"},
					{"label": "조직별,설계사별수금원부", "value": "SLFE04M0", "parent": "value3", "appId": "sfa/영업/SLFE04M0.clx"},
					{"label": "조직별유지율현황", "value": "SLFG01M0", "parent": "value3", "appId": "sfa/영업/SLFG01M0.clx"},
					{"label": "조직별지급금총괄현황", "value": "SLFF01M0", "parent": "value3", "appId": "sfa/영업/SLFF01M0.clx"},
					{"label": "조직종합업적", "value": "SLFI01M0", "parent": "value3", "appId": "sfa/영업/SLFI01M0.clx"},
					{"label": "신계약/UW", "value": "value4", "parent": "value1", "appId": ""},
					{"label": "가입설계", "value": "PPB100M0", "parent": "value4", "appId": "sfa/신계약+UW/PPB100M0.clx"},
					{"label": "청약입력및전송", "value": "PPC100M0", "parent": "value4", "appId": "sfa/신계약+UW/PPC100M0.clx"},
					{"label": "RT계좌일괄입력", "value": "NBBR10M0", "parent": "value4", "appId": "sfa/신계약+UW/NBBR10M0.clx"},
					{"label": "샘플 화면", "value": "value9", "parent": "", "appId": ""},
					{"label": "그리드 샘플페이지", "value": "샘플페이지", "parent": "value9", "appId": "sample/샘플페이지.clx"}
				]
			});
			app.register(dataSet_1);
			app.supportMedia("all and (min-width: 3160px)", "Hlicp-WIDE");
			app.supportMedia("all and (min-width: 1600px) and (max-width: 3159px)", "Hlicp-FULL");
			app.supportMedia("all and (min-width: 790px) and (max-width: 1599px)", "Hlicp-DIV");
			app.supportMedia("all and (max-width: 789px)", "Hlicp-POP");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container("grpTopbar");
			group_1.style.setClasses(["header"]);
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "0px";
			formLayout_1.verticalSpacing = "0px";
			formLayout_1.setColumns(["280px", "1fr"]);
			formLayout_1.setRows(["1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var group_2 = new cpr.controls.Container();
				var xYLayout_2 = new cpr.controls.layouts.XYLayout();
				xYLayout_2.scrollable = false;
				group_2.setLayout(xYLayout_2);
				(function(container){
					var image_1 = new cpr.controls.Image();
					image_1.src = "theme/images/com/main/hci-logo-bg-w.png";
					(function(image_1){
					})(image_1);
					container.addChild(image_1, {
						"left": "20px",
						"width": "90px",
						"height": "20px",
						"top": "calc(50% - 10px)"
					});
					var output_1 = new cpr.controls.Output();
					output_1.value = "보험코어시스템";
					output_1.style.setClasses(["h2"]);
					container.addChild(output_1, {
						"left": "117px",
						"width": "100px",
						"height": "20px",
						"top": "calc(50% - 10px)"
					});
				})(group_2);
				container.addChild(group_2, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var group_3 = new cpr.controls.Container("grpTopMenu");
				var formLayout_2 = new cpr.controls.layouts.FormLayout();
				formLayout_2.scrollable = false;
				formLayout_2.topMargin = "0px";
				formLayout_2.rightMargin = "17px";
				formLayout_2.bottomMargin = "0px";
				formLayout_2.leftMargin = "0px";
				formLayout_2.horizontalSpacing = "0px";
				formLayout_2.verticalSpacing = "0px";
				formLayout_2.setColumns(["417px", "1fr", "0px", "108px"]);
				formLayout_2.setColumnAutoSizing(2, true);
				formLayout_2.setRows(["1fr"]);
				group_3.setLayout(formLayout_2);
				(function(container){
					var searchInput_1 = new cpr.controls.SearchInput("sriSrchRslt");
					searchInput_1.searchPosition = "left";
					searchInput_1.placeholder = "검색어를 입력하세요";
					searchInput_1.style.setClasses(["global-search"]);
					container.addChild(searchInput_1, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var group_4 = new cpr.controls.Container();
					group_4.clipContent = false;
					var formLayout_3 = new cpr.controls.layouts.FormLayout();
					formLayout_3.scrollable = false;
					formLayout_3.topMargin = "0px";
					formLayout_3.rightMargin = "0px";
					formLayout_3.bottomMargin = "0px";
					formLayout_3.leftMargin = "0px";
					formLayout_3.horizontalSpacing = "16px";
					formLayout_3.verticalSpacing = "16px";
					formLayout_3.setColumns(["214px", "1fr", "58px"]);
					formLayout_3.setColumnAutoSizing(0, true);
					formLayout_3.setRows(["1fr"]);
					group_4.setLayout(formLayout_3);
					(function(container){
						var group_5 = new cpr.controls.Container("grpCustomInfo");
						var formLayout_4 = new cpr.controls.layouts.FormLayout();
						formLayout_4.scrollable = false;
						formLayout_4.topMargin = "1fr";
						formLayout_4.rightMargin = "0px";
						formLayout_4.bottomMargin = "1fr";
						formLayout_4.leftMargin = "0px";
						formLayout_4.horizontalSpacing = "10px";
						formLayout_4.verticalSpacing = "10px";
						formLayout_4.setColumns(["0px", "160px"]);
						formLayout_4.setColumnAutoSizing(0, true);
						formLayout_4.setRows(["24px"]);
						group_5.setLayout(formLayout_4);
						(function(container){
							var output_2 = new cpr.controls.Output("optCustomlbl");
							output_2.value = "상담고객";
							output_2.style.setClasses(["text-gray-900"]);
							container.addChild(output_2, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var searchInput_2 = new cpr.controls.SearchInput("ipbCustIdnrVal");
							searchInput_2.hideClearButton = false;
							searchInput_2.placeholder = "주민번호";
							searchInput_2.style.setClasses(["customer-search"]);
							container.addChild(searchInput_2, {
								"colIndex": 1,
								"rowIndex": 0
							});
						})(group_5);
						container.addChild(group_5, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var group_6 = new cpr.controls.Container();
						var formLayout_5 = new cpr.controls.layouts.FormLayout();
						formLayout_5.scrollable = false;
						formLayout_5.topMargin = "0px";
						formLayout_5.rightMargin = "0px";
						formLayout_5.bottomMargin = "0px";
						formLayout_5.leftMargin = "0px";
						formLayout_5.horizontalSpacing = "6px";
						formLayout_5.verticalSpacing = "6px";
						formLayout_5.setColumns(["32px", "20px"]);
						formLayout_5.setRows(["1fr"]);
						group_6.setLayout(formLayout_5);
						(function(container){
							var button_1 = new cpr.controls.Button("btnNavSrch");
							button_1.value = "";
							button_1.style.setClasses(["btn-transparent", "btn-nav-search"]);
							container.addChild(button_1, {
								"colIndex": 0,
								"rowIndex": 0
							});
							var button_2 = new cpr.controls.Button("btnCustPin");
							button_2.value = "";
							button_2.style.setClasses(["btn-transparent", "btn-nav-pin"]);
							container.addChild(button_2, {
								"colIndex": 1,
								"rowIndex": 0,
								"verticalAlign": "center",
								"height": 20
							});
						})(group_6);
						container.addChild(group_6, {
							"colIndex": 2,
							"rowIndex": 0,
							"verticalAlign": "center",
							"height": 32
						});
						var group_7 = new cpr.controls.Container();
						var flowLayout_1 = new cpr.controls.layouts.FlowLayout();
						flowLayout_1.scrollable = false;
						flowLayout_1.horizontalSpacing = 10;
						flowLayout_1.verticalSpacing = 0;
						flowLayout_1.verticalAlign = "middle";
						flowLayout_1.lineWrap = false;
						group_7.setLayout(flowLayout_1);
						(function(container){
							var output_3 = new cpr.controls.Output("optCustNm");
							output_3.value = "고객명";
							output_3.style.setClasses(["text-gray-500"]);
							container.addChild(output_3, {
								"autoSize": "width",
								"width": "33px",
								"height": "24px"
							});
							var output_4 = new cpr.controls.Output("optPolyNo2");
							output_4.value = "";
							output_4.style.setClasses(["bg-gray-500"]);
							container.addChild(output_4, {
								"width": "1px",
								"height": "10px"
							});
							var output_5 = new cpr.controls.Output("optPolyNo");
							output_5.value = "증권번호";
							output_5.style.setClasses(["text-gray-500"]);
							container.addChild(output_5, {
								"autoSize": "width",
								"width": "44px",
								"height": "24px"
							});
							var comboBox_1 = new cpr.controls.ComboBox("cmbPolyNo");
							comboBox_1.visible = false;
							comboBox_1.maxVisibleItems = 6;
							comboBox_1.style.setClasses(["poly-combo"]);
							comboBox_1.style.list.setClasses(["poly-combo"]);
							(function(comboBox_1){
								comboBox_1.addItem(new cpr.controls.Item("123456789  상품명10-15자리사용가능함", "value1"));
								comboBox_1.addItem(new cpr.controls.Item("123456789  상품명10-15자리사용가능함", "value2"));
								comboBox_1.addItem(new cpr.controls.Item("123456789  상품명10-15자리사용가능함", "value3"));
								comboBox_1.addItem(new cpr.controls.Item("123456789  상품명10-15자리사용가능함", "value4"));
								comboBox_1.addItem(new cpr.controls.Item("123456789  상품명10-15자리사용가능함", "value5"));
								comboBox_1.addItem(new cpr.controls.Item("123456789", "value6"));
								comboBox_1.addItem(new cpr.controls.Item("123456789", "value7"));
								comboBox_1.addItem(new cpr.controls.Item("123456789", "value8"));
								comboBox_1.addItem(new cpr.controls.Item("123456789", "value9"));
								comboBox_1.addItem(new cpr.controls.Item("123456789", "value10"));
								comboBox_1.addItem(new cpr.controls.Item("123456789", "value11"));
							})(comboBox_1);
							container.addChild(comboBox_1, {
								"width": "102px",
								"height": "24px"
							});
						})(group_7);
						container.addChild(group_7, {
							"colIndex": 1,
							"rowIndex": 0,
							"verticalAlign": "center",
							"height": 24
						});
					})(group_4);
					container.addChild(group_4, {
						"colIndex": 1,
						"rowIndex": 0,
						"horizontalAlign": "center",
						"width": 458
					});
					var group_8 = new cpr.controls.Container();
					group_8.clipContent = false;
					var flowLayout_2 = new cpr.controls.layouts.FlowLayout();
					flowLayout_2.scrollable = false;
					flowLayout_2.horizontalSpacing = 12;
					flowLayout_2.horizontalAlign = "right";
					flowLayout_2.verticalAlign = "middle";
					flowLayout_2.lineWrap = false;
					flowLayout_2.rightMargin = 24;
					group_8.setLayout(flowLayout_2);
					(function(container){
						var group_9 = new cpr.controls.Container();
						var flowLayout_3 = new cpr.controls.layouts.FlowLayout();
						flowLayout_3.scrollable = false;
						flowLayout_3.horizontalSpacing = 6;
						flowLayout_3.verticalSpacing = 0;
						flowLayout_3.horizontalAlign = "right";
						flowLayout_3.verticalAlign = "middle";
						flowLayout_3.lineWrap = false;
						group_9.setLayout(flowLayout_3);
						(function(container){
							var checkBox_1 = new cpr.controls.CheckBox();
							checkBox_1.value = "";
							checkBox_1.text = "";
							checkBox_1.style.setClasses(["switch02"]);
							container.addChild(checkBox_1, {
								"width": "38px",
								"height": "18px"
							});
							var output_6 = new cpr.controls.Output("htmsnpUserNm");
							output_6.value = "이흥국";
							output_6.displayExp = "\"클레임센터 \" + sstr(text, [\"fw-bold\"]) + \" 과장님\"";
							container.addChild(output_6, {
								"autoSize": "width",
								"width": "127px",
								"height": "24px"
							});
							var button_3 = new cpr.controls.Button("btnSetting");
							button_3.value = "";
							button_3.style.setClasses(["btn-transparent", "btn-nav-setting"]);
							container.addChild(button_3, {
								"autoSize": "none",
								"width": "20px",
								"height": "20px"
							});
						})(group_9);
						container.addChild(group_9, {
							"autoSize": "width",
							"width": "197px",
							"height": "24px"
						});
						var group_10 = new cpr.controls.Container();
						var flowLayout_4 = new cpr.controls.layouts.FlowLayout();
						flowLayout_4.scrollable = false;
						flowLayout_4.horizontalSpacing = 6;
						flowLayout_4.verticalSpacing = 0;
						flowLayout_4.horizontalAlign = "right";
						flowLayout_4.verticalAlign = "middle";
						flowLayout_4.lineWrap = false;
						group_10.setLayout(flowLayout_4);
						(function(container){
							var output_7 = new cpr.controls.Output("optTime");
							output_7.value = "00:00";
							output_7.style.setClasses(["time-badge"]);
							container.addChild(output_7, {
								"width": "49px",
								"height": "24px"
							});
							var button_4 = new cpr.controls.Button("btnTimeExtend");
							button_4.value = "";
							button_4.style.setClasses(["btn-transparent", "btn-nav-extend"]);
							container.addChild(button_4, {
								"autoSize": "none",
								"width": "20px",
								"height": "20px"
							});
						})(group_10);
						container.addChild(group_10, {
							"autoSize": "width",
							"width": "75px",
							"height": "24px"
						});
						var button_5 = new cpr.controls.Button("btnLogout");
						button_5.value = "";
						button_5.style.setClasses(["btn-transparent", "btn-nav-logout"]);
						container.addChild(button_5, {
							"width": "20px",
							"height": "20px"
						});
					})(group_8);
					container.addChild(group_8, {
						"colIndex": 2,
						"rowIndex": 0,
						"verticalAlign": "center",
						"height": 24
					});
					var group_11 = new cpr.controls.Container("grpLayout");
					var formLayout_6 = new cpr.controls.layouts.FormLayout();
					formLayout_6.scrollable = false;
					formLayout_6.topMargin = "0px";
					formLayout_6.rightMargin = "0px";
					formLayout_6.bottomMargin = "0px";
					formLayout_6.leftMargin = "0px";
					formLayout_6.horizontalSpacing = "0px";
					formLayout_6.verticalSpacing = "0px";
					formLayout_6.setColumns(["1fr", "1fr", "1fr"]);
					formLayout_6.setRows(["1fr"]);
					group_11.setLayout(formLayout_6);
					(function(container){
						var button_6 = new cpr.controls.Button("btnDiviSion");
						button_6.style.setClasses(["btn-transparent", "btn-nav-split"]);
						container.addChild(button_6, {
							"colIndex": 1,
							"rowIndex": 0
						});
						var button_7 = new cpr.controls.Button("btnMenuOpen");
						button_7.style.setClasses(["btn-transparent", "btn-nav-relatedwork"]);
						container.addChild(button_7, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var group_12 = new cpr.controls.Container("grpAlert");
						group_12.clipContent = false;
						var xYLayout_3 = new cpr.controls.layouts.XYLayout();
						xYLayout_3.scrollable = false;
						group_12.setLayout(xYLayout_3);
						(function(container){
							var button_8 = new cpr.controls.Button("btnAlert");
							button_8.value = "";
							button_8.style.setClasses(["btn-transparent", "btn-nav-alarm"]);
							container.addChild(button_8, {
								"top": "0px",
								"right": "0px",
								"bottom": "0px",
								"left": "0px"
							});
							var output_8 = new cpr.controls.Output("optAlertN");
							output_8.value = "99";
							output_8.style.setClasses(["alarm-badge"]);
							container.addChild(output_8, {
								"top": "-6px",
								"right": "-6px",
								"width": "15px",
								"height": "15px"
							});
						})(group_12);
						container.addChild(group_12, {
							"colIndex": 0,
							"rowIndex": 0,
							"colSpan": 1,
							"rowSpan": 1,
							"horizontalAlign": "center",
							"verticalAlign": "center",
							"width": 20,
							"height": 20
						});
					})(group_11);
					container.addChild(group_11, {
						"colIndex": 3,
						"rowIndex": 0
					});
				})(group_3);
				container.addChild(group_3, {
					"colIndex": 1,
					"rowIndex": 0
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "0px",
				"right": "0px",
				"left": "0px",
				"height": "48px"
			});
			
			var group_13 = new cpr.controls.Container("grpNavbr");
			group_13.style.setClasses(["navbar"]);
			var xYLayout_4 = new cpr.controls.layouts.XYLayout();
			group_13.setLayout(xYLayout_4);
			(function(container){
				var navigationBar_1 = new cpr.controls.NavigationBar();
				navigationBar_1.filterExp = "depth == 0";
				(function(navigationBar_1){
					navigationBar_1.setItemSet(app.lookup("dsMn"), {
						"label": "label",
						"value": "value",
						"parentValue": "parent"
					});
				})(navigationBar_1);
				container.addChild(navigationBar_1, {
					"right": "0px",
					"left": "0px",
					"height": "30px",
					"top": "calc(50% - 15px)"
				});
			})(group_13);
			container.addChild(group_13, {
				"top": "48px",
				"right": "0px",
				"left": "280px",
				"height": "46px"
			});
			
			var group_14 = new cpr.controls.Container("grpSidebar");
			group_14.style.setClasses(["aside"]);
			var formLayout_7 = new cpr.controls.layouts.FormLayout();
			formLayout_7.scrollable = false;
			formLayout_7.topMargin = "0px";
			formLayout_7.rightMargin = "0px";
			formLayout_7.bottomMargin = "0px";
			formLayout_7.leftMargin = "0px";
			formLayout_7.horizontalSpacing = "0px";
			formLayout_7.verticalSpacing = "0px";
			formLayout_7.setColumns(["1fr"]);
			formLayout_7.setRows(["48px", "1fr"]);
			group_14.setLayout(formLayout_7);
			(function(container){
				var group_15 = new cpr.controls.Container();
				var xYLayout_5 = new cpr.controls.layouts.XYLayout();
				xYLayout_5.scrollable = false;
				group_15.setLayout(xYLayout_5);
				(function(container){
					var image_2 = new cpr.controls.Image("imgLogo");
					image_2.src = "theme/images/com/main/hci-logo-bg-b.png";
					(function(image_2){
					})(image_2);
					container.addChild(image_2, {
						"left": "20px",
						"width": "90px",
						"height": "20px",
						"top": "calc(50% - 10px)"
					});
					var output_9 = new cpr.controls.Output();
					output_9.value = "보험코어 시스템";
					output_9.style.setClasses(["h2", "text-white"]);
					container.addChild(output_9, {
						"left": "117px",
						"width": "110px",
						"height": "20px",
						"top": "calc(50% - 10px)"
					});
				})(group_15);
				container.addChild(group_15, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var sideNavigation_1 = new cpr.controls.SideNavigation("treMenu");
				sideNavigation_1.indent = 0;
				sideNavigation_1.selectionHighlightType = "independent";
				sideNavigation_1.style.setClasses(["sidemenu"]);
				(function(sideNavigation_1){
					sideNavigation_1.setItemSet(app.lookup("dsMn"), {
						"label": "label",
						"value": "value",
						"parentValue": "parent"
					});
				})(sideNavigation_1);
				if(typeof onTreMenuItemClick == "function") {
					sideNavigation_1.addEventListener("item-click", onTreMenuItemClick);
				}
				if(typeof onTreMenuSelectionChange == "function") {
					sideNavigation_1.addEventListener("selection-change", onTreMenuSelectionChange);
				}
				container.addChild(sideNavigation_1, {
					"colIndex": 0,
					"rowIndex": 1
				});
			})(group_14);
			container.addChild(group_14, {
				"top": "0px",
				"bottom": "0px",
				"left": "0px",
				"width": "280px"
			});
			
			var group_16 = new cpr.controls.Container("grpMSidebar");
			group_16.visible = false;
			group_16.style.setClasses(["menubar"]);
			var xYLayout_6 = new cpr.controls.layouts.XYLayout();
			xYLayout_6.scrollable = false;
			group_16.setLayout(xYLayout_6);
			(function(container){
				var button_9 = new cpr.controls.Button("btnFamilySiteS");
				button_9.style.setClasses(["btn-transparent", "btn-nav-family"]);
				container.addChild(button_9, {
					"bottom": "30px",
					"width": "15px",
					"height": "15px",
					"left": "calc(50% - 7px)"
				});
				var button_10 = new cpr.controls.Button("btnPrintS");
				button_10.style.setClasses(["btn-transparent", "btn-nav-print"]);
				container.addChild(button_10, {
					"bottom": "135px",
					"width": "15px",
					"height": "15px",
					"left": "calc(50% - 7px)"
				});
				var button_11 = new cpr.controls.Button("btnHelpS");
				button_11.style.setClasses(["btn-transparent", "btn-nav-manual"]);
				container.addChild(button_11, {
					"bottom": "100px",
					"width": "15px",
					"height": "15px",
					"left": "calc(50% - 7px)"
				});
				var button_12 = new cpr.controls.Button("btnMenuS");
				button_12.style.setClasses(["btn-transparent", "btn-nav-sitemap"]);
				container.addChild(button_12, {
					"bottom": "65px",
					"width": "15px",
					"height": "15px",
					"left": "calc(50% - 7px)"
				});
			})(group_16);
			container.addChild(group_16, {
				"top": "48px",
				"bottom": "0px",
				"left": "0px",
				"width": "46px"
			});
			
			var mDIFolder_1 = new cpr.controls.MDIFolder("mdiCn");
			mDIFolder_1.childCombinatorClass = "content";
			mDIFolder_1.headerArrowPosition = "left";
			mDIFolder_1.headerArrowVisible = "show";
			mDIFolder_1.headerCheckable = true;
			mDIFolder_1.itemSizing = "fixed";
			mDIFolder_1.itemSpacing = -5;
			mDIFolder_1.useItemTextEllipsis = true;
			mDIFolder_1.preferredItemWidth = 149;
			mDIFolder_1.style.setClasses(["tab-content"]);
			var group_17 = new cpr.controls.Container("grpMoveLeftL");
			group_17.style.setClasses(["tab-utils"]);
			var formLayout_8 = new cpr.controls.layouts.FormLayout();
			formLayout_8.scrollable = false;
			formLayout_8.topMargin = "1fr";
			formLayout_8.rightMargin = "0px";
			formLayout_8.bottomMargin = "1fr";
			formLayout_8.leftMargin = "0px";
			formLayout_8.horizontalSpacing = "0px";
			formLayout_8.verticalSpacing = "0px";
			formLayout_8.setColumns(["20px"]);
			formLayout_8.setRows(["20px"]);
			group_17.setLayout(formLayout_8);
			(function(container){
				var button_13 = new cpr.controls.Button("imgHome");
				button_13.value = "";
				button_13.style.setClasses(["btn-tab-home"]);
				container.addChild(button_13, {
					"colIndex": 0,
					"rowIndex": 0
				});
			})(group_17);
			mDIFolder_1.addHeaderControl(group_17, {"position": "left", "width": 20});
			var group_18 = new cpr.controls.Container("grpMoveRightL");
			group_18.visible = false;
			group_18.style.setClasses(["tab-utils"]);
			var formLayout_9 = new cpr.controls.layouts.FormLayout();
			formLayout_9.scrollable = false;
			formLayout_9.topMargin = "1fr";
			formLayout_9.rightMargin = "0px";
			formLayout_9.bottomMargin = "1fr";
			formLayout_9.leftMargin = "0px";
			formLayout_9.horizontalSpacing = "0px";
			formLayout_9.verticalSpacing = "0px";
			formLayout_9.setColumns(["15px"]);
			formLayout_9.setRows(["20px"]);
			group_18.setLayout(formLayout_9);
			(function(container){
				var button_14 = new cpr.controls.Button("btnMoveRightL");
				button_14.value = "";
				button_14.style.setClasses(["btn-content-left"]);
				container.addChild(button_14, {
					"colIndex": 0,
					"rowIndex": 0
				});
			})(group_18);
			mDIFolder_1.addHeaderControl(group_18, {"position": "right", "width": 15});
			var group_19 = new cpr.controls.Container("grpLeftPlus");
			var xYLayout_7 = new cpr.controls.layouts.XYLayout();
			xYLayout_7.scrollable = false;
			group_19.setLayout(xYLayout_7);
			(function(container){
				var button_15 = new cpr.controls.Button("btnLeftPlus");
				button_15.value = "";
				button_15.style.setClasses(["btn-tab-plus"]);
				container.addChild(button_15, {
					"top": "0px",
					"bottom": "0px",
					"left": "0px",
					"width": "42px"
				});
			})(group_19);
			mDIFolder_1.addHeaderControl(group_19, {"position": "trailing", "width": 56});
			var group_20 = new cpr.controls.Container("grpContentLayoutLeft");
			group_20.style.setClasses(["tab-utils"]);
			var formLayout_10 = new cpr.controls.layouts.FormLayout();
			formLayout_10.scrollable = false;
			formLayout_10.topMargin = "0px";
			formLayout_10.rightMargin = "0px";
			formLayout_10.bottomMargin = "0px";
			formLayout_10.leftMargin = "0px";
			formLayout_10.horizontalSpacing = "0px";
			formLayout_10.verticalSpacing = "0px";
			formLayout_10.setColumns(["1fr", "1fr", "1fr"]);
			formLayout_10.setRows(["1fr"]);
			group_20.setLayout(formLayout_10);
			(function(container){
				var button_16 = new cpr.controls.Button("btnDetail");
				button_16.style.setClasses(["btn-content-list"]);
				container.addChild(button_16, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var button_17 = new cpr.controls.Button("btnZoom");
				button_17.style.setClasses(["btn-content-zoom"]);
				container.addChild(button_17, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var button_18 = new cpr.controls.Button("btnClose");
				button_18.style.setClasses(["btn-content-close"]);
				if(typeof onBtnCloseClick == "function") {
					button_18.addEventListener("click", onBtnCloseClick);
				}
				container.addChild(button_18, {
					"colIndex": 2,
					"rowIndex": 0
				});
			})(group_20);
			mDIFolder_1.addHeaderControl(group_20, {"position": "inner-right", "width": 84});
			
			var tabItem_1 = (function(tabFolder){
				var tabItem_1 = new cpr.controls.TabItem();
				tabItem_1.text = "윈도우메뉴명";
				tabItem_1.closable = true;
				var group_21 = new cpr.controls.Container("grp2");
				var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
				verticalLayout_1.spacing = 12;
				verticalLayout_1.topMargin = 20;
				group_21.setLayout(verticalLayout_1);
				tabItem_1.content = group_21;
				return tabItem_1;
			})(mDIFolder_1);
			mDIFolder_1.addTabItem(tabItem_1);
			
			var tabItem_2 = (function(tabFolder){
				var tabItem_2 = new cpr.controls.TabItem();
				tabItem_2.text = "tab 2";
				var group_22 = new cpr.controls.Container();
				var xYLayout_8 = new cpr.controls.layouts.XYLayout();
				group_22.setLayout(xYLayout_8);
				tabItem_2.content = group_22;
				return tabItem_2;
			})(mDIFolder_1);
			mDIFolder_1.addTabItem(tabItem_2);
			
			var tabItem_3 = (function(tabFolder){
				var tabItem_3 = new cpr.controls.TabItem();
				tabItem_3.text = "심사메인화면";
				var embeddedApp_1 = new cpr.controls.EmbeddedApp("ea1");
				cpr.core.App.load("app/240228/UW001", function(app) {
					if(app){
						embeddedApp_1.app = app;
					}
				});
				tabItem_3.content = embeddedApp_1;
				return tabItem_3;
			})(mDIFolder_1);
			mDIFolder_1.addTabItem(tabItem_3);
			mDIFolder_1.setSelectedTabItem(tabItem_1);
			container.addChild(mDIFolder_1, {
				"top": "94px",
				"right": "0px",
				"bottom": "0px",
				"left": "280px"
			});
			
			var checkBox_2 = new cpr.controls.CheckBox("btnHide");
			checkBox_2.value = "true";
			checkBox_2.text = "";
			checkBox_2.style.setClasses(["lnb-toggle"]);
			if(typeof onBtnHideClick == "function") {
				checkBox_2.addEventListener("click", onBtnHideClick);
			}
			container.addChild(checkBox_2, {
				"left": "280px",
				"width": "20px",
				"height": "40px",
				"top": "calc(50% - 20px)"
			});
			if(typeof onBodyInit == "function"){
				app.addEventListener("init", onBodyInit);
			}
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "메인";
	app.setPreferredSize(0, -1);
	cpr.core.Platform.INSTANCE.register(app);
})();
