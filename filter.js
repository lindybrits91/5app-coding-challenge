
const _ = require('lodash');

const filter = (data) => {
    let filteredData = data;
    let finalData = [];

    /* Count greater than one */
    _.remove(filteredData, (entry) => entry.count <= 1);

    /* Image size */
    _.forEach(filteredData, (entry) => {
        const { logos } = entry;
        let maxWidth = 0;
        let maxHeight = 0;
        let logoPosition = -1;

        _.forEach(logos, (logo, i) => {
            const { size } = logo;
            const width = Number(size.split('x')[0]);
            const height = Number(size.split('x')[1]);

            if (width * height > maxWidth * maxHeight) {
                if (width >= 64 && height >= 64 && width <= 128 && height <= 128) {
                    maxWidth = width;
                    maxHeight = height;
                    logoPosition = i;
                } 
            }
        });

        const { name, count } = entry;

        let newEntry = {
            name,
            count,
            thumbnail: logoPosition != -1 ? logos[logoPosition].url : null
        };

        finalData.push(newEntry);

    });

    return finalData;
}

module.exports = filter;