import { Router } from 'express';
import photosController from '../controllers/PhotosController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, photosController.create);

export default router;
