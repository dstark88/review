// ======================
// VARIABLES
// ======================

// 1st: pull initial budgetItems/lastID from localStorage to set initial variables
let budgetItems = JSON.parse(localStorage.getItem("budgetItems")) || [];
let lastID = localStorage.getItem("lastID") || 0; // a number or 0

// ======================
// FUNCTIONS
// ======================


// 4th: function to update localStorage with latest budgetItems and latest lastID
 //avoid arrow functions: obj methods, callbacks inside JQ click events, constructors
// var sayHi = function(name, day) {
//     return `Hi ${name}, happy ${day}`;
// }
// var sayHi = (name, day) => `Hi ${name}, happy ${day}`;
// var loopThroughArr = (arr) => {
//     for ()
// }
const updateStorage = () =>  {
    localStorage.setItem("budgetItems", JSON.stringify(budgetItems));
    localStorage.setItem("lastID", lastID);
}


// 5th: function to render budgetItems on table; each item should be rendered in this format:
// <tr data-id="2"><td>Oct 14, 2019 5:08 PM</td><td>November Rent</td><td>Rent/Mortgage</td><td>1300</td><td>Fill out lease renewal form!</td><td class="delete"><span>x</span></td></tr>
// also, update total amount spent on page (based on selected category):
const renderItems = (items) => {
    if (!items) items = budgetItems;
    // create a variable pointer to the tbody
    const tbody = $("#budgetItems tbody");
    // clear out previous table rows
    tbody.empty();
    // loo through items array, make one row per item
    items.forEach(item => {
        // console.lot("type of amount: " + typeof item.amount);
        const row = `<tr data-id=${item.id}><td>${item.date}</td><td>${item.name}
        </td><td>${item.category}</td><td>$${parseFloat(item.amount).toFixed(2)}</td><td>${item.notes}
        </td><td class="delete"><span>x</span></td></tr>`
        tbody.append(row);
    });
    // .reduce take an array and reduces it down to a single val based on the logic you speify
    const total = items.reduce((accum, item) => accum + parseFloat(item.amount), 0);
    console.log("total: ", total);
    $("#total").text(`$${total.toFixed(2)}`)
    // etc
}

// renderItems(myItems);
// renderItems();


// ======================
// MAIN PROCESS
// ======================

renderItems(); //put any existing items on the page in intital render

// 2nd: wire up click event on 'Enter New Budget Item' button to toggle display of form
$("#toggleFormButton, #hideForm").on("click", function() {
    const button = $("#toggleFormButton"); //pointer to button
    const form = $("#addItemForm"); //pointer to form

    form.toggle("slow", function() {
        if ($(this).is(":visible")) {
            //if it IS visible
            button.text("Hide Form");
        } else {
            // if its NOT visible
            button.text("Add New Budget Item");
        }
    });
})

// 3rd: wire up click event on 'Add Budget Item' button, gather user input and add item to budgetItems array
// (each item's object should include: id / date / name / category / amount / notes)... then clear the form
// fields and trigger localStorage update/budgetItems rerender functions, once created
$("#addItem").on("click", function(event) {
    event.preventDefault();

    const newItem = {
        id: ++lastID, //increments lastID ans stores it in the obj in the same step!
        date: moment().format("lll"), // current date/timestamp
        name: $("#name").val().trim(),
        category: $("#category").val().trim(),
        amount: $("#amount").val().trim() || "5",
        notes: $("#notes").val().trim(),
    }
    console.log(newItem);

    $("input, select").val("");
    budgetItems.push(newItem);
    // update localStorage
    updateStorage();
    // rerender HTML
    renderItems();
});

// 6th: wire up change event on the category select menu, show filtered budgetItems based on selection
$("#categoryFilter").on("change", function() {
    const category = $(this).val();
    // alert(category);
    if (category) {
        const filteredItems = budgetItems.filter(item => item.category === category);
        renderItems(filteredItems);
    } else {
        renderItems();
    }

});

// 7th: wire up click event on the delete button of a given row; on click delete that budgetItem
$("#budgetItems").on("click", ".delete", function() {
    const id = parseInt($(this).parents("tr").data("id")); // is a string
    // alert("id: ", id);

    const remainingItems = budgetItems.filter(item => item.id !== id);
    budgetItems = remainingItems;
    updateStorage();
    renderItems();
    $("#categoryFilter").val("");
});





