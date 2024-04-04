/************************************************
 * Dialog.js
 * Created at 2022. 9. 28. 오후 2:14:39.
 *
 * @author ryu
 ************************************************/

/*
 * "일반" 버튼(btnPop)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnPopClick(e){
	app.getRootAppInstance().openDialog("pb/guide/Dialog_A", {width: 800, height: 580}, function(dialog) {
	});
}
