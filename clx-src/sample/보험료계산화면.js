/************************************************
 * SFA0000140.js
 * Created at 2022. 11. 14. 오전 10:34:51.
 *
 * @author ryu
 ************************************************/

/*
 * "동시누적체크" 버튼(btn15)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn15Click(e){
	var btn15 = e.control;
	
	app.getRootAppInstance().openDialog("sample/동시누적체크", {width : 1200, height : 495}, function(dialog){
		dialog.ready(function(dialogApp){
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
		});
	}).then(function(returnValue){
		;
	});
}
