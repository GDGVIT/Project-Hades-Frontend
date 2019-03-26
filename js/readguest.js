var queryString = decodeURIComponent(window.location.search);
            queryString = queryString.substring(1);
            total=queryString.split("&");
            club = total[0].split("=");
            var queries = total[1].split("=");
            var input = JSON.stringify({
                "event": queries[1]
            })
            document.getElementById("back").innerHTML = '<a href="guest.html?clubName='+club[1]+'&eventName='+queries[1]+'"><i class="arrowbig left"></i></a>'
            $(document).ready(function (){
                    input = JSON.stringify({
                        "query": {
                            "key": "name",
                            "value": queries[1]
                        }
                    })
//                $("#evload").click(function() {
//                    document.getElementById('showd').style.visibility = 'hidden';
                    $.ajax({
                        type: "POST",
                        url: "http://206.189.133.125/api/v1/guests/read-guest",
                        data:input
                    }).done(function (data) {
                        if (true) {
                            var txt="";
                            for (var i=0;i<data.rs.length; i++){
                                var obj = data.rs[i];
                                txt = txt + '<div class="row"><div class="evcard"><img class="evphoto" src="lm5.jpg"><div class="evdet"><strong class="evhd">' + obj.name + '</strong><br>'+obj.email+', '+obj.gender+', '+obj.phoneNumber+'</div></div></div>';
                            }
                            document.getElementById("hola").innerHTML= txt;
                        }
                    });
//                })
                
            })
        