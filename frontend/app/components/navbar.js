"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import {useSelector} from "react-redux";


export default function Navbar(){
    const pathname = usePathname();
    const cart = useSelector(state => state.cart)
    const totalItem = useMemo(() => {
        return cart.reduce((total,item) => Number(total) + Number(item.quantity), 0);
    }, [cart])
    return (
        <>
        <style>
        {`
        .navbar{
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;        
        }
        `}
        
        </style>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container">
                    <a class="navbar-brand" href="/">
                        <img src="/img/logo.png" alt="Bootstrap" width={83} height={75}/>
                    </a>
                    <form className="d-none d-md-block " role="search">
                        <input className="form-control px-4 rounded-pill" type="search" placeholder="Bạn muốn mua gì..." aria-label="Search"/>
                    </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold ${(pathname == "/" ? "active text-success":"")}`} href="/">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold ${(pathname == "/menu" ? "active text-success":"")}`} href="/menu">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold ${(pathname == "/orders" ? "active text-success":"")}`} href="/orders">Đơn hàng của bạn</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className={`nav-link position-relative fw-bold ${(pathname == "/cart" ? "active text-success":"")}`} href="/cart">
                                    <i class="fa-solid fa-bag-shopping fs-4 text-success"></i>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">{totalItem}</span>    
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>    
            </nav>
        </>
    )
}