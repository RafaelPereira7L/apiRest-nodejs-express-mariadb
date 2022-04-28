import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.create);
router.put('/:id', loginRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;

/*
index -> lista todos os usuários -> GET
create ou store -> cria um novo usuário -> POST
delete ou destroy -> deleta um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
