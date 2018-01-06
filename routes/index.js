const express = require('express');
const createOrder = require('../model/createOrder');
const createInternalDispatch = require('../model/createInternalDispatch');
const receivedOrder = require('../model/receivedOrder');
const inventory = require('../model/inventory');
const receivedInternalDispatch = require('../model/receivedInternalDispatch');
const passport = require('passport');

const router = express.Router();


router.get('/admin', (req, res) => {
  res.render('admin', { msg: req.flash('error') });
});

router.post('/admin', passport.authenticate('admin', {
  successRedirect: '/home',
  failureRedirect: '/admin',
  failureFlash: true,
}));

router.get('/home', (req, res) => {
  res.render('index');
});

router.post('/_createOrder', (req, res) => {
  createOrder.create(
    {
      ProductCombo: req.body.ProductCombo,
      Savories: req.body.Savories,
      Cookies: req.body.Cookies,
      DryFruit: req.body.DryFruit,
      Quantity: req.body.Quantity,
      OrderNo: req.body.OrderNo,
      Date: req.body.Date,
    }
    , () => { res.json({}); },
  );
});
router.post('/_createInternalDispatch', (req, res) => {
  createInternalDispatch.create(
    {
      ProductCombo: req.body.ProductCombo,
      Savories: req.body.Savories,
      Cookies: req.body.Cookies,
      DryFruit: req.body.DryFruit,
      Quantity: req.body.Quantity,
      OrderNo: req.body.OrderNo,
      Date: req.body.Date,
    }
    , () => { res.json({}); },
  );
});

router.get('/_createOrder', (req, res) => {
  createOrder.find({}, (err, data) => {
    res.json(data);
  });
});
router.get('/_createInternalDispatch', (req, res) => {
  createInternalDispatch.find({}, (err, data) => {
    res.json(data);
  });
});
router.get('/editOrder', (req, res) => {
  const { data } = req.body;
  console.log(req.body);
  // TODO: clean up for the hardcoded data and fix the data value as it is coming undefined
  createOrder.find({ OrderNo: 1514057189111 }, (err, result) => {
    res.json(result);
  });
});
router.post('/', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/',
  failureFlash: true,
}));
router.get('/', (req, res) => {
  res.render('login', { msg: req.flash('error') });
});
router.delete('/_createOrder', (req, res) => {
  createOrder.remove({ OrderNo: req.body.OrderNo }, () => {
    res.json({});
  });
});
router.delete('/_createInternalDispatch', (req, res) => {
  createInternalDispatch.remove({ OrderNo: req.body.OrderNo }, () => {
    res.json({});
  });
});
router.put('/updateInventory', (req, res) => {
  inventory.update({ ProductName: req.body.ProductName }, { $inc: { Quantity: parseInt(req.body.Quantity) } }, { multi: false }, (err, aff) => {
    res.json({});
  });
});
router.put('/updateInternalDispatch', (req, res) => {
  inventory.update({ ProductName: req.body.ProductName }, { $inc: { Quantity: -(parseInt(req.body.Quantity)) } }, { multi: false }, (err, aff) => {
    res.json({});
  });
});

router.post('/updateInventory', (req, res) => {
  createOrder.find({ OrderNo: req.body.OrderNo }, (err, data) => {
    console.log(data[0].ProductCombo);
    receivedOrder.create({
      ProductCombo: data[0].ProductCombo,
      Savories: data[0].Savories,
      Cookies: data[0].Cookies,
      DryFruit: data[0].DryFruit,
      Quantity: data[0].Quantity,
      OrderNo: data[0].OrderNo,
      Date: data[0].Date,
    }, () => {
      res.json({});
    });
  });
});
router.post('/updateInternalDispatch', (req, res) => {
  createInternalDispatch.find({ OrderNo: req.body.OrderNo }, (err, data) => {
    receivedInternalDispatch.create({
      ProductCombo: data[0].ProductCombo,
      Savories: data[0].Savories,
      Cookies: data[0].Cookies,
      DryFruit: data[0].DryFruit,
      Quantity: data[0].Quantity,
      OrderNo: data[0].OrderNo,
      Date: data[0].Date,
    }, () => {
      res.json({});
    });
  });
});
router.delete('/updateInventory', (req, res) => {
  createOrder.remove({ OrderNo: req.body.OrderNo }, () => {
    res.json({});
  });
});
router.delete('/updateInternalDispatch', (req, res) => {
  createInternalDispatch.remove({ OrderNo: req.body.OrderNo }, () => {
    res.json({});
  });
});
router.get('/inventory', (req, res) => {
  inventory.find({}, (err, data) => {
    res.json(data);
  });
});
router.get('/receivedOrder', (req, res) => {
  receivedOrder.find({}, (err, data) => {
    res.json(data);
  });
});
router.get('/receivedInternalDispatch', (req, res) => {
  receivedInternalDispatch.find({}, (err, data) => {
    res.json(data);
  });
});
module.exports = router;
