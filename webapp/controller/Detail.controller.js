sap.ui.define([
	"sap/ui/core/mvc/Controller",
	//"sap/ui/core/UIComponent"
	// "sap/m/MessageToast",
	// "sap/ui/model/json/JSONModel",
	// "sap/ui/model/resource/ResourceModel"
	"sap/f/library",
	"sap/ui/model/Filter",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,
	library,
	Filter,
	JSONModel) {
		"use strict";

		return Controller.extend("com.ui5.confio4.masterdetailconfio4t003.controller.Detail", {
			onInit: function () {
				var oOwnerComponent = this.getOwnerComponent();
			
				var detailModel = oOwnerComponent.getModel('flight');
				var dView = this.getView();
				this.getView().setModel(detailModel);
				this.oRouter = oOwnerComponent.getRouter();
				var dTable = dView.byId('DetailsTable')
				
				var oData = {
					date: fldate
				};
				var DModel = new sap.ui.model.json.JSONModel();
				DModel.setData(oData);

				var Dateitem = new sap.m.

		
				this.oRouter.getRoute("master").attachPatternMatched(this._onFlightMatched, this);
				this.oRouter.getRoute("detail").attachPatternMatched(this._onFlightMatched,this);
				this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onFlightMatched,this);


				

				// var arrayTime = [];
				// for(var iTime = 0 ; iTime<dItems.length; iTime++){
				// 	var iAdded = detailModel.getProperty("Fldate",dItems[iTime].getBindingContext());
				// 	arrayTime.push(iAdded);
				// }
				// 	var timeFormat = sap.ui.core.format.DateFormat.getTimeInstance({
				// 		pattern: "yy:mm:ss"
				// 	});

				// 	var tz = new Date(0).getTimezoneOffset() * 60 * 1000;
				// 	var arrayTimeClean = [];
				// 	$.each(arrayTime, function(ii,ee){
				// 		var timeStr = timeFormat.format(new Date(ee.ms + tz));
				// 		arrayTimeClean.push(timeStr);
				// 	})

			}
			,
			// onEditToggleButtonPress: function(oEvent) {

			// 	var oObjectPage = this.getView().byId("ObjectPageLayout"),
			// 	bCurrentShowFooterState = oObjectPage.getShowFooter();

			// 	oObjectPage.setShowFooter(!bCurrentShowFooterState);
			// },
			_onFlightMatched: function(oEvent){
				var dTable = this.getView().byId('DetailsTable')
				
				this._flight = oEvent.getParameter("arguments").flight || this._flight || "0";
				

				this.getView().bindElement({
					path: "/d/results/"+this._flight

				});
				 

				//  dTable.bindAggregation("items",{
				// 	path: "/d/results/",
				// 	template: new sap.m.ColumnListItem({
				// 		cells:[
				// 			new sap.m.Text({
				// 				text: "{Fldate}"
				// 			})
				// 		]
				// 	})
				// });
				// console.log(this._flight);
			},
			// _onbindTable:function(oEvent){
			// 	this._flight = oEvent.getParameter("arguments").flight
			// 	dTable.bindAggregaion("itmes",{
			// 		path: "/d/results/"+this._flight,
			// 		template: new sap.m.ColumnListItem({
			// 			cells:[
			// 				new sap.m.Text({
			// 					text: "{Fldate}"
			// 				})
			// 			]
			// 		})
			// 	})
			// },
			onExit: function(){
				this.oRouter.getRoute("master").detachPatternMatched(this._onFlightMatched,this);
				this.oRouter.getRoute("detail").detachPatternMatched(this._onFlightMatched,this);
			}, 
			onEditToggleButtonPress : function()
			{
				var oObject = this.getView().byId("ObjectPageLayout"),
					bCurrentShowFooter = oObject.getShowFooter();

					oObject.setShowFooter(!bCurrentShowFooter);
			}
			,onDetailPress:function(oEvent){
				var detailPath = oEvent.getSource().getBindingContext().getPath(),
					detail = detailPath.split("/").slice(-1).pop();

					this.oRouter.navTo("detailDetail",{layout: fioriLibrary.LayoutType.ThreeColumnsMidExpanded, detail: detail, flight: this._flight});
					
			
			},
			onBack:function(){

				// this.oRouter.getRoute("master").detachPatternMatched(this.onExit, this);
				this.oRouter.navTo("master",{layout: fioriLibrary.LayoutType.oneColumn});
			}

			// onEditToggleButtonPress: function() {
			// 	var oObjectPage = this.getView().byId("ObjectPageLayout"),
			// 	   bCurrentShowFooterState = oObjectPage.getShowFooter();
	   
			// 	oObjectPage.setShowFooter(!bCurrentShowFooterState);
	   
				
			//  },
			
		});
	});
