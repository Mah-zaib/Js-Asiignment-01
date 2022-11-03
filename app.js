
//for enabling the button

var inputval=document.getElementById("task");
var colorchange=document.getElementById("btn");
inputval.addEventListener('keyup',enable)

function enable(e){
    var value =inputval.value
    if (value== ""){
        colorchange.style.backgroundColor='skyblue'
    }
        else
        {
            colorchange.style.backgroundColor='blue'
        }
    }
var arr = [{Name: 'CrawligWeb',Time: 10000,Divisions: 5},
{Name: 'Scraping Content',Time: 10000,Divisions: 5},
{Name: 'Semantic Modeling',Time: 5000,Divisions: 4},
{Name: 'NLP',Time: 8000,Divisions: 5},
{Name: 'Competitive Analysis',Time: 5000,Divisions: 4},
];

// document.querySelector('.btn').addEventListener(click,
btn.onclick=function (){
    var txt="";
    for(var i=0;i<arr.length;i++){
        txt += "<li>" +arr[i].Name+"<span>"+"<br>";
       collection.innerHTML=txt;
       
    }
    percentage();
}


let number=document.getElementById('number');
let counter=0;
function percentage(){
    
for(var i=0 ;i<arr.length;i++){
setInterval(()=>{
 if(counter==100){
    clearInterval();
    // number.classList.remove("active");
 }else
 counter+=5;
//  number.classList.add("active");
 number.innerHTML=counter+"%";
},(arr[i].Time)/(arr[i].Divisions));
}
}


