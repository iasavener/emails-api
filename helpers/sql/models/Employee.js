const { DataTypes, Model } = require('sequelize');

class Employee extends Model {}

module.exports = (sequelize) => {
  Employee.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    profile_image: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    acronym: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email_signature: {
      type: DataTypes.TEXT,
    },
    email_synchronization: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    extension: {
      type: DataTypes.STRING,
      allowNull: true
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true
    },
    incorporation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    leaving_work_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    department_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    department_area_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ceo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    short_term_low: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    long_term_low: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    email_configuration: {
      type: DataTypes.STRING,
    },
    purchase_limit: {
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.INTEGER
    },
    current_holidays_days_available: {
      type: DataTypes.INTEGER
    },
    remaining_holidays_days_available: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'employees'
  });

  return Employee;
};