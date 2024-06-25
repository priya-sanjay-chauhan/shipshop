import React, { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const productData = [
        {
            id: 1,
            image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 150,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 2,
            image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
            title: 'Kaushalam kalash Copper Pot',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 120,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 3,
            image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 130,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 4,
            image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 120,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 5,
            image: 'https://rukminim2.flixcart.com/image/612/612/kufuikw0/shirt/z/j/q/m-hlsh012785-highlander-original-imag7kcgxdsfyxfd.jpeg?q=70',
            title: 'Men Printed green shirt',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 250,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 6,
            image: 'https://rukminim2.flixcart.com/image/612/612/kdj4xow0-0/shirt/s/v/v/m-cc201-dustypink-dennis-lingo-original-imafueutmgyvtfdr.jpeg?q=70',
            title: 'Pink shirt slim fit',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 443,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 7,
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/u/d/r/xl-c301-b-green-dennis-lingo-original-imag42z8fxqvxgzu-bb.jpeg?q=70',
            title: 'Men slim fit solid collar',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 443,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 8,
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/y/8/g/xl-c751-d-blue-dennis-lingo-original-imafnyksvpjybggz-bb.jpeg?q=70',
            title: 'Slim fit checked shirt for men blue and white check',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 549,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 9,
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/u/k/2/2xl-bul-23bs-27a-bullmer-original-imagwrycdvtfdngh.jpeg?q=70',
            title: 'Men regular fit hand printed white shirt with gray floral pattern',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 466,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 10,
            image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/8/r/e/xxl-hk-shirt-1263-global-nomad-original-imahfmh9qrvkfur5.jpeg?q=70',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 399,
            trendingProductName: 'Featured',
            quantity: 1,
        }
    ];

    const [products] = useState(productData);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductProvider, ProductContext };
