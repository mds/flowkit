$( document ).ready(function() {

  $.getJSON("https://4f340729ac6b867:ec9b13da494e0f5e57ce@www.sendowl.com/api/v1/products" + "?callback=?", function(json) {
         console.log(json);
       });

  sendOwl.captureLinks();


  var doc = new jsPDF();
  doc.text(20, 30, 'This belongs to: ' + name);
  doc.addPage();

  $(".makeInvoice").click(function() {
    doc.save('a4.pdf')
  });

});
