class OverworldMap {
    constructor(config) {
	this.gameObjects = config.gameObjects;

	this.lowerImage = new Image();
	this.lowerImage.src = config.lowerSrc;
	
	this.upperImage = new Image();
	this.upperImage.src = config.upperSrc;
    }
n
    isLoaded() {
	return this.lowerImage.complete && this.lowerImage.naturalWidth !== 0;
    }

    drawLowerImage(ctx) {
	if (this.isLoaded()) {
	    ctx.drawImage(this.lowerImage, 0, 0);
	}
    }

    drawUpperImage(ctx) {
	if (this.isLoaded()) {
	    ctx.drawImage(this.upperImage, 0, 0);
	}
    }
}

window.OverworldMaps = {
    DemoRoom: {
	lowerSrc: "./images/maps/DemoLower.png",
	upperSrc: "./images/maps/DemoUpper.png",
	gameObjects: {
	    hero: new Person({
		isPlayerControlled: true,
		x: utils.withGrid(5),
		y: utils.withGrid(6),
	    }),
	    npc1: new Person({
		x: utils.withGrid(7),
		y: utils.withGrid(9),
		src: "./images/characters/people/npc1.png",
	    })
	}
    },
    Kitchen: {
	lowerSrc: "./images/maps/KitchenLower.png",
	upperSrc: "./images/maps/KitchenUpper.png",
	gameObjects: {
	    hero: new GameObject({
		x: 3,
		y: 5,
	    }),
	    npcA: new GameObject({
		x: 9,
		y: 6,
		src: "./images/characters/people/npc2.png",
	    }),
	    npcB: new GameObject({
		x: 10,
		y: 8,
		src: "./images/characters/people/npc3.png",
	    })

	}
    },
}
