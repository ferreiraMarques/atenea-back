module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define("profile", {
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        direction: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        }
    });
    return Profile;
}