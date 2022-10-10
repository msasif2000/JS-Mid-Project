var sum = 0;
var totsum = 0;
var count = 0;
var gtotal = 0;
function add(prices) {
    sum += prices;
    count++;
    document.getElementById("total-products").innerHTML = count;
    document.getElementById("price").innerHTML = sum;
    totsum = DeliveryCharge(sum) + ShippingCharge(sum)
    totsum += sum;
    document.getElementById("total").innerHTML = totsum;
    var tax = sum * (10 / 100);
    document.getElementById("tax").innerHTML = tax;
    gtotal = tax + totsum;
    document.getElementById("intotal").innerHTML = gtotal;
}
function DeliveryCharge(sum) {
    let DC;
    if (sum <= 50000) {
        DC = 100
        document.getElementById('delivery-charge').innerText = 100;
    }
    else if (sum > 50000 && sum <= 80000) {
        DC = 200
        document.getElementById('delivery-charge').innerText = 200;
    }
    else if (sum > 80000 && sum <= 100000) {
        DC = 300
        document.getElementById('delivery-charge').innerText = 300;
    }
    else if (sum >= 100000) {
        DC = 400
        document.getElementById('delivery-charge').innerText = 400;
    }
    return DC
}
function ShippingCharge(sum) {
    let SC;
    if (sum <= 50000) {
        SC = 300
        return document.getElementById('shipping-charge').innerText = 300;
    }
    if (sum > 50000 && sum <= 80000) {
        SC = 400
        document.getElementById('shipping-charge').innerText = 400;
    }
    else if (sum > 80000 && sum <= 100000) {
        SC = 500
        document.getElementById('shipping-charge').innerText = 500;
    }
    else if (sum >= 100000 && sum<200000) {
        SC = 600
        document.getElementById('shipping-charge').innerText = 600;
    }
    else if (sum >= 200000) {
        SC = 800
        document.getElementById('shipping-charge').innerText = 800;
    }
    return SC
}

function orderProducts() {
    var final = document.getElementById('intotal').innerText;
    alert("Dear Customer," + "\n" + "You have to pay: " + final + "\n" + "Thank You!" + "\n" + "Best Wishes" + "\n" + "SMART Online Group Bangladesh");
}