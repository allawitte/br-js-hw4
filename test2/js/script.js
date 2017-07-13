const buttons = document.querySelectorAll('button.add');
const goodsAmountContainer = document.querySelector('#cart-count');
const totalPriceContainer = document.querySelector('#cart-total-price');


for(let i = 0; i < buttons.length; i ++){
    buttons[i].addEventListener('click', addToBasket);
}

function addToBasket(){

    let goodsAmount = goodsAmountContainer.innerHTML;
    let totalPrice = Number(totalPriceContainer.innerHTML.replace(' ', ''));
    console.log('totalPrice', totalPrice, typeof totalPrice);

    goodsAmount ++;
    goodsAmountContainer.innerHTML = goodsAmount;
    console.log('this.dataset.price', Number(this.dataset.price), typeof Number(this.dataset.price));
    totalPriceContainer.innerHTML = getPriceFormatted(totalPrice + Number(this.dataset.price));
}

/**
 * Created by Alla on 7/13/2017.
 */
