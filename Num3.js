const flatArray = function(a,b,c){
    return [...a,...b,...c];
}

console.log(flatArray('hi', [1,2,3], ['Hello','world']));
