function vhod() {
    document.getElementById('regist').style.display = 'none';
    var el = document.getElementById('vhod');
    el.style.display = 'block';
}

function closed() {
    document.getElementById('vhod').style.display = 'none';
}


function reg() {
    var el = document.getElementById('regist');
    el.style.display = 'block';
    document.getElementById('vhod').style.display = 'none';
}


function closed_reg() {
    document.getElementById('regist').style.display = 'none';
    
}