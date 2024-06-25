import React, { useContext, useState,} from 'react'
import { BsCartPlus } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import {Link} from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';
import myContext from '../../context/myContext';

const Navbar = () => {
    const [count,setCount]=useState(0);

    const {cartCount}=useContext(myContext)

    const countNum=()=>{
        setCount(count+1);
        console.log(count);
    }
    return (
        <div className='flex flex-col gap-2 lg:flex-row justify-between bg-emerald-500 p-5 items-center lg:h-28'>
            
            <div className= 'border rounded-full p-2 bg-teal-400'>
                <div className='relative w-16 h-14'>
                   <img src="https://cdn-icons-png.flaticon.com/128/3081/3081648.png" alt="" />
                </div>
                <div className='absolute text-sm lg:text-lg font-bold'>
                    ShipShop
                </div>
            </div>

            <div >
                <ul className='flex items-center gap-6 lg:gap-9 font-medium lg:font-bold lg:text-xl mb-3'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/allitem'>All Item</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    {/* <li><Link to='/user'>User</Link></li>
                    <li><Link to='/admin'>Admin</Link></li> */}
                    <li className='font-lg text-2xl relative'>
                        <Link to='/cart'><div>
                            <BsCartPlus onClick={countNum}/>
                            {cartCount>0 && <span className='text-white absolute bottom-2 left-3 bg-red-600 rounded-full text-xs p-1'>{cartCount}+</span> }
                        </div></Link>
                    </li>

                </ul>
            </div>

         <SearchBar/>

        </div>
    )
}

export default Navbar