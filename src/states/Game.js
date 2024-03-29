//Game.js GameState
//The Main Game Loop

import Phaser from 'phaser'

export default class extends Phaser.State {
	// Very first function called in the state.
	init () {}

	// Called after init(). Use for loading assets. Do not create objects in this function.
	preload () {
		game.stage.disableVisibilityChange = true;  // keeps everything running when the stage is no longer focused
	}

	// Called immediately after preload() is completed. 
	create () {}
	
	// Updates and redraws your game. Called every frame.
	update () {}
}
