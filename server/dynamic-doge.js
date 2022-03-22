let express = require('express');
let router = express.Router();
var AWS = require("aws-sdk");
const tableUsers = "users" 

AWS.config.update({
  region: "us-east-1",
  endpoint: "http://localhost:8000"
});


const createUser = async (user) => {

  var params = {
    TableName: tableUsers,
    Item: user
  };

  return await docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
  })

}

// READ users
/* router.route('/').get((req, res) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single user
router.route('/edit-user/:id').get((req, res) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update user
router.route('/update-usert/:id').put((req, res, next) => {
  userSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('user updated successfully !')
    }
  })
})

// Delete user
router.route('/delete-user/:id').delete((req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
*/

// sample table entry
const user = 
    {
        email: "doge@doge.com",
        password: '123doge'
    }

module.exports = {
  createUser
}
