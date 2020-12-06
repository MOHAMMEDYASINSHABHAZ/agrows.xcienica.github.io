var fid = sessionStorage.getItem("fid");
var products = database.ref("products");


function flag() {
  my_ajax("product.html");
}



function add() {
  var name = $("#name").val();
  var price = $("#price").val();
  var variety = $("#variety").val();
  var uom1 = $("#uom1").val();
  var quantity = $("#quantity").val();
  var description = $("#description").val();
  var category = $("#category").val();

  if (
    name == "" ||
    price == "" ||
    variety == "" ||
    category == ""||
    uom1 == ""||
    quantity == null||
    quantity == 0
  ) {
    alert("fill all details");
  } else {
    products.push({
      name: name,
      description:description,
      price:price,
      quantity:quantity,
      variety:variety,
      uom1:uom1,
      category:category,
      fid:fid
    });


    Swal.fire({
      title: "Product Added Successfull! ",
      html: " Product name : " + name + "",
      type: "success",
      showCancelButton: false,
      confirmButtonColor: "#626ed4",
      cancelButtonColor: "#ec4561",
    }).then(function (result) {
      if (result.value) {
        setTimeout(flag, 500);
      }
    });
  }
}
