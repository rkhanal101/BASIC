sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	
], function(Controller) {
	"use strict";

	return Controller.extend("BASIC.controller.App", {
			onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
	
	});
});