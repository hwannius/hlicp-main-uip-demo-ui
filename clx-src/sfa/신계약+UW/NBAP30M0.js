/************************************************
 * NBAP30M0.js
 * Created at 2024. 4. 4. 오후 2:10:19.
 *
 * @author User
 ************************************************/

/*
 * "이전" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	
	app.close();
}

/*
 * "다음" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
	
	var vrTab = app.lookup("tab1");
vrTab.setSelectedTabItem(vrTab.getTabItems()[0]);
}

/*
 * "고지수정" 버튼(btn13)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn13Click(e){
	var btn13 = e.control;

	app.close();
	

}

/*
 * "등록" 버튼(btn27)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn27Click(e){
	var btn27 = e.control;
	app.close();
	
}
