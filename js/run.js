(function() {
	var clock_controller = new ClockController();
	var dnd_controller = new dragNdropController();
	var calc_controller = new CalculatorController();
	var bin_converter_controller = new BinConverterController();
	
	window.onload = function() {
		calc_controller.init();
		clock_controller.init();
		dnd_controller.init();
		bin_converter_controller.init();
	};
})();