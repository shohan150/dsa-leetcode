//Permutation Sequence


function fact(x){
   if(x==1){
      return 1
   } else if(x==0){
      return 0
   }
   return x*fact(x-1)
}

function getExactPermutation(workingArray, rem, resultantArray){ 
     console.log(workingArray, rem, resultantArray);
   if(workingArray.length == 2){
        console.log("a", workingArray, rem, resultantArray);
      if (rem == 2) {resultantArray.push(workingArray[1]); resultantArray.push(workingArray[0]);}
      if (rem == 1) {resultantArray.push(workingArray[0]); resultantArray.push(workingArray[1]);}
      //  console.log(workingArray, rem, resultantArray);
      return 
   }
   else{
      const sectionSpan = fact(workingArray.length-1);
      const section = Math.floor(((rem-1)/sectionSpan));
      let rem2 = (rem%sectionSpan);
      if(rem2 == 0) rem2 = sectionSpan; 
      resultantArray.push(workingArray.slice(section,section+1)[0]);
      workingArray = workingArray.slice(0, section).concat(workingArray.slice(section+1));
      // console.log(workingArray, rem, resultantArray, sectionSpan, section, rem2);
      getExactPermutation(workingArray, rem2, resultantArray);
   }
}

var getPermutation = function(n, k) {
   if(n==1){
      return '1'
   } else if(n==2){
      if(k==1){
         return "12"
      } else if(k==2){
         return "21"
      }
   }
   const mainArray = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
   let resultantArray = [];
   let workingArray = mainArray.slice(0,n);

   const sectionSpan = fact(n-1);
   const section = Math.floor(((k-1)/sectionSpan))
   let rem = ((k)%sectionSpan);
   if(rem == 0) rem = sectionSpan; 

   resultantArray.push(mainArray.slice(section,section+1)[0]);
   workingArray = workingArray.slice(0, section).concat(workingArray.slice(section+1));
   console.log(workingArray, rem, resultantArray, sectionSpan, section, rem);

   getExactPermutation(workingArray, rem, resultantArray)

    return resultantArray.join('');

}

  console.log(getPermutation(3, 5))