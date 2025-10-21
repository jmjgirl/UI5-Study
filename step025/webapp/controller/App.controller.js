sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict"

   return Controller.extend("step025.controller.App", {
     onOpenDialog : function (){
 			this.getOwnerComponent().openHelloDialog();
 		}
   });
});
