var fid = sessionStorage.getItem("fid");
var category = database.ref(fid+"/category");
 
function add()
{

var name = $("#name").val();

if(name=="")
{

    alert("enter the category")

}
else
{

category.push({

    name:name
});
  
Swal.fire(
    {
        title: 'Category Added Successfull! ',
        html: ' Category name : '+name+'',
        type: 'success',
        showCancelButton: false,
        confirmButtonColor: '#626ed4',
        cancelButtonColor: "#ec4561"
    }
).then(function (result) {
    if (result.value) {
       
        setTimeout(flag,500);
     
    }
    
});
 
function flag(){

    my_ajax("category.html");

}


}}