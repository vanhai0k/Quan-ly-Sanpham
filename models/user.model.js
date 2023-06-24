const { default: mongoose } = require('mongoose');
var db = require('./db');
const spSchema = new db.mongose.Schema(
    {
        // doi tuong dinh nghia cau truc cua model
        image: {type: String, require:true},
        fullname: {type: String, require:true},// yeu cau bat buoc phai nhap va chi nhap chuoi 
        username: {type:String, require:true},
        passwd: {type:String, require:true},
        email: {type:String, require:true},
       
        phanquyen: {type:db.mongose.Types.ObjectId, ref: 'phanquyenModel'},

    },
    {
        collection: 'user' // xac dinh ten colection trong csdl
    }
); 
const phanquyenSchema = db.mongose.Schema(
    {
        name:{type:String, require:true}
    },
    {collection:  'phanquyen'  }
)

// sau nay dinh nghia them schema ve the loai o trong nay  neu voi user thi dinh nghia file moi 



let userModel = db.mongose.model('userModel', spSchema);
let phanquyenModel =db.mongose.model('phanquyenModel', phanquyenSchema);
module.exports= {userModel,phanquyenModel}