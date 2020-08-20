"use strict";

const mongoose = require("mongoose"),
  bcrypt = require("bcrypt"),
  enumHelper = require("../enums/enumsHelper"),
  defaults = require("../models/default/default"),
  autopopulate = require("mongoose-autopopulate"),
  Schema = mongoose.Schema,
  status = enumHelper.getUserAccountStatus(),
  userType = enumHelper.getUserTypes();

let UserSchema = new Schema(
  {
    // username (Registered Email)
    username: {
      type: String
    },
    // email as username
    email: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
      required: true
    },
    // firstName + lastName
    name: {
      type: String
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    phone: { type: Number },
    // Date of Birth
    dob: { type: Date },
    designation: { type: String },
    // ['Registered', 'Active', 'Locked', 'Retired'] and default is 'Registered'
    status: { type: String, enum: status, default: "Registered" },
    images: {
      original_image: {
        type: String,
        default: defaults.defaultProfileImage
      },
      resized_image: {
        type: String,
        default: defaults.defaultProfileImage
      }
    },

    // this will return one of ['school-operator', 'school-admin']
    userType: {
      type: String,
      enum: userType
    },

    // password policies
    password_reset_flag: {
      type: Boolean,
      default: false
    },
    password: { type: String },
    default_password: { type: String },
    // new properties
    loginAttempts: { type: Number, required: true, default: 0 },
    lockUntil: { type: Number },
    lastLogin: [Date]
  },
  {
    // createdAt,updatedAt fields are automatically added into records
    timestamps: true
  }
);

UserSchema.plugin(autopopulate);

// Methods

// Before Saving to Mongo, "Encrypt" user password and save it (In the hashed format)
UserSchema.pre("save", function(next) {
  var user = this;
  // If the user newly signing-up (hence is creating a new password) OR the user forgot his password and now resetting it, hash that plain-string pw he typed in the browser before saving it in mongo
  // Basically, only hash the password if it has been modified (or is new)
  if (user.isModified("password") || user.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        console.log("THE HASH IS ", hash);
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

// Concatenate "firstName" and "lastName" as "name" field in User Record
UserSchema.pre("save", function(next) {
  var user = this;
  user.name = user.firstName + " " + user.lastName; // concatenate firstName and lastName for name Field
  user.username = user.email; // make email as username for user
  next();
});

// Compare password for user authentication
UserSchema.methods.comparePassword = function(password) {
  var user = this;
  return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model("User", UserSchema);
