"use strict";

module.exports = {
  // User Model
  getUserAccountStatus: function() {
    var userStatus = ["Registered", "Active", "Locked", "Retired"];
    return userStatus;
  },

  // User Types
  getUserTypes: function() {
    var userTypes = ["port-operator", "port-admin"];
    return userTypes;
  }
};

// "start": "node ./bin/www"
