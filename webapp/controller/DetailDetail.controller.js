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

		return Controller.extend("com.ui5.confio4.masterdetailconfio4t003.controller.DetailDetail", {
			onInit: function () {
				var oOwnerComponent = this.getOwnerComponent();

				var ddModel = oOwnerComponent.getModel('flight');
				
				this.getView().setModel(ddModel);
				this.oRouter = oOwnerComponent.getRouter();
         

                this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onPatternMatch, this);
                // var check = this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onPatternMatch, this);
                // console.log(check)
			},

			_onPatternMatch: function (oEvent){
				this._detail = oEvent.getParameter("arguments").detail || this._detail || "0";
                this._flight = oEvent.getParameter("arguments").flight || this._flight || "0";
                 
                 this.getView().bindElement({
                     path:"/d/results/"+this._detail,
                 })
			
			},
			
			onExit: function( ){
				this.oRouter.getRoute("detailDetail").detachPatternMatched(this._onPatternMatch, this);
			}
		});
	});
