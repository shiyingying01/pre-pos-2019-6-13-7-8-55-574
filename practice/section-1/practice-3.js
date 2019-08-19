'use strict';

function collectSameElements(collectionA, objectB) {
   var result = new Array();
var sameCount = 0;
 for(var i=0;i<collectionA.length;i++){
    var tempA = collectionA[i];
    for(var j=0;j<objectB.value.length;j++){
        var tempB = objectB.value[j];
        if(tempA == tempB){
                result[sameCount] = tempB;
                sameCount++;
        }
    }
}
return result;
}
