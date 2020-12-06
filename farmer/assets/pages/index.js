var fid = sessionStorage.getItem("fid");
var stockrequest = database.ref(fid + "/stock_request");
var products = database.ref(fid + "/products");
var outlets = database.ref("outlets");

products.on("value", function gotData(data) {
  var members = data.val();
  var childkeys = Object.keys(members);
  var len = childkeys.length;
  $("#p").empty();
  $("#p").append(len);
});

stockrequest.on("value", function gotData(data) {
  $("#streq").empty();
  var members = data.val();
  var childkeys = Object.keys(members);
  var len = childkeys.length;
  $("#streqq").empty();

  $("#streqq").append(len);
  $("#streq").append(len);
});

outlets.on("value", function gotData(data) {
  var members = data.val();
  var childkeys = Object.keys(members);
  var len = childkeys.length;
  $("#out").empty();
  $("#out").append(len);
});
