const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      nome: 'Test seeds',
      email: 'testseeds@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Test seeds 1',
      email: 'testseeds1@gmail.com',
      password_hash: await bcryptjs.hash('1337', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Test seeds2',
      email: 'testseeds2@gmail.com',
      password_hash: await bcryptjs.hash('23797', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ], {});
  },

};
