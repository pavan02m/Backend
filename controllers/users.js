const userModel = require("../schema/roles");
const returnMessage = require("./message");
const messages = require("../lang/messages.json");

module.exports = {
  index: async(req,res) => {
    try {
      const roles = await userModel.find({});
      returnMessage.successMessage(res,messages.successMessages.getAlltudents,roles);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;
      const isNameTaken = await userModel.findOne({ name });
      if (isNameTaken)
        returnMessage.errorMessage(res,messages.errorMessages.countryAlreadyExists)

      const batch = await userModel.create({ ...req.body });
      returnMessage.successMessage(res,messages.successMessages.addbatch,batch);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  edit: async(req,res) => {
    try {
      const users = await userModel.findOne({_id: req.params['id'] })
      returnMessage.successMessage(res,messages.successMessages.showrole, users);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  },

  update: async(req,res) => {
    try {
      const users = await userModel.findByIdAndUpdate(req.params['id'], { ...req.body });
      returnMessage.successMessage(res,messages.successMessages.updaterole, users);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  delete: async(req,res) => {
    try {
      const users = await userModel.remove({ '_id': req.params['id'] });
      console.log(users)
      returnMessage.successMessage(res,messages.successMessages.deleterole);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },
  
  show: async(req,res) => {
    try {
      const users = await userModel.findOne({_id: req.params['id'] })
      console.log(users)
      returnMessage.successMessage(res,messages.successMessages.showrole, users);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  }
};
