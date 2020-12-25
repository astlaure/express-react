import app from '../../src/app/app';

describe('App test suite', () => {
    it('should successfully start', () => {
        try {
            const server = app.listen(3000)
            expect(server).toBeDefined();
            server.close();
        } catch (err) {
            fail(err);
        }
    });
});
