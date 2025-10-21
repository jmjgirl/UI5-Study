sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "./controller/HelloDialog"
 ], function (UIComponent, JSONModel, HelloDialog) {
 	"use strict";

   return UIComponent.extend("step022.Component", {
      metadata : {
         manifest: "json"
      },

      init: function(){
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

         // set dialog
   			this._helloDialog = new HelloDialog(this.getRootControl());
      },
      exit : function(){
  			this._helloDialog.destroy();
        // HelloDialog 인스턴스에 대한 참조 삭제 + 가비지 콜렉터 메모리 정리
  			delete this._helloDialog;
  		},

  		openHelloDialog : function (){
  			this._helloDialog.open();
  		}
   });
});
