import models, { sequelize } from '../db/models';

class ContractController {
    getContractsRegion(req, res) {
        const id = parseInt(req.params.regionid, 10);
        models.Contract.findAll({
            where: {
                region_id: id
            }
        }).then((contracts) => {
            if(!contracts){
                return res.status(404).send({
                    success: 'false',
                    message: 'contracts not found',
                });
            }
            return res.status(200).send({
                success: 'true',
                message: 'contracts retrived successfully',
                contracts,
            });
        });
    }

    addContracts(req,res){
        models.Contract.findOne({where: {contract_id: req.body.contract_id}}).then((contractFound) => {
            if(contractFound){
                return res.status(403).send({
                    success: 'true',
                    message: 'A contract with that id exists already', 
                    todoFound,
                });
            }
            const contract = {
                contract_id: req.body.contract_id,
                buyout: req.body.buyout,
                collateral: req.body.collateral,
                date_expired:req.body.date_expired,
                date_issued: req.body.date_issued,
                days_to_complete: req.body.days_to_complete,
                end_location_id: req.body.end_location_id,
                for_corporation: req.body.for_corporation,
                issuer_corporation_id: req.body.issuer_corporation_id,
                issuer_id: req.body.issuer_id,
                price: req.body.price,
                reward: req.body.reward,
                start_location_id: req.body.start_location_id,
                title: req.body.title,
                type: req.body.type,
                volume: req.body.volume,
                region_id: req.body.region_id,
            };
            models.Contract.create(contract).then((Contract) => {
                return res.status(201).send({
                    success: 'true',
                    message: 'contract added successfully',
                    Contract,
                });
            });
        });
    }

    removeContracts(req,res){
        const id = parseInt(req.params.contractid, 10);
        models.Contract.destroy({where: {contract_id: id}}).then((contractdeleted) => {
            if(contractdeleted === 1)
            {
                return res.status(201).send({
                    success: 'true',
                    message: 'contract removed successfully',
                    contractdeleted,
                });
            }
            return res.status(201).send({
                success: 'true',
                message: 'contract does not exist',
            });
        });
    }
}
const contractController = new ContractController();
export default contractController;