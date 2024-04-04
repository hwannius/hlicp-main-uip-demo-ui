/************************************************
 * UW001.js
 * Created at 2024. 2. 28. 오후 1:18:15.
 *
 * @author yein
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	
	var vcEmbList = app.lookup("dsList")
	
	//콤보박스에 화면 리스트 추가
	app.lookup("grpDivision").getChildren().forEach(function(each){
		
		if(each instanceof cpr.controls.EmbeddedApp){
			/** @type cpr.controls.EmbeddedApp */
			each;
			
			each.ready(function(e){
				// 앱 아이디 경로에서 식별자 id 값을 추출합니다. (경로 depth가 변경되는 경우 수정이 필요할 수 있습니다.)
				var id = each.app.id.split("/")[2];
				
				vcEmbList.addRowData({"label" : each.app.title + " [" + id + "]" , "value" : each.app.id, "targetEmb" : each.id, "id" : id})
			})
			
		}
	});
	
}

/*
 * 콤보 박스에서 selection-change 이벤트 발생 시 호출.
 * ComboBox Item을 선택하여 선택된 값이 저장된 후에 발생하는 이벤트.
 */
function onCmb1SelectionChange(e){
	var cmb1 = e.control;
	
	var item = e.newSelection[0].row;
	
	var vcGrpDivision = app.lookup('grpDivision');
	
	var vcEmb = app.lookup(item.getValue("targetEmb"))

	// 다이얼로그 이미 열려 있으면	
	if(app.dialogManager.getDialogNames().indexOf("dialog_" + item.getValue("id")) != -1){
		return
	}
	
	//레이아웃 위치 저장
	vcEmb.userAttr(vcGrpDivision.getConstraint(vcEmb))
	
	var _app = new cpr.core.App("app_"+item.getValue("id"), {
		onCreate: function(app, exports){
			app.getContainer().addChild(vcEmb, {
				"top" : "0px",
				"left" : "0px",
				"right" : "0px",
				"bottom" : "0px"
			});
		}
	}); 
	
	app.dialogManager.openDialog(_app, "dialog_" + item.getValue("id"), {width : 1000, height: 300}, function(dialog){
		dialog.ready(function(dialogApp){
			dialog.modal = false;
			dialog.headerTitle = item.getValue("label")
			
			dialog.addEventListener("close", function(e){
				//다이얼로그 닫힐 때 임베디드 앱을 초기 위치에 넣어줍니다.
				vcGrpDivision.addChild(vcEmb, vcEmb.userAttr());
			});
		})
	}).then(function(returnValue){
	});
	
}
