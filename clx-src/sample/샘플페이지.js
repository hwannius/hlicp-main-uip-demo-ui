/************************************************
 * .js
 * Created at 
 *
 * @author jhkim0403
 ************************************************/
var util = createCommonUtil();

/*
 * "조회" 버튼(btnSearch)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnSearchClick(e){
	util.Submit.send(app, "subOnLoad", function(pbSuccess){
		if (pbSuccess){
			app.lookup("grd1").redraw();
		}	
	});
}

/*
 * "연금확인" 버튼(btnPopup1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnPopup1Click(e){
	app.openDialog("sfa/신계약+UW/PPC100P5", {width : 767, height : 505}, function(dialog){
	});
}

/*
 * "실손보장중복조회" 버튼(btnPopup2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnPopup2Click(e){
	app.openDialog("sfa/신계약+UW/PPB140P3", {width : 767, height : 675}, function(dialog){
	});
}

/*
 * "마케팅활용동의정보 입력" 버튼(btnPopup3)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnPopup3Click(e){
	app.openDialog("sfa/신계약+UW/마케팅활용동의정보 입력", {width : 767, height : 355}, function(dialog){
	});
}
