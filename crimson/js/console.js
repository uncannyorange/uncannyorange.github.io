var code = document.getElementById("crimsoncode").value;

const cr001 = require('../revoltmain.html')
const cr002 = require('../home.html')
const cr003 = require('../qcdirectives.html')
const cr004 = require('.../beta')
const cr005 = require('../changelogu.html')

function crcodetop(){
    var content = document.getElementById("$content");
    switch(code){
        case "CR-001":
            content.setAttribute("src", cr001);
        break;
        case "CR-002":
            content.setAttribute("src", cr002);
        break;
        case "CR-003":
            content.setAttribute("src", cr003);
        break;
        case "CR-004":
            content.setAttribute("src", cr004);
        break;
        case "CR-005":
            content.setAttribute("src", cr005);
        break;
    }
}

function crcode(){
    switch(code){
        case "CR-001":
            window.location.href=cr001;
        break;
        case "CR-002":
            window.location.href=cr002;
        break;
        case "CR-003":
            window.location.href=cr003;
        break;
        case "CR-004":
            window.location.href=cr004;
        break;
        case "CR-005":
            window.location.href=cr005;
        break;
    }
}