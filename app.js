
function randomGen (min,max){
  return Math.floor(Math.random()* (max-min +1) + min);

}

var delMinHour = document.getElementById("delMinHour")
var delMaxHour = document.getElementById("delMaxHour")
var ordersMinHour = document.getElementById("ordersMinHour")
var ordersMaxHour = document.getElementById("ordersMaxHour")

delMinHour.textContent = randomGen(0,35);
delMaxHour.textContent = randomGen(0,12);
ordersMinHour.textContent = randomGen(0,4);
ordersMaxHour.textContent = randomGen(0,12);

var stores = [{
  location: "Beaverton",
  hours: [8,11],
  days: ["Tuesday", "Wensday","Thursday", "Friday", "Saturday", "Sunday"]
}, {
  location: "Hillsboro",
  hours: [8,11],
  days: ["Tuesday", "Wensday","Thursday", "Friday", "Saturday", "Sunday"]
}, {
  location: "Downtown",
  hours: [8,11],
  days: ["Tuesday", "Wensday","Thursday", "Friday", "Saturday", "Sunday"]
}, {
  location: "NorthEast",
  hours: [8,11],
  days: ["Tuesday", "Wensday","Thursday", "Friday", "Saturday", "Sunday"]
}, {
  location: "Clackamas",
  hours: [8,11],
  days: ["Tuesday", "Wensday","Thursday", "Friday", "Saturday", "Sunday"]
}, {
  location: "PDX-Airport",
  hours: [8,11],
  days: ["Tuesday", "Wensday","Thursday", "Friday", "Saturday", "Sunday"]
}]


for (var k =0; k < stores.length; k++){
// creates stores.length many tables


function tableCreate() {
        //body reference
        var body = document.getElementsByTagName("body")[0];

        // create elements <table>, <tbody>, <thead>
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");
        var tblHead = document.createElement("thead");

        // creates cells
        for (var j = 0; j < stores.length; j++) {

            // creates <tr> and text node
            var row = document.createElement("tr");
            var rowText = document.createTextNode(randomGen(1,4));


       for (var i = 0; i < 4; i++) {
                // create element <td> and text node
                //Make text node the contents of <td> element
                // put <td> at end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode(randomGen(50,100));

                cell.appendChild(cellText);
                  row.appendChild(cell);

            var cell2 = document.createElement("td");
            var cellText2 = document.createTextNode(randomGen(7,9));

                   cell.appendChild(cellText2);

            var cell3 = document.createElement("td");
            var cellText3 = document.createTextNode(randomGen(1,4));

                      cell.appendChild(cellText3);


            var cell4 = document.createElement("td");
            var cellText4 = document.createTextNode(randomGen(1,4));

                         cell.appendChild(cellText4);
                        // row.appendChild(cell4);
                        // row.appendChild(rowText);
            }

            //row added to end of table body
            tblBody.appendChild(row);
        }

        var header = document.createElement("thead");
        var rowHead = document.createElement("tr");
        var thHead = document.createElement("th");





        //append the <th> to the <tr>
        thHead.appendChild(rowHead);

        // append the <tr> to the <thead>
        header.appendChild(thHead);

        // append the <thead> to <tbody>
        tblBody.appendChild(header);

        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);

        // put <table> in the <body>
        body.appendChild(tbl);

}
tableCreate();
};
