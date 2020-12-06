
var categories = database.ref("business_categories");

categories.on('value',function gotdata(data)
{
    $("#cat_table").empty();
    var members = data.val();
    var childkeys = Object.keys(members);
    var len = childkeys.length;

    for(var i=0; i<len; i++)
    {
        var k = childkeys[i];
        var category = members[k].name;
        
        $("#cat_table").append(" <tr><td>"+category+"</td><td><a type='button' class='btn btn-danger waves-effect waves-light' href=''>delete</a></td></tr>");
    
    }
  
$("#cat_table_1").DataTable();
});
