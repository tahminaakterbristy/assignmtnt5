// get extra price for customize
function getExtraPrice(id,price){
    const extraPriceField = document.getElementById(id);
    extraPriceField.innerText = price;
    calculateTotalPrice();
}
// calculate total price
function calculateTotalPrice(){
    const subToalPriceField = document.getElementById('total-price');
    const totalPriceField = document.getElementById('totalPrice');
    const bestPrice = 1299;
    const extraMemory = document.getElementById('extra-memory-cost');
    const extraStorage = document.getElementById('extra-storage-cost');
    const deliveryField = document.getElementById('delivery-charge');
    const extraMemoryCost = parseInt(extraMemory.innerText);
    const extraStorageCost = parseInt(extraStorage.innerText)
    const deliveryCharge = parseInt(deliveryField.innerText);
    
    // calculate total price
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    subToalPriceField.innerText = totalPrice;
    totalPriceField.innerText = totalPrice;
}
// get 20% dicount using promocode
function applyPromo(){
    const promocode = document.getElementById('promo-code').value;
    const prevTotalPrice = parseInt(document.getElementById('total-price').innerText); 
    const totalPriceField = document.getElementById('totalPrice');
    const discount = (prevTotalPrice * 20) / 100;
    const totalPrice = prevTotalPrice - discount;
    // promo alerts
    const promoSuccess = document.getElementById('promo-success');
    const promoFail = document.getElementById('promo-fail');

    // promocode verify
    if(promocode == 'stevekaku'){
        totalPriceField.innerText = totalPrice;
        promoSuccess.style.display = 'block';
        promoFail.style.display = 'none';
    }
    else{
        promoSuccess.style.display = 'none';
        promoFail.style.display = 'block'
    }
    // clear promo field
    document.getElementById('promo-code').value = '';
}
// for memory price
document.getElementById('memory-8gb').addEventListener('click',function(){
    getExtraPrice('extra-memory-cost',0);
});
document.getElementById('memory-16gb').addEventListener('click',function(){
    getExtraPrice('extra-memory-cost',180);
});

//for storage price
document.getElementById('ssd-256gb').addEventListener('click',function(){
    getExtraPrice('extra-storage-cost',0);
});
document.getElementById('ssd-512gb').addEventListener('click',function(){
    getExtraPrice('extra-storage-cost',100);
});
document.getElementById('ssd-1tb').addEventListener('click',function(){
    getExtraPrice('extra-storage-cost',180);
});

// delivery option
document.getElementById('delivery-free').addEventListener('click',function(){
    getExtraPrice('delivery-charge',0);
});
document.getElementById('delivery-cost-20').addEventListener('click',function(){
    getExtraPrice('delivery-charge',20);
});

// apply promo code
document.getElementById('apply-promo').addEventListener('click',function(){
    applyPromo();
});