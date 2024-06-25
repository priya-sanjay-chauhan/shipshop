import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    const searchData = [
        {
            image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
            name: 'fashion'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
            name: 'shirt'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
            name: 'jacket'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
            name: 'mobile'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
            name: 'laptop'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
            name: 'shoes'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
            name: 'home'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
            name: 'books'
        }
        // {
        //     name: 'Fashion',
        //     image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
        // },
        // {
        //     name: 'Shirt',
        //     image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
        // },
        // {
        //     name: 'Jacket',
        //     image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
        // },
        // {
        //     name: 'Mobile',
        //     image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg'
        // },
        // {
        //     name: 'Laptop',
        //     image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg'
        // },
        // {
        //     name: 'Home',
        //     image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg'
        // },
        // {
        //     name: 'book',
        //     image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg'
        // },
    ]

    const [searchInput, setSearchInput]=useState('');
    const [filterData, setFilterData]=useState([])

    const filter = (e) => {
        // console.log(e.target.value)
        const searchVal = e.target.value;
        setSearchInput(searchVal)
        if(searchVal===''){
            setFilterData([])
        }else{
        const result=searchData.filter((item) =>
         item.name.toLowerCase().includes(searchVal.toLowerCase()
            ))
            setFilterData(result);
        }
    
    }

    return (
        <div>
            <div className='flex border items-center h-10 rounded-3xl px-4 pr-0'>
                <div className='flex gap-5 items-center pr-5 '>

                    <input onChange={filter} value={searchInput} type="text" placeholder='Search...' className=' bg-transparent focus:outline-none rounded-3xl text-white text-lg px-3' />
                </div>
                <button className='h-10 w-16 flex items-center justify-center  border rounded-r-3xl' >
                    <IoIosSearch className='text-xl' />
                </button>
            </div>
            <div className='absolute top-44 lg:top-[80px] px-5 bg-gray-300 min-w-80 lg:w-3/12 rounded-lg'>
            {filterData.map((item,i)=>(
                    <div key={i} className="flex items-center my-2">
                       <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full mr-3"/>
                       <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchBar