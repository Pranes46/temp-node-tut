const packa = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = packa.flattenDeep(items)

console.log(newItems)