'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'Julian',
            email: 'julianmelo94@gotmail.com',
            password: '$2y$12$046Fs99CtCICtQGq55Go7u6nAK9tvxH2VjNdiiaFyRW5mBIRqRC5K',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});

    }
};