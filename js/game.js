var keys = new Array(500);

function init() {

	// Matter.js module aliases
	var Engine = Matter.Engine,
	    World = Matter.World,
	    Bodies = Matter.Bodies;

	// create a Matter.js engine
	var engine = Engine.create(document.body);

	// create two boxes and a ground
	var boxA = Bodies.rectangle(400, 200, 80, 80);
	var boxB = Bodies.rectangle(450, 50, 80, 80);
	var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

	// add all of the bodies to the world
	World.add(engine.world, [boxA, boxB, ground]);

	// run the engine
	Engine.run(engine);

}

function update() {

}

function keyDown(e) {
	var code = e.keyCode ? e.keyCode : e.which;
	keys[e] = true;
}

function keyUp(e) {
	var code = e.keyCode ? e.keyCode : e.which;
	keys[e] = false;
}

window.onkeydown = keyDown;
window.onkeyup = keyUp;
window.onload = init;