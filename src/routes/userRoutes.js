import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir
// router.get('/', userController.index); // Lista todos os usuários
// router.get('/:id', userController.show);  // Lista um usuário

router.post('/', loginRequired, userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);
export default router;

/*
index -> lista todos os usuários -> GET
create ou store -> cria um novo usuário -> POST
delete ou destroy -> deleta um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
