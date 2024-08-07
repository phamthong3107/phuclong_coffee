"use client";
import Link from "next/link";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { updateItem, removeItem, removeCart } from "@/redux/slices/cartSlice";
import { useEffect, useMemo, useRef, useState } from "react";
  import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
export default function Layout({children}){
    const [orders, setOrders] = useState([]);
    const router = useRouter()
    let index = 0;
    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders/`).then((res)=> {
            setOrders(res.data)
            })
    },[])
    const deleteOrder = async (orderId) => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/id/${orderId}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log('Đơn hàng đã được xóa:', data);
            return true; // Xóa thành công
          } else {
            const errorData = await response.json();
            console.error('Lỗi khi xóa đơn hàng:', errorData);
            return false; // Xóa không thành công
          }
        } catch (error) {
          console.error('Lỗi khi xóa đơn hàng:', error);
          return false;
        }
      };
      console.log(orders.filter(order => order._id !== "66b22140b18268a793afc44f"))
      const handleDelete = async (orderId) => {
        const isDeleted = await deleteOrder(orderId);
        if (isDeleted) {
          setOrders(orders.filter(order => order._id !== orderId));
        } else {
          alert('Xóa đơn hàng không thành công!');
        }
      };
    return(
        <>
            <div className="container-fluid bg-white py-5">
                <h3 className="text-center text-success fw-bold mb-5">Đơn Hàng Của Bạn</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 border-end">
                            <h5 className="fw-bold text-success">Danh sách đơn hàng</h5>
                            {
                            orders.map((order) => {
                                index++;
                                return(
                                    <div className="w-100 border p-3 order shadow rounded-3 mt-3">
                                            <Link key={order._id} href={`/orders/${order._id}`} className="text-decoration-none text-dark">
                                                <h5 className="text-fw text-success">Đơn hàng #{index}</h5>
                                            </Link>
                                            <div className="d-flex flex-column ms-3 mb-2">
                                                <span>{order.info_order.fullname}</span>
                                                <span>{order.info_order.phone}</span>
                                                <span className="fw-bold text-danger">{order.totalMoney.toLocaleString()} đ</span>
                                            </div>
                                            <button onClick={()=>handleDelete(order._id)} className="btn btn-outline-danger">Xóa đơn hàng</button>
                                        </div>
                                )
                            })}
                        </div>
                        <div className="col-md-8">
                            <h5 className="fw-bold text-success">Chi tiết đơn hàng</h5>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}