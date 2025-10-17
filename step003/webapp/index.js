// index.html에 data-sap-ui-onInit에 의해 호출
// Control sap/m/Text를 사용하여 텍스트를 보여준다.
sap.ui.define([
	"sap/m/Text"
], function (Text) {
	"use strict";

	new Text({
		// ID를 placeAt 인수로 전달
		text: "Hello World with control"}).placeAt("content");
});
