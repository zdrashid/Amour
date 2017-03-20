ig.module(
	'game.entities.climbable'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntityClimbable = ig.Entity.extend({
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 255, 0, 0.5)',
	_wmScalable: true,
	
	checkAgainst: ig.Entity.TYPE.A,
	
	update: function(){
		this.parent();
	},
	check: function( other ){
		if(ig.input.state("up")){
			
			other.vel.y -= 50;
			
		}
	}
});	
	
});