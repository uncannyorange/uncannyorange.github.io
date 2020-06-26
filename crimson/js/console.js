const cr001 = './revoltmain.html'
const cr002 = './home.html'
const cr003 = './qcdirectives.html'
const cr004 = '../beta'
const cr005 = './changelogu.html'
const cr006 = './paintbridges.html'

function crcodetop(){
    var code = document.forms["bar"]["code"].value;
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
        case "CR-005":
            content.setAttribute("src", cr006);
        break;
    }
}

function crcode(){
    var code = document.getElementById("crimsoncode").value;
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
        case "CR-006": 
            window.location.href=cr006;
        break;
    }
}


// attempt at making a command manager for this
const commands = require('./json/commsands.json')

function crmanager(){
    var codebarcontent = document.forms["bar"]["code"].value;
    var content = document.getElementById("$content");

    var code = commands[codebarcontent];

    if(content){
        content.setAttribute("src", code);
    }else{
        window.location.href = code;
    };

}