ig.module(
	'game.entities.rock'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityRock = ig.Entity.extend({
    animSheet: new ig.AnimationSheet( 'media/rock.png', 64, 64 ),
    size: {x: 56, y:56},
    speed: 0,
    indent: 0,
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.PASSIVE,
    init: function( x, y, settings ) {
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
});
});
