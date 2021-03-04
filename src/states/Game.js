//Game.js GameState
//The Main Game Loop

import Phaser from 'phaser'

export default class extends Phaser.State {
  	 init () {}

  	 preload () {
		 game.stage.disableVisibilityChange = true;  // keeps everything running when the stage is no longer focused
	 }

  	 create () {}
}