const calculatePrice = (name, price) => {
    if (!price || !name) return
    let shippingPrice
    
    if(price >= 1 && price <= 2000) {
        shippingPrice = 300
    } else if (price >= 2001 && price <= 4000) {
        shippingPrice = 500
    } else {
        shippingPrice = 700
    }
    
    let total = shippingPrice + price

    console.log(`El producto ${name} cuesta $${price}. Su costo de envío es de $${shippingPrice}. Por lo tanto, el precio final es de ${total}`)
}

calculatePrice('Macbook', 2500)
calculatePrice('Celular', 500)
calculatePrice('Playstation', 4500)
