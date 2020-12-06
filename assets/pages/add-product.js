function addproduct(){


  var  product = $("#product").val();
  var  variety = $("#variety").val();
  var  quantity = $("#quantity").val();
  var  description = $("#description").val();
  var  price = $("#price").val();
 

  var product_ref = database.ref("products");

  product_ref.push({

product:product,
variety:variety,
quantity:quantity,
description:description,
price:price

  });
}