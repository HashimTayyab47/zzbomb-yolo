import { NightwatchBrowser, NightwatchTests } from "nightwatch";
import '@nightwatch/apitesting';

const MetabaseTest: NightwatchTests = {

    // 'can POST a sesson token': async ({supertest}: NightwatchBrowser) => {
    //     await supertest
    //     .request('localhost:3000/api')
    //     .post('/session')
    //     .send({
    //         username: 'hashimtayyab78@gmail.com',
    //         password: 'bombyolo12'
    //     })
    //     .expect(200)
    //     .then((response) => {
    //         expect(response.body.id).to.have.length(36);
    //     })
    // },


    'can GET current user': async ({ supertest }: NightwatchBrowser) => {
        await supertest
            .request('localhost:3000/api')
            .get('/user/current')
            .set({
                'X-METABASE-SESSION': '55c331c0-db23-43d8-a344-653b46c6591e'
            })
            .expect(200)
            .then((response) => {
            expect(response.body.email).to.equal('hashimtayyab78@gmail.com');
            });
        },


    'can GET recent views': async ({ supertest }: NightwatchBrowser) => {
        await supertest
            .request('localhost:3000/api')
            .get('/activity/recent_views')
            .set({
                'X-METABASE-SESSION': '55c331c0-db23-43d8-a344-653b46c6591e'
            })
            .expect(200);
        },
};




export default MetabaseTest;