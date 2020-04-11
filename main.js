var Mouse = require('./Mouse');
var Cat = require('./Cat');
var mouse = new Mouse("tom");
var cat = new Cat();

cat.eat(mouse);
console.log(cat);