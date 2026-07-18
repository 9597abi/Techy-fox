function calculateEMI(){
const loan=parseFloat(document.getElementById("loanamount").value);
const rate=parseFloat(document.getElementById("intrestrate").value);
const years=parseFloat(document.getElementById("loanyears").value);
const monthlyrate=rate/12/100;
const months=years*12;
const emi=(loan*monthlyrate*Math.pow(1+monthlyrate,
    months))/(Math.pow(1+monthlyrate,months)-1);
document.getElementById("result").innerHTML=`Monthly EMI:${emi.toFixed(2)}`;

}