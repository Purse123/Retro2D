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
	    // Sprite coordinate for animation
	    "idle-down":  [ [0, 0] ],
	    "idle-right": [ [0, 1] ],
	    "idle-up":    [ [0, 2] ],
	    "idle-left":  [ [0, 3] ],
	    "walk-down":  [ [1, 0], [0,0], [3, 0], [0, 0] ],
	    "walk-right": [ [1, 1], [0,1], [3, 1], [0, 1] ],
	    "walk-up":    [ [1, 2], [0,2], [3, 2], [0, 2] ],
	    "walk-left":  [ [1, 3], [0,3], [3, 3], [0, 3] ]
	}

	this.currentAnimation = config.currentAnimation || "idle-down"; // default animation
	// this.currentAnimation = "walk-down";
	
	// currentAnimationFrame maps the index in animation
	this.currentAnimationFrame = 0;

	// For how many gameLoop, Singluar Frame is shown
	this.animationFrameLimit = config.animationFrameLimit || 8;
	this.animationFrameProgress = this.animationFrameLimit;
	
	// gameObject reference
	this.gameObject = config.gameObject;
    }

    get frame() {
	return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation(key) {
	if (this.currentAnimation !== key) {
	    this.currentAnimation = key;
	    this.currentAnimationFrame = 0;
	    this.animationFrameProgress = this.animationFrameLimit;
	}
    }

    updateAnimationProgress() {
	// Downtick frame progress
	if (this.animationFrameProgress > 0) {
	    this.animationFrameProgress -= 1;
	    return;
	}

	// Reset the counter
	this.animationFrameProgress = this.animationFrameLimit;
	this.currentAnimationFrame += 1;

	if (this.frame === undefined) {
	    this.currentAnimationFrame = 0;
	}
    }
    
    draw(ctx) {
	// grid 16x16
	// const x = this.gameObject.x * 16 - 8; 
	// const y = this.gameObject.y * 16 - 18;
	const x = this.gameObject.x - 8;  // this is grid based movemnent
	const y = this.gameObject.y - 18; // this is grid based movemnent

	// Shadow
	this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);

	const [frameX, frameY] = this.frame;
	
	// object
	this.isLoaded && ctx.drawImage(
	    this.image,		// image
	    frameX * 32, frameY * 32,		// crop (left, top)
	    32, 32,		// width, height of cut
	    x, y,		// position
	    32, 32		// size/scale of character on map
	);
	
	this.updateAnimationProgress();
    }
    
}
