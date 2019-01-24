import express from 'express';
import ContractController from '../contractsController/contracts';

const router = express.Router();

router.get('/api/v0/contracts/:regionid', ContractController.getContractsRegion);
router.get('/api/v0/contract_items/:contractid', ContractController.getContractItems);

export default router;