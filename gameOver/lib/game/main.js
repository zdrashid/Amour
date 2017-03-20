ig.module( 
	'game.main' 
)
.requires(
    'impact.game',
    'game.levels.splashScreen',
    'impact.font'
)


.defines(function(){
MyGame = ig.Game.extend({
    gravity: 300,
	textFont: new ig.Font( 'media/04b03.font.png' ),
	score: 0,
	health: 100,
	lives: 3,
	init: function() {
        this.loadLevel( LevelSplashScreen );

        // Bind keys
        ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
        ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down');
		ig.input.bind( ig.KEY.UP_ARROW, 'up');
        ig.input.bind( ig.KEY.X, 'jump' );
        ig.input.bind( ig.KEY.C, 'shoot' );
        ig.input.bind( ig.KEY.TAB, 'switch' );
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		//this.statText.draw(this.currScore, ig.system.width - 50, 10, ig.Font.ALIGN.RIGHT);
		this.textFont.draw( "You got the ring and proposed to the girl", ig.system.width/2, ig.system.height/2+200, ig.Font.ALIGN.CENTER );
		this.textFont.draw( "She found her way through the maze and into your world", ig.system.width/2, ig.system.height/2+240, ig.Font.ALIGN.CENTER );
		this.textFont.draw( "The honeymoon went sour but you found the ring using your superpowers", ig.system.width/2, ig.system.height/2+280, ig.Font.ALIGN.CENTER );
		this.textFont.draw( "And you both lived happily ever after...", ig.system.width/2, ig.system.height/2+320, ig.Font.ALIGN.CENTER );
	},
	increaseScore: function(points){
		this.score += points;
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 1800, 1000, 1);

});
