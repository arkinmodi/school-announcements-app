/* ARKIN MODI * ICS3UR-A * DECEMBER 14, 2015 */

/*************************************
************* GET POST ***************
*************************************/

var temp;                   //variable for getting announcement
var announcementString;     //variable for storing announcement
var i;                      //replaces object number


function getPost() {                                //funtion for getting and displaying post
    'use strict';
    temp = localStorage.getItem('Announcement');
    announcementString = JSON.parse(temp);
    console.log(announcementString);

    var fieldTitle = "";            //variable for title
    var fieldUserName = "";         //variable for teacher name
    var fieldDate = "";             //variable for date
    var fieldClubSelect = "";       //variable for club
    var fieldTime = "";             //variable for time
    var fieldContent = "";          //variable for content
    
    for (i = 0; i < announcementString.length; i++) {       //displays multiple announcements
            
        fieldTitle += announcementString[i].title + "<br>";             //get title
        fieldUserName += announcementString[i].userName + "<br>";       //get teacher name
        fieldDate += announcementString[i].date + "<br>";               //get date
        fieldClubSelect += announcementString[i].clubSelect + "<br>";   //get club
        fieldTime += announcementString[i].time + "<br>";               //get time
        fieldContent += announcementString[i].content + "<br>";         //get content
            
        $('#announcementTitle').html(fieldTitle);                       //display title
        $('#announcementUserName').html(fieldUserName);                 //display teacher name
        $('#announcementDate').html(fieldDate);                         //display date
        $('#tagClubSelect').html(fieldClubSelect);                      //display club
        $('#announcementTime').html(fieldTime);                         //display time
        $('#announcementContent').html(fieldContent);                   //display content
    
        }
    }
}