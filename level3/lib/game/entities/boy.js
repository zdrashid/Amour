ig.module(
	'game.entities.boy'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityBoy = ig.Entity.extend({
    animSheet: new ig.AnimationSheet( 'media/boy.png', 16, 16 ),
    size: {x: 5, y:10},
    speed: 0,
    indent: 0,
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.PASSIVE,
    init: function( x, y, settings ) {
	this.gravityFactor = 0;
    	this.parent( x, y, settings );
    	this.addAnim('walk', .07, [0]);
    },
    update: function() {
    	// near an edge? return!
    	if( !ig.game.collisionMap.getTile(
    		this.pos.x + (this.flip ? +4 : this.size.x -4),
    			this.pos.y + this.size.y+1
    		)
    	) {
    		this.flip = !this.flip;
    	}
    	var xdir = this.flip ? -1 : 1;
    	this.vel.x = this.speed * xdir;
    	//this.currentAnim.flip.x = this.flip;
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
			ig.game.score += 100;
			this.kill();
			window.location = "../level3"

		}
    },
    kill: function(){
        this.parent();
		
		
    }
});
});
