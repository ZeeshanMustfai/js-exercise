// Question 5:-
// Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

function Cylinder(height, radius) {
    this.height = height;
    this.radius = radius;
    this.volume = function() {
        return Math.PI*this.radius*this.radius*this.height;
    }
}

obj = new Cylinder(14, 8);
console.log(obj.volume().toFixed(4));