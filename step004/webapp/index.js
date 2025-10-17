// index.html에 data-sap-ui-onInit에 의해 호출
// 유지보수를 위해 sap.m.Text 컨트롤을 전용 뷰에 배치하여 모듈화!
sap.ui.define([
	// "sap/m/Text"
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	// new Text({
	// 	// ID를 placeAt 인수로 전달
	// 	text: "Hello World with control"}).placeAt("content");
	XMLView.create({
		viewName: "step004.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
});
