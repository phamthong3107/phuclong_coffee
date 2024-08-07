"use client";
import Link from "next/link"
import { useEffect, useState } from "react";
import axios from "axios";
import './page.css';
import { addItem } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import AddToCart from "@/app/components/addToCart";

export default function ProductDetail({ params }) {
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    const [size, setSize] = useState("S");
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/id/${params.id}`).then((res)=> {
        setProduct(res.data)
        })
    }, []);
return(
    <>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${product.image}`} alt="" className="img-fluid" />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <div>
                        <h1 className="text-success fw-bold">{product.name}</h1>
                        <span>Danh mục: </span><Link href={`/menu/${product.categoryId}`} className="text-success fw-bold h5">{product.category?.name}</Link>
                        <h3 className="text-success my-3">{product.price?.toLocaleString()} đ</h3>
                        <p className="text-warning">
                        {
                            // Kiểm tra nếu rating là một số hợp lệ
                            Number.isFinite(product?.rating) ? (
                                <>
                                    {
                                        // Hiển thị các ngôi sao đầy đủ
                                        [...Array(Math.floor(product.rating))].map((_, i) => (
                                            <i key={i} className="fa-solid fa-star"></i>
                                        ))
                                    }
                                    {
                                        // Hiển thị các ngôi sao rỗng
                                        [...Array(5 - Math.floor(product.rating))].map((_, i) => (
                                            <i key={i + Math.floor(product.rating)} className="fa-regular fa-star"></i>
                                        ))
                                    }
                                </>
                            ) : (
                                // Hiển thị thông báo nếu rating không hợp lệ
                                <span>No rating available</span>
                            )
                        }
                        </p>
                        <p className="fw-bold text-success">Chọn kích cỡ</p>
                        <div className="size-input d-flex gap-4 my-3 text-center">
                            <input type="radio" className="d-none" id="s" name="size" value="S" onClick={(e)=>setSize(e.target.value)}/>
                            <label htmlFor="s" className="border rounded">
                                <div class="d-flex flex-column">
                                    <div className="text-center fw-bold">
                                        S
                                    </div>
                                    <div class="bg-body-secondary">
                                        0 đ
                                    </div>
                                </div>
                            </label>
                            <input type="radio" className="d-none" id="m" name="size" value="M" onClick={(e)=>setSize(e.target.value)}/>
                            <label htmlFor="m" className="border rounded">
                                <div class="d-flex flex-column">
                                    <div className="text-center fw-bold">
                                        M
                                    </div>
                                    <div class="bg-body-secondary">
                                        +5.000 đ
                                    </div>
                                </div>
                            </label>
                            <input type="radio" className="d-none" id="l" name="size" value="L" onClick={(e)=>setSize(e.target.value)}/>
                            <label htmlFor="l" className="border rounded">
                                <div class="d-flex flex-column">
                                    <div className="text-center fw-bold">
                                        L
                                    </div>
                                    <div class="bg-body-secondary">
                                        +10.000 đ
                                    </div>
                                </div>
                            </label>
                        </div>
                        <p className="fw-bold text-success">Chọn số lượng</p>
                        <input type="number" className="form-control w-25 mb-3" defaultValue={1} onChange={(e) => setQuantity(e.target.value)}/>
                        <AddToCart className="mb-2" product={product} quantity={quantity} size={size}>Thêm vào giỏ hàng</AddToCart>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}