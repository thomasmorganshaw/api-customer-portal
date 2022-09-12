import { handler } from './health';

const event: any = {
    body: JSON.stringify({}),
    headers: {}
};

describe('Health returns success', () => {

    test('Health resource should return 200 OK response.', async () => {
        const res = await handler(event);
        expect(res.statusCode).toBe(200);
    });

    test('Health resource should return message "Healthy".', async () => {
        const res = await handler(event);
        const body = JSON.parse(res.body)
        expect(body.message).toBe("Healthy");
    });

});
