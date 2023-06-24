const { default: mongoose } = require('mongoose');
var db = require('./db');
const spSchema = new db.mongose.Schema(
    {
        // doi tuong dinh nghia cau truc cua model
        image: {type:String, require:true},
        title: {type: String, require:true},
        name: {type: String, require:true},
        
        // yeu cau bat buoc phai nhap va chi nhap chuoi 
        price: {type:Number, require:true},
        quantity: {type:Number, require:true},
        content: {type:String, require:true},
        the_loai: {type:db.mongose.Types.ObjectId, ref: 'theloaimodel'}
     

    },
    {
        collection: 'product' // xac dinh ten colection trong csdl
    }
); 

    const theloaiSchema = db.mongose.Schema(
        {
            name:{type:String, require:true}
        },
        {collection:  'catories'  }
    )

// sau nay dinh nghia them schema ve the loai o trong nay  neu voi user thi dinh nghia file moi 



let spModel = db.mongose.model('spModel', spSchema);
let theloaimodel =db.mongose.model('theloaimodel', theloaiSchema);
module.exports= {spModel, theloaimodel}