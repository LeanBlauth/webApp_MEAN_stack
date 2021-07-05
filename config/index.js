var configValues = require('./config');

module.exports = {

    getDbConectionString: function() {
        return 'mongodb+srv://' + configValues.uname +
        ':' + configValues.pwd +
        '@' + configValues.clustername + '.eluhz.mongodb.net/' + 
        configValues.dbname + '?retryWrites=true&w=majority';
    }

}



