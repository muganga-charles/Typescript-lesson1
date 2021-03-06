(() => {
  //     A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way
  // of giving more friendly names to sets of numeric values.
  enum Color {
    Red,
    Green,
    Blue,
  }
  let c: Color = Color.Green;
  console.log(`Red -> ${Color.Red}`);
  console.log(`Green -> ${Color.Green}`);
  console.log(`Blue -> ${Color.Blue}`);

  // By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its
  // members. For example, we can start the previous example at 1 instead of 0:
  enum Color1 {
    Red = 1,
    Green,
    Blue,
  }
  let c1: Color1 = Color1.Green;

  // Or, even manually set all the values in the enum:
  enum Color2 {
    Red = 1,
    Green = 2,
    Blue = 4,
  }
  let c2: Color2 = Color2.Green;

  // A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum. For example, if
  // we had the value 2 but weren’t sure what that mapped to in the Color enum above, we could look up the corresponding name:
  enum Color4 {
    Red = 1,
    Green,
    Blue,
  }
  let c4: string = Color4[2];
  console.log(c4); // Displays 'Green' as its value is 2 above
})();
