//Splash.js SplashState
//loads from Boot.js
//imports all assets
import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
    init () {}

    //preload all assets
    preload () {
		game.stage.disableVisibilityChange = true;  // keeps everything running when the stage is no longer focused
		
        /*this.loadingBackground = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loadingBackground');
        this.loaderBar = this.add.sprite(this.game.world.centerX-327, this.game.world.centerY+237, 'loadingBar');
        centerGameObjects([this.loadingBackground]);
        this.load.setPreloadSprite(this.loaderBar,0);*/
        
        //TODO: Load Images here
        

        /////////////////
        // JSON Files 
        /////////////////
        //TODO: Load JSON files here
    }

    create () {
        this.state.start('Start');
    }
}
