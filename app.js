class Triangle {
 constructor(side1, side2, side3){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
 }
 isEquilateralTriangle() {
    if (
       this.side1 === this.side2 && 
       this.side1 === this.side3 && 
       this.side2 === this.side3
    ) {
      console.log("Yes This is a EquliateralTriangle");
    } else {
      console.log("NO This is not an EquilateralTriangle");
    }
  }
  isRightTriangle(){
    if (
        this.side1 * this.side1 === 
         this.side2 * this.side2 + this.side3 * this.side3 ||
        this.side2 * this.side2 === 
         this.side1 * this.side1 + this.side3 * this.side3 ||
        this.side3 * this.side3 ===
         this.side1 * this.side1 + this.side2 * this.side2 
    ) {
    }
  }
}

const aTriangle = new Triangle(10, 2, 10);
aTriangle.isEquilateralTriangle();
