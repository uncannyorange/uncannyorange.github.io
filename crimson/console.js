const cr001 = './revoltmain.html'
const cr002 = './home.html'
const cr003 = './qcdirectives.html'
const cr004 = '../beta'
const cr005 = './changelogu.html'

function crcodetop(){
    var code = document.getElementById("crimsoncode").value;
    var $content = document.getElementById("$content");
    switch(code){
        case "CR-001":
          $content.setAttribute("src", '../crimson/revoltmain.html');
        break;
        case "CR-002":
          $content.setAttribute("src", './home.html');
        break;
        case "CR-003":
          $content.setAttribute("src", './qcdirectives.html');
        break;
        case "CR-004":
          $content.setAttribute("src", '../beta');
        break;
        case "CR-005":
        $content.setAttribute("src", './changelogu.html');
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
    }
}