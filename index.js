//Question 3

let courses=[];
let scienceSubjects=['Physics','Chemistry','Biology','Technical Drawing'];
let socialScienceSubjects=['Accounting','Commerce','Marketing','Geography'];
let artsSubjects=['Government','Economics','Literature','Histroy'];
let generalSubjects=['English','Mathematics'];

let student='';
if(student=='Sciences'){
    courses=scienceSubjects.concat(generalSubjects);
    console.log(`Below are the courses offered by science students ${courses}`)
}else if(student=='Social Sciences'){
    courses=socialScienceSubjects.concat(generalSubjects);
    console.log(`Below are the courses offered by social science students ${courses}`)
}else if(student=='Arts'){
    courses=artsSubjects.concat(generalSubjects);
    console.log(`Below are the courses offered by art students ${courses}`)
}else{
    console.log(`Below are the courses offered by all students ${generalSubjects}`)
}

//Question 5
function nearestPowerOfTwo(num){
    let pwr=Math.pow(2,Math.floor(Math.log(num)/Math.log(2)));
    return pwr;
}

console.log(nearestPowerOfTwo(8))