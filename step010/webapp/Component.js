sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
   "use strict";

   return UIComponent.extend("step010.Component", {
      metadata : {
         // 이전 rootView 및 ResourceModel에 대한 선언은 manifest.json이 담당
         manifest: "json"
         // rootView: {
         //    "viewName": "step009.view.App",
         //    "type": "XML",
         //    "async": true,
         //    "id": "app"
         // }
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
      }
   });
});
