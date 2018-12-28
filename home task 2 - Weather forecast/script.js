var submit = document.getElementById('submitResult');
	submit.addEventListener('click', function() {	
	var weather = weatherInWorld();	
	weather.getData();
});