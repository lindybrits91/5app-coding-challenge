const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const _ = require('lodash');

const filter = require(path.join(__dirname, '..', 'filter'));
const input = JSON.parse(fs.readFileSync(path.join(__dirname, 'payload.json'), 'utf-8'));

const filteredData = filter(input.payload);

describe('Count Tests', () => {
    it('returns payload without count = 0', () => {
        const index = _.findIndex(filteredData, (entry) => entry.count == 0);
        expect(index).to.equal(-1);
    });
    it('returns payload without count = 1', () => {
        const index = _.findIndex(filteredData, (entry) => entry.count == 1);
        expect(index).to.equal(-1);
    });
    it('returns payload with all counts > 1', () => {
        const isGreaterThanOne = _.every(filteredData, (entry) => entry.count > 1);
        expect(isGreaterThanOne).to.equal(true);
    });
});

describe('Logo Tests', () => {
    it('returns payload with Molly thumbnail https://example.com/64x64.png', () => {
        const molly = _.find(filteredData, (entry) => entry.name == 'Molly');
        const { thumbnail } = molly;
        expect(thumbnail).to.equal('https://example.com/64x64.png');
    });
    it('returns payload with Polly thumbnail https://example.com/128x128.png', () => {
        const polly = _.find(filteredData, (entry) => entry.name == 'Polly');
        const { thumbnail } = polly;
        expect(thumbnail).to.equal('https://example.com/128x128.png');
    });
    it('returns payload with Colly thumbnail null', () => {
        const colly = _.find(filteredData, (entry) => entry.name == 'Colly');
        const { thumbnail } = colly;
        expect(thumbnail).to.equal(null);
    });
});