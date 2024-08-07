export default function Login(){
    return(
        <>
            <div className="container-fluid bg-light py-5" >
                <div className="container bg-white p-5 shadow">
                    <h3 className="text-success fw-bold my-5 text-center">ĐĂNG NHẬP VÀO PHÚC LONG</h3>
                    <form className="w-50 mx-auto">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Địa chỉ Email <span className="text-danger fw-bold">(*)</span></label>
                            <input type="email" class="form-control py-3" id="exampleInputEmail1" placeholder="Nhập Email"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Mật khẩu <span className="text-danger fw-bold">(*)</span></label>
                            <input type="password" class="form-control py-3" id="exampleInputPassword1" placeholder="Nhập Mật Khẩu"/>
                        </div>
                        <button type="submit" class="btn btn-success my-5 w-100 py-3">ĐĂNG NHẬP</button>
                    </form>
                </div>
            </div>
        </>
    )
}