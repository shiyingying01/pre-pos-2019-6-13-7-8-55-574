'use strict';

function collectSameElements(collectionA, collectionB) {
   var result = new Array();
var sameCount = 0;
 for(var i=0;i<collectionA.length;i++){
    var tempA = collectionA[i].key;
    for(var j=0;j<collectionB.value.length;j++){
        var tempB = collectionB.value[j];
        if(tempA == tempB){
                result[sameCount] = tempB;
                sameCount++;
        }
    }
}
return result;
}
