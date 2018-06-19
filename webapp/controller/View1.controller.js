sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.pats.calculator.controller.View1", {
			onAdd: function(){
			var sum= parseInt(this.byId("inp1").getValue(),10) + parseInt(this.byId("inp2").getValue(),10);
			MessageBox.information("Sum: "+ sum);
			
			
		}
	

	});
});