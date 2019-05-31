/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"POReportForSCM/POReportForSCM/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});