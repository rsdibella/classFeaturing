
import { availableFemaleNames,
  availableMaleNames,
  availableGenders,
  students
} from "./challenge.js";

// ### 1- Mostrar en formato de tabla todos los alumnos. 
function displayNameboard(students){
  console.table(students)
};

// ### 2- Mostrar por consola la cantidad de alumnos que hay en clase.
function quantityOfstudents(students){
  let quantity = students.length;
  console.log(quantity)
};

// ### 3- Mostrar por consola todos los nombres de los alumnos.
function displayStudentsname(students){
  let nameList = [];
  for (
    let index = 0;
    index < students.length;
    index ++
  ){
    nameList.push(students[index].name);
  }
  console.log(nameList.join());
};

// ### 4- Eliminar el último alumno de la clase.
function deleteLastone(students){
  students.pop()
  console.log("\n La clase quedaria: \n" + students)
};

// ### 5- Eliminar un alumno aleatoriamente de la clase.
function deleteRandom (students) {
  let i = (Math.random() * students.length) | 0
  console.log(students)
  return students.splice(i, 1)[0]
};

// ### 6- Mostrar por consola todos los datos de los alumnos que son chicas.
 function displayFemales(students){
   let females = [];
   for (
     let index = 0; 
     index < students.length; 
     index++) 
   {if (students[index].gender === "female"){
       females.push(students[index]);
     }
   }
   console.log(females);
 };

//  ### 7- Mostrar por consola el número de chicos y chicas que hay en la clase.
function HowmanyFemaleandMale(students){
  let scoreFemale = 0;
  let scoreMale = 0; 
    for (
    let index = 0;
    index < students.length;
    index ++
  )
    if (students[index].gender == "female"){
      scoreFemale++; 
     }
    else if (students[index].gender == "male"){
       scoreMale++;
     }
  console.log("Hay " + scoreFemale + " chicas", "y " + scoreMale + " chicos en la clase.")
};

// 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas
function allFemales(students){
  let isTrue = students.every((student) => student.gender === "female");
  return console.log(isTrue);
};

// ### 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
function HowmanyInTwenties(students){
   let twenties = []; 
     for (
     let index = 0;
     index < students.length;
     index ++
   )
      if (students[index].age > 20 && students[index].age < 25)
      {
       twenties.push(students[index]); 
      }
   console.log(twenties)
 };


// ### 10- Añadir un alumno nuevo
function addStudent(){
  let studentAge = Math.round(Math.random() * (50-20) + 20)
    
  let studentGender =
    availableGenders[Math.floor(Math.random() * availableGenders.length)];
    
  let studentName = "";
  if (studentGender === "female") {
    studentName =
      availableFemaleNames[
        Math.floor(Math.random() * availableFemaleNames.length)
      ];
  } else {
    studentName =
      availableMaleNames[Math.floor(Math.random() * availableMaleNames.length)];
  }
  let newStudent = {
    age: studentAge,
    examScores: [],
    gender: studentGender,
    name: studentName,
  };
  students.push(newStudent)
  console.log(students)
};


//  ### 11- Mostrar por consola el nombre de la persona más joven de la clase.
function theYoungest(students){
  let studentAges = []
  for (
    let index = 0;
      index < students.length;
      index ++
     )
      studentAges.push(students[index].age)
    let minimo = Math.min(...studentAges)
    for (
    let index = 0;
      index < students.length;
      index ++
     )
  if (students[index].age == minimo){
  console.log(students[index].name)
  }
};

// ### 12- Mostrar por consola la edad media de todos los alumnos de la clase.
function studentAverage(students){
    let studentAges = []
  for (
    let index = 0;
      index < students.length;
      index ++
     )
      studentAges.push(students[index].age)
    let average = studentAges.reduce((a, b) => a + b, 0) /studentAges.length;
console.log("La edad media de la clase es " + average)
};

// ### 13- Mostrar por consola la edad media de las chicas de la clase.
function FemaleAverage(students){
    let studentAges = []
      for (
      let index = 0;
        index < students.length;
        index ++
           )
      {  if (students[index].gender == "female"){
              studentAges.push(students[index].age)
            }
          }
      let average = studentAges.reduce((a, b) => a + b, 0) /studentAges.length;
        console.log("La edad media de las chicas de la clase es " + average)
};

// ### 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
function AddScore(students){
  let studentScore = []
 for (
  let index = 0;
    index < students.length;
    index ++
   ){
  studentScore = students[index].examScores
  studentScore.push(Math.round(Math.random()*10))
    }
 console.log (students)
};

// ### 15- Ordenar el array de alumnos alfabéticamente según su nombre.
function alphabethOrder(students){
  students.sort(function (a,b){
    if (a.name > b.name){
      return 1;
    }
    if (a.name < b.name){
      return -1;
      }
      return 0;
    });
    console.log(students)
};

export{
    displayNameboard,
    quantityOfstudents,
    displayStudentsname,
    deleteLastone,
    deleteRandom,
    displayFemales,
    HowmanyFemaleandMale,
    allFemales,
    HowmanyInTwenties,
    theYoungest,
    studentAverage,
    FemaleAverage,
    alphabethOrder,
    AddScore,
    addStudent
};
