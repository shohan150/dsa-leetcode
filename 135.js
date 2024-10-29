var candy = function(ratings) {
   //if(ratings.length == 1, 2)
   let c = new Array(ratings.length).fill(1);
    for (i=1; i<(ratings.length-1); i+2){
      
      if(ratings[i] >ratings[i-1]){
         c[i] = c[i-1] + 1;
         if(ratings[i] <ratings[i+1]){
            c[i+1] = c[i] + 1;
         }
      } else if(ratings[i] <ratings[i-1]){
         if(ratings[i] >ratings[i+1]){
            c[i] = c[i+1] + 1;
         }
         if(!(c[i] < c[i-1])){
            c[i-1] = c[i] + 1;
         }
      }
    }

    return c.reduce((a, b) => a + b, 0);

};