//driverRoutes.js

import express from 'express'
import { registration } from '../controller/driverController.js';




const router = express.Router();


router.post('/registration', registration)

export default router;