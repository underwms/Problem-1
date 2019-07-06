$(document).ready(function () {
    BuildGreeting(randomPeople);
})

function RandomizePeople() {
    var people = [
        { name: "Ray", color: "red", backgroundColor: "green" },
        { name: "Oscar", color: "orange", backgroundColor: "black" },
        { name: "Gwen", color: "green", backgroundColor: "red" },
        { name: "Bob", color: "blue", backgroundColor: "yellow" },
        { name: "Marie", color: "magenta", backgroundColor: "orange" }
    ];

    var randomPeople = [];
    
    while (people.length > 0) {
        var remainingLength = people.length;
        var randomIndex = Math.floor(Math.random() * remainingLength);

        var splicedPerson = people.splice(randomIndex, 1)[0]; 
        randomPeople.push(splicedPerson);
    }

    return randomPeople;
}

function BuildGreeting() {
    var tableStart = "<div><table>";
    var tableEnd = "</table></div>";
    var tableHtml = tableStart;

    var randomPeople = RandomizePeople();

    for (var i = 0; i < randomPeople.length; i++) {
        var person = randomPeople[i];

        var row =
            "<tr>" +
                "<td id=\"" + person.name + "\" name=\"" + person.name + "\" style=\"color: " + person.color + "; background-color: " + person.backgroundColor + ";\">Hello " + person.name + "</td>" +
            "</tr>";

        tableHtml = tableHtml.concat(row)
    }

    tableHtml = tableHtml.concat(tableEnd);
    $("#greetings").html(tableHtml);
}