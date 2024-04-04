/************************************************
 * Notifier.js
 * Created at 2022. 9. 20. 오후 3:14:55.
 *
 * @author ryu
 ************************************************/

/**
 * @type {Number}
 */
var moInterval = null;

/**
 * 알림을 발생시킵니다.
 */
function notify() {
	var notifier = app.lookup("notifier");
	notifier.notify("알림 메세지");
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	var notifier = app.lookup("notifier");
	notifier.notify("알림 메세지");

	// Interval 실행
	moInterval = setInterval(notify, notifier.delay);
}

/*
 * 루트 컨테이너에서 unload 이벤트 발생 시 호출.
 * 앱이 언로드된 후 발생하는 이벤트입니다.
 */
function onBodyUnload(e){
	// Interval 제거
	clearInterval(moInterval);
}
