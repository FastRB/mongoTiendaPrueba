"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productoController = require("../controllers/productoController");
var _Productos = _interopRequireDefault(require("../models/Productos"));
var router = (0, _express.Router)();
router.get("/", _productoController.renderProductos);
router.post("/productos/agregar", _productoController.createProductos);
router.get("/productos/:id/update", _productoController.renderEditProducto);
router.post("/productos/:id/update", _productoController.updateProductos);
router.get("/productos/:id/delete", _productoController.deleteProductos);
router.get("/productos/:id/status", _productoController.statusProductos);
var _default = router;
exports["default"] = _default;