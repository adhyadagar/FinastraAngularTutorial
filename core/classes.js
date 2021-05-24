// class name : PascalCase
class Demo {
    demoData;
    constructor() {
    console.log("constructor called");
    }
    func1() {
    this.demoData = "demo Data";
    console.log("function 1 called");
    }
    func2() {
    this.func1();
    console.log("function 2 called");
    }
   }
    
   const d = new Demo();
   d.func2();
   console.log(d.demoData);