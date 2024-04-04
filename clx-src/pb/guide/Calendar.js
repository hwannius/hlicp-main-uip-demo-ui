/************************************************
 * Calendar.js
 * Created at 2022. 9. 20. 오전 9:41:02.
 *
 * @author ryu
 ************************************************/

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	var vcCalendar = app.lookup("calendar");
	vcCalendar.addAnniversary({
		date: moment().subtract(2, "day").format("YYYYMMDD"),
		label: "기념일"
	});
}
