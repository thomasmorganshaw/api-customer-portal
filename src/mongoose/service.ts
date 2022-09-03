import Mongoose from 'mongoose';

class MongooseService {

    static connectionString: string = 'mongodb://host.docker.internal:27017/customer-portal'

    static async connect() {
        Mongoose.connect(this.connectionString)
        const db = Mongoose.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
            console.log("Mongoose connected successfully");
        });
    }

}

export default MongooseService