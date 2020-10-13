module.exports = function check(str, bracketsConfig) {
	let strReverse;
	while (str) {
		for (let i of bracketsConfig) {
			str = str.replace(i.join(''), '')
		}
		if (str === strReverse) {
			return false;
		}
		strReverse = str;
	}
	return str.length === 0;
}
