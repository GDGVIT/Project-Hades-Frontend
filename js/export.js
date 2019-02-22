var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
total = queryString.split("&");
club = total[0].split("=");
var queries = total[1].split("=");
document.getElementById("back").innerHTML = '<a href="events.html?clubName='+club[1]+'&eventName='+queries[1]+'"><i class="arrowbig left"></i></a>'
$(document).ready(function () {

    
    $("#exportall-c1").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/excel',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "specific": "project-all"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'text/csv'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_registeredall.csv');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })


    $("#exportall-c2").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/excel',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "key": "gender",
                    "value": "F",
                    "specific": "project-all"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'text/csv'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_registeredgirls.csv');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })


    $("#exportall-c3").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/excel',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "key": "gender",
                    "value": "M",
                    "specific": "project-all"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'text/csv'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_registeredboys.csv');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })


    $("#exportpresent-c1").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/excel',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "specific": "project-present"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'text/csv'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_presentall.csv');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })


    $("#exportpresent-c2").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/excel',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "key": "gender",
                    "value": "F",
                    "specific": "project-present"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'text/csv'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_presentgirls.csv');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })


    $("#exportpresent-c3").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/excel',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "key": "gender",
                    "value": "M",
                    "specific": "project-present"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'text/csv'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_presentboys.csv');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })


    $("#exportabsent-c1").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/excel',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "specific": "project-absent"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'text/csv'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_absentall.csv');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })


    $("#exportabsent-c2").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/excel',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "key": "gender",
                    "value": "F",
                    "specific": "project-absent"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'text/csv'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_absentgirls.csv');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })


    $("#exportabsent-c3").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/excel',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "key": "gender",
                    "value": "M",
                    "specific": "project-absent"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'text/csv'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_absentboys.csv');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })

    
    $("#exportall-j1").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/json',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "specific": "project-all"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'plain/text'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_registeredall.txt');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })    

    
    $("#exportall-j2").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/json',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "key": "gender",
                    "value": "F",
                    "specific": "project-all"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'json/text'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_registeredgirls.txt');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })


    $("#exportall-j3").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/json',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "key": "gender",
                    "value": "M",
                    "specific": "project-all"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'plain/text'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_registeredboys.txt');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })
    
    
    $("#exportpresent-j1").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/json',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "specific": "project-present"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'plain/text'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_presentall.txt');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })
    
    
    $("#exportpresent-j2").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/json',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "key": "gender",
                    "value": "F",
                    "specific": "project-present"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'plain/text'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_presentgirls.txt');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })
    
    
    $("#exportpresent-j3").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/json',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "key": "gender",
                    "value": "M",
                    "specific": "project-present"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'plain/text'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_presentboys.txt');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })
    
    
    $("#exportabsent-j1").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/json',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "specific": "project-absent"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'plain/text'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_absentall.txt');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })
    
    
    $("#exportabsent-j2").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/json',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "key": "gender",
                    "value": "F",
                    "specific": "project-absent"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'plain/text'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_absentgirls.txt');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })
    
    
    $("#exportabsent-j3").click(function(){
        $.ajax({
        url: 'http://206.189.133.125/api/v1/exporter/json',
        type: "POST",
        data: JSON.stringify({
                "event": queries[1],
                "query": {
                    "key": "gender",
                    "value": "M",
                    "specific": "project-absent"
                }
            }),
        success: function (data) {
            const blob = new Blob([data], {type: 'plain/text'});
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('hidden','');
            a.setAttribute('href',url);
            a.setAttribute('download',''+queries[1]+'_absentboys.txt');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    });
    })
    
    
});