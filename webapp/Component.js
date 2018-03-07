sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"BASIC/model/models",
	"sap/ui/model/json/JSONModel",
	"BASIC/controller/HelloDialog"
	
], function(UIComponent, Device, models, JSONModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("BASIC.Component", {
            
		metadata: {
			manifest: "json"

	
	
	
	
},		

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
             //set data model
             
             var oDatas ={
             	recipient : {
             		name : "world"
             	}
             };
             var oModel = new JSONModel(oDatas);
             this.setModel(oModel);
             //set i18n model
           /*  var i18nModel = new ResourceModel({
             	bundleName : "BASIC.i18n.i18n"
             });
             
             
             this.setModel(i18nModel, "i18n");*/
             	// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
			
			//create the view based on url
			this.getRouter().initialize();
		},


		exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function () {
			this._helloDialog.open();
		}
             
             
			// set the device model
			
		
		
	});
});