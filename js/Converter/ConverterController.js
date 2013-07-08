function BinConverterController() {
	var bin_converter_model = new BinConverterModel(),
		elements = {},
		bin_array = [],
		number,
		bin_string;


	function insertBinResult () {
		elements.result_input.value = bin_converter_model.getBinaryNumber(number);
	}

	function insertDecResult () {
		elements.result_input.value = bin_converter_model.getDecimalNumber(bin_array);
	}

	this.init = function() {
		elements = {
			converter_bin_btn: document.querySelector("#converter-bin-btn"),
			converter_dec_btn: document.querySelector("#converter-dec-btn"),
			result_input: document.querySelector("#convert-result"),
			number_input: document.querySelector('#number-in-dec')
		};
		
		elements.converter_bin_btn.onclick = function  () {
			number = parseInt(elements.number_input.value, 10);
			insertBinResult();
			bin_converter_model.clearResultArray();
		}

		elements.converter_dec_btn.onclick = function() {
			bin_string = elements.number_input.value;
			bin_array = bin_converter_model.toArrayOfBinNumbers(bin_string);
			insertDecResult();
		};
	};
}
