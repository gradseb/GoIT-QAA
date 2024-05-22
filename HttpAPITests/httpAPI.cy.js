describe('httpbin tests', () => {

        const baseUrl = 'https://httpbin.org';
    
        it('GET method', () => {
            cy.request('GET', `${baseUrl}/get`).then((response) => {
                assert.equal(response.status, 200);
                assert.property(response.body, 'url');
            });
        });
    
        it('POST method', () => {
            const data = { key: 'value' };
            cy.request({

                method: 'PUT',
                url: `${baseUrl}/put`,
                body: data,
                

            }).then((response) => {
                assert.equal(response.status, 200);
                assert.property(response.body, 'form');
                assert.deepEqual(response.body.form.data);
            });
        });
    
        it('PUT method', () => {
            const data = { key: 'value' };
            cy.request({
                method: 'PUT',
                url: `${baseUrl}/put`,
                body: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            
            }).then((response) => {
                assert.equal(response.status, 200);
                assert.property(response.body, 'form');
                assert.deepEqual(response.body.form.data);
            });
        });
    
        it('DELETE method', () => {
            cy.request('DELETE', `${baseUrl}/delete`).then((response) => {
                assert.equal(response.status, 200);
            });
        });
    
        it('Send standard header', () => {
            cy.request({
                method: 'GET',
                url: `${baseUrl}/headers`,
                headers: {
                    'User-Agent': 'my-app/0.0.1'
                }
            }).then((response) => {
                assert.equal(response.status, 200);
                assert.propertyVal(response.body.headers, 'User-Agent', 'my-app/0.0.1');
            });
        });
    
        it('Send custom header', () => {
            cy.request({
                method: 'GET',
                url: `${baseUrl}/headers`,
                headers: {
                    'X-Custom-Header': 'my-custom-value'
                }
            }).then((response) => {
                assert.equal(response.status, 200);
                assert.propertyVal(response.body.headers, 'X-Custom-Header', 'my-custom-value');
            });
        });
    
        it('Query parameters', () => {
            const params = { param1: 'value1', param2: 'value2' };
            cy.request({
                method: 'GET',
                url: `${baseUrl}/get`,
                qs: params
            }).then((response) => {
                assert.equal(response.status, 200);
                assert.deepEqual(response.body.args, params);
            });
        });
    
        it('Random query parameters', () => {
            const randomKey = Math.random().toString(36).substring(2, 7);
            const randomValue = Math.random().toString(36).substring(2, 7);
            const params = { [randomKey]: randomValue };
            cy.request({
                method: 'GET',
                url: `${baseUrl}/get`,
                qs: params
            }).then((response) => {
                assert.equal(response.status, 200);
                assert.deepEqual(response.body.args, params);
            });
        });
    
        it('Response content', () => {
            cy.request('GET', `${baseUrl}/html`).then((response) => {
                assert.equal(response.status, 200);
                assert.include(response.body, '<html>');
            });
        });
    
        it('Request duration', () => {
            const startTime = Date.now();
            cy.request('GET', `${baseUrl}/delay/1`).then((response) => {
                const endTime = Date.now();
                const duration = (endTime - startTime) / 1000;
                assert.equal(response.status, 200);
                assert.isAtLeast(duration, 1);
            });
        });
    
    });
    