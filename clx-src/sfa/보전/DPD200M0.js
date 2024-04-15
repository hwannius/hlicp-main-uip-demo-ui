/************************************************
 * ${filename}
 * Created at ${date} ${time}.
 *
 * @author ${user}
 ************************************************/

var count = 0;

/*
 * "다음" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;

	if (count == 0){
		app.openDialog("sfa/보전/CSBE00P1", {width : 1200, height : 550}, function(dialog){
	    dialog.ready(function(dialogApp){
	        // 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
	    });
		}).then(function(returnValue){
		    ;
		});			
	}else{
		var host = app.getHost(); // 부모 임베디드 앱
			cpr.core.App.load("sfa/보전/****", function(loadedApp) {
		    if (loadedApp) {
		        host.app = loadedApp;
		        host.initValue = {
		            "param": "param"
		        }
		    }
		});			
	}
}

/*
 * "이전" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;

	var host = app.getHost(); // 부모 임베디드 앱
		cpr.core.App.load("sfa/보전/DPD010M0", function(loadedApp) {
	    if (loadedApp) {
	        host.app = loadedApp;
	        host.initValue = {
	            "param": "param"
	        }
	    }
	});	
}
