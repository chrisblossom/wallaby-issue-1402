'use strict';

const babel = {
    presets: [
        [
            'env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
};

module.exports = babel;
