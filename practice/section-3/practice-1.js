'use strict';

function createUpdatedCollection(collectionA, objectB) {
  //for (var i = 0; i < collectionA.length; i++) {
    for (var i in collectionA) {
    //for (var j = 0; j < objectB.value.length; j++) {
      for (var j in objectB.value) {
      if (collectionA[i].key == objectB.value[j]) {
        collectionA[i].count--;
        // collectionA[i].count= collectionA[i].count - 1;
      }
    }
  }
  return collectionA;
}
