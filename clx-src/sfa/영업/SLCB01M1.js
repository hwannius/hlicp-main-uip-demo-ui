/************************************************
 * SLCB01M1.js
 * Created at 2024. 4. 2. 오전 10:15:00.
 *
 * @author User
 ************************************************/

/*
 * "이전" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	//화면이동(현재 화면에서 리로드)
	var host = app.getHost(); // 부모 임베디드 앱
	cpr.core.App.load("sfa/영업/SLCB01M2", function(loadedApp) {
	    if (loadedApp) {
	        host.app = loadedApp;
	        host.initValue = {
	            "param": "param"
	        }
	    }
	});
}

/*
 * "다음" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
	//화면이동(현재 화면에서 리로드)
	var host = app.getHost(); // 부모 임베디드 앱
	cpr.core.App.load("sfa/영업/SLCB01M3", function(loadedApp) {
	    if (loadedApp) {
	        host.app = loadedApp;
	        host.initValue = {
	            "param": "param"
	        }
	    }
	});
}
