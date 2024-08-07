import Image from "next/image"
import Link from "next/link";
import AddToCart from "./addToCart";

export default function Product(props) {
    const product = props.data;
    return (
    <>
    <style>
        {`
        .card:hover{
          box-shadow: rgba(153, 153, 153, 0.6) 0px 0px 10px 0px;
        }
        .card-title {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .full-title{
          display: none;
          transform: translateX(-50%);
          top: -10px;
        }
        .card-body:hover .full-title {
          display: block!important;
        }
        `}
      </style>
        <div className="card border-1 rounded-3 pt-3 my-3">
          <Link href={`/product/${product._id}`} className="text-decoration-none">
                <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${product.image}`} className="card-img-top mw-100" alt="..." width={280} height={250} layout="reponsive" objectFit="cover"/>
          </Link>
          <div className="card-body text-success position-relative">
            <Link href={`/product/${product._id}`} className="text-decoration-none text-success">
                <h5 className="card-title">{product.name}</h5>
            </Link>
                <div className="full-title w-75 bg-secondary text-white text-center rounded position-absolute start-50">{product.name}</div>
                <p className="card-text fw-bold">{product.price.toLocaleString()} đ</p>
                <AddToCart className="w-100" product={product} quantity={1} size="S">Đặt mua</AddToCart>
            </div>
        </div>
    </>
  )
}
