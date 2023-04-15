import axios from "axios";

//fetch products
export const loadProductsApi = async () => {
    return await axios.get("https://fakestoreapi.com/products")
}

//add product
export const addProductsApi = async (product) => {
    console.log(`product: ${product}`);
    return await axios.post("https://fakestoreapi.com/products", product, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

//delete product
export const deleteProductsApi = async (id) => {
    return await axios.delete(`https://fakestoreapi.com/products/${id}`)
}