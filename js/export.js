var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
total = queryString.split("&");
club = total[0].split("=");
var queries = total[1].split("=");
document.getElementById("back").innerHTML = '<a href="events.html?clubName='+club[1]+'&eventName='+queries[1]+'"><i class="arrowbig left"></i></a>'
$(document).ready(function () {
    
    $("#load").click(function(e){
        e.preventDefault();
        dataexport();
    })
    
    function dataexport() {
        var gender = document.getElementById("gender").value;
        var pres = document.getElementById("pres").value;
        var format = $('input[name=format]:checked').val();
        if(gender==="0"){
            document.getElementById('message-f1').innerHTML = 'Select Category.';
            var frm = document.getElementById("screen").reset();
            functionAlert();
        }
        else if(pres==="0"){
            document.getElementById('message-f1').innerHTML = 'Select Type.';
            var frm = document.getElementById("screen").reset();
            functionAlert();
        }
        else{
            if(gender==="1"){
                value = "M"
            }
            else if(gender==="2"){
                value = "F"
            }
            else{
                value = ""
            }
            if(pres==="1"){
                spec = "project-all"
            }
            else if(pres==="2"){
                spec = "project-present"
            }
            else{
                spec = "project-absent"
            }
            if(format==="1"){
                $.ajax({
                    url: 'http://206.189.133.125/api/v1/exporter/excel',
                    type: "POST",
                    data: JSON.stringify({
                            "event": queries[1],
                            "query": {
                                "key": "gender",
                                "value": value,
                                "specific": spec
                            }
                        }),
                    success: function (data) {
                        const blob = new Blob([data], {type: 'text/csv'});
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.setAttribute('hidden','');
                        a.setAttribute('href',url);
                        a.setAttribute('download',queries[1]+'_'+value+'_'+spec+'.csv');
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                    }
                });
            }
            else{
                $.ajax({
                    url: 'http://206.189.133.125/api/v1/exporter/json',
                    type: "POST",
                    data: JSON.stringify({
                            "event": queries[1],
                            "query": {
                                "key": "gender",
                                "value": value,
                                "specific": spec
                            }
                        }),
                    success: function (data) {
                        const blob = new Blob([data], {type: 'plain/text'});
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.setAttribute('hidden','');
                        a.setAttribute('href',url); 
                        a.setAttribute('download',queries[1]+'_'+value+'_'+spec+'.json');
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                    }
                });
            }
        }
    }

//    
//    $("#exportall-c1").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/excel',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "specific": "project-all"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'text/csv'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_registeredall.csv');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//
//
//    $("#exportall-c2").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/excel',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "key": "gender",
//                    "value": "F",
//                    "specific": "project-all"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'text/csv'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_registeredgirls.csv');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//
//
//    $("#exportall-c3").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/excel',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "key": "gender",
//                    "value": "M",
//                    "specific": "project-all"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'text/csv'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_registeredboys.csv');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//
//
//    $("#exportpresent-c1").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/excel',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "specific": "project-present"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'text/csv'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_presentall.csv');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//
//
//    $("#exportpresent-c2").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/excel',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "key": "gender",
//                    "value": "F",
//                    "specific": "project-present"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'text/csv'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_presentgirls.csv');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//
//
//    $("#exportpresent-c3").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/excel',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "key": "gender",
//                    "value": "M",
//                    "specific": "project-present"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'text/csv'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_presentboys.csv');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//
//
//    $("#exportabsent-c1").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/excel',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "specific": "project-absent"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'text/csv'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_absentall.csv');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//
//
//    $("#exportabsent-c2").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/excel',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "key": "gender",
//                    "value": "F",
//                    "specific": "project-absent"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'text/csv'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_absentgirls.csv');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//
//
//    $("#exportabsent-c3").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/excel',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "key": "gender",
//                    "value": "M",
//                    "specific": "project-absent"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'text/csv'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_absentboys.csv');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//
//    
//    $("#exportall-j1").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/json',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "specific": "project-all"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'plain/text'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_registeredall.json');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })    
//
//    
//    $("#exportall-j2").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/json',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "key": "gender",
//                    "value": "F",
//                    "specific": "project-all"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'json/text'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_registeredgirls.json');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//
//
//    $("#exportall-j3").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/json',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "key": "gender",
//                    "value": "M",
//                    "specific": "project-all"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'plain/text'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_registeredboys.json');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//    
//    
//    $("#exportpresent-j1").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/json',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "specific": "project-present"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'plain/text'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_presentall.json');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//    
//    
//    $("#exportpresent-j2").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/json',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "key": "gender",
//                    "value": "F",
//                    "specific": "project-present"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'plain/text'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_presentgirls.json');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//    
//    
//    $("#exportpresent-j3").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/json',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "key": "gender",
//                    "value": "M",
//                    "specific": "project-present"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'plain/text'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_presentboys.json');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//    
//    
//    $("#exportabsent-j1").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/json',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "specific": "project-absent"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'plain/text'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_absentall.json');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//    
//    
//    $("#exportabsent-j2").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/json',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "key": "gender",
//                    "value": "F",
//                    "specific": "project-absent"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'plain/text'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_absentgirls.json');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//    
//    
//    $("#exportabsent-j3").click(function(){
//        $.ajax({
//        url: 'http://206.189.133.125/api/v1/exporter/json',
//        type: "POST",
//        data: JSON.stringify({
//                "event": queries[1],
//                "query": {
//                    "key": "gender",
//                    "value": "M",
//                    "specific": "project-absent"
//                }
//            }),
//        success: function (data) {
//            const blob = new Blob([data], {type: 'plain/text'});
//            const url = window.URL.createObjectURL(blob);
//            const a = document.createElement('a');
//            a.setAttribute('hidden','');
//            a.setAttribute('href',url);
//            a.setAttribute('download',''+queries[1]+'_absentboys.json');
//            document.body.appendChild(a);
//            a.click();
//            document.body.removeChild(a);
//        }
//    });
//    })
//    
//    
});