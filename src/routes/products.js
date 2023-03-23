import  express  from "express"
import { getId, getAll, create, remove, update, patch } from "../controller/products.js";

const router = express.Router();

// dieu huong
router.get('/users',getAll);
router.get('/user/:id',getId);
router.post('/user/add',create);
router.delete('/user/:id',remove);
router.put('/user/:id',update);
router.patch('/user/:id',patch);
export default router;