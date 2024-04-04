/************************************************
 * CheckBox.js
 * Created at 2022. 5. 30. 오전 10:32:26.
 *
 * @author ryu
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	app.getContainer().getAllRecursiveChildren(false).filter(function(each){
		return each.style.hasClass("switch03");
	}).forEach(function(/* cpr.controls.CheckBox */ each){
		each.addEventListener("value-change", function(e){
			var control = e.control;
			if (control.checked){
				control.iconAlign = "right";
			} else {
				control.iconAlign = "left";
			}
		});
	});
}
