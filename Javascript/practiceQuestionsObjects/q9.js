// Question 9:-
// Write a JavaScript program to calculate circle area and perimeter.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

function circle(radius)
{
    this.radius = radius;
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}

const prompt=require("prompt-sync")();
let r= prompt("Enter the radius: ");
c = new circle(r);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));