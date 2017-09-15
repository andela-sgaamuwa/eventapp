'use strict';
module.exports = (sequelize, DataTypes) => {
  var event = sequelize.define('event', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    eventTitle: {
      type: DataTypes.STRING,
      field: "event_title",
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      field: "location",
      allowNull: false
    },
    availableSlots: {
      type: DataTypes.INTEGER,
      field: "available_slots",
      allowNull: false,
      defaultValue: 2
    },
    eventDate: {
      type: DataTypes.DATE,
      field: 'event_date'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    }
    
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return event;
};