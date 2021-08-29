// console.log("Hello World!");
// var name = prompt("What is your name?");
// console.log(output_si);
// console.log(output_ci);

//SI

 var output_si = document.querySelector("#output_si");
 var principal_si = document.querySelector("#principal_si");
 var rate_si = document.querySelector("#rate_si");
 var time_si = document.querySelector("#time_si");
 var calculate_SI = document.querySelector("#calculate_si"); 
 if(calculate_SI){

  calculate_SI.addEventListener('click',function calculate_SI (){
    var a = principal_si.value*rate_si.value*time_si.value;
    var SI =a/100;
    output_si.innerText = "Your Simple Interest is : " + SI; 
    }
  );
}
  
  
  
  //CI

 var output_ci = document.querySelector("#output_ci");
 var principal_ci = document.querySelector("#principal_ci");
 var rate_ci = document.querySelector("#rate_ci");
 var n_ci = document.querySelector("#n_ci");
 var time_ci = document.querySelector("#time_ci");
 var calculate_CI = document.querySelector("#calculate_ci"); 

 if(calculate_CI){
  calculate_CI.addEventListener('click',function calculate_CI (){
    var x = Math.pow(1+rate_ci.value/(n_ci.value*100),(n_ci.value*time_ci.value));
    var CI =principal_ci.value*x;
    output_ci.innerText = "Your Compound Interest is : " + CI; 
    console.log(x);
     }  
    );
   }

