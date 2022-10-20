import React, { useEffect } from "react";
import { set_products } from "../slices/productsSlice"
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
const Home = () => {
  const products = useSelector((state) => state.products.allProducts)
  const dispatch = useDispatch()

  const getPosts = async () => {
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json()
    console.log("response", response)
    dispatch(set_products(data))
  }

  useEffect(() => {
    getPosts()

  }, [])

  // console.log("all",products)

  const renderList = () => {
    return (
      <div class="flex m-4 flex-wrap w-full">

      {
        products.map((item) => {
          return (

            <Link key={item.id} href={`/product/${item.id}`} passHref>
              
                  
              
                <div class="rounded-lg shadow-lg bg-white mx-4 my-1 w-1/5 ">
                <div className="flex  justify-center h-1/2 w-1/2 mx-4 my-4">
                
                    <img className=" mt-4 h-full" src={item.image} alt={item.title} />
                </div>
                
                  <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{item.title}</h5>
                    <p class="text-gray-700 text-base mb-4">
                      {item.category}
                    </p>
                  <p class="text-gray-900 text-xl font-bold mb-2">₹{item.price}</p>
                  </div>
                </div>
           



                  
                

            </Link>

          )
        })
      }
          </div>
       
      
    )

  }

// console.log(products)
return (
  <div>
    <div className="m-4 flex justify-center shadow-2xl bg-slate-500 ">
      <h1 className="font-extrabold text-red-500 text-2xl  py-4">Welcome for Exiciting Shopping</h1>
    </div>

    {products.length === 0 ? <p>Loading....</p> : renderList()}

  </div>
)
}
export default Home