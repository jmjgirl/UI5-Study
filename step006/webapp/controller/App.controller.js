// alert 대신 MessageToast.show 사용
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";

   return Controller.extend("step006.controller.App", {
     onShowHello: function(){
       MessageToast.show("Hello World");
     }
   });
});
