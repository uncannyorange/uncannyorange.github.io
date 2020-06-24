function crcodetop(){
    var code = document.getElementById("crimsoncode").value;
    var content = document.getElementById("$content");
    switch(code){
        case "CR-001":
            content.setAttribute("src", './revoltmain.html');
        break;
        case "CR-002":
            content.setAttribute("src", './home.html');
        break;
        case "CR-003":
            content.setAttribute("src", './qcdirectives.html');
        break;
        case "CR-004":
            content.setAttribute("src", '../beta');
        break;
        case "CR-005":
            content.setAttribute("src", './changelogu.html');
        break;
    }
}

function crcode(){
    var code = document.getElementById("crimsoncode").value;
    switch(code){
        case "CR-001":
            window.location.href='./revoltmain.html';
        break;
        case "CR-002":
            window.location.href='./home.html';
        break;
        case "CR-003":
            window.location.href='./qcdirectives.html';
        break;
        case "CR-004":
            window.location.href='../beta';
        break;
        case "CR-005":
            window.location.href='./changelogu.html';
        break;
    }
}