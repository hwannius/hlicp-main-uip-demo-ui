/*
 * App URI: app/com/comPMsgDialog
 * Source Location: app/com/comPMsgDialog.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("app/com/comPMsgDialog", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * Dialog_B.js
			 * Created at 2022. 9. 28. 오후 2:17:44.
			 *
			 * @author ryu
			 ************************************************/

			var util = createCommonUtil();

			/**
			 * 
			 * @param {#uicontrol} psCtrlId
			 * @param {any} psParamNotNull
			 */
			function setControlValue(psCtrlId,psParamNotNull){
				if(ValueUtil.fixNull(psParamNotNull) != "") {
					if(app.lookup(psCtrlId)) {
						
						util.Control.setValue(app, psCtrlId, psParamNotNull);
					}
				}
			}


			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				var voHost = app.getHost();
				if(!voHost) {
					return;
				}
				/** @type {MessageInterface} */
				var voInitValue = app.getHostProperty("initValue");
					util.Control.setVisible(app, true, "btnPositive");
				if(ValueUtil.fixNull(voInitValue) != "") {
					if(voInitValue["msgType"] == "alert") {
						util.Control.setVisible(app, true, ["imgInfo"]);
					} else {
						util.Control.setVisible(app, true, ["btnNegative","imgInfo"]);
					}
					setControlValue("optMsg", voInitValue["msg"]);
					setControlValue("optSubMsg", voInitValue["subMsg"]);
					setControlValue("btnPositive", voInitValue["confirmBtnValue"]);
					setControlValue("btnNegative", voInitValue["cancelBtnValue"]);	
				}
				
				app.lookup("btnPositive").focus();
			}

			/*
			 * "확인" 버튼(btnConfirm)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnConfirmClick(e){
				var btnConfirm = e.control;
				app.close("close");
			}

			/*
			 * "취소" 버튼(btnCancel)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnCancelClick(e){
				var btnCancel = e.control;
				
				app.close();
			};
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1644px)", "default");
			app.supportMedia("all and (max-width: 1643px)", "tablet");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_1.spacing = 10;
			verticalLayout_1.leftMargin = 24;
			verticalLayout_1.rightMargin = 24;
			verticalLayout_1.topMargin = 24;
			verticalLayout_1.bottomMargin = 24;
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container("grpMsgContent");
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.scrollable = false;
			verticalLayout_2.spacing = 6;
			group_1.setLayout(verticalLayout_2);
			(function(container){
				var group_2 = new cpr.controls.Container("grp1");
				var xYLayout_1 = new cpr.controls.layouts.XYLayout();
				xYLayout_1.scrollable = false;
				group_2.setLayout(xYLayout_1);
				(function(container){
					var image_1 = new cpr.controls.Image("imgDanger");
					image_1.visible = false;
					image_1.src = "theme/images/controls/dialog/ic_pop_danger.png";
					(function(image_1){
					})(image_1);
					container.addChild(image_1, {
						"width": "40px",
						"height": "40px",
						"left": "calc(50% - 20px)",
						"top": "calc(50% - 20px)"
					});
					var image_2 = new cpr.controls.Image("imgWarning");
					image_2.visible = false;
					image_2.src = "theme/images/controls/dialog/ic_pop_warning.png";
					(function(image_2){
					})(image_2);
					container.addChild(image_2, {
						"width": "40px",
						"height": "40px",
						"left": "calc(50% - 20px)",
						"top": "calc(50% - 20px)"
					});
					var image_3 = new cpr.controls.Image("imgInfo");
					image_3.visible = false;
					image_3.src = "theme/images/controls/dialog/ic_pop_info.png";
					(function(image_3){
					})(image_3);
					container.addChild(image_3, {
						"width": "40px",
						"height": "40px",
						"left": "calc(50% - 20px)",
						"top": "calc(50% - 20px)"
					});
				})(group_2);
				container.addChild(group_2, {
					"width": "400px",
					"height": "42px"
				});
				var output_1 = new cpr.controls.Output("optMsg");
				output_1.style.setClasses(["h5", "text-center"]);
				container.addChild(output_1, {
					"autoSize": "height",
					"width": "100%",
					"height": "24px"
				});
				var output_2 = new cpr.controls.Output("optSubMsg");
				output_2.style.setClasses(["fs-sm", "text-gray-600", "text-center"]);
				container.addChild(output_2, {
					"autoSize": "height",
					"width": "100%",
					"height": "34px"
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "352px",
				"height": "114px"
			});
			
			var group_3 = new cpr.controls.Container("grp2");
			var flowLayout_1 = new cpr.controls.layouts.FlowLayout();
			flowLayout_1.scrollable = false;
			flowLayout_1.horizontalSpacing = 10;
			flowLayout_1.verticalSpacing = 0;
			flowLayout_1.horizontalAlign = "center";
			flowLayout_1.lineWrap = false;
			group_3.setLayout(flowLayout_1);
			(function(container){
				var button_1 = new cpr.controls.Button("btnNegative");
				button_1.visible = false;
				button_1.value = "취소";
				if(typeof onBtnCancelClick == "function") {
					button_1.addEventListener("click", onBtnCancelClick);
				}
				container.addChild(button_1, {
					"width": "171px",
					"height": "48px"
				});
				var button_2 = new cpr.controls.Button("btnPositive");
				button_2.visible = false;
				button_2.value = "확인";
				button_2.style.setClasses(["btn-primary"]);
				if(typeof onBtnConfirmClick == "function") {
					button_2.addEventListener("click", onBtnConfirmClick);
				}
				container.addChild(button_2, {
					"width": "171px",
					"height": "48px"
				});
			})(group_3);
			container.addChild(group_3, {
				"width": "352px",
				"height": "48px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "메세지 팝업";
	cpr.core.Platform.INSTANCE.register(app);
})();
