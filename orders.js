let body = document.body;
let getdata = () => {
	let request = new XMLHttpRequest();
	request.open('GET', 'http://35.189.102.11:8081/order/all/');
	request.send();
	request.onload = () => {
		let data = JSON.parse(request.response);

		for (let order of data) {
			console.log(order);
		}
	};
};

getdata();

/**
 * 
 * @param {Event} event 
 */
let postData = (event) => {
	event.preventDefault()
	let form = event.target()

	let obj2 = {
		id: 1,
		items: [
			{
				id: 1,
				imageUrl: 'string',
				itemName: 'string',
				price: 1
			}
		],
		purchased: true
	};

	let obj = {};

	let inputs = form.getElementsByTagName('orderInsert');

	for (let input of inputs) {
		if (inputs.name) {
			obj2[input.name] = input.value;
		}
	}

	let request = new XMLHttpRequest();
	request.open('POST', 'http://35.189.102.11:8081/order/');
	request.setRequestHeader('Content-Type', 'application/json');
	let body = JSON.stringify(obj2);
	console.log(body);
	request.send(body);
	request.onload = () => {
		getdata();
	};
};
postData();


let deleteData =(id) => {
	let request = new XMLHttpRequest();
	request.open('Delete', 'http://35.189.102.11:8081//order/' + id)
	request.send();
	request.onload =() => {
		getdata();
	}
}
