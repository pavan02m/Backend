const transactionModel = require("../schema/roles");
const returnMessage = require("./message");
const messages = require("../lang/messages.json");

module.exports = {
  index: async(req,res) => {
    try {
      const roles = await transactionModel.find({});
      returnMessage.successMessage(res,messages.successMessages.getAlltudents,roles);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;
      const isNameTaken = await transactionModel.findOne({ name });
      if (isNameTaken)
        returnMessage.errorMessage(res,messages.errorMessages.countryAlreadyExists)

      const batch = await transactionModel.create({ ...req.body });
      returnMessage.successMessage(res,messages.successMessages.addbatch,batch);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  edit: async(req,res) => {
    try {
      const transaction = await transactionModel.findOne({_id: req.params['id'] })
      returnMessage.successMessage(res,messages.successMessages.showrole, transaction);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  },

  update: async(req,res) => {
    try {
      const transaction = await transactionModel.findByIdAndUpdate(req.params['id'], { ...req.body });
      returnMessage.successMessage(res,messages.successMessages.updaterole, transaction);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  delete: async(req,res) => {
    try {
      const transaction = await transactionModel.remove({ '_id': req.params['id'] });
      console.log(transaction)
      returnMessage.successMessage(res,messages.successMessages.deleterole);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },
  
  show: async(req,res) => {
    try {
      const transaction = await transactionModel.findOne({_id: req.params['id'] })
      console.log(transaction)
      returnMessage.successMessage(res,messages.successMessages.showrole, transaction);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  }
};
