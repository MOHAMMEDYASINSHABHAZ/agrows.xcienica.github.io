
var id = "franchize_table";
var dbref = "buyer";

initfranchize(dbref,id);

  

function initfranchize(dbref,id) {

    var ref = database.ref(dbref);
  
    ref.once('value',function gotData(data)
   {
    
      
     var members = data.val();
     var childkeys = Object.keys(members);
     var len = childkeys.length;
      $('#fz').empty();
      $('#fz').append(len);
      
     for(var i=0; i<len; i++)
     {
  
     var k = childkeys[i];
     var fname = members[k].fname;
     var lname = members[k].lname;
     var org = members[k].noto;
     var mobile = members[k].mobile;
     var address = members[k].address;
     var city = members[k].city;
     var state = members[k].state;
     var pincode = members[k].pincode;
     var email = members[k].email;
     var gstno = members[k].gstno;
     var fid = members[k].bid;
     var access_key = members[k].password;
     var status =  members[k].status;
     
     $("#"+id+"").append(`<tr><th><span class='co-name'>${fname} ${lname}</span></th><td>${email}</td><td>${org}</td><td>+91 ${mobile}</td><td>${gstno}</td><td>${address}</td><td> ${city},${state}-${pincode}</td><td>${fid}</td><td>${access_key}</td><td><span class='badge badge-success'>${status}</span></td><td><div class='button-items'><button type='button' id='${fid}' onclick="setstatus('${fid}')" class='btn btn-warning waves-effect waves-light'>Change Status</button> <button type='button'  onclick="del('${fid}')" class='btn btn-danger waves-effect waves-light'>Delete</button></div></td></tr>`);
  
  
     }
   });
    
  }





  
function setstatus(fid){
  
    var ref = database.ref("buyer");
    ref.once('value',function gotData(data)
   {
   
      
     var members = data.val();
     var childkeys = Object.keys(members);
     var len = childkeys.length;
      
     for(var i=0; i<len; i++)
     {
  
     var k = childkeys[i];
   
     var franchize_id = members[k].bid;
    
     var status = members[k].status;
    
  if(fid==franchize_id){
    
    
  
    if(status=="disabled"){
    
    ref.child(k).update({
      status:"enabled"});
      
    alert("enabled successfully");
    my_ajax('index-buyer.html');
  }
  else{
    
    ref.child(k).update({ 
      status:"disabled"});
    alert("disabled successfully");
    my_ajax('index-buyer.html');
  }
  
  
  
  
  
     }
   }
  
  
  });
    
  
  
  }





  
  
function del(fid){
  
    var ref = database.ref("buyer");
    ref.once('value',function gotData(data)
   {
   
      
     var members = data.val();
     var childkeys = Object.keys(members);
     var len = childkeys.length;
      
     for(var i=0; i<len; i++)
     {
  
     var k = childkeys[i];
   
     var franchize_id = members[k].bid;
    
  if(fid==franchize_id){
    
    
  
    ref.child(k).set({
     });
      
    alert("deleted successfully");
    my_ajax('index-buyer.html');
  
  
  
  
  
  
  
     }
   }
  
  
  });
    
  
  
  }