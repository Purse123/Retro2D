class GameObject {
    constructor(config) {
	this.x = config.x || 0;	// coordinate x if not 0
	this.y = config.y || 0;
	this.direction = config.direction || "down";
	
	this.sprite = new Sprite({
	    gameObject: this,
	    src: config.src || "./images/characters/people/hero.png"
	});
    }
    update() {
    }
}
