import express from "express";
import { ProductsController } from "./controller";

const router = express.Router();
const controller = new ProductsController();

router.get("/", async (req, res) => {
  const products = await controller.find();
  res.json(products);
});

router.get("/filter", (req, res) => {
  res.send(
    "Los endpoints especificos deben declararsen antes de los endpoints dinamicos"
  );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = controller.findOne(id);

  if (product == undefined) {
    res.status(404).json({
      message: "Product not found",
    });
  }

  res.json();
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newProduct = await controller.create(body);
  res.status(201).json(newProduct);
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await controller.update(id, body);
    res.json(product);
  } catch (e) {
    res.status(404).json({
      message: "",
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const rta = await controller.delete(id);
  res.json(rta);
});

export default router;
