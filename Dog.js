function Dog(name)
{
    this.name = name;
}
Dog.prototype.bark = function()
{
    console.log("Go Go Go and Go Away");
}