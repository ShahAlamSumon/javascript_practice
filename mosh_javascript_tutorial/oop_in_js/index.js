// factory function
function createCircle(redius){
    return{
        redius,
        draw: function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();

// Constructor Function
function Circle(redius){
    console.log(this);
    this.redius = redius;
    this.draw = function(){
        console.log.apply('draw');
    };
}
const newCircle = new Circle(1);
