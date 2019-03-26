var queryString = decodeURIComponent(window.location.search);
            queryString = queryString.substring(1);
            total=queryString.split("&");
            club=total[0].split("=")
            var queries = total[1].split("=");
            document.getElementById("back").innerHTML = '<a href="coupon.html?clubName='+club[1]+'&eventName='+queries[1]+'"><i class="arrowbig left"></i></a>'
            $(document).ready(function (){
                $("#load").click(function(e) {
                    e.preventDefault();
                    chkConstraints();
                })
                function chkConstraints() {
                    var name = document.getElementById("name");
                    var desc = document.getElementById("desc");
                    var day = document.getElementById("day");
                    if (!checkName(name)) {
                        document.getElementById('message-f1').innerHTML = 'Enter valid name.'
                        functionAlert();
                    }
                    else if (!checkName(desc)) {
                        document.getElementById('message-f1').innerHTML = 'Enter valid description.'
                        functionAlert();
                    }
                    else if (day.value.length == 0) {
                        document.getElementById('message-f1').innerHTML = 'Enter valid day.'
                        functionAlert();
                    }
                    else { 
//                        coup=[{
//                            "name": $('#name').val(),
//                            "description": $('#desc').val(),
//                            "day": $('#day').val()
//                        }]
                        input = JSON.stringify({                   
                            "event": queries[1],
                            "coupons": [{
                                "name": $('#name').val(),
                                "description": $('#desc').val(),
                                "day": $('#day').val()
                            },]
                        })
                        var frm = document.getElementById("create").reset();
                        $.ajax({
                            type: "POST",
                            url: "http://206.189.133.125/api/v1/coupons/create-schema",
                            data:input
                        }).done(function (data) {
                            if(data.rs==="created"){
                                document.getElementById('message-f1').innerHTML = 'You have successfully created a coupon'
                                functionAlert();
                            }   
                            else{
                                document.getElementById('message-f1').innerHTML = 'Sorry could not create a coupon'
                                functionAlert();
                            }
                        });
                    }
                }
            })