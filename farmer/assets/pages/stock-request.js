var fid = sessionStorage.getItem("fid");
var stockrequest = database.ref(fid + "/stock_request");

stockrequest.on("value", function gotData(data) {
  $("#srtable").empty();
  var members = data.val();
  var childkeys = Object.keys(members);
  var len = childkeys.length;

  for (var i = 0; i < len; i++) {
    var k = childkeys[i];
    var outlet = members[k].oid;
    var product = members[k].barcode_name;
    var raos = members[k].barcode_nos;
    var uom = members[k].barcode_unit;
    var eprice = members[k].barcode_price;
    var status = members[k].status;
    var barcode = members[k].barcode;
    var pcategory = members[k].barcode_pcategory;

    var modal =
      '<div class="modal fade bs-example-modal-lg" id="' +
      k +
      '" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">\
<div class="modal-dialog modal-lg">\
    <div class="modal-content">\
        <div class="modal-header">\
            <h5 class="modal-title mt-0" id="myLargeModalLabel">Send Stock</h5>\
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
        </div>\
        <div class="modal-body">\
        <div class="form-group row">\
<label for="example-text-input" class="col-sm-2 col-form-label">Outlet Name</label>\
<div class="col-sm-10">\
    <input class="form-control" disabled type="text" value="' +
      outlet +
      '" id="oid_' +
      barcode +
      '">\
</div>\
</div>\
<div class="form-group row">\
<label for="example-text-input" class="col-sm-2 col-form-label">Product Name</label>\
<div class="col-sm-10">\
    <input class="form-control" disabled type="text" value="' +
      product +
      '" id="name_' +
      barcode +
      '">\
</div>\
</div>\
<div class="form-group row">\
<label for="example-text-input" class="col-sm-2 col-form-label">item barcode</label>\
<div class="col-sm-10">\
    <input class="form-control" disabled type="number" value="' +
      barcode +
      '" id="' +
      barcode +
      '">\
</div>\
</div>\
<div class="form-group row">\
<label for="example-search-input"  class="col-sm-2 col-form-label">Price</label>\
<div class="col-sm-10">\
    <input class="form-control" disabled type="number" value="' +
      eprice +
      '" id="price_' +
      barcode +
      '">\
</div>\
</div>\
<div class="form-group row">\
<label for="example-url-input"  class="col-sm-2 col-form-label">Number Of Stock</label>\
<div class="col-sm-10">\
    <input class="form-control" type="number" value="' +
      raos +
      '" id="nos_' +
      barcode +
      '">\
</div>\
</div>\
<div class="form-group row">\
<label for="example-tel-input" class="col-sm-2 col-form-label">Product Category</label>\
<div class="col-sm-10">\
    <input class="form-control" disabled type="text" value="' +
      pcategory +
      '" id="pcategory_' +
      barcode +
      '">\
</div>\
</div>\
<div class="form-group row">\
<label for="example-number-input" class="col-sm-2 col-form-label">Units Of Measurment</label>\
<div class="col-sm-5">\
    <select id="unit_' +
      barcode +
      '" class="form-control">\
        <option value="' +
      uom +
      '">Select</option>\
        <option value="' +
      uom +
      '">' +
      uom +
      '</option>\
    </select>\
</div>\
        </div>\
<button onclick="send(' +
      barcode +
      ')" data-dismiss="modal" class="btn btn-success">Send Stock</button>\
    </div>\
</div>\
</div>\
</div>';

    $("#mdel").append(modal);

    $("#srtable").append(
      '<tr>\
<th><span class="co-name">' +
        outlet +
        "</span></th>\
<td>" +
        product +
        "</td>\
<td>" +
        raos +
        "</td>\
<td>" +
        uom +
        "</td>\
<td>$" +
        eprice +
        '</td>\
<td><span class="badge badge-success">' +
        status +
        '</span></td>\
<td>\
    <div class="button-items">\
    <button type="button" data-toggle="modal" data-target="#' +
        k +
        '" class="btn btn-primary waves-effect waves-light">Send Stock</button>\
    <button type="button" class="btn btn-warning waves-effect waves-light">Edit</button>\
    </div>\
</td></tr>'
    );
  }
  $(function () {
    $(".table-responsive").responsiveTable({
      addDisplayAllBtn: "btn btn-secondary",
    });
  });
});

function send(barcode) {
  var oid = $("#oid_" + barcode).val();

  var outlet_products = database.ref(fid + "/" + oid + "/products");
  var barcode_name = $("#name_" + barcode).val();
  var barcode_price = $("#price_" + barcode).val();
  var barcode_nos = $("#nos_" + barcode).val();
  var barcode_pcategory = $("#pcategory_" + barcode).val();
  var barcode_unit = $("#unit_" + barcode).val();

  var products = database.ref(fid + "/products");

  products.once("value", function gotData(data) {
    var members = data.val();
    var childkeys = Object.keys(members);
    var len = childkeys.length;

    for (var i = 0; i < len; i++) {
      var k = childkeys[i];
      var barcodenew = members[k].barcode;
      var dnos = members[k].nos;
      var newnos = parseInt(dnos) - parseInt(barcode_nos);
      if (barcode == barcodenew) {
        products.child(k).update({ nos: newnos });
      }
    }
  });

  outlet_products.once("value", function gotData(data) {
    var members = data.val();
    var childkeys = Object.keys(members);
    var len = childkeys.length;

    for (var i = 0; i < len; i++) {
      var k = childkeys[i];
      var barcodenew = members[k].barcode;
      var dnos = members[k].nos;
      var newnos = parseInt(barcode_nos) + parseInt(dnos);
      if (barcode == barcodenew) {
        outlet_products.child(k).update({ nos: newnos });
      }
    }
  });

  Swal.fire({
    title: "Stock Sent Successful!! ",
    html:
      " product name : " +
      barcode_name +
      " <br> Stock amount : " +
      barcode_nos +
      "  ",
    type: "success",
    showCancelButton: false,
    confirmButtonColor: "#626ed4",
    cancelButtonColor: "#ec4561",
  }).then(function (result) {
    if (result.value) {
      setTimeout(flag, 500);
    }
  });

  function flag() {
    stockrequest.once("value", function gotData(data) {
      var members = data.val();
      var childkeys = Object.keys(members);
      var len = childkeys.length;

      for (var i = 0; i < len; i++) {
        var k = childkeys[i];
        var barcode2 = members[k].barcode;
        if (barcode2 == barcode) {
          stockrequest.child(k).set(null);
          my_ajax("stock-request.html");
        }
      }
    });
  }
}
