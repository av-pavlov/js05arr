// это файл с проверками
const f = require('./arr-x1.js');
const assert = require('assert');

assert.deepStrictEqual(f(1), 100, "ОШИБКА! НЕВЕРНО ДЛЯ f(1)");