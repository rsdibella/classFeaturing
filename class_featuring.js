// Menu

import readline from "readline";
import { optionsMenu } from './menu_features.js';


const showMenu = () => {
  console.log("\nOpciones\n");
  for (let index = 1; index < optionsMenu.length; index++) {
    console.log(
      "\t" +
        optionsMenu[index].id +
        "\t" +
        optionsMenu[index].description
    );
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = () => {
  showMenu();
  const promise = new Promise((resolve, reject) => {
    rl.question(
      "\nElige el número de la opcion \n\t",
      (option) => {
        rl.pause();
        if (option > 0 && option < optionsMenu.length) {
          resolve(optionsMenu[option].function());
        } else {
          reject(optionsMenu[0].function() + process.exit(0));
        }
      }
    );
  });

  promise.then((value) => {
    main(), value;
  });
};

main();