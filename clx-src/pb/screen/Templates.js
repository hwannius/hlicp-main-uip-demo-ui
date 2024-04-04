/************************************************
 * Templates.js
 * Created at 2022. 11. 10. 오전 10:20:41.
 *
 * @author ryu
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	app.getContainer().getAllRecursiveChildren().filter(function(each){
		return each.userAttr("able-to-copy") == "true";
	}).forEach(function(/* cpr.controls.Output */ each){
		each.addEventListener("click", function(e){
			var control = e.control;
			
			var element = document.createElement("input");

			element.value = control.value;
			document.body.appendChild(element);
			element.select();
			document.execCommand("copy");
			document.body.removeChild(element);
		});
	});
}
