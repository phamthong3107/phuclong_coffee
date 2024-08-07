"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

export default function MenuDetail({params}){
    const [order, setOrder] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders/id/${params.id}`).then((res)=> {
        setOrder(res.data)
        })
        
    }, [])
    return(
        <>
                <div className="d-flex flex-column p-3">
                    <div className="text-success fw-bold">Thông tin người nhận</div>
                    <span>Tên người nhận: {order?.info_order?.fullname}</span>
                    <span>Số điện thoại: {order?.info_order?.phone}</span>
                    <span>Địa chỉ nhận hàng: {order?.info_order?.address}</span>
                    <div className="text-success fw-bold">Danh sách sản phẩm</div>
                    <div className="d-flex flex-column p-3">
                        {order?.detail?.map((item) => {
                            return(
                                <span>{item.name} <span className="fw-bold">({item.size}) x{item.quantity}</span> - <span className="text-success">{item.price.toLocaleString()} đ</span></span>
                            )
                        })}
                    </div>
                    <div className="text-success fw-bold">Tiền thanh toán: <span className="text-danger">{order?.totalMoney?.toLocaleString()} đ</span></div>
                </div>
        </>
    )
}