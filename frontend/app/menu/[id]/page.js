"use client";
import { useEffect, useState } from "react";
import ProductList from "../../components/productList";
import axios from "axios";
import "../page.css"
import { usePathname } from "next/navigation";

export default function MenuDetail({params}){
    const [products, setProducts] = useState([]);
    const [categories, setCategories]= useState([]);
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/byCategory/${params.id}`).then((res)=> {
        setProducts(res.data)
        })
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`).then((res)=> {
            setCategories(res.data)
        })
    }, [])
    const pathname = usePathname();
    return(
            <ProductList data={products}></ProductList>
    )
}