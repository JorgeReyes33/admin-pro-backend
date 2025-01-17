const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.DB_CNN)
        // {
            // Estas opciones ya no son necesarias en versiones nuevas de mongo
            //useNewUrlParser: true,
            //useUnifiedTopology: true
        //});
    
        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }

}

module.exports = {
    dbConnection
}