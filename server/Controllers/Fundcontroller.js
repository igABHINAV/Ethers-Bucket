const Fund = require("../Models/Fund");

exports.addFund = async(req,res)=>{
    try {
        const {address , title , desc} = req.body;
        let fund = await Fund.create({address , title , desc});
        res.status(201).json({
            success : true ,
            fund
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.getFunds = async(req,res)=>{
    try {
        const funds = await Fund.find();
        res.status(200).json({
            success:true ,
            funds
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}
