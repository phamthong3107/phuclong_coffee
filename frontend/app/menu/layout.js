"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import "./page.css"
import { usePathname } from "next/navigation";

export default function Layout({children}){
    const [categories, setCategories]= useState([]);
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`).then((res)=> {
            setCategories(res.data)
          })
    }, [])
    const pathname = usePathname();
    return(
        <>
            <div className="container mb-5 position-relative">
                <div class="sticky-top bg-white my-5 z-3">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-4">
                            <Link className={`fw-bold text-dark text-decoration-none px-4 py-3 ${pathname == "/menu"?"item-active":"item"}`} href={"/menu"}>
                                Tất cả
                            </Link>
                            {categories.map((item) => {
                                return(
                                    <>
                                        <Link key={item._id} className={`fw-bold text-decoration-none text-dark px-4 py-3 ${pathname == "/menu/"+item._id ? "item-active":"item"}`} href={`/menu/${item._id}`}>
                                            {item.name}
                                        </Link>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <hr className="divider"/>
                </div>
                {children}
            </div>
        </>
    )
}