function Validation(){
    this.kiemTraRong = function(value,errorID,mess){
        /**
     * Validation
     */

    if(value === ""){
        //sai
        getE(errorID).style.display = "block";
        getE(errorID).innerHTML = mess;
        return false;
    }
        //Dung
        getE(errorID).style.display = "none";
        getE(errorID).innerHTML = "";
        return true;
    };
   this.kiemTraDoDaiKiTu = function(value,errorID,mess,min,max){
    if(min <= value.length && value.length <= max){
        //true
        getE(errorID).style.display = "none";
        getE(errorID).innerHTML = "";
        return true;
    }
    //false
    getE(errorID).style.display = "block";
    getE(errorID).innerHTML = mess;
    return false;
   };
   this.kiemTraChuoiKiTu = function(value,errorID,mess)
   {
    var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if(value.match(letter)){
        //true
        getE(errorID).style.display = "none";
        getE(errorID).innerHTML = "";
        return true;
    }
    //false
    getE(errorID).style.display = "block";
    getE(errorID).innerHTML = mess;
    return false;
   };
   this.kiemTraPattern = function(value,pattern,errorID,mess){
    if(value.match(pattern)){
        //true
        getE(errorID).style.display = "none";
        getE(errorID).innerHTML = "";
        return true;
    }
     //false
     getE(errorID).style.display = "block";
     getE(errorID).innerHTML = mess;
     return false;
   };
   this.kiemTraChucVu=function(idSelect,errorID,mess){
    if(getE(idSelect).selectedIndex !== 0){
        //true
        getE(errorID).style.display = "none";
        getE(errorID).innerHTML = "";
        return true;
    }
    //false
    getE(errorID).style.display = "block";
     getE(errorID).innerHTML = mess;
     return false;
   }
}
    