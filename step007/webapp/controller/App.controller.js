// alert 대신 MessageToast.show 사용
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
   "use strict";

   return Controller.extend("step007.controller.App", {
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
    },
     onShowHello: function(){
       MessageToast.show("Hello World");
     }
   });
});
