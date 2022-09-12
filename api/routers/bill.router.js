'use strict'
const bill_controller = require('../controllers/bill.controller');
module.exports = (app) => {
    app.route('/bill/add')
        .post(bill_controller.addBill);
    app.route('/bill/verify/:token')
        .get(bill_controller.verifyPayment);
    app.route('/bill/:id_user')
        .get(bill_controller.getBillByIDUser);
    app.route('/bill/delete/:id')
        .get(bill_controller.deleteBill);
    app.route('/bill/top/')
        .post(bill_controller.statisticalTop10);
    app.route('/bill/statistical/revenue/day')
        .post(bill_controller.statisticaRevenueDay);
    app.route('/bill/statistical/revenue/month')
        .post(bill_controller.statisticaRevenueMonth);
    app.route('/bill/statistical/revenue/year')
        .post(bill_controller.statisticaRevenueYear);
    app.route('/bill/statistical/revenue/quauter')
        .post(bill_controller.statisticaRevenueQuauter);
    app.route('/bill/status/false')
        .get(bill_controller.getBillNoVerify);
    app.route('/bill/status/true')
        .get(bill_controller.getBillVerify);
        

}