import { students } from "./studentFile.mjs";

const findStudent = function(Arrays){
    const findCourse = Arrays.filter(l=>l.courses[0] == "cs303" || l.courses[1] == "cs303");
    let user = [];
    
    const stuInfo = findCourse
                    .map(l=> user.push({name:l.name, grades:l.grades.reduce((a,b,n,l)=>a+b/l.length,0)}));
 
    return user;
}
console.log(findStudent(students));
