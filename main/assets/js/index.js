var products_ref = database.ref("products");



products_ref.on('value',function gotData(data)
{

    $("#products").empty();
  members = data.val();
  childkeys = Object.keys(members);
  len = childkeys.length;

  for(var i=0; i<len; i++)
  {
  
  var k = childkeys[i];
  var name = members[k].name;
  var category = members[k].category;
  var variety = members[k].variety;
  var price = members[k].price;
  var quantity = members[k].quantity;
  var description = members[k].description;
  $("#products").append(`    <div class="swiper-slide w-auto py-2 pr-2">
  <div class="card  border-0 shadow-sm overflow-hidden w-350">
      <div class="card-body">
          <div class="background">
              <img style="opacity: 0.5;" src="assets/img/category-1.png" alt="">
          </div>
          <div class="row">
              <div class="col-7">
                  <h5 class="text-default">${name} <br>(${category})</h5>
                  <p class="small">${description}</p>
                  variety- ${variety}
                  <p class="mb-0 small text-mute">${quantity}kg at Rs.${price}</p>
              </div>
          </div>
      </div>
  </div>
</div>`);
  }

});

