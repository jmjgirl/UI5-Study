sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
function (JSONModel, Device) {
    "use strict";

    return {
      createJsonModel: function(){
        var oModel = new JSONModel();
        var sPath = jQuery.sap.getModulePath("zstep099","/model/localData/myData.json");
        oModel.loadData(sPath);
        return oModel;
      },
      // 화면 제어
      createState: function(){
        var oModel = new JSONModel({ enabled: true });
        return oModel;
      }
    };

});
