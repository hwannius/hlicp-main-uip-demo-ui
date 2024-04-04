/************************************************
 * 필수고지 입력대상(팝업).js
 * Created at 2024. 1. 25. 오후 2:27:58.
 *
 * @author cin07
 ************************************************/

/*
 * "확인" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	var returnValue = true;
	
	app.close(returnValue);
}

/*
 * "취소" 버튼(btn1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn1Click(e){
	var btn1 = e.control;
	
	app.close()
}
