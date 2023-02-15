const model = require('../model/user')


exports.createUser = async(req,res)=>{
    try{
        const users = await new model(req.body).save();
        res.json(users);
    }catch(err){
        res.json({err});
    }
}





exports.getAllusers = async (req,res)=>{
    try{
        const user = await model.find();
        res.json(user);
    }catch(err){
        res.json({err});
    }
}
exports.getuser = async (req,res)=>{
    try{
        const user = await model.find({_id:req.params.userId});
        res.json(user);
    }catch(err){
        res.json({err});
    }
}
exports.deleteuser = async (req,res)=>{
    try{
        const user = await model.findOneAndDelete({_id:req.params.userId});
        res.json(user);
    }catch(err){
        res.json({err});
    }
}



exports.updateUser = async (req,res)=>{
    

    model.findByIdAndUpdate({_id:req.params.userId},req.body,{new:true},(err,data)=>{

            if(err){
                res.json(err)
            }else{
                res.json(data);
            }

    })
}