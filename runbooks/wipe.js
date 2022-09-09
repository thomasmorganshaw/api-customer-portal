const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {

        await client.connect();
        const db = client.db("renewable-energy-homes")
        const properties = db.collection("properties")
        const propertySales = db.collection("propertySales")

        await properties.deleteMany({})
        await propertySales.deleteMany({})

    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }

}

main().catch(console.error);