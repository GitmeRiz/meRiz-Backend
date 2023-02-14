import express from "express"
import {
    Login,
    LogOut,
    Me,
} from "../controllers/Auth.js"

const router = express.Router()

router.post('/login', Login)
router.delete('/logout', LogOut)
router.get('/me', Me)

export default router