//Game.js GameState
//The Main Game Loop

import Phaser from 'phaser'

export default class extends Phaser.State {
	init () {}

	preload () {
		//fixes the sound being suspended without a click in Chrome
		if (game.sound.context.state === 'suspended') {
			game.sound.context.resume();
		}
		game.stage.disableVisibilityChange = true;  // keeps everything running when the stage is no longer focused
	}

	create () {}
}
