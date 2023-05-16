/* ARKIN MODI * ICS3UR-A * JANUARY 13, 2016 */

/*************************************
************* GET POST ***************
*************************************/

var temp;                   //variable for getting announcement
var announcementString;     //variable for storing announcement
var i;                      //replaces object number
var temp2;                  //variable for getting filter
var announcementCatagory;   //variable fro storing filter


function getPost() {        //funtion for getting and displaying post
    'use strict';
    temp = localStorage.getItem('Announcement');    
    announcementString = JSON.parse(temp);          
    console.log(announcementString);                
    
    temp2 = localStorage.getItem('Catagory');
    announcementCatagory = JSON.parse(temp2);
    console.log(announcementCatagory);

    var fieldTitle = "";                    //variable for title
    var fieldUserName = "";                 //variable for teacher name
    var fieldDate = "";                     //variable for date
    var fieldCategoryFilter = "";           //variable for category
    var fieldClubSelect = "";               //variable for club
    var fieldGenderSelect = "";             //variable for gender
    var fieldTime = "";                     //variable for time
    var fieldContent = "";                  //variable for content
    var fieldGradeSelect = "";              //variable for grade

    
    for (i = 0; i < announcementString.length; i++) {   //displays multiple announcements
        
        if (announcementString[i].categoryFilter[0] == announcementCatagory[0].categoryFilter[0] ||    //if statement for filtering announcements
            announcementString[i].categoryFilter[0] == announcementCatagory[0].categoryFilter[1] || 
            announcementString[i].categoryFilter[0] == announcementCatagory[0].categoryFilter[2] || 
            announcementString[i].categoryFilter[0] == announcementCatagory[0].categoryFilter[3] || 
            announcementString[i].categoryFilter[0] == announcementCatagory[0].categoryFilter[4] ||
            announcementString[i].categoryFilter[0] == announcementCatagory[0].categoryFilter[5] ||
            announcementString[i].genderSelect == announcementCatagory[0].genderSelect && announcementString[i].gradeSelect == announcementCatagory[0].gradeSelect || announcementString[i].genderSelect == "Both" && announcementString[i].gradeSelect == announcementCatagory[0].gradeSelect || announcementString[i].categoryFilter == "All" || announcementString.gradeSelect == "All" && announcementString[i].genderSelect == announcementCatagory[0].genderSelect) {
    
            fieldTitle += announcementString[i].title + "<br>";                     //get title
            fieldUserName += announcementString[i].userName + "<br>";               //get teacher name
            fieldDate += announcementString[i].date + "<br>";                       //get date
            fieldCategoryFilter += announcementString[i].categoryFilter + "<br>";   //get category
            fieldClubSelect += announcementString[i].clubSelect + "<br>";           //get club
            fieldTime += announcementString[i].time + "<br>";                       //get time
            fieldContent += announcementString[i].content + "<br>";                 //get content
            fieldGenderSelect += announcementString[i].genderSelect + "<br>";       //get gender
            fieldGradeSelect += announcementString[i].gradeSelect + "<br>";         //get grade
            
            $('#announcementTitle').html(fieldTitle);                               //display title
            $('#announcementUserName').html(fieldUserName);                         //display teacher name
            $('#announcementDate').html(fieldDate);                                 //display date
            $('#announcementCategory').html(fieldCategoryFilter);                   //display category
            $('#announcementGender').html(fieldGenderSelect);                       //display gender
            $('#tagClubSelect').html(fieldClubSelect);                              //display club
            $('#announcementTime').html(fieldTime);                                 //display time
            $('#announcementContent').html(fieldContent);                           //display content
            $('#announcementGrade').html(fieldGradeSelect);                         //display grade

        }
    }
}