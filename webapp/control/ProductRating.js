sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	"sap/m/Button"
],function(Control, RatingIndicator, Label, Button){
	"use strict";
	return Control.extend("BASIC.control.ProductRating",{
		metadata: {
			properties: {
				value: {type : "float", defaultValue: 0}
			
			},
			aggregations : {
				_rating: {type : "sap.m.RatingIndicator", multiple : false , visibility:"hidden"},
				_label: {type : "sap.m.Label" , multiple:false , visibility : "hidden"},
				_button : {type: "sap.m.Button", multiple:false , visibility: "hidden"}
			},
			events : {
				change : {
					parameters : {
						value : {type : "int"}
						
						
					}
				}
			}
			},
			inint : function(){
				this.setAggregation("_rating", new RatingIndicator({
					value: this.getValue(),
					iconSize : "2rem",
					visualMode: "Half",
					liveChange: this._onRate.bind(this)
					
				}));
				this.setAggregation("_label", new Label({
				text: "{i18n>productRatingLabelInitial}"
			}).addStyleClass("sapUiSmallMargin"));
			this.setAggregation("_button", new Button({
				text: "{i18n>productRatingButton}",
				press: this._onSubmit.bind(this)
			}).addStyleClass("sapUiTinyMarginTopBottom"));
		},
	
		
			_onRate: function(oEvent) {
				this.setValue(oEvent.getParameter("value"));
				this.getAggregation("_button").setEnabled(true);
			},
				_onSubmit: function() {
				this.fireEvent("valueSubmit", {
					value: this.getValue()
				});
				this.getAggregation("_button").setEnabled(false);
			},
	
			renderer : function (oRM, oControl) {
			oRM.write("<div");
			oRM.writeControlData(oControl);
			oRM.addClass("myAppDemoWTProductRating");
			oRM.writeClasses();
			oRM.write(">");
			oRM.renderControl(oControl.getAggregation("_rating"));
			oRM.renderControl(oControl.getAggregation("_label"));
			oRM.renderControl(oControl.getAggregation("_button"));
			oRM.write("</div>");
		}


				
			
		
	});
});