import express from 'express';
import { getExpends,getExpend,getOwnExpends,createExpend,updateExpend,deleteExpend} from '../controlers/expend.js';

const router = express.Router();
import auth from '../middleware/auth.js'


router.get('/', getExpends);
router.get('/',auth, getOwnExpends);
router.post('/',auth, createExpend);
router.get('/:id',auth, getExpend);
router.patch('/:id',auth, updateExpend);
router.delete('/:id',auth, deleteExpend);
 
export default router;
