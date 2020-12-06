var fid = sessionStorage.getItem("fid");


var products = database.ref(fid+"/products");

products.on('value',function gotData(data)
{
    $("#ptable").empty();
var members = data.val();
var childkeys = Object.keys(members);
var len = childkeys.length; 

for(var i=0; i<len; i++)
{

    var k = childkeys[i];

    var name = members[k].name;
    var barcode = members[k].barcode;
    var price = members[k].price;
    var minthreshold = members[k].minthreshold;
    var maxthreshold = members[k].maxthreshold;
    var nos = members[k].nos;
    var pcategory = members[k].productcategory;
    var uom1 = members[k].uom1;

    var min;
    var now;
 
if(parseInt(nos)<parseInt(minthreshold)){

    now = 0;
    min = parseInt(nos)/parseInt(maxthreshold)*100;
}
else{
   min = parseInt(minthreshold)/parseInt(maxthreshold)*100;

   now = (parseInt(nos)/parseInt(maxthreshold)*100)-min;
}
//alert(name +"  "+barcode+"  "+price+"  "+threshold+"  "+nos+"  "+pcategory+"  "+scategory+"  "+uom1+"  "+uom2+"  " )

$("#ptable").append(" <tr><td>"+ barcode +"</td>\
<th><span class='co-name'>"+name+"</span></th>\
<td>"+pcategory+"</td>\
<td><img class='d-flex mr-3 rounded-circle' src='assets/images/users/user-2.jpg' alt='Generic placeholder image' height='36'></td>\
<td>$"+price+"</td>\
<td>"+nos+"<div class='progress'>\
<div class='progress-bar' role='progressbar' style='width: "+min+"%' aria-valuenow='15' aria-valuemin='0' aria-valuemax='100'></div>\
<div class='progress-bar bg-success' role='progressbar' style='width:  "+now+"%' aria-valuenow='30' aria-valuemin='0' aria-valuemax='100'></div>\
<div class='progress-bar bg-info' role='progressbar' style='width: 0%' aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>\
</div></td>\
<td>"+uom1+"</td>\
<td> <div class='button-items'><button type='button' class='btn btn-warning waves-effect waves-light'>Edit</button><button type='button' class='btn btn-danger waves-effect waves-light'>Delete</button></div></td>\
</tr>");
 
}
$('.table-responsive').responsiveTable({
    addDisplayAllBtn: 'btn btn-secondary'
});
}

);
