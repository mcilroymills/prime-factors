/* Author: Mills McIlroy
 * Date: 2/14/2015
 * Description: This function takes any number and returns its prime factors.
 */  
 
function myFn (arg) {

	var divisor = 2;
	var array = [];

	while (arg !== 1) {
		while (!(arg % divisor) ) {
			array.push(divisor);
			arg = arg / divisor;	
		}
		divisor++;
	}
	return array;
}

console.log(myFn(10))
/*This is for testing purposes
module.exports = {
	for: myFn
};
*/