/* ARKIN MODI * ICS3UR-A * DECEMBER 2, 2015 */

/*************************************
************** LOGIN *****************
*************************************/
var user;       //variable for username
var pass;       //variable for password
var coruser;    //variable for corrent username
var corpass;    //variable for corrent password

/************ STUDENT ***************/
function getUser() {                    //student login
    'use strict';
    user = document.getElementById('userName');     //get username
    pass = document.getElementById('passWord');     //get password

    coruser = "student";                            //correct username
    corpass = "password";                           //correct password

    if (user.value === coruser) {       //if statement to check username and password
        if (pass.value === corpass) {
            window.alert("Congratulations, you have successfully login in as user " + user.value);      //alert for successful login
            window.open("Home%20(Table)%20-%20Student.html","_self")                                    //open home page
        } else {
            window.alert("Incorrect Student Number or Password!");                                      //alert for failed login
        }
    } else {
        window.alert("Incorrect Student Number or Password!");                                          //alert for failed login
    }
}

/*function getUser() {
    'use strict';
    var userName = document.getElementById("userName").value;
    $('#studentOutput').html('Hello ' + userName);
}*/

/************ TEACHER ***************/
function getTeacher() {         //teacher login
    'use strict';
    user = document.getElementById('teacherName');          //get username
    pass = document.getElementById('teacherPassWord');      //get password

    coruser = "teacher";                                    //correct username
    corpass = "password";                                   //correct password

    if (user.value === coruser) {                           //if statement to check username and password
        if (pass.value === corpass) {
            window.alert("Congratulations, you have successfully login in as user " + user.value);      //alert for successful login
            window.open("Home%20(Table)%20-%20Teacher.html","_self");                                   //open home page
        } else {
            window.alert("Incorrect Student Number or Password!");                                      //alert for failed login
        }
    } else {
        window.alert("Incorrect Student Number or Password!");                                          //alert for failed login
    }
}
