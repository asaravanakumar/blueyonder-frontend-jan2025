"use strict";
/*
Namespace helps us avoid polluting global scope. we can use obj to create namespaces.
why? To organize our code better.
Helps us avoid global var names collision. */
var Furnitures;
(function (Furnitures) {
    const shippingChargeBasePrice = 99;
    function calculateShippingCharges(zipcode, productCode) {
        if (zipcode == 600000 || productCode == 'A201') {
            console.log(shippingChargeBasePrice);
        }
        else {
            console.log(shippingChargeBasePrice + 200);
        }
    }
    Furnitures.calculateShippingCharges = calculateShippingCharges;
    function estimateShippingTime(zipcode, productCategory) {
        if (zipcode > 600001 && zipcode < 6000072) {
            console.log("15 days");
        }
        else {
            console.log("10 days");
        }
        if (productCategory == "OfficeChairs") {
            console.log("2 days");
        }
        else {
            console.log("15 days");
        }
    }
    Furnitures.estimateShippingTime = estimateShippingTime;
})(Furnitures || (Furnitures = {}));
Furnitures.calculateShippingCharges(600000, 'A201');
