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
                        swal("Oops!", "Enter valid Event Name", "error");
                    }
                    else if (document.getElementById("todate").value.length == 0){
                        swal("Oops!", "Enter valid End Date", "error");
                    }
                    else if (document.getElementById("fdate").value.length == 0){
                        swal("Oops!", "Enter valid Start Date", "error");
                    }
                    else if (document.getElementById("totime").value.length == 0){
                        swal("Oops!", "Enter valid End Time", "error");
                    }
                    else if (document.getElementById("ftime").value.length == 0){
                        swal("Oops!", "Enter valid Start Time", "error");
                    }
                    else if (!checkBudget(document.getElementById("budget"))){
                        swal("Oops!", "Enter valid Budget", "error");
                    }
                    else if (document.getElementById("desc").value.length == 0){
                        swal("Oops!", "Enter valid Description", "error");
                    }
                    else if (document.getElementById("cat").value.length == 0){
                        swal("Oops!", "Enter valid Category", "error");
                    }
                    else if (document.getElementById("ven").value.length == 0){
                        swal("Oops!", "Enter valid Venue", "error");
                    }
                    else if (!checkBudget(document.getElementById("att"))){
                        swal("Oops!", "Enter valid Number of Attendees", "error");
                    }
                    else if (!checkBudget(document.getElementById("exp"))){
                        swal("Oops!", "Enter valid Number of Expected Participants", "error");
                    }
                    else if (!checkName(document.getElementById("facn"))){
                        swal("Oops!", "Enter valid Faculty Name", "error");
                    }
                    else if (!checkBudget(document.getElementById("facr"))){
                        swal("Oops!", "Enter valid Faculty Number", "error");
                    }
                    else if (!checkEmail(document.getElementById("facem"))){
                        swal("Oops!", "Enter valid Faculty Email Address", "error");
                    }
                    else if (!checkPhone(document.getElementById("facp"))){
                        swal("Oops!", "Enter valid Faculty Phone Number", "error");
                    }
                    else if (!checkGender(document.getElementById("facg"))){
                        swal("Oops!", "Enter M/F for Faculty Gender", "error");
                    }
                    else if (!checkName(document.getElementById("stun"))){
                        swal("Oops!", "Enter valid Student Coordinator Name", "error");
                    }
                    else if (!checkBudget(document.getElementById("stur"))){
                        swal("Oops!", "Enter valid Student Coordinator Registration Number", "error");
                    }
                    else if (!checkEmail(document.getElementById("stuem"))){
                        swal("Oops!", "Enter valid Student Coordinator Email Address", "error");
                    }
                    else if (!checkPhone(document.getElementById("stup"))){
                        swal("Oops!", "Enter valid Student Coordinator Phone Number", "error");
                    }
                    else if (!checkGender(document.getElementById("stug"))){
                        swal("Oops!", "Enter M/F for Student Coordinator Gender", "error");
                    }
                    else if (!checkName(document.getElementById("cgn"))){
                        swal("Oops!", "Enter valid Chief Guest Name", "error");
                    }
                    else if (!checkEmail(document.getElementById("cgem"))){
                        swal("Oops!", "Enter valid Chief Guest Email Address", "error");
                    }
                    else if (!checkPhone(document.getElementById("cgp"))){
                        swal("Oops!", "Enter valid Chief Guest Phone Number", "error");
                    }
                    else if (!checkGender(document.getElementById("cgg"))){
                        swal("Oops!", "Enter M/F for Chief Guest Gender", "error");
                    }
                    else if (document.getElementById("cgs").value.length == 0){
                        swal("Oops!", "Enter valid Stake of Chief Guest", "error");
                    }
                    else if (document.getElementById("cgl").value.length == 0){
                        swal("Oops!", "Enter valid Location of Stay for Chief Guest", "error");
                    }
                    else if (document.getElementById("pro").value.length == 0){
                        swal("Oops!", "Enter valid PRO Request", "error");
                    }
                    else if (document.getElementById("cer").value.length == 0){
                        swal("Oops!", "Enter valid Campus Engineer Request", "error");
                    }
                    else if (document.getElementById("dur").value.length == 0){
                        swal("Oops!", "Enter valid Event Duration", "error");
                    }
                    else if (!checkName(document.getElementById("msn"))){
                        swal("Oops!", "Enter valid Main Sponsor Name", "error");
                    }
                    else if (!checkEmail(document.getElementById("msem"))){
                        swal("Oops!", "Enter valid Main Sponsor Email Address", "error");
                    }
                    else if (!checkPhone(document.getElementById("msp"))){
                        swal("Oops!", "Enter valid Main Sponsor Phone Number", "error");
                    }
                    else if (!checkGender(document.getElementById("msg"))){
                        swal("Oops!", "Enter M/F for Main Sponsor Gender", "error");
                    }
                    else if (document.getElementById("mss").value.length == 0){
                        swal("Oops!", "Enter valid Stake of Main Sponsor", "error");
                    }
                    else if (document.getElementById("msl").value.length == 0){
                        swal("Oops!", "Enter valid Location of Stay for Main Sponsor", "error");
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