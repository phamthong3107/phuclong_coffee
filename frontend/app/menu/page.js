"use client";
import { useEffect, useState } from "react";
import ProductList from "../components/productList";
import axios from "axios";
import "./page.css"

export default function Menu(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/`).then((res)=> {
        setProducts(res.data)
        })
    }, [])
    return(
        <ProductList data={products}></ProductList>
    )
}