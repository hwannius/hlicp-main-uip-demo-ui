/************************************************
 * EXBSP.js
 * Created at 2022. 5. 26. 오전 10:07:05.
 *
 * @author ryu
 ************************************************/

var maMenuData = [
	 {"label" : "디자인가이드", "value" : "guide", "parent" : "", "appId" : ""}
	 
	,{"label" : "컬러시스템", "value" : "guide_colorsystem", "parent" : "guide", "appId" : "pb/guide/ColorSystem"}
	,{"label" : "타이포그래피", "value" : "guide_typography", "parent" : "guide", "appId" : "pb/guide/Typography"}
	,{"label" : "아웃풋", "value" : "guide_output", "parent" : "guide", "appId" : "pb/guide/Output"}
	,{"label" : "인풋박스", "value" : "guide_inputbox", "parent" : "guide", "appId" : "pb/guide/InputBox"}
	,{"label" : "서치인풋", "value" : "guide_searchinput", "parent" : "guide", "appId" : "pb/guide/SearchInput"}
	,{"label" : "넘버에디터", "value" : "guide_numbereditor", "parent" : "guide", "appId" : "pb/guide/NumberEditor"}
	,{"label" : "데이트인풋", "value" : "guide_dateinput", "parent" : "guide", "appId" : "pb/guide/DateInput"}
	,{"label" : "캘린더", "value" : "guide_calendar", "parent" : "guide", "appId" : "pb/guide/Calendar"}
	,{"label" : "파일인풋", "value" : "guide_fileinput", "parent" : "guide", "appId" : "pb/guide/FileInput"}
	,{"label" : "마스크에디터", "value" : "guide_maskeditor", "parent" : "guide", "appId" : "pb/guide/MaskEditor"}
	,{"label" : "텍스트에리어", "value" : "guide_textarea", "parent" : "guide", "appId" : "pb/guide/Textarea"}
	,{"label" : "버튼", "value" : "guide_button", "parent" : "guide", "appId" : "pb/guide/Button"}
	,{"label" : "콤보박스", "value" : "guide_combobox", "parent" : "guide", "appId" : "pb/guide/ComboBox"}
	,{"label" : "체크박스", "value" : "guide_checkbox", "parent" : "guide", "appId" : "pb/guide/CheckBox"}
	,{"label" : "라디오버튼", "value" : "guide_radiobutton", "parent" : "guide", "appId" : "pb/guide/RadioButton"}
	,{"label" : "리스트박스", "value" : "guide_listbox", "parent" : "guide", "appId" : "pb/guide/ListBox"}
	,{"label" : "그리드", "value" : "guide_grid", "parent" : "guide", "appId" : "pb/guide/Grid"}
	,{"label" : "컨테이너", "value" : "guide_container", "parent" : "guide", "appId" : "pb/guide/Container"}
	,{"label" : "카드", "value" : "guide_card", "parent" : "guide", "appId" : "pb/guide/Card"}
	,{"label" : "트리", "value" : "guide_tree", "parent" : "guide", "appId" : "pb/guide/Tree"}
	,{"label" : "사이드내비게이션", "value" : "guide_sidenavigation", "parent" : "guide", "appId" : "pb/guide/SideNavigation"}
	,{"label" : "메뉴", "value" : "guide_menu", "parent" : "guide", "appId" : "pb/guide/Menu"}
	,{"label" : "내비게이션바", "value" : "guide_navigationbar", "parent" : "guide", "appId" : "pb/guide/NavigationBar"}
	,{"label" : "다이얼로그", "value" : "guide_dialog", "parent" : "guide", "appId" : "pb/guide/Dialog"}
	,{"label" : "알림", "value" : "guide_notifier", "parent" : "guide", "appId" : "pb/guide/Notifier"}
	,{"label" : "탭폴더", "value" : "guide_tabfolder", "parent" : "guide", "appId" : "pb/guide/TabFolder"}
	,{"label" : "아코디언", "value" : "guide_accordion", "parent" : "guide", "appId" : "pb/guide/Accordion"}
	,{"label" : "슬라이더", "value" : "guide_slider", "parent" : "guide", "appId" : "pb/guide/Slider"}
	,{"label" : "프로그레스", "value" : "guide_progress", "parent" : "guide", "appId" : "pb/guide/Progress"}
	,{"label" : "페이지인덱서", "value" : "guide_pageindexer", "parent" : "guide", "appId" : "pb/guide/PageIndexer"}
	,{"label" : "파일업로드", "value" : "guide_fileupload", "parent" : "guide", "appId" : "pb/guide/FileUpload"}
	,{"label" : "이미지", "value" : "guide_image", "parent" : "guide", "appId" : "pb/guide/Image"}
	,{"label" : "스테퍼", "value" : "guide_stepper", "parent" : "guide", "appId" : "pb/guide/Stepper"}
	
	
	
	,{"label" : "레이아웃", "value" : "layout", "parent" : "", "appId" : ""}
	,{"label" : "레이아웃 규칙", "value" : "layout_rule", "parent" : "layout", "appId" : "pb/layout/Layout"}
	,{"label" : "최외곽 레이아웃", "value" : "layout_root", "parent" : "layout", "appId" : "pb/layout/RootLayout"}
	,{"label" : "콘텐트 레이아웃", "value" : "layout_content", "parent" : "layout", "appId" : "pb/layout/ContentLayout"}
	,{"label" : "컨트롤 레이아웃", "value" : "layout_control", "parent" : "layout", "appId" : "pb/layout/ControlLayout"}
	,{"label" : "팝업 레이아웃", "value" : "layout_popup", "parent" : "layout", "appId" : "pb/layout/PopupLayout"}
	
	
	
	,{"label" : "템플릿", "value" : "template", "parent" : "", "appId" : ""}
	
	,{"label" : "UI템플릿", "value" : "template_ui", "parent" : "template", "appId" : ""}
	,{"label" : "아웃풋", "value" : "template_ui_output", "parent" : "template_ui", "appId" : "pb/template/Output"}
	,{"label" : "타이포그래피", "value" : "template_ui_typography", "parent" : "template_ui", "appId" : "pb/template/Typography"}
	,{"label" : "프레임", "value" : "template_ui_frame", "parent" : "template_ui", "appId" : "pb/template/Frame"}
	,{"label" : "인풋 계열", "value" : "template_ui_input", "parent" : "template_ui", "appId" : "pb/template/Input"}
	,{"label" : "셀렉션 계열", "value" : "template_ui_selection", "parent" : "template_ui", "appId" : "pb/template/Selection"}
	,{"label" : "버튼", "value" : "template_ui_button", "parent" : "template_ui", "appId" : "pb/template/Button"}
	,{"label" : "그리드", "value" : "template_ui_grid", "parent" : "template_ui", "appId" : "pb/template/Grid"}
	,{"label" : "컨테이너", "value" : "template_ui_form", "parent" : "template_ui", "appId" : "pb/template/Container"}
	
	,{"label" : "화면템플릿", "value" : "template_page", "parent" : "template", "appId" : ""}
	
	,{"label" : "템플릿 목록", "value" : "template_page_list", "parent" : "template_page", "appId" : "pb/screen/Templates"}
//	,{"label" : "일반 화면", "value" : "template_page_normal", "parent" : "template_page", "appId" : "pb/screen/Normal"}
//	,{"label" : "팝업 화면", "value" : "template_page_popup", "parent" : "template_page", "appId" : "pb/screen/Popup"}
]

/**
 * 어사이드 영역을 펼칩니다.
 */
function expandAside() {
	var vcCbxTg = app.lookup("cbxTg");
	var vcGrpAsd = app.lookup("grpAsd");
	var vcEaCn = app.lookup("eaCn");
	
	var vcGrpCont = app.getContainer();
	vcCbxTg.style.icon.removeStyle("width");
	vcCbxTg.style.icon.removeStyle("height");
	vcGrpCont.updateConstraint(vcCbxTg, {
		left: "243px",
		width: "30px",
		height: "30px"
	});
	vcGrpCont.updateConstraint(vcGrpAsd, {
		left: "0px"
	});
	vcGrpCont.updateConstraint(vcEaCn, {
		left: "258px"
	});
}

/**
 * 어사이드 영역을 접습니다.
 */
function collapseAside() {
	var vcCbxTg = app.lookup("cbxTg");
	var vcGrpAsd = app.lookup("grpAsd");
	var vcEaCn = app.lookup("eaCn");
	
	var vcGrpCont = app.getContainer();
	vcCbxTg.style.icon.css({
		width: "20px",
		height: "20px"
	});
	vcGrpCont.updateConstraint(vcCbxTg, {
		left: "0px",
		width: "20px",
		height: "50px"
	});
	vcGrpCont.updateConstraint(vcGrpAsd, {
		left: "-258px"
	});
	vcGrpCont.updateConstraint(vcEaCn, {
		left: "0px"
	});
}

/**
 * 
 * @param {#app} psAppId
 */
function openMenuItemWithAppId(psAppId) {
	if (psAppId != null && psAppId != ""){
		var vcEaCn = app.lookup("eaCn");
		new cpr.core.App.load(psAppId, function(loadedApp) {
			vcEaCn.app = loadedApp;
		});
	}
}


/**
 * 
 * @param {String} psValue
 */
function getMenuItemPath(psValue) {
	var vcSNavMn = app.lookup("snavMn");
	
	var vcMnItem = vcSNavMn.getItemByValue(psValue);
	if (vcMnItem != null){
		var vcSelfItem = vcMnItem;
	
		var vaRelatedItems = [];
		var vcTmpSelfItem = vcSelfItem;
		
		while(vcTmpSelfItem != null){
			vaRelatedItems.splice(0, 0, vcTmpSelfItem);
			vcTmpSelfItem = vcTmpSelfItem.parentItem;
		}
		
		var vaMnItemPaths = vaRelatedItems.map(function(/* cpr.controls.TreeItem */ each){
			return each.label;
		});
		
		return vaMnItemPaths.join(",");
	}
	
	return null;
}


/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit(e){
	app.lookup("dsMn").build(maMenuData);
	
	app.lookup("subOnLoad").send().then(function(input){
		app.lookup("grpAsd").redraw();
	});
}

/*
 * 이미지에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onImgLogoClick(e){
	location.reload();
}

/*
 * 이미지에서 keydown 이벤트 발생 시 호출.
 * 사용자가 키를 누를 때 발생하는 이벤트.
 */
function onImgLogoKeydown(e){
	if (e.keyCode == cpr.events.KeyCode.ENTER){
		location.reload();
	}
}

/*
 * 버튼(btnRcntMn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnRcntMnClick(e){
	var btnRcntMn = e.control;
	
}

/*
 * 버튼(btnFavMn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnFavMnClick(e){
	var btnFavMn = e.control;
	
}

/*
 * 사이드 내비게이션에서 item-click 이벤트 발생 시 호출.
 * 아이템 클릭시 발생하는 이벤트.
 */
function onSnavMnItemClick(e){
	var snavMn = e.control;

	var vcMnItem = e.item;
	openMenuItemWithAppId(vcMnItem.row.getValue("appId"));	
}

/*
 * 체크 박스에서 value-change 이벤트 발생 시 호출.
 * CheckBox의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onCbxTgValueChange(e){
	var cbxTg = e.control;
	
	if (cbxTg.checked){
		collapseAside();
	} else {
		expandAside();
	}
}

/*
 * 임베디드 앱에서 app-ready 이벤트 발생 시 호출.
 * 임베디드 앱의 인스턴스와 관련 자원이 준비되는 시점에 디스패치되는 이벤트.
 */
function onEaCnAppReady(e){
	var eaCn = e.control;
	
	var voEaAppIns = eaCn.getEmbeddedAppInstance();
	var vcGrpEaCont = voEaAppIns.getContainer();
	
	vcGrpEaCont.getAllRecursiveChildren().filter(function(each){
		return each instanceof udc.hk.pb.Breadcrumbs;
	}).forEach(function(each){
		var vcSnavMn = app.lookup("snavMn");
		var vsNavigation = getMenuItemPath(vcSnavMn.value);
		each.title = vcSnavMn.getSelection()[0].label;
		each.navigation = vsNavigation;
	});
}
