class Overworld {
    constructor(config) {
	this.element = config.element;
	this.canvas = this.element.querySelector(".game-canvas");
	this.ctx = this.canvas.getContext("2d");
    }

    init() {
	// background
	const image = new Image();
	image.onload = () => {
	    this.ctx.drawImage(image, 0, 0)
	}
	image.src = "./images/maps/DemoLower.png";

	// character
	const x = 5;
	const y = 6;

	// shadow
	const shadow = new Image();
	shadow.onload = () => {
	    this.ctx.drawImage(
		shadow,           
		0, 0,           
		32, 32,         
		x * 16 - 8, y * 16 - 18, 
		32, 32,
	    )
	}	
	shadow.src = "./images/characters/shadow.png";

	const hero = new Image();
	hero.onload = () => {
	    this.ctx.drawImage(
		hero,           // name
		0, 0,           // crop (left, top)
		32, 32,         // width, height of cut
		x * 16 - 8, y * 16 - 18, // position of character
		// * 16 for grid size
		32, 32,         // size/scale of character on map
	    )
	}
	hero.src = "./images/characters/people/hero.png";
    }
}
