// alert 대신 MessageToast.show 사용
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
   "use strict";

   return Controller.extend("step008.controller.App", {
     // Controller 생성시 가장 먼저 호출 (초기화)
     onInit : function(){
       // set data model on view
       var oData = {
          recipient : {
             name : "World"
          }
       };
       var oModel = new JSONModel(oData);
       this.getView().setModel(oModel);

       // set i18n model on view
       var i18nModel = new ResourceModel({
         bundleName: "step008.i18n.i18n",
         supportedLocales:[""],
         fallbackLocale: ""
       });
       this.getView().setModel(i18nModel,"i18n");
    },
     onShowHello: function(){
       // read msg from i18n model
       var oBundle = this.getView().getModel("i18n").getResourceBundle();
       var sRecipient = this.getView().getModel().getProperty("/recipient/name");
       var sMsg = oBundle.getText("helloMsg", [sRecipient]);
       // show message
       MessageToast.show(sMsg);
     }
   });
});
