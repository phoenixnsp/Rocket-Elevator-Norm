$(document).ready(function () {
  $(".quotePage").hide(); /* HIDE ALL QUOTE FORM */



/* Selector Function*/
$("#quoteSelector").change(function () {
  var select = $(this).val();
  if (select == "Residential") {
    $(".quotePage").hide();
    $("#residentialForm").show();
  } else if (select == "Commercial") {
    $(".quotePage").hide();
    $("#commercialForm").show();
  } else if (select == "Corporate") {
    $(".quotePage").hide();
    $("#corporateForm").show();
  } else if (select == "Hybrid") {
    $(".quotePage").hide();
    $("#hybridForm").show();
  } else {
    $(".quotePage").hide();
  }
});

/* Residential Results */

function residentialResults() {
  var xres = $("#residentNumberAppt").val();
  var yres = $("#residentNumberFloor").val();



  var apptFloor = Math.ceil(xres / (yres * 6));
  var column = Math.ceil(yres / 20);

  var needElevator = apptFloor * column;
  $("#residentNumberElevators").val(needElevator);

  /* standard */
  var standardPriceRes = needElevator * 7565;
  var standardServiceRes = standardPriceRes * 0.1;
  var standardServicePriceRes = standardServiceRes.toFixed(2);
  var standardTotalPriceRes = +standardPriceRes + +standardServicePriceRes;

  /* Premium */
  var premiumPriceRes = needElevator * 12345;
  var premiumServiceRes = premiumPriceRes * 0.13;
  var premiumServicePriceRes = premiumServiceRes.toFixed(2);
  var premiumTotalPriceRes = +premiumPriceRes + +premiumServicePriceRes;

  /* Excelium */
  var exceliumPriceRes = needElevator * 15400;
  var exceliumServiceRes = exceliumPriceRes * 0.16;
  var exceliumServicePriceRes = exceliumServiceRes.toFixed(2);
  var exceliumTotalPriceRes = +exceliumPriceRes + +exceliumServicePriceRes;

  /* Pricing */

  $("#standard").click(function () {

    $('input:radio[name=selection]:nth(0)').attr('checked', true);
    //$('input:radio[name=selection]')[0].checked = true;
    $("#elevatorPrice").val(standardPriceRes);
    $("#servicePrice").val(standardServiceRes);
    $("#totalPrice").val(standardTotalPriceRes);
  });

  $("#premium").click(function () {

    $('input:radio[name=seletion]:nth(1)').attr('checked', true);
    //$('input:radio[name=selection]')[1].checked = true;
    $("#elevatorPrice").val(premiumPriceRes);
    $("#servicePrice").val(premiumServiceRes);
    $("#totalPrice").val(premiumTotalPriceRes);
  });

  $("#execlium").click(function () {

    $('input:radio[name=selection]:nth(2)').attr('checked', true);
    //$('input:radio[name=selection]')[2].checked = true;
    $("#elevatorPrice").val(exceliumPriceRes);
    $("#servicePrice").val(exceliumServiceRes);
    $("#totalPrice").val(exceliumTotalPriceRes);
  });

}




/* Commercial Results */
function commercialResults() {
  var commercialElevator = $("#commercialNumberCages").val();

  $("#commercialNumberElevators").val(commercialElevator);


  /* standard */
  var standardPriceCom = commercialElevator * 7565;
  var standardServiceCom = standardPriceCom * 0.1;
  var standardServicePriceCom = standardServiceCom.toFixed(2);
  var standardTotalPriceCom = +standardPriceCom + +standardServicePriceCom;

  /* Premium */
  var premiumPriceCom = commercialElevator * 12345;
  var premiumServiceCom = premiumPriceCom * 0.13;
  var premiumServicePriceCom = premiumServiceCom.toFixed(2);
  var premiumTotalPriceCom = +premiumPriceCom + +premiumServicePriceCom;

  /* Excelium */
  var exceliumPriceCom = commercialElevator * 15400;
  var exceliumServiceCom = exceliumPriceCom * 0.16;
  var exceliumServicePriceCom = exceliumServiceCom.toFixed(2);
  var exceliumTotalPriceCom = +exceliumPriceCom + +exceliumServicePriceCom;

  /* Pricing */

  $("#standard").click(function () {

    $('input:radio[name=selection]:nth(0)').attr('checked', true);
    //$('input:radio[name=selection]')[0].checked = true;
    $("#elevatorPrice").val(standardPriceCom);
    $("#servicePrice").val(standardServiceCom);
    $("#totalPrice").val(standardTotalPriceCom);
  });

  $("#premium").click(function () {

    $('input:radio[name=seletion]:nth(1)').attr('checked', true);
    //$('input:radio[name=selection]')[1].checked = true;
    $("#elevatorPrice").val(premiumPriceCom);
    $("#servicePrice").val(premiumServiceCom);
    $("#totalPrice").val(premiumTotalPriceCom);
  });

  $("#execlium").click(function () {

    $('input:radio[name=selection]:nth(2)').attr('checked', true);
    //$('input:radio[name=selection]')[2].checked = true;
    $("#elevatorPrice").val(exceliumPriceCom);
    $("#servicePrice").val(exceliumServiceCom);
    $("#totalPrice").val(exceliumTotalPriceCom);
  });

}






/* Corporate Results */

function corporateResults() {
  var xcorp = $("#corpNumberPeople").val();
  var ycorp = $("#corpNumberFloor").val();
  var zcorp = $("#corpNumberBasement").val();

  var totalFloor = (+ycorp + +zcorp);

  var totalPeople = (totalFloor * xcorp);

  var totalCages = Math.ceil(totalPeople / 1000);

  var column = Math.ceil(totalFloor / 20);
  var elevatorPerColumn = Math.ceil(totalCages / column);

  var elevatorNeeded = column * elevatorPerColumn;

  $("#corpNumberElevators").val(elevatorNeeded);


  /* standard */
  var standardPrice = elevatorNeeded * 7565;
  var standardService = standardPrice * 0.1;
  var standardServicePrice = standardService.toFixed(2);
  var standardTotalPrice = +standardPrice + +standardServicePrice;

  /* Premium */
  var premiumPrice = elevatorNeeded * 12345;
  var premiumService = premiumPrice * 0.13;
  var premiumServicePrice = premiumService.toFixed(2);
  var premiumTotalPrice = +premiumPrice + +premiumServicePrice;

  /* Excelium */
  var exceliumPrice = elevatorNeeded * 15400;
  var exceliumService = exceliumPrice * 0.16;
  var exceliumServicePrice = exceliumService.toFixed(2);
  var exceliumTotalPrice = +exceliumPrice + +exceliumServicePrice;

  /* Pricing */

  $("#standard").click(function () {

    $('input:radio[name=selection]:nth(0)').attr('checked', true);
    //$('input:radio[name=selection]')[0].checked = true;
    $("#elevatorPrice").val(standardPrice);
    $("#servicePrice").val(standardService);
    $("#totalPrice").val(standardTotalPrice);
  });

  $("#premium").click(function () {

    $('input:radio[name=seletion]:nth(1)').attr('checked', true);
    //$('input:radio[name=selection]')[1].checked = true;
    $("#elevatorPrice").val(premiumPrice);
    $("#servicePrice").val(premiumService);
    $("#totalPrice").val(premiumTotalPrice);
  });

  $("#execlium").click(function () {

    $('input:radio[name=selection]:nth(2)').attr('checked', true);
    //$('input:radio[name=selection]')[2].checked = true;
    $("#elevatorPrice").val(exceliumPrice);
    $("#servicePrice").val(exceliumService);
    $("#totalPrice").val(exceliumTotalPrice);
  });
}

/* Hybrid Results */

function hybridResults() {
  var xhybrid = $("#hybridNumberPeople").val();
  var yhybrid = $("#hybridNumberFloor").val();
  var zhybrid = $("#hybridNumberBasement").val();

  var totalHyFloor = (+yhybrid + +zhybrid);

  var totalHyPeople = (totalHyFloor * xhybrid);

  var totalHyCages = Math.ceil(totalHyPeople / 1000);

  var columnHy = Math.ceil(totalHyFloor / 20);
  var elevatorPerColumnHy = Math.ceil(totalHyCages / columnHy);

  var elevatorNeededHy = columnHy * elevatorPerColumnHy;

  $("#hybridnumberElevators").val(elevatorNeededHy);
  console.log(elevatorNeededHy);

  /* standard */
  var standardHyPrice = elevatorNeededHy * 7565;
  var standardHyService = standardHyPrice * 0.1;
  var standardHyServicePrice = standardHyService.toFixed(2);
  var standardHyTotalPrice = +standardHyPrice + +standardHyServicePrice;

  /* Premium */
  var premiumHyPrice = elevatorNeededHy * 12345;
  var premiumHyService = premiumHyPrice * 0.13;
  var premiumHyServicePrice = premiumHyService.toFixed(2);
  var premiumHyTotalPrice = +premiumHyPrice + +premiumHyServicePrice;

  /* Excelium */
  var exceliumHyPrice = elevatorNeededHy * 15400;
  var exceliumHyService = exceliumHyPrice * 0.16;
  var exceliumHyServicePrice = exceliumHyService.toFixed(2);
  var exceliumHyTotalPrice = +exceliumHyPrice + +exceliumHyServicePrice;





  /* Pricing */

  $("#standard").click(function () {

    $('input:radio[name=selection]:nth(0)').attr('checked', true);
    //$('input:radio[name=selection]')[0].checked = true;
    $("#elevatorPrice").val(standardHyPrice);
    $("#servicePrice").val(standardHyService);
    $("#totalPrice").val(standardHyTotalPrice);
  });

  $("#premium").click(function () {

    $('input:radio[name=seletion]:nth(1)').attr('checked', true);
    //$('input:radio[name=selection]')[1].checked = true;
    $("#elevatorPrice").val(premiumHyPrice);
    $("#servicePrice").val(premiumHyService);
    $("#totalPrice").val(premiumHyTotalPrice);
  });

  $("#execlium").click(function () {

    $('input:radio[name=selection]:nth(2)').attr('checked', true);
    //$('input:radio[name=selection]')[2].checked = true;
    $("#elevatorPrice").val(exceliumHyPrice);
    $("#servicePrice").val(exceliumHyService);
    $("#totalPrice").val(exceliumHyTotalPrice);
  });

};
});