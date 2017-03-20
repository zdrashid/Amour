ig.module(
	'game.entities.bride'
)
.requires(
	'impact.entity'
	
)
.defines(function(){

EntityBride= ig.Entity.extend({
    animSheet: new ig.AnimationSheet( 'media/bride.png', 16, 16 ),
    size: {x: 5, y:10},
    speed: 0,
    type: ig.Entity.TYPE.A,
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.PASSIVE,
    init: function( x, y, settings ) {
		this.gravityFactor = 0;
    	this.parent( x, y, settings );
    	this.addAnim('walk', .07, [0]);
    },
    update: function() {
    	//var accel = this.accelGround;
		if( ig.input.state('left') ) {
			console.log('left');
            this.vel.x = -100;
        }
        else if( ig.input.state('right') ) {
			console.log('right');
            this.vel.x = 100;
        }
        else if( ig.input.state('up') ) {
			console.log('up');
            this.vel.y = -100;
        }
        else if( ig.input.state('down') ) {
			console.log('down');
            this.vel.y = 100;
        }
		else {
			this.vel.x = 0;
			this.vel.y = 0;
		}
		this.parent();
    },
    /* handleMovementTrace: function( res ) {
    	this.parent( res );
    	// collision with a wall? return!
    	if( res.collision.x ) {
    		this.flip = !this.flip;
    	}
    }, */
    check: function( other ) {
		if(other.type == 1){
			other.fly = true;
			ig.game.score += 50;
			ig.game.health = 100;
			this.kill();
		}
    },
    kill: function(){
        this.parent();
		
		
    }
});
});
