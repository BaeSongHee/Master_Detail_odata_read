sap.ui.define([
	"sap/ui/core/UIComponent",
//	"com/ui5/confio4/masterdetailconfio4t003/model/models",
	"sap/ui/model/json/JSONModel",
	"sap/f/library"
], function (UIComponent, JSONModel, fioriLibarary) {
	"use strict";

	return UIComponent.extend("com.ui5.confio4.masterdetailconfio4t003.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
			init: function () {
				var oModel,
					oFlightsModel,
					oRouter;

				// call the base component's init function
				UIComponent.prototype.init.apply(this, arguments);

				oModel = new JSONModel();
				this.setModel(oModel);
				// enable routing
				this.getRouter().initialize();

				// set the device model
	//			this.setModel(models.createDeviceModel(), "device");

				
				oFlightsModel = new JSONModel(sap.ui.require.toUrl('sap/ui/demo/mock')+'/ZCDS_FIO4_01Set?$format=json');
				oFlightsModel.setSizeLimit(1000);
				this.setModel(oFlightsModel,'flight')
		
				console.log(oFlightsModel)
			
				oRouter = this.getRouter();
				
				console.log(oRouter)
				oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
				oRouter.initialize();

			},
			_onBeforeRouteMatched: function(oEvent) {
				var oModel = this.getModel(),
				sLayout =   oEvent.getParameters().arguments.layout;
				

				console.log(sLayout)
					//If there is no layout parameter, set a defalut layout (normally OneColumn)
					if(!sLayout){
						sLayout = fioriLibarary.LayoutType.OneColumn;
					}
					oModel.setProperty("/layout", sLayout);
			}
	});
});
