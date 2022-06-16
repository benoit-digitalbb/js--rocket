// Cette fonction fait
var doCoolStuff = function () {
	var currentClassName = document.getElementById ('coolStuff').className;

	if (currentClassName == 'coolStuff') {
		document.getElementById ('coolStuff').className = 'coolStuff change';
	} else {
		document.getElementById ('coolStuff').className = 'coolStuff';
	};

	// changer classeName
	//document.getElementById ('coolStuff').className = 'coolStuff change'
}

var car = {
		brand: 'VW',
		color: 'blue',
		model: 'polo',
		isTurnOn: false,
		numberOfWheels: 4,
		seats: ['seat 1', 'seat 2', 'seat 3', 'seat 4'],
		turnOn: function () {
			this.isTurnOn = true;
		},
		fly: function () {
			alert('fly');
		},
		switchCar: function (isOn) {
			console.log ('turn car ' + isOn);
			if (isOn == true) {
				this.isTurnOn = true;
			} else {
				this.isTurnOn = false;
			};
		}
};
console.log ('Hello there friends');