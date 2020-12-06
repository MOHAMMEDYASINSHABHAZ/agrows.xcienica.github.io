
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

    var fname = $("#firstName").val();
    var lname = $("#lastName").val();
    var mobile = $("#mobile").val();
    var email = $("#email").val();
    var village = $("#village").val();
    var district = $("#district").val();
    var pincode = $("#pincode").val();
    var state = $("#state").val();
    var address = $("#address").val();
    var landholding = $("#landholding").val();
    var password = $("#Password").val();
    var rpassword = $("#rPassword").val();
    
   var fid = makeid(10);

    var farmer_ref = database.ref("farmer");

    farmer_ref.push({

    fname:fname,
    lname:lname,
    mobile:mobile,
    email:email,
    village:village,
    district:district,
    pincode:pincode,
    state:state,
    address:address,
    landholding:landholding,
    password:password,
    rpassword:rpassword,
    fid:fid,
    status:"disabled"

    });



}
  