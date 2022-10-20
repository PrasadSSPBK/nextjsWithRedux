import React, { useEffect} from "react";



import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { selected_product } from "../../slices/productsSlice";

const ProductId=()=>{
    const selectedProduct = useSelector((state) => state.products.selectedProduct)
  const { id, title, price, description, image,category}=selectedProduct


  const dispatch = useDispatch()
  const router=useRouter()
  const {productId}=router.query
  console.log(selectedProduct)


  const getProduct=async()=>{
    let response = await fetch(`https://fakestoreapi.com/products/${productId}`)
  
    let data = await response.json()
    // console.log(data)
    dispatch(selected_product(data))

  }

  useEffect(()=>{
    getProduct()
  },[router.query])

  

 
const renderSelectedProductList=()=>{
  

  return(
   
      
    <div className=" flex justify-center items-center  my-32">
           
      <div className="flex flex-col md:flex-row  rounded-lg mx-5 px-20 bg-white shadow-lg">
              <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg m-3" src={image} alt={id}/>
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>

          <p className="text-gray-700 text-base font-light mb-4">
            CATEGORY: {category} 
          </p>
          <p className="text-gray-700 text-base mb-4">
            {description}
          </p>
            <p className="text-gray-600 text-xl font-bold">₹{price}</p>
           
              </div>
       
            </div>
         

        
    
    </div>
   
    
  )
}
  
  return(
    <div>
      <div className="m-4 flex justify-center shadow-2xl bg-slate-500 ">
        <h1 className="font-extrabold text-red-500 text-2xl  py-4">Selected Product Details</h1>
      </div>
      {renderSelectedProductList()}
    </div>
  )

}
export default ProductId

