function getTickets{
	let items = JSON.parse(localStorage.getItem('items'));
	let itemsList = document.getElementById('itemsList');

	itemsList.innerHTML = '';

	for (let i = 0; i < items.length; i++ ) {
		let id = items[i].id;
		let dsc = items[i].description;
		let prtty = items[i].priority;
		let rspns = items[i].responsible;
		let status = items[i].status;

		itemsList.innerHTML += 	'<div class="well">'+
								'<h6>Item ID:' + id + '</h6>'+
								'<p><span class="label label-info">' + status + '</span></p>'+
								'<h3>' + dsc + '</h3>'+
								'<p><span class="glyphicon glyphicon-time"></span>' + prtty + '</p>'+
								'<p><span class="glyphicon glyphicon-user"></span>' + rspns + '</p>'
	}
}