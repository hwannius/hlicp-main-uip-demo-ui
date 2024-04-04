/************************************************
 * Breadcrumbs.js
 * Created at 2022. 5. 26. 오전 10:25:58.
 *
 * @author ryu
 ************************************************/

/**
 * 내비게이션 구분자
 * @type {String}
 */
var msSeparator = ",";


/**
 * 브래드크럼블 아이템을 동적으로 생성합니다.
 */
function createBreadcrumbItems() {
	var vsNavigation = app.getAppProperty("navigation"); // 내비게이션 값
	
	var vcGrpBc = app.lookup("grpBc");
	
	// 브래드크럼블 아이템 초기화
	vcGrpBc.removeAllChildren(true);
	
	var vaNavigation = vsNavigation.split(msSeparator);
	for(var idx = 0; idx < vaNavigation.length; idx++){
		var vsText = vaNavigation[idx];
		
		var vcBc = new cpr.controls.Output();
		vcBc.value = vsText;
		vcBc.style.setClasses(["breadcrumb-item"]);
		
		vcGrpBc.addChild(vcBc, {
			autoSize: "width",
			height: "20px"
		});
	}
}

/**
 * 섹션 네비게이션을 부모의 루트 컨테이너의 섹션 타이틀을 토대로 동적으로 생성합니다.
 */
function createSectionNavigation() {
	var voHostAppIns = app.getHostAppInstance();
	if (voHostAppIns){
		var vcGrpHostCont = voHostAppIns.getContainer();
		var vcGrpSctNav = app.lookup("grpSctNav");
		vcGrpHostCont.getAllRecursiveChildren(false).filter(function(each){
			return each instanceof udc.hk.pb.SectionTitle;
		}).forEach(function(each){
			var vcSectionNav = new cpr.controls.Button();
			vcSectionNav.value = each.title;
			vcSectionNav.style.setClasses(["btn", "btn-at"]);
			vcSectionNav.addEventListener("click", function(e){
				vcGrpHostCont.scrollTo(0, each.getActualRect().top);
			});
			vcGrpSctNav.addChild(vcSectionNav, {
				autoSize: "width",
				height: "34px"
			});
		});
	}
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	cpr.core.DeferredUpdateManager.INSTANCE.asyncExec(function(){
		createSectionNavigation();
	});
}

/*
 * 루트 컨테이너에서 property-change 이벤트 발생 시 호출.
 * 앱의 속성이 변경될 때 발생하는 이벤트 입니다.
 */
function onBodyPropertyChange(e){
	if (e.property == "bookmark"){
		app.lookup("cbxBkmrk").checked = e.newValue;
	} else if (e.property == "navigation") {
		createBreadcrumbItems();
	}
}

/*
 * 체크 박스에서 value-change 이벤트 발생 시 호출.
 * CheckBox의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onCbxBkmrkValueChange(e){
	var cbxBkmrk = e.control;
	app.setAppProperty("bookmark", cbxBkmrk.checked, false);
}

/*
 * "앱열기" 버튼(btnPrvw)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnPrvwClick(e){
	var btnPrvw = e.control;
	
	if (eb6Preview){
		eb6Preview.openAppEditor(app.getHostAppInstance().app.id);
	}
}
