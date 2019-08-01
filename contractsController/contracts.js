import models from '../db/models';
import Sequelize from 'Sequelize';
const Op = Sequelize.Op

class ContractController {
    getContractsRegion(req, res) {
        const id = parseInt(req.params.regionid, 10);
        models.Contract.findAll({
            where: {
                region_id: id,
            },
        }).then((contracts) => {
            if(!contracts){
                return res.status(404).send({
                    success: 'false',
                    message: 'contracts not found',
                });
            }
            return res.status(200).send({
                success: 'true',
                message: contracts.length + ' contracts retrived successfully',
                contracts,
            });
        });
    }

    getContractsType(req, res) {
        var whereStat = {};
        if(req.params.regionid){
            whereStat.type = req.params.type;
            whereStat.region_id = req.params.regionid;
        }
        else{
            whereStat.type = req.params.type;
        }
        models.Contract.findAll({
            where: whereStat,
        }).then((contracts) => {
            if(!contracts){
                return res.status(404).send({
                    success: 'false',
                    message: 'contracts not found',
                });
            }
            return res.status(200).send({
                success: 'true',
                message: contracts.length + ' contracts retrived successfully',
                contracts,
            });
        });
    }

    getContractsPrice(req, res) {
        const min = parseInt(req.params.min, 10);
        const max = parseInt(req.params.max, 10);
        var whereStat = {};
        if(req.params.regionid){
            whereStat.price = {
                [Op.and]: {
                    [Op.gte]: min, 
                    [Op.lte]: max,
                },
            };
            whereStat.region_id = req.params.regionid;
        }
        else{
            whereStat.price = {
                [Op.and]: {
                    [Op.gte]: min, 
                    [Op.lte]: max,
                },
            };
        }
        models.Contract.findAll({
            where: whereStat,
        }).then((contracts) => {
            if(!contracts){
                return res.status(404).send({
                    success: 'false',
                    message: 'contracts not found',
                });
            }
            return res.status(200).send({
                success: 'true',
                message: contracts.length + ' contracts retrived successfully',
                contracts,
            });
        });
    }

    addItem(req,res){
        models.ContractItem.findOne({where: {record_id: req.body.record_id,},}).then((contractItemFound) => {
            if(contractItemFound){
                return res.status(403).send({
                    success: 'true',
                    message: 'An item with that id exists already', 
                    contractItemFound,
                });
            }
            const contractItem = {
                is_blueprint_copy: req.body.is_blueprint_copy,
                is_included: req.body.is_included,
                item_id: req.body.item_id,
                material_efficiency: req.body.material_efficiency,
                quantitiy: req.body.quantitiy,
                record_id: req.body.record_id,
                runs: req.body.runs,
                time_efficiency: req.body.time_efficiency,
                type_id: req.body.type_id,
                contract_id: req.body.contract_id || req.params.contractId,
            };
            models.ContractItem.create(contractItem).then((ContractItem) => {
                return res.status(201).send({
                    success: 'true',
                    message: 'item added successfully',
                    ContractItem,
                });
            });
        });
    }

    addContractsBatch(req,res){
        const sent = req.body.contractArray.length;
        var added = 0;
        var promises = [];
        for(var i = 0; i < req.body.contractArray.length; i++){
            var contract = req.body.contractArray[i]
            const contractz = {
                contract_id: contract.contract_id,
                buyout: contract.buyout,
                collateral: contract.collateral,
                date_expired: contract.date_expired,
                date_issued: contract.date_issued,
                days_to_complete: contract.days_to_complete,
                end_location_id: contract.end_location_id,
                for_corporation: contract.for_corporation,
                issuer_corporation_id: contract.issuer_corporation_id,
                issuer_id: contract.issuer_id,
                price: contract.price,
                reward: contract.reward,
                start_location_id: contract.start_location_id,
                title: contract.title,
                type: contract.type,
                volume: contract.volume,
                region_id: contract.region_id || req.params.regionid,
            };
            promises.push(models.Contract.findOne({where: {contract_id: contractz.contract_id,},}).then((contractFound) => {
                if(contractFound){
                    return res.status(403).send({
                        success: 'true',
                        message: 'A contract with that id exists already', 
                        contractFound,
                    });
                }
                else{
                    models.Contract.create(contractz);
                    added++
                }
            }));
        }
        Promise.all(promises).then(function(){
            if(added === sent){
                return res.status(201).send({
                    success: 'true',
                    message: sent + ' contracts added successfully',
                });
            }
            else{
                console.log("promises:" + promises.length + " added contracts:" + added + " sent:" + sent)
                return res.status(500).send({
                    success: 'false',
                    message: 'something went wrong idk',
                });
            }
        });
        
    }
    
    removeContracts(req,res){
        const id = parseInt(req.params.contractid, 10);
        models.Contract.destroy({where: {contract_id: id,},}).then((contractdeleted) => {
            if(contractdeleted === 1) {
                return res.status(201).send({
                    success: 'true',
                    message: 'contract removed successfully',
                    contractdeleted,
                });
            }
            return res.status(404).send({
                success: 'true',
                message: 'contract does not exist',
            });
        });
    }
}
const contractController = new ContractController();
export default contractController;