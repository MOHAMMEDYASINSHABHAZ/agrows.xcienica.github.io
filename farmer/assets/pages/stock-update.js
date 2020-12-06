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
 





    var modal = '<div class="modal fade bs-example-modal-lg" id="'+k+'" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">\
    <div class="modal-dialog modal-lg">\
        <div class="modal-content">\
            <div class="modal-header">\
                <h5 class="modal-title mt-0" id="myLargeModalLabel">Send Stock</h5>\
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
            </div>\
            <div class="modal-body">\
    <div class="form-group row">\
    <label for="example-text-input" class="col-sm-2 col-form-label">Name</label>\
    <div class="col-sm-10">\
        <input class="form-control" disabled type="text" value="'+name+'" id="name_'+barcode+'">\
    </div>\
    </div>\
    <div class="form-group row">\
    <label for="example-text-input" class="col-sm-2 col-form-label">item barcode</label>\
    <div class="col-sm-10">\
        <input class="form-control" disabled type="number" value="'+barcode+'" id="'+barcode+'">\
    </div>\
    </div>\
    <div class="form-group row">\
    <label for="example-search-input"  class="col-sm-2 col-form-label">Price</label>\
    <div class="col-sm-10">\
        <input class="form-control" disabled type="number" value="'+price+'" id="price_'+barcode+'">\
    </div>\
    </div>\
    <div class="form-group row">\
    <label for="example-search-input"  class="col-sm-2 col-form-label">Amount of Stock</label>\
    <div class="col-sm-10">\
        <input class="form-control" type="number" value="0" id="nos_'+barcode+'">\
    </div>\
    </div>\
    <div class="form-group row">\
    <label for="example-tel-input" class="col-sm-2 col-form-label">Product Category</label>\
    <div class="col-sm-10">\
        <input class="form-control" disabled type="text" value="'+pcategory+'" id="pcategory_'+barcode+'">\
    </div>\
    </div>\
    <div class="form-group row">\
    <label for="example-number-input" class="col-sm-2 col-form-label">Units Of Measurment</label>\
    <div class="col-sm-5">\
        <select id="unit_'+barcode+'" class="form-control">\
            <option value="'+uom1+'">Select</option>\
            <option value="'+uom1+'">'+uom1+'</option>\
        </select>\
    </div>\
            </div>\
    <button onclick="send('+barcode+')" data-dismiss="modal" class="btn btn-success">Send Stock</button>\
        </div>\
    </div>\
    </div>\
    </div>';
    
    
    
    
    $("#mdel").append(modal); 
     
    
    










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
<td>"+nos+"<div class='progress'>\
<div class='progress-bar' role='progressbar' style='width: "+min+"%' aria-valuenow='15' aria-valuemin='0' aria-valuemax='100'></div>\
<div class='progress-bar bg-success' role='progressbar' style='width:  "+now+"%' aria-valuenow='30' aria-valuemin='0' aria-valuemax='100'></div>\
<div class='progress-bar bg-info' role='progressbar' style='width: 0%' aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>\
</div></td>\
<td>"+minthreshold+"</td>\
<td>"+uom1+"</td>\
<td> <div class='button-items'><button type='button'  data-toggle='modal' data-target='#"+k+"' class='btn btn-primary waves-effect waves-light'>Update Stock</button></div></td>\
</tr>");
 
}
$('.table-responsive').responsiveTable({
    addDisplayAllBtn: 'btn btn-secondary'
});
}

);






function send(barcode){

  
    
    var barcode_name = $("#name_"+barcode).val();
    var barcode_price = $("#price_"+barcode).val();
    var barcode_nos = $("#nos_"+barcode).val();
    var barcode_pcategory = $("#pcategory_"+barcode).val();
    var barcode_unit = $("#unit_"+barcode).val();
    
    
    
    products.once('value',function gotData(data)
    {
       
    var members = data.val();
    var childkeys = Object.keys(members);
    var len = childkeys.length; 
    
    for(var i=0; i<len; i++)
    {
    
        var k = childkeys[i];
        var barcodenew = members[k].barcode;
        var dnos = members[k].nos;
        var newnos = parseInt(barcode_nos)+parseInt(dnos);
        if(barcode==barcodenew){
    
    
            products.child(k).update({nos:newnos});
    
            
    
        }
     
    }
    });
    
    
    
    Swal.fire(
        {
            title: 'Stock updated Successful!! ',
            html: ' product name : '+barcode_name+' <br> Stock amount : '+barcode_nos+'  ',
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
    
                my_ajax("stock-update.html");
     
    
    }
    }