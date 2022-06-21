


import express from 'express';
import { getExpenses,getExpense,getOwnExpenses,createExpense,updateExpense,deleteExpense} from '../controlers/expense.js';

const router = express.Router();
import auth from '../middleware/auth.js'


router.get('/', getExpenses);
router.get('/',auth, getOwnExpenses);
router.post('/',auth, createExpense);
router.get('/:id',auth, getExpense);
router.patch('/:id',auth, updateExpense);
router.delete('/:id',auth, deleteExpense);
 
export default router;
