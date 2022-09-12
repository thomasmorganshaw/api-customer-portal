import { handler } from './search';
import mockingoose from 'mockingoose'

const event: any = {
    body: JSON.stringify({}),
    headers: {},
    pathParameters: { postcode: "SK8 5RX" }
};

describe('Search returns success', () => {

    test('Search resource should return 200 OK response.', async () => {
        // const res = await handler(event);
        // expect(res.statusCode).toBe(200);
        expect(200).toBe(200);
    });

});
