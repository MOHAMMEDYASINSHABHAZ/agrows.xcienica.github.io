var outletsref = database.ref("outlets");
var fid = sessionStorage.getItem("fid");
outletsref.on('value',function gotData(data)

{

     
    $("#otable").empty();
  
var members = data.val();
var childkeys = Object.keys(members);
var len = childkeys.length; 

for(var i=0; i<len; i++)
{

    var k = childkeys[i];

    var cperson = members[k].cperson;
    var mnumber = members[k].mnumber;
    var address1 = members[k].address1;
    var email = members[k].email;
    var outlet = members[k].oid;
    var access = members[k].access_key;
    var status = members[k].status;
    var outletname = members[k].outletname;
    var fidd = members[k].fid;

//alert(name +"  "+barcode+"  "+price+"  "+threshold+"  "+nos+"  "+pcategory+"  "+scategory+"  "+uom1+"  "+uom2+"  " )
if(fid==fidd){
$("#otable").append(`<tr><th><span class='co-name'>${outletname}</span></th><td>${cperson}</td><td>${mnumber}</td><td>${address1}</td><td>${email}</td><td>${outlet}</td><td>${access}</td><td><span class="badge badge-success">${status}</span></td> <td>  <div class='button-items'><button type='button' onclick="setstatus('${outlet}')" class='btn btn-success waves-effect waves-light'>Change Status</button><button type='button' class='btn btn-warning waves-effect waves-light'>Edit</button><button type='button' class='btn btn-danger waves-effect waves-light'>Delete</button></div></tr>`);
}
}

}

);



function flag(){
    
    my_ajax('outlets.html');

}


function setstatus(oid){
  
    var ref = database.ref("outlets");
    ref.once('value',function gotData(data)
   {
   
      
     var members = data.val();
     var childkeys = Object.keys(members);
     var len = childkeys.length;
      
     for(var i=0; i<len; i++)
     {
  
     var k = childkeys[i];
   
     var outlet_id = members[k].oid;
     var outlet_name = members[k].outletname;
     var status = members[k].status;
    
  if(oid==outlet_id){
    
    $("#otable").empty();
  
    if(status=="disabled"){

      
    ref.child(k).update({
      status:"enabled"});
       

      Swal.fire(
        {
            title: 'Outlet Status Changed! ',
            html: ' Outlet name : '+outlet_name+' <br> Status : enabled  ',
            type: 'success',
            showCancelButton: false,
            confirmButtonColor: '#626ed4',
            cancelButtonColor: "#ec4561"
        } 
    ).then(function (result) {
        if (result.value) {
           
          //  setTimeout(flag,500);
         
        }
        
    });
     



    
  }
  else{

    
    
    ref.child(k).update({ 
       status:"disabled"});

       
      Swal.fire(
        {
            title: 'Outlet Status Changed! ',
            html: ' Outlet name : '+outlet_name+' <br> Status : disabled  ',
            type: 'success',
            showCancelButton: false,
            confirmButtonColor: '#626ed4',
            cancelButtonColor: "#ec4561"
        } 
    ).then(function (result) {
        if (result.value) {
           
          //  setTimeout(flag,500);
         
        }
        
    }); 
  }
  
  
  
  
  
     }
   }
  
  
  });
    
  
  
  }

