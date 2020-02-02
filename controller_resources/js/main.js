/* main.js */

var airConsole = null;
var downEvent;
var upEvent;



$(document).ready(function() {

	airConsole = new AirConsole({"orientation": "landscape"});
	
	downEvent = isMobile() ? 'touchstart' : 'mousedown';
	upEvent = isMobile() ? 'touchend' : 'mouseup';


	var sendHandshake = function() {
		airConsole.message(AirConsole.SCREEN, {
			handshake: true
		});
	};

	airConsole.onReady = function() {
		sendHandshake();
	}


	var sendMessage = function(string) {
		airConsole.message(AirConsole.SCREEN, {
			message: string
		});
	};

	airConsole.onMessage = function(deviceId, data) {
		if (data.handshake) {
			sendHandshake();
		}
	};
	
	$('#up').on(downEvent, function (event) {
		sendMessage('up');
	});
	
	$('#up').on(upEvent, function (event) {
		sendMessage('stop');
	});
	
	$('#down').on(downEvent, function (event) {
		sendMessage('down');
	});
	
	$('#down').on(upEvent, function (event) {
		sendMessage('stop');
	});
	
	$('#left').on(downEvent, function (event) {
		sendMessage('left');
	});
	
	$('#left').on(upEvent, function (event) {
		sendMessage('stop');
	});
	
	$('#right').on(downEvent, function (event) {
		sendMessage('right');
	});
	
	$('#right').on(upEvent, function (event) {
		sendMessage('stop');
	});
	
	$('#action').on(upEvent, function (event) {
		sendMessage('action');
	});
});

/**
* Returns true if device is a mobile device
* @return {Boolean}
*/
function isMobile() {
	if (navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i) ||
		navigator.userAgent.match(/WPDesktop/i) ||
		navigator.userAgent.match(/Opera Mini/i) ||
		navigator.userAgent.match(/IEMobile/i)) {
		return true;
	}
	else {
		return false;
	}
}