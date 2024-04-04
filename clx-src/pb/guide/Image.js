/************************************************
 * Image.js
 * Created at 2022. 9. 21. 오전 11:27:48.
 *
 * @author ryu
 ************************************************/

var mbClickable = true;

/*
 * 이미지에서 item-mouseover 이벤트 발생 시 호출.
 * 이미지 맵 영역에 마우스가 위치했을 때 발생하는 이벤트.
 */
function onImageItemMouseover(e){
	var image = e.control;
	
	if (mbClickable){
		var vcItem = e.item;
		
		if (vcItem.value == "head"){
			image.src = "theme/hk/images/controls/image/anatomy-img-02.png";
		} else if (vcItem.value == "chest") {
			image.src = "theme/hk/images/controls/image/anatomy-img-03.png";
		} else if (vcItem.value == "left-arm") {
			image.src = "theme/hk/images/controls/image/anatomy-img-04.png";
		} else if (vcItem.value == "right-arm") {
			image.src = "theme/hk/images/controls/image/anatomy-img-05.png";
		} else if (vcItem.value == "abs") {
			image.src = "theme/hk/images/controls/image/anatomy-img-06.png";
		} else if (vcItem.value == "left-leg") {
			image.src = "theme/hk/images/controls/image/anatomy-img-07.png";
		} else if (vcItem.value == "right-leg") {
			image.src = "theme/hk/images/controls/image/anatomy-img-08.png";
		}
	}
}

/*
 * 이미지에서 item-click 이벤트 발생 시 호출.
 * 이미지 영역 아이템 클릭시 발생하는 이벤트.
 */
function onImageItemClick(e){
	var image = e.control;
	
	mbClickable = false;
}

/*
 * 이미지에서 mouseleave 이벤트 발생 시 호출.
 * 사용자가 컨트롤 및 컨트롤의 자식 영역 바깥으로 마우스 포인터를 이동할 때 발생하는 이벤트.
 */
function onImageMouseleave(e){
	var image = e.control;
	
	mbClickable = true;
}
