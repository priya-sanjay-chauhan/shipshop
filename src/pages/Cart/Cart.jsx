import React, { useContext } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import myContext from '../../context/myContext';

const Cart = () => {
    
    const { cart,increment,decrement } = useContext(myContext);
  return (
    <div>
        <div className="container mx-auto px-4 max-w-7xl lg:px-0">
                <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    </h1>
                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
                            <h2 id="cart-heading" className="sr-only">
                            </h2>
                            <ul role="list" className=" divide-y max-h-[376px] divide-gray-200 overflow-y-scroll">
                                {cart.length === 0 ? (
                            <div className="text-center w-full">
                                <h2 className="text-xl font-bold">Your cart is empty</h2>
                            </div>
                        ) : (
                                cart.map((product,i) => {
                                    const { id, image, title, price, quantity } = product;
                                    return (<div key={i} className="">
                                        <li className="flex py-6 sm:py-6 ">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={image}
                                                    alt={title}
                                                    className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                                                />
                                            </div>
                                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                    <div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-sm">
                                                                <a href={product.href} className="font-semibold text-black">
                                                                    {title.substring(0,25)}
                                                                </a>
                                                            </h3>
                                                        </div>
                                                        {/* <div className="mt-1 flex text-sm">
                                                            <p className="text-sm text-gray-500">{product.color}</p>
                                                            {product.size ? (
                                                                <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                                                    {}
                                                                </p>
                                                            ) : null}
                                                        </div> */}
                                                        <div className="mt-1 flex items-end">
                                                            <p className="text-xs font-medium text-gray-500 ">
                                                                Rs.{price}.00
                                                            </p>
                                                            {/* <p className="text-sm font-medium text-gray-900">
                                                                &nbsp;&nbsp;{price}
                                                            </p> */}
                                                            {/* <p className="text-sm font-medium text-green-500">{product.discount}</p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <div className="mb-2 flex">
                                            <div className="min-w-24 flex">
                                                <button onClick={()=> decrement(id)} type="button" className="h-7 w-7">
                                                    -
                                                </button>
                                                <input
                                                value={quantity}
                                                    type="text"
                                                    className="mx-1 h-7 w-9 rounded-md border text-center"
                                                    

                                                />
                                                <button onClick={()=> increment(id)} type="button" className="flex h-7 w-7 items-center justify-center">
                                                    +
                                                </button>
                                            </div>
                                            <div className="ml-6 flex text-sm">
                                                <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                                                    <FaRegTrashAlt size={12} className="text-red-500" />
                                                    <span className="text-xs font-medium text-red-500">Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                    })
                                )}
                            </ul>
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {cart.length === 0 ? (
                            <div className="text-center w-full">
                                <h2 className="text-xl font-bold">Your cart is empty</h2>
                            </div>
                        ) : (
                            cart.map((item, index) => {
                                const { id, image, title, price, quantity } = item;
                                return (
                                    <div key={index} className="p-4 ">
                                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md">
                                            <img
                                                className="h-80 w-full"
                                                src={image}
                                                alt="product"
                                            />
                                            <div className="p-6">
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    {title.substring(0, 25)}
                                                </h1>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    ₹{price}.00
                                                </h1>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    Quantity: {quantity}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div> */}
                        </section>
                        {/* Order summary */}
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
                        >
                            <h2
                                id="summary-heading"
                                className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                            >
                            </h2>
                            <div>
                                <dl className=" space-y-1 px-2 py-4">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-gray-800">Price (3 item)</dt>
                                        <dd className="text-sm font-medium text-gray-900">₹ 52,398</dd>
                                    </div>
                                    <div className="flex items-center justify-between pt-4">
                                        <dt className="flex items-center text-sm text-gray-800">
                                            <span>Discount</span>
                                        </dt>
                                        <dd className="text-sm font-medium text-green-700">- ₹ 3,431</dd>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <dt className="flex text-sm text-gray-800">
                                            <span>Delivery Charges</span>
                                        </dt>
                                        <dd className="text-sm font-medium text-green-700">Free</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                        <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                        <dd className="text-base font-medium text-gray-900">₹ 48,967</dd>
                                    </div>
                                </dl>
                                <div className="px-2 pb-4 font-medium text-green-700">
                                <div className="flex gap-4 mb-6">
                                    <button
                                        className="w-full px-4 py-3 text-center text-gray-100 bg-emerald-600 border border-transparent dark:border-gray-700 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-200 rounded-xl"
                                    > Buy Now
                                    </button>
                                </div>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Cart




// import React, { useContext } from 'react'
// import myContext from '../../context/myContext';

// const Cart = () => {
//     const { cart } = useContext(myContext);
//     return (
//         <div className='flex flex-col justify-center items-center'>
//             <div className='font-bold text-2xl md:text-4xl lg:text-5xl mt-8'>
//                 <span>Your Cart</span>
//             </div>
//             <section className="text-gray-600 body-font">
//                 <div className="container px-5 py-5 mx-auto">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//                         {cart.length === 0 ? (
//                             <div className="text-center w-full">
//                                 <h2 className="text-xl font-bold">Your cart is empty</h2>
//                             </div>
//                         ) : (
//                             cart.map((item, index) => {
//                                 const { id, image, title, price, quantity } = item;
//                                 return (
//                                     <div key={index} className="p-4 ">
//                                         <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md">
//                                             <img
//                                                 className="h-80 w-full"
//                                                 src={image}
//                                                 alt="product"
//                                             />
//                                             <div className="p-6">
//                                                 <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                                                     {title.substring(0, 25)}
//                                                 </h1>
//                                                 <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                                                     ₹{price}.00
//                                                 </h1>
//                                                 <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                                                     Quantity: {quantity}
//                                                 </h1>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 );
//                             })
//                         )}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Cart