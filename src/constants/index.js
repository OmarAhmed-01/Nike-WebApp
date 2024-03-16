import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {    bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, 
            thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import { Air_One, Air_Mid, Air_Max, Dunk_Low, Gamma_Force, Jordan_Mid, Invincible_3, Revolution_6, Killshot_2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        shoeRating: "4.7"
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        shoeRating: "4.3"
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        shoeRating: "4.8"
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        shoeRating: "4.3"
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.8,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const Models = [
    {
        title: "Products",
        links: [
            {
                id: "1",
                name: "Air Max",
                color: ["Black", "Blue & Grey", "White", "Hot Pink"],
                sizes: [39, 40, 41, 42, 43, 44, 45, 46, 47],
                imgURL: Air_Max,
                link: "/airmax",
                price: "130"
            },
            {
                id: "2",    
                name: "AirForce One",
                color: "White",
                sizes: [39, 40, 41, 42, 43, 44, 45, 46, 47],
                imgURL: Air_One,
                link: "/airforceone",
                price: "90"
            },
            {     
                id: "3",
                name: "AirForce High",
                color: "Red",
                sizes: [39, 40, 41, 42, 43, 44, 45, 46, 47],
                imgURL: Air_Mid,
                link: "/airforcehigh",
                price: "130"
            },
            {
                id: "4",
                name: "Dunk Lows",
                color: "White & Black",
                sizes: [39, 40, 41, 42, 43, 44, 45, 46, 47],
                imgURL: Dunk_Low,
                link: "/dunklow",
                price: "115"
            },
            {
                id: "5",
                name: "Gamma Force",
                color: "White & Blue",
                sizes: [39, 40, 41, 42, 43, 44, 45, 46, 47],
                imgURL: Gamma_Force,
                link: "/gammaforce",
                price: "73"
            },
            {
                id: "6",
                name: "Air Jordan 1 Mid",
                color: "White & Blue",
                sizes: [39, 40, 41, 42, 43, 44, 45, 46, 47],
                imgURL: Jordan_Mid,
                link: "/jordanmid",
                price: "125"
            },
            {
                id: "7",
                name: "Invincible 3",
                color: "Grey & Blue",
                sizes: [39, 40, 41, 42, 43, 44, 45, 46, 47],
                imgURL: Invincible_3,
                link: "/invincible3",
                price: "130"
            },
            {
                id: "8",
                name: "Revolution 6",
                color: "white & Black",
                sizes: [39, 40, 41, 42, 43, 44, 45, 46, 47],
                imgURL: Revolution_6,
                link: "/revolution6",
                price: "70"
            },
            {
                id: "9",
                name: "Killshot 2",
                color: "Orange",
                sizes: [39, 40, 41, 42, 43, 44, 45, 46, 47],
                imgURL: Killshot_2,
                link: "/killshot2",
                price: "90"
            },
        ],
    },
    
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link:"https://www.facebook.com/nike"},
    { src: twitter, alt: "twitter logo", link: "https://twitter.com/Nike"},
    { src: instagram, alt: "instagram logo", link: "https://www.instagram.com/nike/"},
];