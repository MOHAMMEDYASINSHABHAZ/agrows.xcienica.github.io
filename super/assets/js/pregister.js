








  
      $(document).on('change',"#gstin", function(){    
        var inputvalues = $(this).val();
        var gstinformat = new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$');
    
        if (gstinformat.test(inputvalues)) {
         return true;
        } else {
            alert('Please Enter Valid GSTIN Number');
            $("#gstin").val('');
            $("#gstin").focus();
        }
    
    });
    















// Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyCx5BIUpJtaqI0ejK3HlzKnjIBUR4jOkjk",
        authDomain: "saberaa-76ec5.firebaseapp.com",
        databaseURL: "https://saberaa-76ec5.firebaseio.com",
        projectId: "saberaa-76ec5",
        storageBucket: "saberaa-76ec5.appspot.com",
        messagingSenderId: "377625461187",
        appId: "1:377625461187:web:c25cb97aa6462d6cdd7d76",
        measurementId: "G-09GVL0YE3D"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    
      var strg = firebase.storage();
    
    
      var database = firebase.database();
  
  
      
  
  
  
  
  
  
                                          function makepathid(length) {
                                              var result           = '';
                                              var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                              var charactersLength = characters.length;
                                              for ( var i = 0; i < length; i++ ) {
                                                 result += characters.charAt(Math.floor(Math.random() * charactersLength));
                                              }
                                              return result;
                                           }
  
  
  
                                             
  
                                             var pathid = makepathid(20);
                                             var access_key = makepathid(8);
                                      function register(){
                                       
                                          var bp = database.ref("business_partner");
                                         
                                          
                                          
                                          
                                          var cob = $("#cob").val();
                                          var bname = document.getElementById("bname").value;
                                          var address = document.getElementById("address").value;
                                          var gstin = document.getElementById("gstin").value;
                                          var license = document.getElementById("license").value;
                                          var bemail = document.getElementById("bemail").value;
                                          var ophone = document.getElementById("ophone").value;
                                          var oemail = document.getElementById("oemail").value;
                                          var concern = document.getElementById("cp").value;
                                          var phone = document.getElementById("phone").value;
                                          var fid = pathid;
                                         
                                          
                                        
                                           
                                          
                                          
                                          
                                          bp.push({
                                          
                                          cob:cob,
                                          bname:bname,
                                          gstin:gstin,
                                          license:license,
                                          bemail:bemail,
                                          ophone:ophone,
                                          oemail:oemail,
                                          concern:concern,
                                          phone:phone,
                                          address:address,
                                          logolink:downloadlink1,
                                          liclink:downloadlink2,
                                          Rphotolink:downloadlink3,
                                          Ophotolink:downloadlink4,
                                          Aadharlink:downloadlink5,
                                          pphotolink:downloadlink6,
                                          Addresslink:downloadlink7,
                                          cclink:downloadlink8,
                                          fid:fid,
                                          access_key:access_key,
                                          status:"disabled"
                                          });
                                          
                                         
                                          
                                          
                                          alert("Registration successfully completed");
                                       
  
                                          }
  
  
  
                                          
                                                    var uploader1 = document.getElementById("uploader1");
                                                    var uploader2 = document.getElementById("uploader2");
                                                    var uploader3 = document.getElementById("uploader3");
                                                    var uploader4 = document.getElementById("uploader4");
                                                    var uploader5 = document.getElementById("uploader5");
                                                    var uploader6 = document.getElementById("uploader6");
                                                    var uploader7 = document.getElementById("uploader7");
                                                    var uploader8 = document.getElementById("uploader8");
                                          
                                          
                                                    var fileButton1 = document.getElementById("logo");
                                                    var fileButton2 = document.getElementById("pic");
                                                    var fileButton3 = document.getElementById("Rphoto");
                                                    var fileButton4 = document.getElementById("Ophoto");
                                                    var fileButton5 = document.getElementById("Aadhar");
                                                    var fileButton6 = document.getElementById("pphoto");
                                                    var fileButton7 = document.getElementById("Address");
                                                    var fileButton8 = document.getElementById("cc");
                                                          
                                          
                                          
                                          
                                                  
                                                   var downloadlink1;
                                                   var downloadlink2;
                                                   var downloadlink3;
                                                   var downloadlink4;
                                                   var downloadlink5;
                                                   var downloadlink6;
                                                   var downloadlink7;
                                                   var downloadlink8;
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                                   fileButton1.addEventListener('change', function (e) {
                                              // Get File 
                                             
                                               var file = e.target.files[0];
                                              //Create a storage ref
                                          
                                              var storageRef = strg.ref(pathid +'/logo/'+ file.name);
                                              /** folder name will be email, 
                                              Will have to transfer variable from page to page and files will be .jpeg**/
                                              //Upload file 
                                          
                                                  var task = storageRef.put(file);
                                              //Update progress bar
                                          
                                                  task.on('state_changed',
                                                          function progress(snapshot) {
                                                          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                                          uploader1.value = percentage;
                                                      },
                                          
                                                      function error(err){
                                          console.log(err);
                                          },
                                                      function complete() {
                                          
                                                          storageRef.getDownloadURL().then( function(url){
                                            
                                                             downloadlink1 = url;
                                                        
                                                             
                                                          });
                                                         
                                          
                                                              }
                                                                              
                                                              );
                                              
                                              });
                                          
                                          
                                          
                                              fileButton2.addEventListener('change', function (e) {
                                              // Get File 
                                             
                                               var file = e.target.files[0];
                                              //Create a storage ref
                                          
                                              var storageRef = strg.ref(pathid +'/license/'+ file.name);
                                              /** folder name will be email, 
                                              Will have to transfer variable from page to page and files will be .jpeg**/
                                              //Upload file 
                                          
                                                  var task = storageRef.put(file);
                                              //Update progress bar
                                          
                                                  task.on('state_changed',
                                                          function progress(snapshot) {
                                                          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                                          uploader2.value = percentage;
                                                      },
                                          
                                                      function error(err){
                                          
                                          alert(err);
                                          },
                                                      function complete() {
                                          
                                                          storageRef.getDownloadURL().then( function(url){
                                            
                                                             downloadlink2 = url;
                                                        
                                                             
                                                          });
                                                         
                                          
                                                              }
                                                                              
                                                              );
                                              
                                              });
                                          
                                          
                                              fileButton3.addEventListener('change', function (e) {
                                              // Get File 
                                             
                                               var file = e.target.files[0];
                                              //Create a storage ref
                                          
                                              var storageRef = strg.ref(pathid +'/Rphoto/'+ file.name);
                                              /** folder name will be email, 
                                              Will have to transfer variable from page to page and files will be .jpeg**/
                                              //Upload file 
                                          
                                                  var task = storageRef.put(file);
                                              //Update progress bar
                                          
                                                  task.on('state_changed',
                                                          function progress(snapshot) {
                                                          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                                          uploader3.value = percentage;
                                                      },
                                          
                                                      function error(err){
                                          
                                          alert(err);
                                          },
                                                      function complete() {
                                          
                                                          storageRef.getDownloadURL().then( function(url){
                                            
                                                             downloadlink3 = url;
                                                        
                                                             
                                                          });
                                                         
                                          
                                                              }
                                                                              
                                                              );
                                              
                                              });
                                          
                                          
                                          
                                              fileButton4.addEventListener('change', function (e) {
                                              // Get File 
                                             
                                               var file = e.target.files[0];
                                              //Create a storage ref
                                          
                                              var storageRef = strg.ref(pathid +'/Ophoto/'+ file.name);
                                              /** folder name will be email, 
                                              Will have to transfer variable from page to page and files will be .jpeg**/
                                              //Upload file 
                                          
                                                  var task = storageRef.put(file);
                                              //Update progress bar
                                          
                                                  task.on('state_changed',
                                                          function progress(snapshot) {
                                                          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                                          uploader4.value = percentage;
                                                      },
                                          
                                                      function error(err){
                                          
                                          alert(err);
                                          },
                                                      function complete() {
                                          
                                                          storageRef.getDownloadURL().then( function(url){
                                            
                                                             downloadlink4 = url;
                                                        
                                                             
                                                          });
                                                         
                                          
                                                              }
                                                                              
                                                              );
                                              
                                              });
                                          
                                          
                                              fileButton5.addEventListener('change', function (e) {
                                              // Get File 
                                             
                                               var file = e.target.files[0];
                                              //Create a storage ref
                                          
                                              var storageRef = strg.ref(pathid +'/Aadhar/'+ file.name);
                                              /** folder name will be email, 
                                              Will have to transfer variable from page to page and files will be .jpeg**/
                                              //Upload file 
                                          
                                                  var task = storageRef.put(file);
                                              //Update progress bar
                                          
                                                  task.on('state_changed',
                                                          function progress(snapshot) {
                                                          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                                          uploader5.value = percentage;
                                                      },
                                          
                                                      function error(err){
                                          
                                          alert(err);
                                          },
                                                      function complete() {
                                          
                                                          storageRef.getDownloadURL().then( function(url){
                                            
                                                             downloadlink5 = url;
                                                        
                                                             
                                                          });
                                                         
                                          
                                                              }
                                                                              
                                                              );
                                              
                                              });
                                          
                                              
                                              fileButton6.addEventListener('change', function (e) {
                                              // Get File 
                                             
                                               var file = e.target.files[0];
                                              //Create a storage ref
                                          
                                              var storageRef = strg.ref(pathid +'/pphoto/'+ file.name);
                                              /** folder name will be email, 
                                              Will have to transfer variable from page to page and files will be .jpeg**/
                                              //Upload file 
                                          
                                                  var task = storageRef.put(file);
                                              //Update progress bar
                                          
                                                  task.on('state_changed',
                                                          function progress(snapshot) {
                                                          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                                          uploader6.value = percentage;
                                                      },
                                          
                                                      function error(err){
                                          
                                          alert(err);
                                          },
                                                      function complete() {
                                          
                                                          storageRef.getDownloadURL().then( function(url){
                                            
                                                             downloadlink6 = url;
                                                        
                                                             
                                                          });
                                                         
                                          
                                                              }
                                                                              
                                                              );
                                              
                                              });
                                          
                                              fileButton7.addEventListener('change', function (e) {
                                              // Get File 
                                             
                                               var file = e.target.files[0];
                                              //Create a storage ref
                                          
                                              var storageRef = strg.ref(pathid +'/Address/'+ file.name);
                                              /** folder name will be email, 
                                              Will have to transfer variable from page to page and files will be .jpeg**/
                                              //Upload file 
                                          
                                                  var task = storageRef.put(file);
                                              //Update progress bar
                                          
                                                  task.on('state_changed',
                                                          function progress(snapshot) {
                                                          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                                          uploader7.value = percentage;
                                                      },
                                          
                                                      function error(err){
                                          
                                          alert(err);
                                          },
                                                      function complete() {
                                          
                                                          storageRef.getDownloadURL().then( function(url){
                                            
                                                             downloadlink7 = url;
                                                        
                                                             
                                                          });
                                                         
                                          
                                                              }
                                                                              
                                                              );
                                              
                                              });
                                          
                                          
                                              fileButton8.addEventListener('change', function (e) {
                                              // Get File 
                                             
                                               var file = e.target.files[0];
                                              //Create a storage ref
                                          
                                              var storageRef = strg.ref(pathid +'/cc/'+ file.name);
                                              /** folder name will be email, 
                                              Will have to transfer variable from page to page and files will be .jpeg**/
                                              //Upload file 
                                          
                                                  var task = storageRef.put(file);
                                              //Update progress bar
                                          
                                                  task.on('state_changed',
                                                          function progress(snapshot) {
                                                          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                                          uploader8.value = percentage;
                                                      },
                                          
                                                      function error(err){
                                          
                                          alert(err);
                                          },
                                                      function complete() {
                                          
                                                          storageRef.getDownloadURL().then( function(url){
                                            
                                                             downloadlink8 = url;
                                                        
                                                             
                                                          });
                                                         
                                          
                                                              }
                                                                              
                                                              );
                                              
                                              });
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
                                          
        
    