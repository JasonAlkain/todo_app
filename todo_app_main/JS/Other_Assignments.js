function TestStringify() {
    // create the JSON object
    var jsonOBJ = { "FirstName": "Michael", "LastName": "Westen", "Gender": "Male", "Age": 32, "City": "Miami", "State": "Florida", "Occupation": "Burned" };

    // Turn the JSON into a string
    var myJSON = JSON.stringify(jsonOBJ);
    // print the string to the console
    console.log("Stringify: " + myJSON);
    // store JSON on local computer
    localStorage.setItem("testJSON", myJSON);

    // parse JSON string
    ParseJSON(myJSON);
    // parse JSON string
    LoadJSON("testJSON");

    // Get the element with the id 'demo'
    var demo = document.getElementById("demo");
    demo.innerHTML = "";
    // Disposable variable for garbage collection outside the function
    var _ = "";
    // foreach loop that looks through the object
    // this alows for freedom when modifying code later
    Object.keys(jsonOBJ).forEach(function(k) {
        // Add it to the displosable variable
        _ += "<p style=\"border:1px solid black;\">" + k + ' - ' + jsonOBJ[k] + "<p>";
    });
    // Set the inner html of demo to the disposable variable
    demo.innerHTML = _;


}

TestStringify();

function ParseJSON(JSON_String) {
    console.log("\n~{ Started Loading JSON }~\n");
    // Is this common/proper when parsing things?
    try {
        var parsedJSON = JSON.parse(JSON_String);
        console.log("\n~{ Parsed JSON }~\n");
        // normally I would return the JSON object
        // print each key and value to the console
        Object.keys(parsedJSON).forEach(function(k) {
            console.log(k + ' - ' + parsedJSON[k]);
        });
        console.log("\n~{ Completed }~\n");
    } catch (error) {
        // Do somthing with the error...
        console.log(error);
    }

}


function LoadJSON(location) {
    console.log("\n~{ Started Loading JSON }~\n");
    // Is this common/proper when parsing things?
    try {

        var LocalJSON = localStorage.getItem(location);
        var parsedJSON = JSON.parse(LocalJSON);
        console.log("\n~{ Parsed JSON }~\n");
        // normally I would return the JSON object
        // print each key and value to the console
        Object.keys(parsedJSON).forEach(function(k) {
            console.log(k + ' - ' + parsedJSON[k]);
        });
        console.log("\n~{ Completed }~\n");
    } catch (error) {
        // Do somthing with the error...
        console.log(error);
    }

}