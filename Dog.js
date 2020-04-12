function Dog(name)
{
    this.name = name;
}
Dog.prototype.bark = function()
{
    console.log("Go Go Go and Go Away");
    console.log("hihihi");
}
Dog. prototype.sayHi = function()
{
    console.log("Hi! I am " + this.name);
}