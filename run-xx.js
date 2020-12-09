// это файл с проверками для задачи x.x
// запускать так: node run-xx.js
const f = require('./arr-xx.js');
const assert = require('assert');

assert.deepStrictEqual(f(1), 100, "ОШИБКА! НЕВЕРНО ДЛЯ f(1)");