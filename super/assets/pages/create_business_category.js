
var business_categories = database.ref("business_categories");

var fileButton1 = document.getElementById("cimage");
var uploader1 = document.getElementById("uploader1");
var downloadlink1;




function addcategory() {


    var category = $("#category").val();
    if (category == "") {
        alert("type the category");
    } else {

        business_categories.push({

            name: category,
            image: downloadlink1
        });

        alert("business category created successfully");
        my_ajax("business_categories.html");
    }
}


fileButton1.addEventListener('change', function (e) {
    // Get File 

    var file = e.target.files[0];
    //Create a storage ref

    var storageRef = strg.ref('Categories/' + file.name);
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

        function error(err) {
            console.log(err);
        },
        function complete() {

            storageRef.getDownloadURL().then(function (url) {

                downloadlink1 = url;


            });


        }

    );

});
