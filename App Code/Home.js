/* ARKIN MODI * ICS3UR-A * DECEMBER 11, 2015 */

/*************************************
************* GET POST ***************
*************************************/

var temp;
var announcementString;
var i;
var temp2;
var announcementCatagory;


function getPost() {
    'use strict';
    temp = localStorage.getItem('Announcement');
    announcementString = JSON.parse(temp);
    console.log(announcementString);
    
    temp2 = localStorage.getItem('Catagory');
    announcementCatagory = JSON.parse(temp2);
    console.log(announcementCatagory);

    var fieldTitle = "";
    var fieldUserName = "";
    var fieldDate = "";
    var fieldCategoryFilter = "";
    var fieldClubSelect = "";
    var fieldGenderSelect = "";
    var fieldTime = "";
    var fieldContent = "";
    var fieldGradeSelect = "";

    
    for (i = 0; i < announcementString.length; i++) {
        
        if (announcementString[i].categoryFilter == announcementCatagory[0].categoryFilter && announcementString[i].genderSelect == announcementCatagory[0].genderSelect && announcementString[i].gradeSelect == announcementCatagory[0].gradeSelect) {
    
            fieldTitle += announcementString[i].title + "<br>";
            fieldUserName += announcementString[i].userName + "<br>";
            fieldDate += announcementString[i].date + "<br>";
            fieldCategoryFilter += announcementString[i].categoryFilter + "<br>";
            fieldClubSelect += announcementString[i].clubSelect + "<br>";
            fieldTime += announcementString[i].time + "<br>";
            fieldContent += announcementString[i].content + "<br>";
            fieldGenderSelect += announcementString[i].genderSelect + "<br>";
            fieldGradeSelect += announcementString[i].gradeSelect + "<br>";
            
            $('#announcementTitle').html(fieldTitle);
            $('#announcementUserName').html(fieldUserName);
            $('#announcementDate').html(fieldDate);
            $('#announcementCategory').html(fieldCategoryFilter);
            $('#announcementGender').html(fieldGenderSelect);
            $('#tagClubSelect').html(fieldClubSelect);
            $('#announcementTime').html(fieldTime);
            $('#announcementContent').html(fieldContent);
            $('#announcementGrade').html(fieldGradeSelect);

        }
    }
}