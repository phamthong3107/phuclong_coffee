"use client";
import Link from "next/link";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { updateItem, removeItem, removeCart } from "@/redux/slices/cartSlice";
import { useMemo, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
export default function Cart(){
    let products = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const total = products.reduce((total,item)=>total + item.price * item.quantity, 0)
    const cart = useSelector(state => state.cart)
    const totalItem = useMemo(() => {
        return cart.reduce((total,item)=>total+item.quantity, 0);
    }, [cart])
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const router = useRouter();
    const closeBtn = useRef()
    const submit = (e) => {
        e.preventDefault();
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                info_order:{
                    fullname,
                    phone,
                    address,
                },
                detail: cart,
                totalMoney: total-10000,
            }),
        }).then(res=>{
            toast.success('Đặt hàng thành công!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            dispatch(removeCart());
            closeBtn.current.click();
            setTimeout(()=>{
                router.push("/");
            }, 3000);
        })
    }
    return(
        <>
        <style>
        {`
        .table thead tr th{
            background-color: #0c713d;
            color: #fff;
            font-size: 18px;
        }
        .table-group-divider{
            border-top: 4px solid #0c713d!important;
        }
        `}
      </style>
            <div className="container-fluid bg-white py-5">
                <h3 className="text-center text-success fw-bold mb-5">GIỎ HÀNG CỦA BẠN</h3>
                {(totalItem>0)?(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <table className="table table-bordered table-responsive border-white align-middle">
                                <thead className="text-white">
                                    <tr>
                                        <th scope="col">Sản phẩm</th>
                                        <th scope="col" className="text-end">Giá tiền</th>
                                        <th scope="col" className="text-center">Số lượng</th>
                                        <th scope="col" className="text-end">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product=>{
                                        return(
                                            <tr key={product._id}>
                                                <td>
                                                    <div className="row align-items-center">
                                                        <div className="col-9">
                                                            <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${product.image}`} alt="" width={80} className="d-none d-md-inline-block"/>
                                                            <strong>{product.name} ({product.size})</strong>
                                                        </div>
                                                        <div className="col-3 text-center fs-4">
                                                            <button className="btn btn-outline-none" onClick={()=>dispatch(removeItem({product, size: product.size}))}>
                                                                <i class="fa-solid fa-trash-can"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">{product.price.toLocaleString()} đ</td>
                                                <td>
                                                    <input type="number" name="quantity" min="0" defaultValue={product.quantity} onChange={(e)=> dispatch(updateItem({product, quantity: e.target.value, size: product.size}))} class="form-control w-50 mx-auto"/>
                                                </td>
                                                <td className="fw-bold text-end">{(product.price * product.quantity).toLocaleString()} đ</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <div className="d-flex justify-content-between w-100">
                                <Link href="/menu" className="fs-5 text-success text-decoration-none"><i class="fa-solid fa-chevron-left me-3"></i>Tiếp tục mua hàng</Link>
                                <div>
                                    <span>Tạm tính: <span className="fw-bold text-success">{total.toLocaleString()} đ</span></span><br />
                                    <span className="text-secondary">(Đã bao gồm VAT)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <table class="table shadow rounded-2">
                                <thead className="table-group-divider">
                                    <tr>
                                        <th className="bg-white text-success text-center">Hóa đơn của bạn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex justify-content-between">
                                                <span>Tạm tính:</span>
                                                <span>{total.toLocaleString()} đ</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <span>Giảm giá:</span>
                                                <span>10,000 đ</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex justify-content-between fw-bold">
                                                <span>Tổng tiền:</span>
                                                <span className="text-success">{(total>0)?(total - 10000).toLocaleString(): (0)} đ</span>
                                            </div>
                                            <p className="text-secondary">(Đã bao gồm VAT)</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>  
                            <button className="btn btn-success w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">Tiến hành đặt hàng</button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <form onSubmit={submit} class="modal-dialog modal-xl modal-dialog-centered">
                                        <div class="modal-content container">
                                            <div class="modal-header">
                                                <h4 class="modal-title fw-bold ms-auto text-success" id="exampleModalLabel"><i class="fa-solid fa-file-invoice me-3"></i>Xác nhận đơn hàng</h4>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" ref={closeBtn} aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p className="fw-bold border-bottom border-success border-3">Giao hàng</p>
                                                            <div className="mb-3">
                                                                <label htmlFor="fullname" className="form-label">Họ tên</label>
                                                                <input type="text" id="fullname" className="form-control" placeholder="Nhập họ tên" onChange={(e)=>setFullname(e.target.value)}/>
                                                            </div>
                                                            <div className="mb-3">
                                                                <label type="text" htmlFor="phone" className="form-label">Số điện thoại</label>
                                                                <input type="text" id="phone" className="form-control" placeholder="Nhập số điện thoại" onChange={(e)=>setPhone(e.target.value)}/>
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="address" className="form-label">Địa chỉ</label>
                                                                <input type="text" id="address" className="form-control" placeholder="Nhập địa chỉ giao hàng" onChange={(e)=>setAddress(e.target.value)}/>
                                                            </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                    <p className="fw-bold border-bottom border-success border-3">Các món đã chọn</p>
                                                    {products.map((product) => {
                                                        return(
                                                            <div className="row align-items-center mb-3" key={product._id}>
                                                                <div className="col-7">
                                                                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${product.image}`} alt="" width={50} className="d-none d-md-inline-block"/>
                                                                    {product.name}
                                                                </div>
                                                                <div className="col-2">x{product.quantity}</div>
                                                                <div className="col-3">{(product.price * product.quantity).toLocaleString()} đ</div>
                                                            </div>
                                                        )
                                                    })}
                                                    <p className="fw-bold border-bottom border-success border-3">Tổng cộng</p>
                                                    <div className="d-flex justify-content-between">
                                                        <span>Tạm tính:</span>
                                                        <span>{total.toLocaleString()} đ</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <span>Giảm giá:</span>
                                                        <span>10,000 đ</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between fw-bold">
                                                        <span>Thành tiền:</span>
                                                        <span className="text-success">{(total>0)?(total - 10000).toLocaleString(): (0)} đ</span>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="btn btn-success w-100">Đặt hàng</button>
                                            </div>
                                        </div>
                                </form>
                            </div>
                            <div className="w-100 d-flex justify-content-center my-3">
                                <button className="btn btn-outline-danger" onClick={()=>dispatch(removeCart())}><i class="fa-solid fa-trash-can me-2"></i>Xóa đơn hàng</button>  
                            </div>
                        </div>
                    </div>
                </div>
                
                ):(
                    <div className="container">
                        <Link href="/menu" className="fs-5 text-success text-decoration-none"><i class="fa-solid fa-chevron-left me-3"></i>Tiếp tục mua hàng</Link>
                        <div className="d-flex justify-content-center">
                            <img src="/img/empty-cart.png" alt="" className="img-fluid w-50"/>
                        </div>
                        <h1 className="text-center text-success fw-bold">Không có sản phẩm</h1>
                    </div>
                )}
            </div>
            <ToastContainer />
        </>
    )
}