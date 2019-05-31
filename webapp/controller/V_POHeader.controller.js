sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("POReportForSCM.POReportForSCM.controller.V_POHeader", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf POReportForSCM.POReportForSCM.view.V_POHeader
		 */
		onInit: function () {},
		/**
		 *@memberOf POReportForSCM.POReportForSCM.controller.V_POHeader
		 */
		GoToPODetail: function (evt) {
			// Get Property of the Clicked Item. i.e. PO number of the item which was clicked
			var selectPO = evt.getSource().getBindingContext().getProperty("Ebeln");

			// Now Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// Tell the Router to Navigate To Route_PODetail which is linked to V_PODetail view
			oRouter.navTo("Route_PODetail", {
				SelectedItem: selectPO
			});

		}
	});
});