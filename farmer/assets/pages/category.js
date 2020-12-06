var fid = sessionStorage.getItem("fid");


var category = database.ref(fid+"/category");

category.on('value',function gotData(data)

{
var members = data.val();
var childkeys = Object.keys(members);
var len = childkeys.length; 

for(var i=0; i<len; i++)
{

    var k = childkeys[i];

    var name = members[k].name;
   



    var large = '<tr>\
    <td>'+name+'</td>\
    <td><img class="d-flex mr-3 rounded-circle" src="assets/images/users/user-2.jpg" alt="Generic placeholder image" height="36"></td>\
   <td><div class="button-items">\
    <button type="button" class="btn btn-warning waves-effect waves-light">Edit</button>\
    <button type="button" class="btn btn-danger waves-effect waves-light">Delete</button>\
    <button type="button" class="btn btn-success waves-effect waves-light">Sub Category</button>\
</div></td> \
</tr>';


$("#cat_table").append(large);
//alert(name +"  "+barcode+"  "+price+"  "+threshold+"  "+nos+"  "+pcategory+"  "+scategory+"  "+uom1+"  "+uom2+"  " )

}


$("#cat_table_1").DataTable();
}

);