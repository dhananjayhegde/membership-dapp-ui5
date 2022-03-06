sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("membership.controller.App", {
		onPress : function () {
			MessageToast.show("Hello! Join the Crypto Dev Community");
		}
	});
});