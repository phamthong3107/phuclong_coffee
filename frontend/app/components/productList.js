import Product from "./product"
export default function ProductList(props){
    return(
        <> 
            <div className="container">
                <div className="row row-cols-2 row-cols-lg-5 row-cols-md-3">
                    {props.data.map(item => {
                        return (
                            <div key={item._id} className="col">
                                <Product data={item} />
                            </div>
                        )
                        })
                    }
                </div>
            </div>
        </>
    )
}