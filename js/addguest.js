var queryString = decodeURIComponent(window.location.search);
            queryString = queryString.substring(1);
            total=queryString.split("&");
            club=total[0].split("=")
            var queries = total[1].split("=");
            document.getElementById("back").innerHTML = '<a href="guest.html?clubName='+club[1]+'&eventName='+queries[1]+'"><i class="arrowbig left"></i></a>'
            $(document).ready(function (){
                $("#load").click(function(e) {
                    e.preventDefault();
                    chkConstraints();
                })
                function chkConstraints() {
                    if (!checkName(document.getElementById("cgn"))){
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
                    else {     
//                        input = JSON.stringify({"event":{
//                         "clubName":club[1],
//                         "name":$('#ename').val(),
//                         "toDate":$('#todate').val(),
//                         "fromDate":$('#fdate').val(),
//                         "toTime":$('#totime').val(),
//                         "fromTime":$('#ftime').val(),
//                         "budget":$('#budget').val(),
//                         "description":$('#desc').val(),
//                         "category":$('#cat').val(),
//                         "venue":$('#ven').val(),
//                         "attendance":$('#att').val(),
//                         "expectedParticipants":$('#exp').val(),
//                         "facultyCoordinator":{
//                            "name":$('#facn').val(),
//                            "registrationNumber":$('#facr').val(),
//                            "email":$('#facem').val(),
//                            "phoneNumber":$('#facp').val(),
//                            "gender":$('#facg').val(),
//                            "eventsAttended":"ALL"
//                         },
//                         "studentCoordinator":{
//                            "name":$('#stun').val(),
//                            "registrationNumber":$('#stur').val(),
//                            "email":$('#stuem').val(),
//                            "phoneNumber":$('#stup').val(),
//                            "gender":$('#stug').val(),
//                            "eventsAttended":"ALL"
//                         },
//                         "guest":{
//                            "name":$('#cgn').val(),
//                            "email":$('#cgem').val(),
//                            "phoneNumber":$('#cgp').val(),
//                            "gender":$('#cgg').val(),
//                            "stake":$('#cgs').val(),
//                            "locationOfStay":$('#cgl').val()
//                         },
//                         "PROrequest":$('#pro').val(),
//                         "campusEngineerRequest":$('#cer').val(),
//                         "duration":$('#dur').val(),
//                         "mainSponsor":{
//                            "name":$('#msn').val(),
//                            "email":$('#msem').val(),
//                            "phoneNumber":$('#msp').val(),
//                            "gender":$('#msg').val(),
//                            "stake":$('#mss').val(),
//                            "locationOfStay":$('#msl').val()
//                         }
//                        }})
                        input = JSON.stringify({
                            "event": queries[1],
                            "guest":{
                                "name":$('#cgn').val(),
                                "email":$('#cgem').val(),
                                "phoneNumber":$('#cgp').val(),
                                "gender":$('#cgg').val(),
                                "stake":$('#cgs').val(),
                                "locationOfStay":$('#cgl').val()
                             }
                        })
                        var frm = document.getElementById("createev").reset();
                        $.ajax({
                            type: "POST",
                            url: "http://206.189.133.125/api/v1/guests/create-guest",
                            data:input
                        }).done(function (data) {
                            if(data.rs==="created"){
                                alert('You have created an event')
                            }                           
                        });
                    }
                }
            })