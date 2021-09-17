const cartItems = document.querySelectorAll('#addToCart');
for (var i = 0; i < cartItems.length; i++) {
    cartItems[i].addEventListener('click', () => {
        // console.log(event.target.parentElement.children[1].textContent);
        let product = {
            image: event.target.parentElement.parentElement.children[0].children[1].children[0].children[0].src,
            name: event.target.parentElement.children[0].textContent,
            price: event.target.parentElement.children[1].textContent,
            totalprice:parseInt(event.target.parentElement.children[1].textContent),
            quantity: 1
        }
        addItemToLocal(product);
        alert("Item added cart")
    });
}

var products = []
function addItemToLocal(product) {
    let cartItem = JSON.parse(localStorage.getItem('prodInCart'))
    if (cartItem == null) {
        products.push(product)
        localStorage.setItem('prodInCart', JSON.stringify(products))
        console.log(cartItem);
    } else {
        cartItem.forEach(item => {
            if (product.name == item.name) {
                product.quantity = item.quantity += 1;

            } else {
                products.push(item)
            }
        });
        products.push(product)
    }
    localStorage.setItem('prodInCart', JSON.stringify(products))
    window.location.reload()
}
// function addToCart() {
//     let img = document.getElementById('image').src;
//     let titles = document.getElementById('item').textContent;
//     let price = document.getElementById('price').innerText;
//     console.log(img, title, price)
//     let list_item = {
//         img, title, price
//     }
//     localStorage.setItem(img, JSON.stringify(list_item))
//     alert("Item added cart")
// }


function displayItem() {
    let cartItem = JSON.parse(localStorage.getItem('prodInCart'));
    let html = ""
    cartItem.forEach(item => {

        html += `<div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.price}</p>
              <button onclick=removeItem(item)>Delete</button>
            </div>
          </div>`
    }
    );

    document.querySelector("#result").innerHTML = html

}
function removeItem(item) {
    
    let cartItem=JSON.parse(localStorage.getItem('prodInCart'))
    cartItem.forEach(item=>{
        if (item.name != event.target.parentElement.children[0].textContent) {
            products.push(item)
    }
    localStorage.setItem('prodInCart', JSON.stringify(products))
    window.location.reload();
});
}
