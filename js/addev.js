var queryString = decodeURIComponent(window.location.search);
            queryString = queryString.substring(1);
            club=queryString.split("=")
            document.getElementById("back").innerHTML = '<a href="adminhome.html?clubName='+club[1]+'"><i class="arrowbig left"></i></a>'
            $(document).ready(function (){
                $("#load").click(function(e) {
                    e.preventDefault();
                    chkConstraints();
                })
                function chkConstraints() {
                    var name = document.getElementById("name");
                    var regno = document.getElementById("regno");
                    var email = document.getElementById("email");
                    var phone = document.getElementById("phone");
                    var gender = document.getElementById("gender");
                    if (!checkName(document.getElementById("ename"))) {
                        alert("Enter valid event name");
                    }
                    else if (document.getElementById("todate").value.length == 0){
                        alert("Enter valid date");
                    }
                    else if (document.getElementById("fdate").value.length == 0){
                        alert("Enter valid date");
                    }
                    else if (document.getElementById("totime").value.length == 0){
                        alert("Enter valid time");
                    }
                    else if (document.getElementById("ftime").value.length == 0){
                        alert("Enter valid time");
                    }
                    else if (!checkBudget(document.getElementById("budget"))){
                        alert("Enter valid budget");
                    }
                    else if (document.getElementById("desc").value.length == 0){
                        alert("Enter valid description");
                    }
                    else if (document.getElementById("cat").value.length == 0){
                        alert("Enter valid category");
                    }
                    else if (document.getElementById("ven").value.length == 0){
                        alert("Enter valid venue");
                    }
                    else if (!checkBudget(document.getElementById("att"))){
                        alert("Enter valid number of attendees");
                    }
                    else if (!checkBudget(document.getElementById("exp"))){
                        alert("Enter valid number of expected participants");
                    }
                    else if (!checkName(document.getElementById("facn"))){
                        alert("Enter valid name of Faculty");
                    }
                    else if (!checkBudget(document.getElementById("facr"))){
                        alert("Enter valid Faculty number");
                    }
                    else if (!checkEmail(document.getElementById("facem"))){
                        alert("Enter valid Faculty email address");
                    }
                    else if (!checkPhone(document.getElementById("facp"))){
                        alert("Enter valid Faculty phone number");
                    }
                    else if (!checkGender(document.getElementById("facg"))){
                        alert("Enter M/F for Faculty gender");
                    }
                    else if (!checkName(document.getElementById("stun"))){
                        alert("Enter valid name of Student Coordinator");
                    }
                    else if (!checkBudget(document.getElementById("stur"))){
                        alert("Enter valid Student Coordinator number");
                    }
                    else if (!checkEmail(document.getElementById("stuem"))){
                        alert("Enter valid Student Coordinator email address");
                    }
                    else if (!checkPhone(document.getElementById("stup"))){
                        alert("Enter valid Student Coordinator phone number");
                    }
                    else if (!checkGender(document.getElementById("stug"))){
                        alert("Enter M/F for Student Coordinator gender");
                    }
                    else if (!checkName(document.getElementById("cgn"))){
                        alert("Enter valid name of Chief Guest");
                    }
                    else if (!checkEmail(document.getElementById("cgem"))){
                        alert("Enter valid Chief Guest email address");
                    }
                    else if (!checkPhone(document.getElementById("cgp"))){
                        alert("Enter valid Chief Guest phone number");
                    }
                    else if (!checkGender(document.getElementById("cgg"))){
                        alert("Enter M/F for Chief Guest gender");
                    }
                    else if (document.getElementById("cgs").value.length == 0){
                        alert("Enter valid stake of Chief Guest");
                    }
                    else if (document.getElementById("cgl").value.length == 0){
                        alert("Enter valid location of stay for Chief Guest");
                    }
                    else if (document.getElementById("pro").value.length == 0){
                        alert("Enter valid PRO Request");
                    }
                    else if (document.getElementById("cer").value.length == 0){
                        alert("Enter valid Campus Engineer Request");
                    }
                    else if (document.getElementById("dur").value.length == 0){
                        alert("Enter valid duration");
                    }
                    else if (!checkName(document.getElementById("msn"))){
                        alert("Enter valid name of Main Sponsor");
                    }
                    else if (!checkEmail(document.getElementById("msem"))){
                        alert("Enter valid Main Sponsor email address");
                    }
                    else if (!checkPhone(document.getElementById("msp"))){
                        alert("Enter valid Main Sponsor phone number");
                    }
                    else if (!checkGender(document.getElementById("msg"))){
                        alert("Enter M/F for Main Sponsor gender");
                    }
                    else if (document.getElementById("mss").value.length == 0){
                        alert("Enter valid stake of Main Sponsor");
                    }
                    else if (document.getElementById("msl").value.length == 0){
                        alert("Enter valid location of stay for Main Sponsor");
                    }
                    else {     
                        input = JSON.stringify({"event":{
                         "clubName":club[1],
                         "name":$('#ename').val(),
                         "toDate":$('#todate').val(),
                         "fromDate":$('#fdate').val(),
                         "toTime":$('#totime').val(),
                         "fromTime":$('#ftime').val(),
                         "budget":$('#budget').val(),
                         "description":$('#desc').val(),
                         "category":$('#cat').val(),
                         "venue":$('#ven').val(),
                         "attendance":$('#att').val(),
                         "expectedParticipants":$('#exp').val(),
                         "facultyCoordinator":{
                            "name":$('#facn').val(),
                            "registrationNumber":$('#facr').val(),
                            "email":$('#facem').val(),
                            "phoneNumber":$('#facp').val(),
                            "gender":$('#facg').val(),
                            "eventsAttended":"ALL"
                         },
                         "studentCoordinator":{
                            "name":$('#stun').val(),
                            "registrationNumber":$('#stur').val(),
                            "email":$('#stuem').val(),
                            "phoneNumber":$('#stup').val(),
                            "gender":$('#stug').val(),
                            "eventsAttended":"ALL"
                         },
                         "guest":{
                            "name":$('#cgn').val(),
                            "email":$('#cgem').val(),
                            "phoneNumber":$('#cgp').val(),
                            "gender":$('#cgg').val(),
                            "stake":$('#cgs').val(),
                            "locationOfStay":$('#cgl').val()
                         },
                         "PROrequest":$('#pro').val(),
                         "campusEngineerRequest":$('#cer').val(),
                         "duration":$('#dur').val(),
                         "mainSponsor":{
                            "name":$('#msn').val(),
                            "email":$('#msem').val(),
                            "phoneNumber":$('#msp').val(),
                            "gender":$('#msg').val(),
                            "stake":$('#mss').val(),
                            "locationOfStay":$('#msl').val()
                         }
                        }})
                        var frm = document.getElementById("create").reset();
                        $.ajax({
                            type: "POST",
                            url: "http://206.189.133.125/api/v1/event/create-event",
                            data:input
                        }).done(function (data) {
                            if(data.rs==="created"){
                                swal("Yaay!", "You have created a new event!", "success");
                            }                           
                        });
                    }
                }
            })