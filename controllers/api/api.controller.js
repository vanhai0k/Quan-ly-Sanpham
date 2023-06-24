const md = require('../../models/user.model');
const pr = require('../../models/product.model');



exports.Listuser = async (req,res,next) =>{
    let datae ={
        status:1,
        msg:'ok'
    }
    //code xu ly lay danh sach
    let list=[];
    try {
        list = await md.userModel.find();
        datae.data=list;
        
    } catch (error) {
        datae.msg = error.message
        
    }

   

    // tra ve clien
    res.json(datae)

}

exports.listPr = async (req, res, next) => {
    let dataReturn = {
        status: 1, 
        msg: 'ok'
    }
    // code xử lý lấy danh sách ở đây
    let list = [];
    try {
        list = await pr.spModel.find();
        dataReturn.data = list;
    } catch (error) {
        dataReturn.msg = error.message;
    }
    

    // trả về client
    res.json(dataReturn)

}
exports.addUser = async(req,res,next) =>{
    let datae ={
        status:1,
        msg:'ok'
    }
    if (req.method=="POST") {
        console.log(req.body);
        if (req.body.passwd != req.body.passwd2){
            msg='Xác Nhận không Đúng';
        }
        //kiểm tra hợp lệ phần khác nesu có 
        //xủ lí lưu
        let obj= new md.userModel();
        obj.fullname=req.body.fullname;
        obj.username=req.body.username;
        obj.passwd= req.body.passwd;
        obj.phanquyen = req.body.phanquyen;
        obj.email=req.body.email;
        obj.image = "patuannn.jpg";
        try {
        let dataee=await obj.save();
        datae.data=dataee;
            console.log("Đăng Kí Thành Công");
        } catch (error) {
            datae.msg = error.message
        }
    }
    //code xu ly lay danh sach
    // tra ve clien
    res.json(datae)
}
    

exports.UpdateUser = (req,res,next) =>{
    
    let datae ={
        status:1,
        msg:'ok'
    }
    //code xu ly lay danh sach

    // tra ve clien
    res.json(datae)

}
exports.deleteUser = (req,res,next) =>{
    
    let datae ={
        status:1,
        msg:'ok'
    }
    //code xu ly lay danh sach

    // tra ve clien
    res.json(datae)

}

exports.addpr = async (req,res,next) =>{
    let datae ={
        status:1,
        msg:'ok'
    }
    if (req.method=="POST") {
        console.log(req.body);
        
        //kiểm tra hợp lệ phần khác nesu có 
        //xủ lí lưu
        let obj= new pr.spModel();
        obj.title = req.body.title;
        obj.name = req.body.name;
        obj.price = req.body.price;
        obj.content = req.body.content;
        obj.the_loai = req.body.theloai;
        obj.image = "patuannn.jpg";

        try {
            let dataee=await obj.save();
            datae.data=dataee;
                console.log("Đăng Kí Thành Công");
            } catch (error) {
                datae.msg = error.message
            }
        
    }
    //code xu ly lay danh sach
    // tra ve clien
    res.json(datae)
}