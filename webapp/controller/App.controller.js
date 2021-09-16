sap.ui.define([
	"sap/ui/core/mvc/Controller",
	// "sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
	// "sap/ui/model/resource/ResourceModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("com.ui5.confio4.masterdetailconfio4t003.controller.App", {
			onInit: function () {

				this.oOwnerComponent = this.getOwnerComponent();
				this.oRouter = this.oOwnerComponent.getRouter();
				this.oRouter.attachRouteMatched(this.onRouteMatched, this);

				// this.oOwnerComponent = this.getOwnerComponent()
				// this.oRouter = this.oOwnerComponent.getRouter();
				// this.oRouter.attachRouteMatched(this.onRouteMatched, this);
				// var sRouteflight = oEvent.getParameter("{path:d/Carrid}")
				// console.log(sRouteflight)
				//  this.oOwnerComponent.prototype.init.apply(this,arguments)
				// console.log(this.oOwnerComponent)
			},

			onRouteMatched: function (oEvent){
				 var sRouteflight = oEvent.getParameter("name"),
					oArguments = oEvent.getParameter("arguments");
				//Save the current route name
				this.currentRouteflight = sRouteflight;
				this.currentflight = oArguments.flight;
				this.currentdetail = oArguments.detail;

			
			},
			onStateChanged: function(oEvent){
				var bIsNavigationArrow = oEvent.getParameter("isNavigationArrow"),
				sLayout = oEvent.getParameter("layout");
		
				//Replace the URL with the new layout if a navigation arrow was used

				if(bIsNavigationArrow){
					this.oRouter.navTo(this.currentRouteflight, {layout : sLayout, flight: this.currentRouteflight, detail:this.currentdetail},true)
				}
		

			},
			onExit: function(){
				this.oRouter.detachRouteMatched(this.oRouterMatched, this);
			}
		});
	});
