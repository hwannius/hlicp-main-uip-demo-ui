/************************************************
 * SLAA01M0.js
 * Created at 2024. 4. 1. 오후 2:47:48.
 *
 * @author chwec
 ************************************************/

/*
 * "다음" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;

	//화면이동(현재 화면에서 리로드)_기본정보등록2
	var host = app.getHost(); // 부모 임베디드 앱
	cpr.core.App.load("sfa/영업/SLAA01M0_1", function(loadedApp) {
	    if (loadedApp) {
	        host.app = loadedApp;
	        host.initValue = {
	            "param": "param"
	        }
	    }
	});	
}
