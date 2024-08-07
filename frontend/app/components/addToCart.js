"use client";
import { addItem } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function AddToCart (props) {
    const dispatch = useDispatch();
    const { product, quantity, size, className } = props;
    return(
        <>
            <button className={`btn btn-success ${className}`} onClick={()=> dispatch(addItem({product, quantity, size}))}>{props.children}</button>
        </>
    )
}