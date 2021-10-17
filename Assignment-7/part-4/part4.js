/*eslint-env browser*/

function display() {
    "use strict";
    window.document.write("Welcome to Product Inventory Management System!");
    window.document.write("<br>");
    window.document.write("COMMAND MENU");
    window.document.write("<br>");
    window.document.write("show - Show all commands");
    window.document.write("<br>");
    window.document.write("view - View inventory");
    window.document.write("<br>");
    window.document.write("update - Update an existing products inventory");
    window.document.write("<br>");
    window.document.write("exit - Exit system");
    window.document.write("<br>");

}
function view(inventory) {
    "use strict";
    inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ")" + " $" + product[3]);
    });
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var foundItem = false;
    var quantityUpdated = false;
    var skuNumber = parseInt(window.prompt("Enter the sku number of the product"), 10);
    inventory.forEach(function (product) {
        if (product[0] === skuNumber) {
            foundItem = true;
            while(!quantityUpdated) {
                var quantity = parseInt(window.prompt("Enter the new quantity"), 10);
                if (!isNaN(quantity)) {
                    product[2] = quantity;
                    window.console.log("Quantity updated successfully")
                    quantityUpdated = true;
                } else {
                    window.console.log("Please enter a valid number as quantity");
                    window.console.log("");
                }
            }
        }  
    });
    if (!foundItem){
        window.console.log("Product with sku number:" + skuNumber + " not found"); 
    } 
}

function main() {
    display();
    "use strict";
    var inventory = [[1, "Shirt", 15, 9.99],[2, "Jeans", 29, 25.99],[3, "Socks", 16, 5.99],[4, "Hat", 9, 13.99],[5, "Jacket", 25, 34.99]];
    
    var isQuit = false;

    while(!isQuit) {
        var command = window.prompt("Enter command");
            switch(command) {
                case "show":
                    display();
                    break;
                case "view":
                    view(inventory);
                    break;
                case "update":
                    update(inventory);
                    break;
                case "exit":
                    isQuit = true;
                    break;
                default:
                    window.alert("Please enter a valid command");
                    break;
            }
    }
    window.console.log("Program Terminated")
}

main();