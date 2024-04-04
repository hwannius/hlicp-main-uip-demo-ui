/************************************************
 * UW007.js
 * Created at 2024. 2. 28. 오후 1:32:26.
 *
 * @author ryu
 ************************************************/

var util = createCommonUtil();

/*
 * 그리드에서 row-dblclick 이벤트 발생 시 호출.
 * detail이 row를 더블클릭 한 경우 발생하는 이벤트.
 */
function onGrd1RowDblclick(e){
	util.Dialog.open(app, "app/240228/UW006", 1000, 651, function(){
	});
}
