// For Add Item to Cart

export const addCart = (product) => {
    return {
        type : "ADDITEM",
        paylaod : product
    }
}

// For Delete Item From Cart

export const delCart = (product) => {
    return {
        type : "DELITEM",
        paylaod : product
    }
}