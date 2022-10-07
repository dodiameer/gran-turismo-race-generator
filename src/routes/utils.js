/**
 * @param {any[]} list
 */
export function getRandomItem(list) {
	return list[Math.floor(Math.random() * list.length)];
}

/**
 * @param {{}} obj
 */
export function getRandomProperty(obj) {
	const keys = Object.keys(obj);

	return keys[Math.floor(Math.random() * keys.length)];
}
