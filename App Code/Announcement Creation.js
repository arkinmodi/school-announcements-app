/* ARKIN MODI * ICS3UR-A * December 09, 2015 */

/*************************************
************** SUBMIT ****************
*************************************/
var announcement = [];
var index = 0;
function getData() {                    //funtion to store in local storage
    'use strict';
    announcement[index] = {
        userName: $('#userName').val(),                 //store teacher name
        title: $('#title').val(),                       //store title
        categoryFilter: $('#categoryFilter').val(),     //store category
        clubSelect: $('#clubSelect').val(),             //store club
        genderSelect: $('#genderSelect').val(),         //store gender
        gradeSelect: $('#gradeSelect').val(),           //store grade
        time: $('#time').val(),                         //store time
        date: $('#date').val(),                         //store date
        content: $('#content').val()                    //store content
    };
    index++;
    var annoucementcreationString = JSON.stringify(announcement);           //stringify the announcement
    console.log(annoucementcreationString);
    
    localStorage.setItem('Announcement', annoucementcreationString);        //send to local storage
    
    window.alert("Announcement Created");                                   //alert user that announcement had been created
}