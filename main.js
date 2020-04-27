for(let i=2; i<=10; i++){
    if(i%2==0){
    console.log(i);
}}

let i=0;
while( i < 3 ){
    alert(i);
    i++;
}

let num =5;
let result=1;

for(let i=1; i<=5 ;i++){
    if(result*=i){
     console.log( result );
       
    }
}

let a= +prompt('a?', '');
switch(a){
    case 0 :
        alert(0)
        break;
    case 1 :
        alert(1)
        break;
    case 2:
    case 3:
        alert('2,3')
        break;
     } 


 let browser=prompt('');
  
  if( browser =='Edge'){
      alert("You've got the Edge!");

  }
  else if( browser=='Chrome'||
  browser== 'Firefox'||
  browser== 'Safari'||
  browser== 'Opera' ){
        alert('Okay we support these browsers too');
         }
  else{
      alert('We hope that this page looks ok!');
  }

  

