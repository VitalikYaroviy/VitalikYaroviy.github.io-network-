document.addEventListener("DOMContentLoaded", function () {
    let right = document.querySelectorAll('.toggle-navRight');

    let left = document.querySelectorAll('.toggle-navLeft');

    let top = document.querySelectorAll('.toggle-navTop');

    let bottom = document.querySelectorAll('.toggle-navBottom');

    right.forEach(function (element) {
        element.addEventListener('click', function () {
            toggleNavRight();
        })
    });

    top.forEach(function (element) {
        element.addEventListener('click', function () {
            toggleNavTop();
        })
    });

    left.forEach(function (element) {
        element.addEventListener('click', function () {
            toggleNavLeft();
        })
    });

    bottom.forEach(function (element) {
        element.addEventListener('click', function () {
            toggleNavBottom();
        })
    });
});

function toggleNavLeft() {
    if (document.getElementById('site-wrapper').classList.contains('show-navLeft')) {
        document.getElementById('site-wrapper').classList.remove('show-navLeft');
    } else {
        document.getElementById('site-wrapper').classList.add('show-navLeft');
    }
}
function toggleNavRight() {
    if (document.getElementById('site-wrapper').classList.contains('show-navRight')) {
        document.getElementById('site-wrapper').classList.remove('show-navRight');
    } else {
        document.getElementById('site-wrapper').classList.add('show-navRight');
    }
}

function toggleNavTop() {
    if (document.getElementById('site-wrapper').classList.contains('show-navTop')) {
        document.getElementById('site-wrapper').classList.remove('show-navTop');
    } else {
        document.getElementById('site-wrapper').classList.add('show-navTop');
    }
}

function toggleNavBottom() {
    if (document.getElementById('site-wrapper').classList.contains('show-navBottom')) {
        document.getElementById('site-wrapper').classList.remove('show-navBottom');
    } else {
        document.getElementById('site-wrapper').classList.add('show-navBottom');
    }
}