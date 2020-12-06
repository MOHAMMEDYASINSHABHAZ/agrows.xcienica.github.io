
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

function register(){

var  fname = $("#firstName").val();
var  lname = $("#lastName").val();
var  noto = $("#noto").val();
var  Designation = $("#Designation").val();
var  mobile = $("#mobile").val();
var  email = $("#email").val();
var  dotg = $("#dotg").val();
var  gstno = $("#gstno").val();
var  address = $("#address").val();
var  Pincode = $("#Pincode").val();
var  City = $("#City").val();
var  state = $("#state").val();
var  tutfy = $("#tutfy").val();
var  Password = $("#Password").val();
var  rPassword = $("#rPassword").val();


var bid = makeid(10);

var buyer_ref = database.ref("buyer");

buyer_ref.push({

fname:fname,
lname:lname,
noto:noto,
designation:Designation,
mobile:mobile,
email:email,
dotg:dotg,
gstno:gstno,
address:address,
pincode:Pincode,
city:City,
state:state,
tutfy:tutfy,
password:Password,
rPassword:rPassword,
bid:bid,
status:"disabled"





    
})
}










