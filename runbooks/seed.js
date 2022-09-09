const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {

        await client.connect();
        const db = client.db("renewable-energy-homes")
        const properties = db.collection("properties")
        const propertySales = db.collection("propertySales")

        let propertyIds = await properties.insertMany([
            {
                "dateCreated": new Date(),
                "postcode": "SK8 5RX",
                "houseNumber": 4,
                "houseName": null,
                "addressLine1": "Bowmont Close",
                "addressLine2": "Cheadle Hulme",
                "addressLine3": null,
                "town": "Cheadle",
                "county": "Greater Manchester",
                "epcRating": "A94",
                "propertyFeatures": [
                    { code: "BSU", label: "Battery storage unit" },
                    { code: "SPRI", label: "Solar panel roof installation" },
                    { code: "WTG", label: "Wind turbine generator" },
                    { code: "EVCP", label: "EV charging point" }
                ]
            },
            {
                "dateCreated": new Date(),
                "postcode": "SK8 5RX",
                "houseNumber": 11,
                "houseName": null,
                "addressLine1": "Bowmont Close",
                "addressLine2": "Cheadle Hulme",
                "addressLine3": null,
                "town": "Cheadle",
                "county": "Greater Manchester",
                "epcRating": "C71",
                "propertyFeatures": [
                    { code: "EVCP", label: "EV charging point" }
                ]
            },
            {
                "dateCreated": new Date(),
                "postcode": "SK8 5RX",
                "houseNumber": 35,
                "houseName": null,
                "addressLine1": "Bowmont Close",
                "addressLine2": "Cheadle Hulme",
                "addressLine3": null,
                "town": "Cheadle",
                "county": "Greater Manchester",
                "epcRating": "B83",
                "propertyFeatures": [
                    { code: "BSU", label: "Battery storage unit" },
                    { code: "SPRI", label: "Solar panel roof installation" },
                ]
            },
            {
                "dateCreated": new Date(),
                "postcode": "SK8 5RX",
                "houseNumber": 63,
                "houseName": null,
                "addressLine1": "Bowmont Close",
                "addressLine2": "Cheadle Hulme",
                "addressLine3": null,
                "town": "Cheadle",
                "county": "Greater Manchester",
                "epcRating": "B90",
                "propertyFeatures": [
                    { code: "WTG", label: "Wind turbine generator" },
                    { code: "EVCP", label: "EV charging point" }
                ]
            },
            {
                "dateCreated": new Date(),
                "postcode": "OL9 8BP",
                "houseNumber": 18,
                "houseName": null,
                "addressLine1": "Fields New Road",
                "addressLine2": "Chadderton",
                "addressLine3": "",
                "town": "Oldham",
                "county": "Greater Manchester",
                "epcRating": "E45",
                "propertyFeatures": [
                    { code: "SPRI", label: "Solar panel roof installation" },
                    { code: "EVCP", label: "EV charging point" }
                ]
            },
            {
                "dateCreated": new Date(),
                "postcode": "OL9 8BP",
                "houseNumber": 19,
                "houseName": null,
                "addressLine1": "Fields New Road",
                "addressLine2": "Chadderton",
                "addressLine3": "",
                "town": "Oldham",
                "county": "Greater Manchester",
                "epcRating": "B88",
                "propertyFeatures": [
                    { code: "BSU", label: "Battery storage unit" },
                    { code: "WTG", label: "Wind turbine generator" },
                ]
            },
            {
                "dateCreated": new Date(),
                "postcode": "CO3 0QF",
                "houseNumber": 166,
                "houseName": null,
                "addressLine1": "Winstree Road",
                "addressLine2": "Stanway",
                "addressLine3": "",
                "town": "Colchester",
                "county": "Essex",
                "epcRating": "C75"
            }
        ])

        console.log("propertyIds", propertyIds)

        let propertySalesIds = await propertySales.insertMany([
            {
                propertyId: propertyIds.insertedIds["0"],
                dateOfSale: new Date("2020-12-17"),
                saleAmount: 400000
            },
            {
                propertyId: propertyIds.insertedIds["0"],
                dateOfSale: new Date("2015-02-17"),
                saleAmount: 300000
            },
            {
                propertyId: propertyIds.insertedIds["0"],
                dateOfSale: new Date("2008-01-17"),
                saleAmount: 200000
            },
            {
                propertyId: propertyIds.insertedIds["1"],
                dateOfSale: new Date("2011-05-17"),
                saleAmount: 150000
            },
            {
                propertyId: propertyIds.insertedIds["1"],
                dateOfSale: new Date("2013-01-17"),
                saleAmount: 200000
            },
            {
                propertyId: propertyIds.insertedIds["1"],
                dateOfSale: new Date("2014-09-17"),
                saleAmount: 250000
            },
            {
                propertyId: propertyIds.insertedIds["1"],
                dateOfSale: new Date("2017-08-17"),
                saleAmount: 300000
            },
            {
                propertyId: propertyIds.insertedIds["1"],
                dateOfSale: new Date("2020-02-17"),
                saleAmount: 350000
            },
            {
                propertyId: propertyIds.insertedIds["2"],
                dateOfSale: new Date("2021-10-17"),
                saleAmount: 790000
            },
            {
                propertyId: propertyIds.insertedIds["2"],
                dateOfSale: new Date("2001-10-17"),
                saleAmount: 540000
            },
            {
                propertyId: propertyIds.insertedIds["3"],
                dateOfSale: new Date("2018-12-17"),
                saleAmount: 550000
            },
            {
                propertyId: propertyIds.insertedIds["3"],
                dateOfSale: new Date("2018-01-17"),
                saleAmount: 440000
            },
            {
                propertyId: propertyIds.insertedIds["4"],
                dateOfSale: new Date("2017-02-17"),
                saleAmount: 660000
            },
            {
                propertyId: propertyIds.insertedIds["4"],
                dateOfSale: new Date("2015-04-17"),
                saleAmount: 440000
            },
            {
                propertyId: propertyIds.insertedIds["5"],
                dateOfSale: new Date("2016-03-17"),
                saleAmount: 770000
            },
            {
                propertyId: propertyIds.insertedIds["5"],
                dateOfSale: new Date("2014-05-17"),
                saleAmount: 550000
            }
            // ,
            // {
            //     propertyId: propertyIds.insertedIds["6"],
            //     dateOfSale: new Date("2001-01-01"),
            //     saleAmount: 999999
            // }
        ])

        console.log("propertySalesIds", propertySalesIds)


    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }

}


main().catch(console.error);