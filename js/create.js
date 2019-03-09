var queryString = decodeURIComponent(window.location.search);
            queryString = queryString.substring(1);
            total=queryString.split("&");
            club=total[0].split("=")
            var queries = total[1].split("=");
            document.getElementById("back").innerHTML = '<a href="partman.html?clubName='+club[1]+'&eventName='+queries[1]+'"><i class="arrowbig left"></i></a>'
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
                    if (!checkName(name)) {
                        document.getElementById('message-f1').innerHTML = 'Enter valid name.'
                        functionAlert();
                    }
                    else if (regno.value.length == 0){
                        document.getElementById('message-f1').innerHTML = 'Enter valid registration number.'
                        functionAlert();
                    }
                    else if (!checkEmail(email)) {
                        document.getElementById('message-f1').innerHTML = 'Enter valid email id.'
                        functionAlert();
                    }
                    else if (!checkPhone(phone)) {
                        document.getElementById('message-f1').innerHTML = 'Enter valid phone number.'
                        functionAlert();
                    }
                    else if (!checkGender(gender)){
                        document.getElementById('message-f1').innerHTML = 'Enter M/F for gender.'
                        functionAlert();
                    }
                    else {                    
                        input = JSON.stringify({
                            "details":{
                            "name" : $('#name').val(),
                            "registrationNumber" : $('#regno').val(),
                            "email" : $('#email').val(),
                            "phone" : $('#phone').val(),
                            "gender" : $('#gender').val(),
                            "eventAttended" : "ALL",
                            "eventName" : queries[1]
                            }
                        })
                        var frm = document.getElementById("create").reset();
                        $.ajax({
                            type: "POST",
                            url: "http://206.189.133.125/api/v1/participants/create-attendee",
                            data:input
                        }).done(function (data) {
                            if(data.rs==="created"){
                                document.getElementById('message-f1').innerHTML = 'You have successfully created a participant'
                                functionAlert();
                            }   
                            else{
                                document.getElementById('message-f1').innerHTML = 'Sorry could not create a participant'
                                functionAlert();
                            }
                        });
                    }
                }
            })