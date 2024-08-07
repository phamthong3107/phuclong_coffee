"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductList from "./components/productList";
import Slider from "./components/slider";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories]= useState([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/topRating`).then((res)=> {
      setProducts(res.data)
    })
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`).then((res)=> {
      setCategories(res.data)
    })
  }, [])
    return (
      <>
      <style>
        {`
        .categories:hover{
          background-color: rgb(236, 239, 241);
        }
        `}
      </style>
        <Slider/>
        <div className="container d-flex justify-content-center my-3">
            <div className="d-flex gap-0 gap-md-5 justify-content-around ">
              {categories.map((item)=>{
                return(
                  <div className="mt-2">
                    <div class="card py-3 px-4 border-0 categories">
                      <Link href={`/menu/${item._id}`} className="text-center text-decoration-none text-success fw-bold">
                      <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.image}`} className="mx-auto mb-3" width={58} height={58}/>
                      <div class="card-body p-0">
                        <h5>{item.name}</h5>
                      </div>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
        <h2 className="text-center text-success fw-bold">Sản Phẩm Nổi Bật</h2>
        <p className="text-center my-3">Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và hạt cà phê thượng hạng cùng mong muốn mang lại cho khách hàng những trải nghiệm giá trị nhất khi thưởng thức.</p>
        <ProductList data={products}/>
        <Link href={"/menu"}><p className="text-center text-success my-3">Xem thêm</p></Link>
        <div className="container d-none d-lg-block my-3">
          <h2 className="text-center text-success fw-bold">Danh Sách Cửa Hàng</h2>
          <p className="text-center mb-4">Danh sách cửa hàng Phúc Long</p>
          <div className="row row-cols-2">
            <div className="col">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62862.27704318649!2d105.6690127000259!3d10.025744401920171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089bb88b20641%3A0xf542c24683b038a7!2zUGjDumMgTG9uZyBUZWEgJiBDb2ZmZWUgLSAzODQgxJDGsOG7nW5nIDMwIFRow6FuZyA0!5e0!3m2!1svi!2s!4v1722614670393!5m2!1svi!2s" width="600" height="840" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col">
              <h5 className="text-success">Danh sách cửa hàng</h5>
              <div className="table-reponsive table-responsive my-3" style={{maxHeight: 840}}>
                <table className="table">
                  <tbody className="table-bodered">
                      <tr>
                        <td>
                          <div className="d-flex gap-4 px-3 my-2">
                            <div className=""><img src="/img/cuahang.jpg" alt="" width={46} height={46} className="rounded-pill"/></div>
                            <div className="">
                              <p className="fw-bold text-success">CTO-CH Vincom Hung Vuong Số 2 HV</p>
                              <p className="mb-1"><span className="text-decoration-underline">Địa chỉ:</span> Vincom Hung Vuong Số 2 HV P. Thới Bình Q. Ninh Kiều TP. Cần Thơ</p>
                              <p className="mb-1"><span className="text-decoration-underline">Số điện thoại:</span> (029) 2384 4444</p>
                              <p className="mb-1"><span className="text-decoration-underline">Giờ hoạt động:</span> 08:30 - 22:20</p>
                              <button className="btn btn-success mt-3"><i class="fa-solid fa-location-crosshairs me-2"></i>Chỉ đường</button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex gap-4 px-3 my-2">
                            <div className=""><img src="/img/cuahang.jpg" alt="" width={46} height={46} className="rounded-pill"/></div>
                            <div className="">
                              <p className="fw-bold text-success">CTO-CH 314 Đường 30.4 P.HL Q.Ninh</p>
                              <p className="mb-1"><span className="text-decoration-underline">Địa chỉ:</span> 314 Đường 30.4 P. Hưng Lợi Q. Ninh Kiều TP. Cần Thơ</p>
                              <p className="mb-1"><span className="text-decoration-underline">Số điện thoại:</span> (029) 2378 2555</p>
                              <p className="mb-1"><span className="text-decoration-underline">Giờ hoạt động:</span> 07:00 - 22:30</p>
                              <button className="btn btn-success mt-3"><i class="fa-solid fa-location-crosshairs me-2"></i>Chỉ đường</button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex gap-4 px-3 my-2">
                            <div className=""><img src="/img/cuahang.jpg" alt="" width={46} height={46} className="rounded-pill"/></div>
                            <div className="">
                              <p className="fw-bold text-success">CTO VM Ninh Kiều</p>
                              <p className="mb-1"><span className="text-decoration-underline">Địa chỉ:</span> Số 42 Đường 30 Tháng 4 P. Tân An Q. Ninh Kiều TP. Cần Thơ</p>
                              <p className="mb-1"><span className="text-decoration-underline">Số điện thoại:</span> (028) 7100 1968 (Ext.20908)</p>
                              <p className="mb-1"><span className="text-decoration-underline">Giờ hoạt động:</span> 07:00 - 22:00</p>
                              <button className="btn btn-success mt-3"><i class="fa-solid fa-location-crosshairs me-2"></i>Chỉ đường</button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex gap-4 px-3 my-2">
                            <div className=""><img src="/img/cuahang.jpg" alt="" width={46} height={46} className="rounded-pill"/></div>
                            <div className="">
                              <p className="fw-bold text-success">CTO - Sense Cần Thơ</p>
                              <p className="mb-1"><span className="text-decoration-underline">Địa chỉ:</span> T-02, Sense City Cần Thơ, số 01 Đại P. Tân An Q. Ninh Kiều TP. Cần Thơ</p>
                              <p className="mb-1"><span className="text-decoration-underline">Số điện thoại:</span> (028) 7100 1968 ( Ext.21318)</p>
                              <p className="mb-1"><span className="text-decoration-underline">Giờ hoạt động:</span> 07:00 - 22:00</p>
                              <button className="btn btn-success mt-3"><i class="fa-solid fa-location-crosshairs me-2"></i>Chỉ đường</button>
                            </div>
                          </div>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}