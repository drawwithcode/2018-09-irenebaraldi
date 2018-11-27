
var myMap;
var canvas;
var myLoc;
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoiaXJlbmlhIiwiYSI6ImNqb3pwdmtsbTAwOGkzcXJ4aTJxdGZlcWYifQ.gvKt952hRjPX9QkmQ2PJmQ');


//Crazy Cat Cafè
var milanLat = 45.4813878;
var milanLng = 9.2003494;

//Le Café des Chats
var parigiLat = 48.855868;
var parigiLng = 2.3696253;

//Romeow Cafè
var romaLat = 41.870574;
var romaLng = 12.4793703;

//Le Chat Touille
var BruxLat = 50.8270828;
var BruxLng = 4.3536509;

//Lady Dinah’s Cat Emporium
var londLat = 51.5252857;
var londLng = -0.0727119;

//Cat Cafè Budapest
var budLat = 47.5006421;
var budLng = 19.0534382;

//Cafe Miao
var copLat = 55.678024;
var copLng = 12.5638332;

//La Gatoteca
var madLat = 40.407405;
var madLng = -3.6984577;

//Kattencafe Kopjes
var amLat = 52.370484;
var amLng = 4.853136;

// Lets put all our map options in a single object
var options = {
	lat: 0,
	lng: 0,
	zoom: 8,
	style: 'mapbox://styles/irenia/cjozrzfgs9eo92sno9fjjuirc',
	//pitch: 50
}

var milan = {
	lat: milanLat,
	lng: milanLng,
	name: 'Crazy Cat Cafè',
}

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
  catMilan = loadImage("./assets/cat01.png");
	catParigi = loadImage("./assets/cat02.png");
	catRoma = loadImage("./assets/cat03.png");
	catBrux = loadImage("./assets/cat04.png");
	catLond = loadImage("./assets/cat05.png");
	catBud = loadImage("./assets/cat06.png");
	catCop = loadImage("./assets/cat07.png");
	catMad = loadImage("./assets/cat08.png");
	catAm = loadImage("./assets/cat09.png");
}


function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	// background(100); let's uncomment this, we don't need it for now

	//update options according to current location
	options.lat = myLoc.latitude;
	options.lng = myLoc.longitude;


	// Create a tile map with the options declared
	myMap = mappa.tileMap(options);
	myMap.overlay(canvas);

}

function draw() {
	clear();
	angleMode(DEGREES);

	//testo
	fill('black');
	textFont('Black Han Sans');
  textSize(60);
  text('Cat Cafe in Europe!', 50, 100);

	//posizione
  fill('black');
	textSize(18);
	var point = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
	ellipse(point.x, point.y, 15);
	text('You are here hooman', point.x -5, point.y - 20);

	//distanze
	var distanceMilan = calcGeoDistance(myLoc.latitude, myLoc.longitude, milanLat, milanLng, "km");
  var distanceParigi = calcGeoDistance(myLoc.latitude, myLoc.longitude, parigiLat, parigiLng, "km");
	var distanceRoma = calcGeoDistance(myLoc.latitude, myLoc.longitude, romaLat, romaLng, "km");
	var distanceBrux = calcGeoDistance(myLoc.latitude, myLoc.longitude, BruxLat, BruxLng, "km");
	var distanceLond = calcGeoDistance(myLoc.latitude, myLoc.longitude, londLat, londLng, "km");
	var distanceBud = calcGeoDistance(myLoc.latitude, myLoc.longitude, budLat, budLng, "km");
	var distanceCop = calcGeoDistance(myLoc.latitude, myLoc.longitude, copLat, copLng, "km");
	var distanceMad = calcGeoDistance(myLoc.latitude, myLoc.longitude, madLat, madLng, "km");
	var distanceAm = calcGeoDistance(myLoc.latitude, myLoc.longitude, amLat, amLng, "km");

	//cat cafes
	fill('black');
	textSize(18);
	var pointMilan = myMap.latLngToPixel(milanLat, milanLng);
	image(catMilan, pointMilan.x, pointMilan.y, 70, 70);
	text( 'Crazy Cat Cafe is ' + Math.round(distanceMilan) + 'km far' , pointMilan.x - 5, pointMilan.y - 20);

	var pointParigi = myMap.latLngToPixel(parigiLat, parigiLng);
	image(catParigi, pointParigi.x, pointParigi.y, 70, 70);
	text( 'Le Cafe des Chats is ' + Math.round(distanceParigi) + 'km far' , pointParigi.x - 5, pointParigi.y - 20);

	var pointRome = myMap.latLngToPixel(romaLat, romaLng);
	image(catRoma, pointRome.x, pointRome.y, 70, 70);
	text( 'Romeow Cafe is ' + Math.round(distanceRoma) + 'km far' , pointRome.x - 5, pointRome.y - 20);

	var pointBrux = myMap.latLngToPixel(BruxLat, BruxLng);
	image(catBrux, pointBrux.x, pointBrux.y, 70, 70);
	text( 'Le Chat Touille is ' + Math.round(distanceBrux) + 'km far' , pointBrux.x - 5, pointBrux.y - 20);

	var pointLond = myMap.latLngToPixel(londLat, londLng);
	image(catLond, pointLond.x, pointLond.y, 70, 70);
	text( 'Lady Dinah’s Cat Emporium is ' + Math.round(distanceLond) + 'km far' , pointLond.x - 5, pointLond.y - 20);

	var pointBud = myMap.latLngToPixel(budLat, budLng);
	image(catBud, pointBud.x, pointBud.y, 70, 70);
	text( 'Cat Cafe Budapest is ' + Math.round(distanceBud) + 'km far' , pointBud.x - 5, pointBud.y - 20);

	var pointCop = myMap.latLngToPixel(copLat, copLng);
	image(catCop, pointCop.x, pointCop.y, 70, 70);
	text( 'Cafe Miao is ' + Math.round(distanceCop) + 'km far' , pointCop.x - 5, pointCop.y - 20);


	var pointMad = myMap.latLngToPixel(madLat, madLng);
  image(catMad, pointMad.x, pointMad.y, 70, 70);
	text( 'La Gatoteca is ' + Math.round(distanceMad) + 'km far' , pointMad.x - 5, pointMad.y - 20);

	var pointAm = myMap.latLngToPixel(amLat, amLng);
	image(catAm, pointAm.x, pointAm.y, 70, 70);
	text( 'Kattencafe Kopjes is ' + Math.round(distanceAm) + 'km far' , pointAm.x - 5, pointAm.y - 20);

}
