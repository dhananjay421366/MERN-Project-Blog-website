import { Router } from "express";

import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "profilePicture",
      maxCount: 1,
    },
  ]),
  registerUser
);

export default router;
