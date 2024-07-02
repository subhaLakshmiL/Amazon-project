export const cart = [];


export function addToCart(productId, quantity) {
    let matchingItem ;
     cart.find(cartitem => cartitem.productId === productId);

    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity
        });
    }
}
