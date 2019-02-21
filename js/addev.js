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
                        document.getElementById("message-f1").innerHTML = 'Enter valid Event Name'
                        functionAlert();
                    }
                    else if (document.getElementById("todate").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid End Date'
                        functionAlert();
                    }
                    else if (document.getElementById("fdate").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Start Date'
                        functionAlert();
                    }
                    else if (document.getElementById("totime").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid End Time'
                        functionAlert();
                    }
                    else if (document.getElementById("ftime").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Start Time'
                        functionAlert();
                    }
                    else if (!checkBudget(document.getElementById("budget"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Budget'
                        functionAlert();
                    }
                    else if (document.getElementById("desc").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Description'
                        functionAlert();
                    }
                    else if (document.getElementById("cat").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Category'
                        functionAlert();
                    }
                    else if (document.getElementById("ven").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Venue'
                        functionAlert();
                    }
                    else if (!checkBudget(document.getElementById("att"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Number of Attendees'
                        functionAlert();
                    }
                    else if (!checkBudget(document.getElementById("exp"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Number of Expected Participants'
                        functionAlert();
                    }
                    else if (!checkName(document.getElementById("facn"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Faculty Name'
                        functionAlert();
                    }
                    else if (!checkBudget(document.getElementById("facr"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Faculty Number'
                        functionAlert();
                    }
                    else if (!checkEmail(document.getElementById("facem"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Faculty Email Address'
                        functionAlert();
                    }
                    else if (!checkPhone(document.getElementById("facp"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Faculty Phone Number'
                        functionAlert();
                    }
                    else if (!checkGender(document.getElementById("facg"))){
                        document.getElementById("message-f1").innerHTML = 'Enter M/F for Faculty Gender'
                        functionAlert();
                    }
                    else if (!checkName(document.getElementById("stun"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Student Coordinator Name'
                        functionAlert();
                    }
                    else if (document.getElementById("stur").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Student Coordinator Registration Number'
                        functionAlert();
                    }
                    else if (!checkEmail(document.getElementById("stuem"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Student Coordinator Email Address'
                        functionAlert();
                    }
                    else if (!checkPhone(document.getElementById("stup"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Student Coordinator Phone Number'
                        functionAlert();
                    }
                    else if (!checkGender(document.getElementById("stug"))){
                        document.getElementById("message-f1").innerHTML = 'Enter M/F for Student Coordinator Gender'
                        functionAlert();
                    }
                    else if (!checkName(document.getElementById("cgn"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Chief Guest Name'
                        functionAlert();
                    }
                    else if (!checkEmail(document.getElementById("cgem"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Chief Guest Email Address'
                        functionAlert();
                    }
                    else if (!checkPhone(document.getElementById("cgp"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Chief Guest Phone Number'
                        functionAlert();
                    }
                    else if (!checkGender(document.getElementById("cgg"))){
                        document.getElementById("message-f1").innerHTML = 'Enter M/F for Chief Guest Gender'
                        functionAlert();
                    }
                    else if (document.getElementById("cgs").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Stake of Chief Guest'
                        functionAlert();
                    }
                    else if (document.getElementById("cgl").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Location of Stay for Chief Guest'
                        functionAlert();
                    }
                    else if (document.getElementById("pro").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid PRO Request'
                        functionAlert();
                    }
                    else if (document.getElementById("cer").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Campus Engineer Request'
                        functionAlert();
                    }
                    else if (document.getElementById("dur").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Event Duration'
                        functionAlert();
                    }
                    else if (!checkName(document.getElementById("msn"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Main Sponsor Name'
                        functionAlert();
                    }
                    else if (!checkEmail(document.getElementById("msem"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Main Sponsor Email Address'
                        functionAlert();
                    }
                    else if (!checkPhone(document.getElementById("msp"))){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Main Sponsor Phone Number'
                        functionAlert();
                    }
                    else if (!checkGender(document.getElementById("msg"))){
                        document.getElementById("message-f1").innerHTML = 'Enter M/F for Main Sponsor Gender'
                        functionAlert();
                    }
                    else if (document.getElementById("mss").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Stake of Main Sponsor'
                        functionAlert();
                    }
                    else if (document.getElementById("msl").value.length == 0){
                        document.getElementById("message-f1").innerHTML = 'Enter valid Location of Stay for Main Sponsor'
                        functionAlert();
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
                        var frm = document.getElementById("createev").reset();
                        $.ajax({
                            type: "POST",
                            url: "http://206.189.133.125/api/v1/event/create-event",
                            data:input
                        }).done(function (data) {
                            if(data.rs==="created"){
                                swal("Success!", "You have created a new event!", "success");
                            }                           
                        });
                    }
                }
            })