const smartgrid = require('smart-grid');

const settings = {
    outputStyle: 'styl',
    columns: 12,
    offset: '10px',
    container: {
        maxWidth: '1440px',
        fields: '20px'
    },
    /*
    breakPoints: {
        md: {
            width: "992px",
            fields: "20px"
        },
        sm: {
            width: "720px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },
    */
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid('./dev/static/stylus', settings);