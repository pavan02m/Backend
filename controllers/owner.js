const ownerModel = require("../schema/owners");
const returnMessage = require("./message");
const messages = require("../lang/messages.json");

module.exports = {
  index: async(req,res) => {
    try {
      const owners = await ownerModel.find({});
      returnMessage.successMessage(res,messages.successMessages.getAlltudents,owners);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  create: async (req, res) => {
    try {
      const { name } = req.body;
      const isNameTaken = await ownerModel.findOne({ name });
      if (isNameTaken)
        returnMessage.errorMessage(res,messages.errorMessages.countryAlreadyExists)

      const batch = await ownerModel.create({ ...req.body });
      returnMessage.successMessage(res,messages.successMessages.addbatch,batch);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  edit: async(req,res) => {
    try {
      const role = await ownerModel.findOne({_id: req.params['id'] })
      returnMessage.successMessage(res,messages.successMessages.showrole, role);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  },

  update: async(req,res) => {
    try {
      const role = await ownerModel.findByIdAndUpdate(req.params['id'], { ...req.body });
      returnMessage.successMessage(res,messages.successMessages.updaterole, role);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },

  delete: async(req,res) => {
    try {
      const role = await ownerModel.remove({ '_id': req.params['id'] });
      console.log(role)
      returnMessage.successMessage(res,messages.successMessages.deleterole);
    } catch (error) {
      returnMessage.errorMessage(res,error);
    }
  },
  
  show: async(req,res) => {
    try {
      const role = await ownerModel.findOne({_id: req.params['id'] })
      console.log(role)
      returnMessage.successMessage(res,messages.successMessages.showrole, role);
    } catch(error) {
      returnMessage.errorMessage(res,error);
    }
  }
};
