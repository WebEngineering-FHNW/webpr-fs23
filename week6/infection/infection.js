
const canvas            = document.getElementById("canvas");
const context           = canvas.getContext("2d");
const addPersonButton   = document.getElementById("addPerson");
const addInfectedButton = document.getElementById("infected");
const max               = canvas.width;
context.fillStyle       = "black";

const radius = 10;

const people = [ ] ;

// note: curried style is a way of "dependency injection"
const add = infected => _evt => people.push(      // anonymous object, literal object constructor
    {x: max / 2,               y: max / 2,
     dx: Math.random()*4 - 2 , dy: Math.random()*4 - 2 ,
     infected : infected } );

addPersonButton  .onclick = add(false);
addInfectedButton.onclick = add(true);

const start = () => {
    setInterval(nextBoard, 1000 / 50);
};

const isInfecting = (person1, person2) =>
    (person1.x - person2.x)**2 + (person1.y - person2.y)**2 < radius**2;

const nextBoard = () => {
    const infected   = [];
    const uninfected = [];
    people.forEach( ball => ball.infected ? infected.push(ball) : uninfected.push(ball));
    infected.forEach(infectedPerson =>
        uninfected.forEach(uninfectedPerson => {
         if (isInfecting(infectedPerson, uninfectedPerson)) {
             uninfectedPerson.infected = true;
         }
        }));
    people.forEach(display);
};

const fillBox = (ball, radius) => {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
};

const display = ball => {
    context.fillStyle = "gold";
    fillBox(ball, radius + 1);

    context.fillStyle = ball.infected ? "red":"black";
    ball.x = (ball.x + max + ball.dx) % max;
    ball.y = (ball.y + max + ball.dy) % max;
    fillBox(ball, radius);
};




