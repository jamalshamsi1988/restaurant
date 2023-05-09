import  axios  from 'axios';

const fetchProductRequest = ()=>{
   return {
    type: "FETCH_PRODUCT_REQUEST"
   }
}

const fetchProductSuccess = products =>{
    return {
     type: "FETCH_PRODUCT_SUCCESS" ,
     payload : products
    }
 }

 const fetchProductFailure = error =>{
    return {
     type: "FETCH_PRODUCT_FAILURE" ,
     payload : error
    }
 }

 export const fetchProducts = ()=>{
    return (dispatch) =>{
        dispatch (fetchProductRequest());
        axios.get("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg7ys4tq1l7801uk6s4m349v/master")
        .then(response =>{
            const products = response.data
            dispatch(fetchProductSuccess(products))
        })
        .catch(error =>{
            const errorMsg = error.message;
            dispatch(fetchProductFailure(errorMsg))
        })
    }
 }