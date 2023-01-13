import {Router} from 'express';
import indexMessageController from './index.controller';
const router = Router();

router.get('/', indexMessageController);

export default router;