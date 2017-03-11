// --------------------------
// Module Pattern Example
// --------------------------

// function CoolModule(){
//   var something = "cool",
//       another  = [1,2,3];

//   function doSomething(){
//     console.log(something);
//   }

//   function doAnother(){
//     console.log(another.join("!"));
//   }

//   return {
//     doSomething: doSomething,
//     doAnother: doAnother
//   };
// }

// var foo = CoolModule();

// foo.doSomething(); // cool
// foo.doAnother(); // 1 ! 2 ! 3

// --------------------------
// Parameter Module Example
// --------------------------

function CoolModule(id){
  function identify(){
    console.log(id);
  }

  return {
    identify: identify
  };
}

foo1 = CoolModule("foo 1");
foo2 = CoolModule("foo 2");

foo1.identify(); // foo 1
foo2.identify(); // foo 2