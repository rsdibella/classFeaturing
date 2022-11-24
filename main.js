const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 22,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  },
  {
    age: 30,
    examScores: [],
    gender: 'female',
    name: 'ma. victoria'
  },
  {
    age: 29,
    examScores: [],
    gender: 'male',
    name: 'pau'            
  }]
  
  function displayNameboard(students){
    console.table(students)
  }
  
  function quantityOfstudents(students){
    let quantity = students.length;
    console.log(quantity)
  }
  
  function displayStudentsname(students) {
    let nameList = [];
    for (
      let index = 0;
      index < students.length;
      index ++
    )
      nameList.push(students[index].name);
    console.log(nameList)
  }
  
  function deleteLastone(students){
    newList = students.pop()
    console.log(students)
  }
  
  function deleteRandom(students) {
    const deleteRandom = (students) => {
    let student = (Math.random() * students.length) | 0;
    return students.splice(student, 1);
    };
  }
  
   function displayFemales(students){
     let females = [];
     for (
       let index = 0; 
       index < students.length; 
       index++) 
     { if (students[index].gender === "female") {
         females.push(students[index]);
       }
     }
     console.log(females);
   };
  
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
  }
  
  function allFemales(students){
    let isTrue = students.every((student) => student.gender === "female");
    return console.log(isTrue);
  };
  
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
   }
  
//   function theYoungest(students){
//        for (
//        let index = 0;
//        index < students.length;
//        index ++
//      )
//       if (students[index].age)
//   }
  
  