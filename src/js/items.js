/**
 * @class Item
 */

const Item = class Item {
	constructor(element) {
		this.item = element;

		this.bindDeleteButton();
	};

	bindDeleteButton() {
		const deleteButton = this.item.querySelector(this.deleteButtonSelector);

		deleteButton.addEventListener('click', ::this.deleteItem);
	};

	deleteItem() {
		const { parentNode } = this.item;

		parentNode.removeChild(this.item);
	};

	get deleteButtonSelector() {
		return '[js-delete]';
	};

	static get itemSelector() {
		return '[js-item]';
	};

	static instantiate() {
		document.querySelectorAll(this.itemSelector).forEach(element => {
			new Item(element)
		})
	};
}


document.onreadystatechange = () => {
	if(document.readyState == 'interactive'){
		Item.instantiate()
	}
}
