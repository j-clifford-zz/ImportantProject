dojo.require("esri.map")

var map;

function init() {
	//blah
	/*
	var map = new esri.Map("map", {
		center: [27.713381,-97.324405],
		zoom: 3,
		basemap: "streets",
	});

	*/
	dojo.connect(dojo.byId("container"), 'onclick', function() {
		console.log("hi");
		//dojo.empty("map")
		//dojo.attr("map", "background-image", "url('/images/basemap.png')")
		fade()
	});
}

function fade() {
	dojo.style("map", "opacity", 0);
	var fadeArgs = {
		node: "map",
	};
	dojo.fadeIn(fadeArgs).play()
}

dojo.ready(init)