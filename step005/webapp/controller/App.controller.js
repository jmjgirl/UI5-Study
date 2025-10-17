sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("step005.controller.App", {
     onShowHello: function(){
       alert("Hello World with contorller");
     }
   });
});
