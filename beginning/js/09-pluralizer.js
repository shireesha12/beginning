/*eslint-env browser*/
var noun = window.prompt ("enter the animal name");
var number = window.prompt("enther the no of animals");

switch(noun){
    case "cat":
        "cat";
        break;
    case "dog":
         "dog"
        break;
}
if (number > 1) {
    window.document.write(n + " " + number + "s");
} else {
     window.document.write(number + " " + noun);
}
