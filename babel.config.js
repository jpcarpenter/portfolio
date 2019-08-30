module.exports = {
    presets: [
        ['@vue/app', {
            polyfills: [
                'es6.array.iterator'
            ]
        }]
    ],
    sourceType: "unambiguous",
    "ignore": [
        "tailwind.js"
    ]
}