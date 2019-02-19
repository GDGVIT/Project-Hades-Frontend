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
                        swal("Oops!", "Enter valid name", "error");
                    }
                    else if (regno.value.length == 0){
                        swal("Oops!", "Enter valid registration number", "error");
                    }
                    else if (!checkEmail(email)) {
                        swal("Oops!", "Enter valid email address", "error");
                    }
                    else if (!checkPhone(phone)) {
                        swal("Oops!", "Enter valid phone number", "error");
                    }
                    else if (!checkGender(gender)){
                        swal("Oops!", "Enter M/F for gender", "error");
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
                                swal("Success!", "You have created a new participant!", "success");
                            }                           
                        });
                    }
                }
            })