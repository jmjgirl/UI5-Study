sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";

   return UIComponent.extend("step009.Component", {
      // 이전 index.html 파일에 직접 root view를 표시하는 대신 component에서 관리
      metadata : {
         rootView: {
            "viewName": "step009.view.App",
            "type": "XML",
            "async": true,
            "id": "app"
         }
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

         // set i18n model
         var i18nModel = new ResourceModel({
           bundleName: "step009.i18n.i18n",
           supportedLocales:[""],
           fallbackLocale: ""
         });
         this.setModel(i18nModel, "i18n");
      }
   });
});
