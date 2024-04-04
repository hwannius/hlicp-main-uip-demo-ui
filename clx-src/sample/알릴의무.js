/************************************************
 * SFA0000150.js
 * Created at 2022. 11. 14. 오후 4:21:58.
 *
 * @author ryu
 ************************************************/
/*
 * "필수고지 입력" 버튼(btn2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn2Click(e){
	var btn2 = e.control;
	app.getRootAppInstance().openDialog("sample/필수고지_입력대상", {width : 600, height : 405}, function(dialog){
		dialog.ready(function(dialogApp){
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
		});
		dialog.addEventListener("close", function(e){
			
		});
	}).then(function(returnValue){
		if(returnValue == true){
			app.getRootAppInstance().openDialog("sample/상세_질병정보_입력", {width : 600, height : 530}, function(dialog){
				dialog.ready(function(dialogApp){
					// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
				});
				dialog.addEventListener("close", function(e){
					
				});
			})
		}
	});

}
