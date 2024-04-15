/************************************************
 * ${filename}
 * Created at ${date} ${time}.
 *
 * @author ${user}
 ************************************************/

 var count = 0;

/*
 * "이전" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	
	var host = app.getHost(); // 부모 임베디드 앱
	cpr.core.App.load("sfa/신계약+UW/PRA110M0_0", function(loadedApp) {
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
	
	if (count == 0){
			var host = app.getHost(); // 부모 임베디드 앱
			cpr.core.App.load("sfa/신계약+UW/NBEZ10M0", function(loadedApp) {
		    if (loadedApp) {
		        host.app = loadedApp;
		        host.initValue = {
		            "param": "param"
		        }
		    }
		});	
	}else if (count == 999){
		var host = app.getHost(); // 부모 임베디드 앱
		cpr.core.App.load("sfa/신계약+UW/NBEP20M4", function(loadedApp) {
	    if (loadedApp) {
	        host.app = loadedApp;
	        host.initValue = {
	            "param": "param"
	        }
	    }
		});			
	} else if (count == 9999){
		var host = app.getHost(); // 부모 임베디드 앱
		cpr.core.App.load("sfa/신계약+UW/NBEP20M4_0", function(loadedApp) {
	    if (loadedApp) {
	        host.app = loadedApp;
	        host.initValue = {
	            "param": "param"
	        }
	    }
		});			
	}else{
			var host = app.getHost(); // 부모 임베디드 앱
			cpr.core.App.load("sfa/신계약+UW/NBEZ10M0", function(loadedApp) {
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
 * "표준하체" 버튼(btn80)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn80Click(e){
	var btn80 = e.control;
		app.openDialog("sfa/신계약+UW/NBEZ50P1", {width : 1200, height : 550}, function(dialog){
	    dialog.ready(function(dialogApp){
	        // 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
	    });
		}).then(function(returnValue){
		    ;
		});	
}

/*
 * "미결" 버튼(btn79)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn79Click(e){
	var btn79 = e.control;
	
	count = 999;
		
	app.openDialog("sfa/신계약+UW/NBEZ50P0", {width : 1200, height : 550}, function(dialog){
    dialog.ready(function(dialogApp){
        // 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
    });
	}).then(function(returnValue){
	    ;
	});
}

/*
 * "(3) 반송" 버튼(btn75)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn75Click(e){
	var btn75 = e.control;

	count = 9999;
	
	app.openDialog("sfa/신계약+UW/NBDB10M0", {width : 1200, height : 550}, function(dialog){
    dialog.ready(function(dialogApp){
        // 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
    });
	}).then(function(returnValue){
	    ;
	});	
}

/*
 * "(4) 승낙" 버튼(btn72)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn72Click(e){
	var btn72 = e.control;
	
	var host = app.getHost(); // 부모 임베디드 앱
	cpr.core.App.load("sfa/신계약+UW/NBEP20M4_1", function(loadedApp) {
    if (loadedApp) {
        host.app = loadedApp;
        host.initValue = {
            "param": "param"
        }
    }
	});
}
