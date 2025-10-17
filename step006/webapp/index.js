// index.html에 data-sap-ui-onInit에 의해 호출
sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "step006.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
});
