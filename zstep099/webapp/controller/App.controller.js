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

        var oButton = new sap.m.Button('newBtn', { text : "New Button", press: this.newBtnClick.bind(this) });
        var oPage = this.getView().byId("myPage");
        oPage.addContent(oButton);

        console.log("onInit");
    },

    onBeforeRendering: function(){
      console.log("onBeforeRendering");
    },

    onAfterRendering: function(){
      console.log("onAfterRendering");
    },

    onExit: function(){
      console.log("onExit");
    },

    changeState(){
      var oModel = this.getView().getModel("stateModel");
      var bState = oModel.getProperty("/enabled");
      if(bState === true){
        oModel.setProperty("/enabled",false);
      }else{
        oModel.setProperty("/enabled",true);
      }
    },

    newBtnClick: function(){
      alert("New Button is Clicked");
      this.getView().byId("btn01").setProperty("text", "New Name");  //실행이 안됨
    }
  });
});
