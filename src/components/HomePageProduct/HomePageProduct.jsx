import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import myContext from '../../context/myContext'
import { ProductContext } from '../../context/ProductContext'


const HomePageProduct = () => {
 
    const {products}=useContext(ProductContext)
    const navigate=useNavigate()
    const { addToCart } = useContext(myContext);

    const handleClick=(id)=>{
        navigate(`/product/${id}`)
    };

    const handleAddToCart = (item) => {
        alert("Added")
        addToCart(item)
     };
  return (
    <div className='flex flex-col justify-center items-center '>
        <div className='font-bold text-2xl md:text-4xl lg:text-5xl mt-8'>
        <span>Best Selling Products</span>
        </div>
        <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 ">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img onClick={()=> handleClick(item.id)}
                                                className="h-80 w-full"
                                                src={image}
                                                alt="blog"
                                            />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}.00
                                            </h1>
                                            <div className="flex justify-center ">
                                                <button onClick={()=> handleAddToCart(item)} className=" bg-emerald-500 hover:bg-emerald-400 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
    </div>
  )
}

export default HomePageProduct