/* ARKIN MODI * ICS3UR-A * DECEMBER 09, 2015 */

/*************************************
********** LOCAL STORAGE *************
*************************************/
var catagory = [];
var index = 0;
function getData() {            //funtion to set filter
    'use strict';
    catagory[index] = {
        categoryFilter: $('#categoryFilter').val(), //store category
        genderSelect: $('#genderSelect').val(),     //store gender
        gradeSelect: $('#gradeSelect').val(),       //store grade
    };
    index++;
    var annoucementCategoryFilter = JSON.stringify(catagory);       //stringify filter
    console.log(annoucementCategoryFilter);
    
    localStorage.setItem('Catagory', annoucementCategoryFilter);    //send to local storage
}