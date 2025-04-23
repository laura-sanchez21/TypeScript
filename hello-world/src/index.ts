abstract class Shape {
   constructor(public color: string) {

   }
   abstract render(): void;
}

class Circle extends Shape {
   constructor(public radius: number, color: string) {
      super(color); 
   }

   override render() { 
      console.log("Rendering a Circle");
   }
}

//rendering a shape makes 0 sense so make the class an abstract
//let shape = new Shape("red");
//shape.render();
