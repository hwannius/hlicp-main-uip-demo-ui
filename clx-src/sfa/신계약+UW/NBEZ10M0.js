/************************************************
 * SLAA01M0.js
 * Created at 2024. 4. 1. 오후 1:37:16.
 *
 * @author chwec
 ************************************************/

/*
 * "- 리스트를 더블클릭 하시면 [청약서심사] 화면으로 이동합니다." 아웃풋에서 value-change 이벤트 발생 시 호출.
 * Output의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */

var count=0;

/*
 * 페이지 "하단 > 다음" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	
		app.openDialog("sfa/신계약+UW/SIMSA", {width : 1200, height : 550}, function(dialog){
	    dialog.ready(function(dialogApp){
	        // 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
	    });
		}).then(function(returnValue){
		    ;
		});
		
		count++;
}

/*
 * "이전" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;

	var host = app.getHost(); // 부모 임베디드 앱
	cpr.core.App.load("sfa/신계약+UW/NBEP10M0_Z", function(loadedApp) {
	    if (loadedApp) {
	        host.app = loadedApp;
	        host.initValue = {
	            "param": "param"
	        }
	    }
	});		

}

/*
 * 페이진 "상단 > 다음" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick3(e){
	var button = e.control;
	
	if (count==0){	
			app.openDialog("sfa/신계약+UW/SIMSA", {width : 1200, height : 550}, function(dialog){
		    dialog.ready(function(dialogApp){
		        // 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
		    });
			}).then(function(returnValue){
			    ;
			});	
	}else{
			var host = app.getHost(); // 부모 임베디드 앱
			cpr.core.App.load("sfa/신계약+UW/NBEP10M0_Z", function(loadedApp) {
			    if (loadedApp) {
			        host.app = loadedApp;
			        host.initValue = {
			            "param": "param"
			        }
			    }
			});		
	}
	
	count++;

}
