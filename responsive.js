function showDesktop() {
    document.getElementById('desktopView').style.display = 'block';
    document.getElementById('mobileView').classList.remove('active');
    document.getElementById('desktopBtn').classList.add('active');
    document.getElementById('mobileBtn').classList.remove('active');
}

function showMobile() {
    document.getElementById('desktopView').style.display = 'none';
    document.getElementById('mobileView').classList.add('active');
    document.getElementById('mobileBtn').classList.add('active');
    document.getElementById('desktopBtn').classList.remove('active');
}