var queryString = decodeURIComponent(window.location.search);
            queryString = queryString.substring(1);
            total=queryString.split("&");
            club = total[0].split("=");
            var queries = total[1].split("=");
            var input = JSON.stringify({
                "event": queries[1]
            })
            document.getElementById("back").innerHTML = '<a href="partman.html?clubName='+club[1]+'&eventName='+queries[1]+'"><i class="arrowbig left"></i></a>'
            $(document).ready(function (){
                $("#evload").click(function() {
                    document.getElementById('showd').style.visibility = 'hidden';
                    $.ajax({
                        type: "POST",
                        url: "http://206.189.133.125/api/v1/simple-projection/project-all",
                        data:input
                    }).done(function (data) {
                        if (true) {
                            var txt="";
                            data.rs = data.rs.sort(function(a, b){
                                if(a.name < b.name) { return -1; }
                                if(a.name > b.name) { return 1; }
                                return 0;
                            })
                            for (var i=0;i<data.rs.length; i++){
                                var obj = data.rs[i];
                                txt = txt + '<a href="edit.html?clubName='+club[1]+'&eventName=' + queries[1] + '&name=' + obj.name + '" style="text-decoration: none;"><div class="row"><div class="evcard"><img class="evphoto" src="lm5.jpg"><div class="evdet"><strong class="evhd">' + obj.name + '</strong><br>'+obj.registrationNumber+'</div><div class="rtarrow" style="float: right;"><i class="arrowbig right"></i></div></div></div></a>';
                            }
                            document.getElementById("hola").innerHTML= txt;
                        }
                    });
                })
            }) 
        