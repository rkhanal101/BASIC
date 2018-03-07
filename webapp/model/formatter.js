sap.ui.define([],function(){
"use strict";
return {
	
	statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("HOTELSStatusA");
				case "B":
					return resourceBundle.getText("HOTELSStatusB");
				case "C":
					return resourceBundle.getText("HOTELSStatusC");
				default:
					return sStatus;
			}
		}
};
});