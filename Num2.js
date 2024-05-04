
 const getNewArray = function(strgs){
   return strgs.filter(s=>s.length >5).filter(u=>u.includes('a'));
}
let arrays =["hello"," ","everyone"," ","This","is","aLesson","3"];
;
console.log(getNewArray(arrays));