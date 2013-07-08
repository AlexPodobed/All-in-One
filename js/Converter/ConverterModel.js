function BinConverterModel() {
	var array_of_results = []

	this.getBinaryNumber = function(number) {
		array_of_results.push(number%2);
		return  ( number !== 0 && number!== 1 ) ? this.getBinaryNumber(Math.floor(number/2)) : array_of_results.reverse().join('');
	};
	this.clearResultArray = function () {
		array_of_results = array_of_results.slice(array_of_results.length);
	};
	this.getDecimalNumber = function(arr){
		var result = 0, i;

		for(i = 0; i < arr.length; i += 1){
			result += arr[i]*Math.pow(2,i);
		}

		return result;
	};
	this.toArrayOfBinNumbers = function(str) {
		var arr_of_bin_numbers = str.split('');

		arr_of_bin_numbers = arr_of_bin_numbers.map(function(x) {return parseInt(x, 10)});
		return arr_of_bin_numbers.reverse();		
	};
}