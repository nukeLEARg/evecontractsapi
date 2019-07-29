import express from 'express';
import ContractController from '../contractsController/contracts';

const router = express.Router();

router.get('/api/v0/contracts/:regionid', ContractController.getContractsRegion);
router.get('/api/v0/contracts/type/:type', ContractController.getContractsType);
router.post('/api/v0/contracts',ContractController.addContracts);
router.post('/api/v0/removecontract/:contractid',ContractController.removeContracts);
router.post('/api/v0/contractsbatch/:contractcount',ContractController.addContractsBatch);

export default router;