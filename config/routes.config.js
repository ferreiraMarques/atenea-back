module.exports = function (app) {
    require('../auth/routes/auth.routes')(app);
    require('../users/routes/user.routes')(app);
    require('../category/routes/category.routes')(app);
    require('../questions/routes/question.routes')(app);
    require('../profile/routes/profile.routes')(app);
};