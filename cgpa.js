function calculateCGPA(){
    let total=0;
    let count=0;
    for (let i=1;i<=8;i++){
        const value=parseFloat(document.getElementById("sem"+i).value);
    if(!isNaN(value)){
        total+=value;
        count++;
    }    
}
if (count===0){
    document.getElementById("result").innerHTML=
    "Please enter at least one GPA.";
    return;
}
    document.getElementById("result").innerHTML=
    "CGPA:"+calculateCGPA.toFixed(2);
}
