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
}
