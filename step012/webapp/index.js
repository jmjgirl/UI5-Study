// index.html에 data-sap-ui-onInit에 의해 호출
sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "step009",
		settings : {
			id : "comp"
		},
		async: true
	}).placeAt("content");
});
