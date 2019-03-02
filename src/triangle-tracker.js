export function Results() {

    var blanks = ["food", "song"];
    var formDetails = [];

    blanks.forEach((blank) => {
        var userInput = document.getElementById(blank).value;
        // console.log(userInput.toUpperCase());
        formDetails.push(userInput);
    });

    return formDetails;
}