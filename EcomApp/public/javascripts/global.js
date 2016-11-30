// Userlist data array for filling in info box
var productListData = [];

// DOM Ready =============================================================
$(document).ready(function () {

    // Populate the user table on initial page load
    populateTable();
    //populateuserTable();
    topproductpopulateTable();

});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON('/products/productlist', function (data) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function () {
            tableContent += '<tr>';
            tableContent += '<td>' + this.TITLE + '</td>';
            tableContent += '<td>' + this.SALE_PRICE + '</td>';
            tableContent += '<td>' + this.AVAILABILITY + '</td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#productList table tbody').html(tableContent);
    });
};


//// Fill table with data
//function populateuserTable() {
//
//    // Empty content string
//    var tableContent = '';
//
//    // jQuery AJAX call for JSON
//    $.getJSON('/users/userlist', function (data) {
//
//        // For each item in our JSON, add a table row and cells to the content string
//        $.each(data, function () {
//            tableContent += '<tr>';
//            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
//            tableContent += '<td>' + this.email + '</td>';
//            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
//            tableContent += '</tr>';
//        });
//
//        // Inject the whole content string into our existing HTML table
//        $('#userList table tbody').html(tableContent);
//    });
//};


// Fill table with data
function topproductpopulateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON('/products/topproductlist', function (data) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function () {
            tableContent += '<tr>';
            tableContent += '<td>' + this.TITLE + '</td>';
            tableContent += '<td>' + this.SALE_PRICE + '</td>';
            tableContent += '<td>' + this.AVAILABILITY + '</td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#topproductList table tbody').html(tableContent);
    });
};