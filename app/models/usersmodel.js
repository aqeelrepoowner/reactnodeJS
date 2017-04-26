var mongoose = require('mongoose')
      ,Schema = mongoose.Schema
      userSchema = new Schema({
          id:{ type: Number, min: 2, max: 20 },
          username: String,
          password: String,
          email: String
      });

function UsersModel() {
    this.schema =  mongoose.model('users', userSchema);
}

UsersModel.prototype.findByEmail = function(emailId) {
      var result = "";
      console.log(emailId);
      return this.schema.find({ email: emailId },function(err, users) {
          result = users;
      });
  
      return result;
}

module.exports = new UsersModel;