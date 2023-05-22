//Tạo đối tượng dsnv từ lớp đối tượng DSNV
var dsnv = new DSNV();
//Tao doi tuong tu lop doi tuong Validation
var  validation = new Validation();
getLocalStorage();
function getE(id){
    return document.getElementById(id);
}
function renderTable(data){
    var content = "";
    for(var i = 0;i < data.length;i++){
        var nv = data[i];
       content += 
       `
       <tr>
                <td>${nv.tknv}</td>
                <td>${nv.tenNV}</td>
                <td>${nv.emailNV}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.cvnv}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.xeploai}</td>
            <td>
                <button class="btn btn-danger" onclick ="deleteNV('${nv.tenNV}')">Delete</button>
                <button class="btn btn-success mt-2" onclick ="editNV('${nv.tenNV}')">Edit</button>
            </td>
            
       </tr>
       
       `
    }
    getE("tableDanhSach").innerHTML = content;
}
//Sua NV
function editNV(tenNV){
   var nv = dsnv.suaNV();
   if(nv){
      getE("tknv").value= nv.tknv;
      getE("name").value= nv.tenNV;
    getE("email").value= nv.emailNV;
     getE("password").value= nv.password;
     getE("datepicker").value= nv.ngayLam;
     getE("luongCB").value= nv.luongcb;
      getE("chucvu").value= nv.cvnv;
     getE("gioLam").value= nv.gio;
   }
}
//Cap nhat NV
getE("btnCapNhat").addEventListener("click",function(){
var nv = suaNV();
dsnv.capNhatNV(nv);
renderTable(dsnv.arr);
setLocalStorage();
});

//Xoá NV
function deleteNV(){
dsnv.xoaNV(dsnv.tenNV);
renderTable(dsnv.arr);
setLocalStorage();
}
function layThongTinNV(){
    var _tk = getE("tknv").value;
    var _name = getE("name").value;
    var _email = getE("email").value;
    var _password = getE("password").value;
    var _datepicker = getE("datepicker").value;
    var _luongCB = getE("luongCB").value;
    var _chucvu = getE("chucvu").value;
    var _gioLam = getE("gioLam").value;
    
    //validation
    var isValid = true;
    //validation cho tk
   isValid &= validation.kiemTraRong(_tk,"tbTKNV","(*)Tài khoản tối đa 4 - 6 ký số, không để trống")&& validation.kiemTraDoDaiKiTu(_tk,"tbTKNV","(*)Tài khoản tối đa 4 - 6 ký số, không để trống",4,10);
    //validation cho ho ten nv
   isValid &= validation.kiemTraRong(_name,"tbTen","(*)Tên nhân viên phải là chữ, không để trống")&& validation.kiemTraChuoiKiTu(_name,"tbTen","(*)Tên nhân viên phải là chữ, không để trống");
    //validation cho email
   isValid &= validation.kiemTraRong(_email,"tbEmail","(*)Email phải đúng định dạng, không để trống")&& validation.kiemTraPattern(_email,/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"tbEmail","(*)Email phải đúng định dạng, không để trống");
    //validation cho mk
   isValid &= validation.kiemTraRong(_password,"tbMatKhau","(*)Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống")&& validation.kiemTraPattern(_password,/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,"tbMatKhau","(*)Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống");;
    //validation cho ngay
   isValid &= validation.kiemTraRong(_datepicker,"tbNgay","(*)Ngày làm không để trống, định dạng mm/dd/yyyy");
    //validation cho luong
   isValid &= validation.kiemTraRong(_luongCB,"tbLuongCB","(*)Lương cơ bản 1 000 000 - 20 000 000, không để trống");
    //validation chuc vu
   isValid &= validation.kiemTraChucVu("chucvu","tbChucVu","(*)Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)");
    //validation gio lam
   isValid &= validation.kiemTraRong(_gioLam,"tbGiolam","(*)Số giờ làm trong tháng 80 - 200 giờ, không để trống");




    if(!isValid) return null;
    //Tạo đối tượng nhân viên
    var nv = new NhanVien(_tk,_name,_email,_password,_datepicker,_luongCB,_chucvu,_gioLam);
    //tinh tong luong
    nv.tinhTL();
    nv.xl();
    return nv;
}
/**
 * Them NV
 */
getE("btnThemNV").addEventListener("click",function(){
    
    var nv = layThongTinNV();
    if(nv){

    //them nv vào mảng arr
    dsnv.themNV(nv);
    console.log(dsnv.arr);
    /**render data ra table
     * -tao dong(tuong duong nv duoc them)
     * -trong dong => co 6 cot
     */
    renderTable(dsnv.arr);
    setLocalStorage();
}

});
function setLocalStorage(){
    //convert JSON => String
    var dataString = JSON.stringify(dsnv.arr);
    //set localstorage
    localStorage.setItem("DSNV",dataString);
}
function getLocalStorage(){
    //check condition
    if(localStorage.getItem("DSNV")){
        var dataString = localStorage.getItem("DSNV");
      //convert String => JSON
     var dataJson = JSON.parse(dataString);
     //render table
    renderTable(dataJson); 
    }
   
}
/**
 * Search
 */
getE("searchName").addEventListener("keyup",function(){
    var keyword = getE("searchName").value;
    var mangTimKiem = dsnv.timKiemNV(keyword);
    renderTable(mangTimKiem);
});