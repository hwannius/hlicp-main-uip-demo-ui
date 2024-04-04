/************************************************
 * SFA0000130.js
 * Created at 2022. 11. 14. 오전 10:09:48.
 *
 * @author ryu
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	
	app.lookup('grd2').filter("column5 == ''");
}


/*
 * "알릴의무" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	
	
	var ea  = app.getHost();
	
	cpr.core.App.load("sample/알릴의무", function(loadedApp){
		ea.app = loadedApp
	});	
	
}

/*
 * 그리드에서 cell-click 이벤트 발생 시 호출.
 * Grid의 Cell 클릭시 발생하는 이벤트.
 */
function onGrd1CellClick(e){
	var grd1 = e.control;
	
	var vcDs2 = app.lookup('ds2');
	
	var vsPlan = e.row.getValue("column4")
	
	app.lookup('grd2').filter("column5 == '" + vsPlan + "'");
	
	app.lookup('grpWrap').getLayout().setColumns(["1fr", "3fr", "1fr"]);
	
	app.lookup('caption').visible = false
}

/*
 * 그리드에서 cell-click 이벤트 발생 시 호출.
 * Grid의 Cell 클릭시 발생하는 이벤트.
 */
function onGrd2CellClick(e){
	var grd2 = e.control;
	
	app.lookup('grpWrap').getLayout().setColumns(["1fr", "1fr", "3fr"]);
}
