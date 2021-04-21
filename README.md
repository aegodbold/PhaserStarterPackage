# Ashley Godbold's Recommended Starting Files for Phaser + ES6 + WebPack
I recommend all my students start with this project when creating a Phaser game. 

It is a template that has the following that you would not get if you simply downloaded phaser:
- States for Boot, Splash, Start, Game set up
- Autoscaling, the game will scale with the browswer window
- Problems with suspended state and AudioContext adressed 


## Modified from:
![Phaser+ES6+Webpack](https://raw.githubusercontent.com/lean/phaser-es6-webpack/master/assets/images/phaser-es6-webpack.jpg)
https://github.com/lean/phaser-es6-webpack

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

by Leandro Cabrera <leandcabrera@gmail.com>
pulled 2017


# Setup
You'll need to install a few things before you have a working copy of the project.

## 1. Clone or download this repo

## 2. Install node.js and npm:

https://nodejs.org/en/download/ 


## 3. Install dependencies:

Navigate to the cloned repo's directory.

Run:

```npm install``` 


# Running the Project
Run the development server with:
```npm run dev```
This will run a server so you can run the game in a browser. It will also start a watch process, so you can change the source and the process will recompile and refresh the browser automatically.

To run the game, open your browser and enter http: // localhost:3000 into the address bar.

```ctrl  +  c ``` to stop


# Building the Project
Run:

```npm run deploy```

This will optimize and minimize the compiled bundle.

# Putting the Project Online
Copy the ```index.html``` file, the ```assets``` folder, and the ```dist``` folder to a folder outside of your project named "Build".
Zip the folder and upload it to itch.io as a play in web game.
