ig.module( 
	'game.main' 
)
.requires(
    'impact.game',
    'game.levels.dorm1',
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
        this.loadLevel( LevelDorm1 );

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
		var player = this.getEntitiesByType(EntityPlayer)[0];
			if (player) {
				this.screen.x = player.pos.x - ig.system.width / 2;
				this.screen.y = player.pos.y - ig.system.height / 2;
			}
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		//this.statText.draw(this.currScore, ig.system.width - 50, 10, ig.Font.ALIGN.RIGHT);
		this.textFont.draw( "Score: " + this.score.toString(), ig.system.width -10, 10, ig.Font.ALIGN.RIGHT );
		this.textFont.draw( "Lives: " + this.lives.toString(), 10, 10, ig.Font.ALIGN.LEFT );
		this.textFont.draw( "Health: " + this.health.toString() + "%", ig.system.width/2, 10, ig.Font.ALIGN.CENTER );
		
	},
	increaseScore: function(points){
		this.score += points;
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 1440, 880, 1);

});
