/************************************************
 * NBEZ50P0.js
 * Created at 2024. 4. 5. 오전 9:06:43.
 *
 * @author User
 ************************************************/

/*
 * 그리드에서 selection-change 이벤트 발생 시 호출.
 * detail의 cell 클릭하여 설정된 selectionunit에 해당되는 단위가 선택될 때 발생하는 이벤트.
 */
function onGrd1SelectionChange(e){
	var grd1 = e.control;
	
	app.close();
}

/*
 * "입력" 버튼(btn1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn1Click(e){
	var btn1 = e.control;
	
	app.close();
}
