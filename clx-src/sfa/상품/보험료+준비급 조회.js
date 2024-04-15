/************************************************
 * 보험료+준비급 조회.js
 * Created at 2024. 4. 1. 오후 1:01:27.
 *
 * @author User
 ************************************************/


/*
 * "다음" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
	
	var host = app.getHost(); // 부모 임베디드 앱
	cpr.core.App.load("sfa/상품/PDAL11M0", function(loadedApp) {
    if (loadedApp) {
        host.app = loadedApp;
        host.initValue = {
            "param": "param"
        }
    }
});	
}
