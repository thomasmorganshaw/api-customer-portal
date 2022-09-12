import Mongoose from 'mongoose';

class MongooseService implements MongooseService {

    static connectionString: string = process.env.DatabaseConnectionString

    static async connect() {
        Mongoose.connect(this.connectionString)
        const db = Mongoose.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
            console.log("Mongoose connected successfully");
        });
    }

}

interface MongooseService {
    connectionString: string
    connect(): void
}

export default MongooseService