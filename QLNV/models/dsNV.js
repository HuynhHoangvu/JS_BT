function DSNV(){
    this.arr = [];

    this.themNV = function(nv){
        this.arr.push(nv);
    };
    this.timViTri = function(tenNV){
        var index = -1;
        for(var i = 0;i < this.arr.length;i++){
            var nv = this.arr[i];
            if(nv.tenNV === tenNV){
                index = i;
                break;
            }

        }
        return index;
    }
    this.xoaNV = function(tenNV){
       var index = this.timViTri(tenNV);
       if(index !== -1){
        this.arr.splice(index, 1);
       }
    };

    this.capNhatNV = function(nv){
        var index = this.timViTri(nv.tenNV);
        if(index !== -1){
            this.arr[index] = nv;
        }
    };
    this.suaNV = function(tenNV){
        var index = this.timViTri(tenNV);
        if(index !== -1){
          return this.arr[index];
        }
        return null;
    };

}
DSNV.prototype.timKiemNV = function(keyword){
var mangTimKiem = [];
for(var i = 0; i < this.arr.length;i++){
    var nv = this.arr[i];

    var keywordToLowerCase = keyword.toLowerCase();
    var tenSVToLowerCase = sv.xeploai.toLowerCase();
    if(tenSVToLowerCase.indexOf(keywordToLowerCase) != -1 ){
        mangTimKiem.push(nv);
    }
}
return mangTimKiem;
}