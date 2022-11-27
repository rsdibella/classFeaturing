import{
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
  }from './main.js'

  import { students } from "./challenge.js";

//Menu de opciones
  
  const optionsMenu = [
    {
      id: 0,
      description: "exit",
      function: () => console.log("\nHa salido del programa."),
    },
    {
      id: 1,
      description: "Mostrar en formato de tabla los estudiantes.",
      function: () => displayNameboard(students),
    },
    {
      id: 2,
      description: "Mostrar por consola la cantidad de estudiantes que hay en la clase.",
      function: () =>
        console.log(quantityOfstudents(students)),
    },
    {
      id: 3,
      description: "Mostrar por consola todos los nombres de los estudiantes.",
      function: () => {
        console.log("\n" + "Nombres: ");
        displayStudentsname(students);
      },
    },
    {
      id: 4,
      description: "Eliminar el último estudiante",
      function: () => deleteLastone(students),
    },
    {
      id: 5,
      description: "Eliminar un estudiante aleatoriamente de la clase.",
      function: () => deleteRandom(students),
    },
    {
      id: 6,
      description: "Mostrar por consola todos los datos de las estudiantes chicas",
      function: () => {
        console.log("\n" + "Datos alumnas:");
        console.log(displayFemales(students));
      },
    },
    {
      id: 7,
      description:
        "Mostrar por consola el número de chicos y chicas",
      function: () =>
        console.log(HowmanyFemaleandMale(students))
    },
    {
      id: 8,
      description:
        "Mostrar true o false por consola si todos los estudiantes son chicas",
      function: () => {
        console.log("Son todas chicas?");
        allFemales(students);
      },
    },
    {
      id: 9,
      description:
        "Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.",
      function: () => {
        console.log("\n" + "Alumnos de 20-25 años:");
        HowmanyInTwenties(students);
      },
    },
    {
      id: 10,
      description: "Añadir estudiante aleatorio",
      function: () => addStudent(students),
    },
    {
      id: 11,
      description:
        "Mostrar por consola el nombre de la persona más joven de la clase.",
      function: () => {
        console.log("\n" + "Estudiante más joven:");
        theYoungest(students);
      },
    },
    {
      id: 12,
      description:
        "Mostrar por consola la edad media de la clase.",
      function: () => {
        console.log("\n" + "Edad media de los estudiantes:");
        studentAverage(students);
      },
    },
    {
      id: 13,
      description: "Mostrar por consola la edad media de las chicas de la clase.",
      function: () => {
        console.log("\n" + "Edad media de las chicas de la clase:");
        FemaleAverage(students);
      },
    },
    {
      id: 14,
      description: "Añadir nueva nota (aleatoria) a cada alumno de la clase",
      function: () => AddScore(students),
    },
    {
      id: 15,
      description: "Ordenar la clase alfabéticamente según su nombre.",
      function: () =>
      alphabethOrder(students)
    },  
];

  export { optionsMenu
};