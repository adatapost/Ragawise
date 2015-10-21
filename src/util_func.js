Array.max = function( array ){
    return Math.max.apply( Math, array );
};

//Circular buffer to store float32
var createRingBuffer = function(length){
	var pointer = 0, buffer = new Float32Array(length); 
  	return {
		    get  : function(key){return buffer[key];},
		    push : function(item){
		    buffer[pointer] = item;
		    pointer = (length + pointer +1) % length;
		    },
		    get_buff: function(){return buffer;}
  };
};

//Circular buffer to store notes
var createRingBuffer_obj = function(length){
	var pointer = 0, buffer = []; 
  	return {
		    get  : function(key){return buffer[key];},
		    push : function(item){
		    buffer[pointer] = item;
		    pointer = (length + pointer +1) % length;
	    	}
  };
};