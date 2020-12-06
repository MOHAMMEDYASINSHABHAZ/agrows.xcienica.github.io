var outletref = database.ref("outlets");
var fid = sessionStorage.getItem("fid");


function makepathid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


 function flag(){

    my_ajax("outlets.html");

}
  
function createoutlet()
{
 

    var pathid = makepathid(20);
    var access_key = makepathid(8);
   
 
var cperson = $("#cperson").val();
var mnumber = $("#mnumber").val();
var lnumber = $("#lnumber").val();
var email = $("#email").val();
var address1 = $("#address1").val();
var waddress = $("#waddress").val();
var company = $("#company").val();
var outlet = $("#outlet").val();
var outletname = $("#outletname").val();
var pancard = $("#pancard").val();
var vat = $("#vat").val();
var companyuin = $("#companyuin").val();
var bank = $("#bank").val();
var accno = $("#accno").val();
var ifsc = $("#ifsc").val();
var accname = $("#accname").val();








//alert();
if(cperson==""||mnumber==""||lnumber==""||email==""||waddress==""||company==""||outlet==""||outletname==""||pancard==""||vat==""||bank==""||accno==""||companyuin==""||ifsc==""||accname==""||address1=="")
{
 
    alert("fill all details");
 
} 
else
{



outletref.push({
fid:fid,
cperson:cperson,
mnumber:mnumber,
lnumber:lnumber,
email:email,
address1:address1,
waddress:waddress,
company:company,
oid:outlet,
outletname:outletname,
pancard:pancard,
vat:vat,
companyuin:companyuin,
bank:bank,
accname:accname,
accno:accno,
ifsc:ifsc,
access_key:access_key,
pathid:pathid,
status:"disabled"


});



Swal.fire(
    {
        title: 'Outlet Created Successfull! ',
        html: ' Outlet name : '+outletname+'',
        type: 'success',
        showCancelButton: false,
        confirmButtonColor: '#626ed4',
        cancelButtonColor: "#ec4561"
    }
).then(function (result) {
    if (result.value) {
        var outlet_products = database.ref(fid+"/"+outlet+"/products");

        var products = database.ref(fid+"/products");
        products.once('value',function gotData(data)
        {
          
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
        
            outlet_products.push({
        
                name:name,
                barcode:barcode,
                price:price,
                minthreshold:minthreshold,
                maxthreshold:maxthreshold,
                nos:"0",
                productcategory:pcategory,
                uom1:uom1
                
                
                });
        }
        
        });
        
       
        setTimeout(flag,1000);
        
     
    }
    
});
 


}

}