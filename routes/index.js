import express from 'express';
import ContractController from '../contractsController/contracts';

const router = express.Router();

router.get('/api/v0/contracts/:regionid', ContractController.getContractsRegion);
router.get('/api/v0/contracts/type/:type/:regionid?', ContractController.getContractsType);
router.get('/api/v0/contracts/price/:min/:max/:regionid?', ContractController.getContractsPrice);
router.post('/api/v0/item/:contractId?',ContractController.addItem);
router.post('/api/v0/removecontract/:contractid',ContractController.removeContracts);
router.post('/api/v0/contractsbatch/:regionid?',ContractController.addContractsBatch);

export default router;