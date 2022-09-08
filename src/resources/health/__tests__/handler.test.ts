import { handler } from '../app';

const event: any = {
    body: JSON.stringify({}),
    headers: {}
};

describe('Health returns 200', () => {
    test('Health resource should return 200 OK response.', async () => {
        const res = await handler(event);
        expect(res.statusCode).toBe(200);
    });
});