sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("POReportForSCM.POReportForSCM.controller.V_PODetail", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf POReportForSCM.POReportForSCM.view.V_PODetail
		 */
		onInit: function () {
			// Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// Validate/Match the Router Details sent from source using oRouter.navTo("Router_Detail", {SelectedItem: selectPO});
			oRouter.getRoute("Route_PODetail").attachMatched(this._onRouteFound, this);
		},
		// Custom Method to bind the elements using the Event Arguments
		_onRouteFound: function (oEvt) {
				var oArgument = oEvt.getParameter("arguments");
				var oView = this.getView();
				oView.bindElement({
					path: "/POHeaderSet('" + oArgument.SelectedItem + "')"
				});
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf POReportForSCM.POReportForSCM.view.V_PODetail
			 */
			//	onBeforeRendering: function() {
			//
			//	},
			/**
			 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
			 * This hook is the same one that SAPUI5 controls get after being rendered.
			 * @memberOf POReportForSCM.POReportForSCM.view.V_PODetail
			 */
			//	onAfterRendering: function() {
			//
			//	},
			/**
			 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			 * @memberOf POReportForSCM.POReportForSCM.view.V_PODetail
			 */
			//	onExit: function() {
			//
			//	}
			,
		/**
		 *@memberOf POReportForSCM.POReportForSCM.controller.V_PODetail
		 */
		GoToPOHeader: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Route_POHeader");
		},
		/**
		 *@memberOf POReportForSCM.POReportForSCM.controller.V_PODetail
		 */
		GoToPOItem: function (oEvt) {
			var v_res = oEvt.getSource().getParent().getBindingContext().getObject().Ebeln;
			var v_resit = oEvt.getSource().getParent().getBindingContext().getObject().Ebelp;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Route_Item", {
				SelectedPO: v_res,
				SelectedPOItem: v_resit
			});
		}
	});
});