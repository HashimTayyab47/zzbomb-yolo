import { NightwatchBrowser, NightwatchTests } from "nightwatch";
import '@nightwatch/apitesting';

const MetabaseTest: NightwatchTests = {


    'can GET bug respot details': async ({ supertest }: NightwatchBrowser) => {
        await supertest
            .request('localhost:3000/api')
            .get('/util/bug_report_details')
            .set({
                'X-METABASE-SESSION': '55c331c0-db23-43d8-a344-653b46c6591e'
            })
            .expect(200)
            .then((response) => {
            expect(response.body['metabase-info']['run-mode']).to.equal('prod');
            });
        },


    'can GET session properties': async ({ supertest }: NightwatchBrowser) => {
        await supertest
            .request('localhost:3000/api')
            .get('/session/properties')
            .set({
                'X-METABASE-SESSION': '55c331c0-db23-43d8-a344-653b46c6591e'
            })
            .expect(200)
            .then((response) => {
            expect(response.body['humanization-strategy']).to.equal('simple');
            });
        },



        'can GET Popular Items': async ({ supertest }: NightwatchBrowser) => {
        await supertest
            .request('localhost:3000/api')
            .get('/activity/popular_items')
            .set({
                'X-METABASE-SESSION': '55c331c0-db23-43d8-a344-653b46c6591e'
            })
            .expect(200)
            .then((response) => {
            expect(response.body[0].model).to.equal('table');
            });
        },
};




export default MetabaseTest;