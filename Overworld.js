class Overworld {
    constructor(config) {
	this.element = config.element;
	this.canvas = this.element.querySelector(".game-canvas");
	this.ctx = this.canvas.getContext("2d");
	
	this.map = null;
    }
    
    startGameLoop() {
	const step = () => {
	    // clear prev frame
	    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	    // Lower layer
	    this.map.drawLowerImage(this.ctx);
	    // game objects
	    Object.values(this.map.gameObjects).forEach(object => {
		object.update({
		    arrow: this.directionInput.direction
		})
		object.sprite.draw(this.ctx);
	    });
	    // Upper layer
	    this.map.drawUpperImage(this.ctx);
	    
	    requestAnimationFrame(() => {
		step();
	    })
	}
	step();
    }
    
    init() {
	this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
	// this.map = new OverworldMap(window.OverworldMaps.Kitchen);

	// for direction
	this.directionInput = new DirectionInput();
	this.directionInput.init();
	// this.directionInput.direction;
	
	this.startGameLoop();
    }
}
