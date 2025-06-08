import express from "express";
import {
  addFood,
  authorizeRole,
  createOrder,
  deleteFood,
  getBuyer,
  getFood,
  getHistory,
  getKitchenList,
  getOneFood,
  getSalesByFoodType,
  getTopFoods,
  getTotalIncome,
  pendingOrder,
  updateFood,
  updateStatusOrder,
  userLogin,
  verifyToken,
} from "../controllers/userController.js";
import multer from "multer";
import path from "node:path";

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/getfood", getFood);
router.get("/getfood/:id", getOneFood);
router.post("/login", userLogin);
router.get("/check-auth", verifyToken, authorizeRole("admin"), (req, res) => {
  return res.json({ message: "Authenticated" });
});
router.post("/addmenu", upload.single("gambar"), addFood);
router.post("/delete/:id", deleteFood);
router.post("/order", pendingOrder);
router.get("/history", getHistory);
router.post("/update/:id", upload.single("gambar"), updateFood);
router.get("/topfoods", getTopFoods);
router.get("/getuser", getBuyer);
router.get("/pemasukan", getTotalIncome);
router.get("/categorysales", getSalesByFoodType);
router.get(
  "/kitchen/check-auth",
  verifyToken,
  authorizeRole("kitchen"),
  (req, res) => {
    return res.json({ message: "Authenticated" });
  }
);
router.get("/listkitchen", getKitchenList);
router.put("/update-status/:id", updateStatusOrder);

export default router;
