import models, { sequelize } from '../db/models';

class ContractController {
    getContractsRegion(req, res) {
        const id = parseInt(req.params.regionid, 10);
        models.Contract.findAll({
            where: {
                region_id: req.params.regionid
            }
        }).then((contracts) => {
            if(!contracts.array){
                return res.status(404).send({
                    success: 'false',
                    message: 'contracts not found',
                });
            }
            var itemList = [];
            contracts.array.forEach(element => {
                models.contractitem.findAll({
                    where: {
                        contract_id: element.contract_id
                    }
                }).then((items) => {
                    items.forEach(item =>{
                        itemList.push(item);
                    });
                });
            });
            return res.status(200).send({
                success: 'true',
                message: 'contracts retrived successfully',
                contracts,
                itemList,
            });
        });
    }

    sendContracts(req,res){

    }
}
const contractController = new ContractController();
export default contractController;