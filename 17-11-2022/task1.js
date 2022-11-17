const select = document.querySelector('select');
var data
async function chars(){
var res= await fetch("https://www.breakingbadapi.com/api/characters");
data = await res.json();
document.getElementById("image").src=data[0].img;
for ( i=0;i<data.length;i++)
 { var newOption = new Option(data[i].name,i); 
    select.add(newOption);
}
}
chars();
function changeimg()
{   document.getElementById("image").src=data[select.value].img;
}