class Sprite {
    constructor(config) {
	// Setup image
	this.image = new Image();
	this.image.src = config.src;
	this.image.onload = () => {
	    this.isLoaded = true;
	}

	// Shadow
	this.shadow = new Image();
	this.useShadow = true; // config.useShadow || false
	if (this.useShadow) {
	    this.shadow.src = "./images/characters/shadow.png";
	}
	this.shadow.onload = () => {
	    this.isShadowLoaded = true;
	}
	
	// Animations & Initial state
	this.animations = config.animations || {
	    idleDown: [
		[0, 0]		// Sprite coordinate for animation
	    ]
	}
	
	this.currentAnimation = config.currentAnimation || "idleDown"; // default animation
	this.currentAnimationFrame = 0;

	// gameObject reference
	this.gameObject = config.gameObject;
    }

    draw(ctx) {
	// grid 16x16
	// const x = this.gameObject.x * 16 - 8; 
	// const y = this.gameObject.y * 16 - 18;
	const x = this.gameObject.x - 8;  // this is grid based movemnent
	const y = this.gameObject.y - 18; // this is grid based movemnent

	// Shadow
	this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);
	
	// object
	this.isLoaded && ctx.drawImage(
	    this.image,		// image
	    0, 0,		// crop (left, top)
	    32, 32,		// width, height of cut
	    x, y,		// position
	    32, 32		// size/scale of character on map
	);
    }
}
