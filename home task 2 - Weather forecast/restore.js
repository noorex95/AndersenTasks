var weatherInWorld = function(){

	function getCity(){
		var input = document.getElementById('changeCity');
		var city  = input.value;
		return city;
	}

	function getData(){
		var city   = getCity();
		var course = 'http://api.openweathermap.org/data/2.5/weather?q=';
		var key    = '&APPID=f3f57a0338f875ad49458568b6093624';
		var api    = course + city + key;
		fetch(api)
			
			.then(function(response){
				return response.json();
			})
			.then(function(data){
				showData(data);
			})
	}
	return{getData: getData};
}