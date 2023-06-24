const mongose = require('mongoose');
mongose.connect('mongodb://127.0.0.1:27017/ql_ass').catch((err) => {
    console.log("loi ket noi co so du lieu");
    console.log(err);
});

module.exports= {mongose} ; 

