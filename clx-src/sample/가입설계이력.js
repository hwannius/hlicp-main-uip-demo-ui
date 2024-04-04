/************************************************
 * 가입설계이력.js
 * Created at 2024. 1. 25. 오후 2:43:47.
 *
 * @author yein
 ************************************************/

/*
 * 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	
	app.openDialog("sample/Report 미리보기", {width : 800, height : 700}, function(dialog){
		dialog.ready(function(dialogApp){
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
		});
	}).then(function(returnValue){
		;
	});
}
