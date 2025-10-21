sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
	 "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
   "use strict";

   return Controller.extend("step018.controller.HelloPanel", {
     onShowHello: function(){
       // read msg from i18n model
       var oBundle = this.getView().getModel("i18n").getResourceBundle();
       var sRecipient = this.getView().getModel().getProperty("/recipient/name");
       var sMsg = oBundle.getText("helloMsg", [sRecipient]);
       // show message
       MessageToast.show(sMsg);
     },
     onOpenDialog : function (){
 			var oView = this.getView();

 			// create dialog lazily
 			if (!this.byId("helloDialog")) {
 				// load asynchronous XML fragment
 				Fragment.load({
 					id: oView.getId(),
 					name: "step018.view.HelloDialog",
          controller: this
 				}).then(function (oDialog) {
          // root 뷰와 dialog 뷰를 연결
 					// connect dialog to the root view of this component (models, lifecycle)
 					oView.addDependent(oDialog);
 					oDialog.open();
 				});
 			} else {
 				this.byId("helloDialog").open();
 			}
 		},
    onCloseDialog : function () {
      this.byId("helloDialog").close();
    }
   });
});
