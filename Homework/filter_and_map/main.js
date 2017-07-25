let names = ["David Bowie", "The Artist Formerly Known as Prince", "John Lennon",
            "Jimmi Hendrix", "Robert Plant", "Paul McCartney", "Gene Simmons",
            "Stevie Nicks", "Florence Welch", "Sonny and Cher"];

// Map the names to objects
// ex: {name: "David Bowie"}
// return result to mappedNames array

const mappedNames = names.map((name) => {
  let rockstar = {name:name}
  return rockstar
  })

//console.log(mappedNames)


// Map through just the first names
// return an array of the first names of the artists

const mappedFirstNames = names.map(name => name.split(" ")[0])
//console.log(mappedFirstNames)

// Filter through array
// Only return artists names whose first names begin with J
// Store this result in a new array

let filteredNamesJ = names.filter(name => name[0] === "J")
//console.log(filteredNamesJ)

// Chaining Methods
// a.methodOne().methodTwo()

//Return an array of first names of artists whose first names begin with J

let firstNamesJ = names.filter(name => name[0] === "J").map(name => name.split(" ")[0])
//console.log(firstNamesJ)



//SHAPES

let shapes = [
  { name: "Square", color: "Green", sides: 4 },
  { name: "Triangle", color: "Green", sides: 3 },
  { name: "Rectangle", color: "Red", sides: 4},
  { name: "Pentagon", color: "Green", sides: 5 },
  {name: "Hexagon", color: "Red", sides: 6 }
]

// Call map on shapes array
// Return a new array of shape names

const shapeNames = shapes.map(shape => shape.name)
//console.log(shapeNames)

// Call filter on shapes array
// Return a new array where every shape in it has the color Green

const shapeColors = shapes.filter(shape => shape.color === "Green")
//console.log(shapeColors)

// Call filter on shapes array
// Return a new arrau where every shape has less than 4 sides

const shapeSides = shapes.filter(shape => shape.sides < 4)
console.log(shapeSides)
