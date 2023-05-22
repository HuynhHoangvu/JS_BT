function NhanVien(_tkNV,_tenNV,_email,_mkNV,_ngayLam,_luongcb,_cvnv,_gio){
    this.tknv = _tkNV;
    this.tenNV = _tenNV;
    this.emailNV = _email;
    this.password = _mkNV;
    this.ngayLam = _ngayLam;
    this.luongcb = _luongcb;
    this.cvnv = _cvnv;
    this.gio = _gio;
    this.tongLuong = 0;
    this.xeploai = "";
    this.tinhTL = function(){
        switch(this.cvnv){
            case "Sếp":
                this.tongLuong = Number(this.luongcb) * 3;break;
            case "Trưởng phòng":
                this.tongLuong = Number(this.luongcb) * 2;break;
            case "Nhân vien":
                this.tongLuong = Number(this.luongcb);
            break;
        default:
            this.tongLuong = 0;
        }
    }
    this.xl = function(){
        if(this.gio >= 192){
            this.xeploai = "nhân viên xuất xắc";
        }
        else if(this.gio >= 176 && this.gio <192){
            this.xeploai = "nhân viên giỏi";
        }
        else if(this.gio >= 160 && this.gio < 176){
            this.xeploai = "nhân viên khá";
        }
        else if(this.gio < 160 && this.gio >= 80){
            this.xeploai = "nhân viên quèn";
        }
        
    }
}