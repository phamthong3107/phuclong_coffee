var express = require("express");
var router = express.Router();


//Import model
const connectDb = require("../models/db");
const { ObjectId } = require("mongodb");


//Lấy tất cả đơn hàng dạng json
router.get("/", async(req, res, next) => {
    const db = await connectDb();
    const orderCollection = db.collection("orders");
    const orders = await orderCollection.find().toArray();
    if (orders) {
        res.status(200).json(orders);
    } else {
        res.status(404).json({ message: "Không tìm thấy" });
    }
});


//Lấy đơn hàng theo id
router.get("/id/:id", async(req, res, next) => {
    const db = await connectDb();
    const orderCollection = db.collection("orders");
    const order = await orderCollection.findOne({
        _id: new ObjectId(req.params.id),
    });

    if (order) {
        res.status(200).json(order);
    } else {
        res.status(404).json({ message: "Không tìm thấy" });
    }
});


//Thêm đơn hàng
router.post("/", async(req, res, next) => {
    const db = await connectDb();
    const orderCollection = db.collection("orders");
    const data = req.body;
    const result = await orderCollection.insertOne(data);
    if (result.insertedId) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: "Không thành công" });
    }
});

//Xóa đơn hàng
router.delete("/id/:orderID", async(req, res, next) => {
    const db = await connectDb();
    const orderCollection = db.collection("orders");
    const orderId  = req.params.orderID;
    try{
        const result = await orderCollection.deleteOne({_id: new ObjectId(orderId)});
        if (result.deletedCount === 1) {
            res.status(200).json({ message: "Đơn hàng đã được xóa thành công" });
        } else {
            res.status(404).json({ message: "Không tìm thấy đơn hàng" });
        }
    }catch (error){
        next(error); 
    }
});

module.exports = router;