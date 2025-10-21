sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "zstep099/model/models"
], function(Controller, MessageToast, models){
  "use strict";

  return Controller.extend("zstep099.controller.App",{
    onInit() {
        var oModel = models.createJsonModel();
        this.getView().setModel(oModel, "jsonModel");

        var oStateModel = models.createState();
        this.getView().setModel(oStateModel, "stateModel");
    },
    
    changeState(){
      var oModel = this.getView().getModel("stateModel");
      var bState = oModel.getProperty("/enabled");
      if(bState === true){
        oModel.setProperty("/enabled",false);
      }else{
        oModel.setProperty("/enabled",true);
      }
    }
  });
});
