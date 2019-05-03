import express from 'express';
import ContractController from '../contractsController/contracts';

const router = express.Router();

router.get('/api/v0/contracts/:regionid', ContractController.getContractsRegion);
router.post('/api/v0/contracts',ContractController.sendContracts);

export default router;