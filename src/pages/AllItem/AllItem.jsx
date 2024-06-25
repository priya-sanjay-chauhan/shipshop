import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import myContext from '../../context/myContext';

const AllItem = () => {
    
    const {products}=useContext(ProductContext)
    
    const { addToCart } = useContext(myContext);

   
    const navigate = useNavigate()

    const handleClick=(id)=>{
        navigate(`/product/${id}`)
    }
    return (
        <>
    <div className="py-8">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-4xl font-semibold">All Products</h1>
            </div>
            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 lg:px-0 py-5 mx-auto flex justify-center">
                    <div className="grid grid-cols-1 min-w-2/3 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4">
                                    <div className="h-full  border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                        onClick={()=> handleClick(item.id)}
                                            className="h-80  w-full"
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
                                                <button onClick={()=> addToCart(item)} className=" bg-emerald-500 hover:bg-emerald-600 w-full text-white py-[4px] rounded-lg font-bold">
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
        </>
    );
}

export default AllItem