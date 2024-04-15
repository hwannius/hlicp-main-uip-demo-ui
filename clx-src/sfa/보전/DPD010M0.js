/************************************************
 * ${filename}
 * Created at ${date} ${time}.
 *
 * @author ${user}
 ************************************************/

/*
 * "다음" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	
	var host = app.getHost(); // 부모 임베디드 앱
		cpr.core.App.load("sfa/보전/DPD200M0", function(loadedApp) {
	    if (loadedApp) {
	        host.app = loadedApp;
	        host.initValue = {
	            "param": "param"
	        }
	    }
	});	
}
