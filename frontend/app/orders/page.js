"use client";
import Link from "next/link";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { updateItem, removeItem, removeCart } from "@/redux/slices/cartSlice";
import { useEffect, useMemo, useRef, useState } from "react";
  import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Orders(){
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders/`).then((res)=> {
            setOrders(res.data)
            })
    },[])
    return(
        <>
            <div className="d-flex w-100 justify-content-center h-100 align-items-center">
                <h5>Chọn đơn hàng cần xem</h5>
            </div>
        </>
    )
}