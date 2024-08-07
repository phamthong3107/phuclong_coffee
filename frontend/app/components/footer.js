import Link from "next/link";

export default function Footer(){
    return(
        <>
            <div className="container-fluid py-3" style={{backgroundColor: "#0c713d"}}>
                <div className="container text-white">
                    <div className="row">
                        <div className="col-md-4">
                            <p><span className="fw-bold">Trụ sở chính:</span> Công ty Cổ Phần Phúc Long Heritage - ĐKKD: 0316 871719 do sở KHĐT TPHCM cấp lần đầu ngày 21/05/2021</p>
                            <p><span className="fw-bold">Nhà máy:</span> D_8D_CN Đường XE 1, Khu Công Nghiệp Mỹ Phước III, phường Mỹ Phước, thị xã Bến Cát, tỉnh Bình Dương, Việt Nam</p>
                            <p><span className="fw-bold">Địa chỉ:</span> Phòng 702, Tầng 7, Tòa nhà Central Plaza, số 17 Lê Duẩn, phường Bến Nghé, quận 1, Hồ Chí Minh</p>
                            <p><span className="fw-bold">Điện thoại:</span> 1900 234 518 (Ext.9100/ 9102)</p>
                            <p><span className="fw-bold">Fax:</span> (028) 6263 0379</p>
                            <p><span className="fw-bold">Email:</span> sales@phuclong.masangroup.com</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Đăng ký nhận tin khuyến mãi</h5>
                            <div className="d-flex gap-3 my-3">
                                <input type="text" className="form-control w-75" placeholder="Nhập địa chỉ Email"/>
                                <button className="btn btn-light">Gửi</button>
                            </div>
                            <Link href={"/"} className="text-decoration-none text-white"><p>Chính sách đặt hàng</p></Link>
                            <Link href={"/"} className="text-decoration-none text-white"><p>Chính sách bảo mật thông tin</p></Link>
                        </div>
                        <div className="col-md-4">
                            <h5>Liên hệ</h5>
                            <Link href={"/"} className="text-decoration-none text-white"><p>Hệ thống cửa hàng Phúc Long Coffee & Tea</p></Link>
                            <Link href={"/"} className="text-decoration-none text-white"><p>Hệ thống cửa hàng Phúc Long Kiosk</p></Link>
                            <img src="/img/bocongthuong.png" alt="" className="img-fluid" width={260}/>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="container py-3">
                <div className="row text-success">
                    <div className="col">© Công ty CP Phúc Long Heritage 2024</div>
                    <div className="col">
                        <div className="d-flex gap-4 justify-content-end fs-4">
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}