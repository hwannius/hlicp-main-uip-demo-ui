/************************************************
 * Container.js
 * Created at 2022. 9. 21. 오전 9:40:25.
 *
 * @author ryu
 ************************************************/

/*
 * 체크 박스에서 value-change 이벤트 발생 시 호출.
 * CheckBox의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onCbxToggleValueChange(e){
	var cbxToggle = e.control;
	
	var vbChecked = cbxToggle.checked;
	var vcGrpSearch = app.lookup("grpSearch3");
	vcGrpSearch.getAllRecursiveChildren(false).filter(function(each){
		return each.userAttr("hide-when-collapsed") == "true";
	}).forEach(function(each){
		var vcGrpInner = each.getParent();
		/** @type cpr.controls.layouts.FormLayout */
		var voGrpInnerLayout = vcGrpInner.getLayout();
		
		// 해당 컨트롤 숨김
		each.visible = !vbChecked;
		
		// 컨트롤 좌측에 위치하는 라벨 숨김
		/** @type cpr.controls.layouts.FormConstraint */
		var voConstraint = vcGrpInner.getConstraint(each);
		/** @type cpr.controls.Output[] */
		var vaLabels = voGrpInnerLayout.findControls({colIndex: voConstraint.colIndex - 1, rowIndex: voConstraint.rowIndex});
		if (vaLabels.length > 0){
			var vcOptLabel = vaLabels[0];
			vcOptLabel.visible = !vbChecked;

			// 행에 모든 존재하는 모든 컨트롤이 숨겨졌을 경우 행을 숨김
			/** @type cpr.controls.layouts.FormConstraint */
			var voLabelConstraint = vcGrpInner.getConstraint(vcOptLabel);
			if (voLabelConstraint.colIndex == 0){
				voGrpInnerLayout.setRowVisible(voLabelConstraint.rowIndex, !vbChecked);
			}
		}
	});
}
