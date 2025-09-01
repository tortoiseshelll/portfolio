const btns = document.querySelectorAll('.btn');
const startBtn = document.getElementById('start');
const selection = document.getElementById('selection');
const desktop = document.getElementById('desktop-screen');
const files = document.querySelectorAll('.file');
const ps = document.querySelectorAll('.p');
const topbar = document.getElementById('topbar');
const openFile = document.querySelectorAll('.open-file');


let time = document.getElementById('time');
let ZCount = 1;




document.addEventListener('DOMContentLoaded', function () {

    let startX, startY;

    let sound = new Audio('assets/audio/click.wav');
    let startup = new Audio('assets/audio/startup.mp3');

    setInterval(() => {
        let d = new Date();
        time.innerHTML = d.toLocaleTimeString();
    }, 1000);



    btns.forEach(b => {
        b.addEventListener('click', () => {
            btns.forEach(btn => btn.classList.remove('selected'));
            b.classList.add('selected');
            sound.play();
        });
    })

    files.forEach(file => {
        file.addEventListener('click', () => {
            ps.forEach(p => p.classList.remove('selected'));

            const p = file.querySelector('.p');
            if (p) {
                p.classList.add('selected');
            }
        });
    })

    startBtn.addEventListener('click', () => {
        startup.volume = 0.3;
        startup.play();
    })


    desktop.addEventListener('mousedown', (e) => {
        if (e.target.closest('.noSelect')) return;

        startX = e.clientX;
        startY = e.clientY;

        selection.style.left = `${startX}px`;
        selection.style.top = `${startY}px`;
        selection.style.width = `0px`;
        selection.style.height = `0px`;
        selection.style.display = 'block';

        const onMouseMove = (e) => {
            const x = Math.min(e.clientX, startX);
            const y = Math.min(e.clientY, startY);
            const w = Math.abs(e.clientX - startX);
            const h = Math.abs(e.clientY - startY);

            selection.style.left = `${x}px`;
            selection.style.top = `${y}px`;
            selection.style.width = `${w}px`;
            selection.style.height = `${h}px`;

            const boxRect = selection.getBoundingClientRect();
            btns.forEach(item => {
                const fileRect = item.getBoundingClientRect();
                const isSelected =
                    fileRect.left < boxRect.right &&
                    fileRect.right > boxRect.left &&
                    fileRect.top < boxRect.bottom &&
                    fileRect.bottom > boxRect.top;
                item.classList.toggle('selected', isSelected);
            });

            ps.forEach(item => {
                const fileRect = item.getBoundingClientRect();
                const isSelected =
                    fileRect.left < boxRect.right &&
                    fileRect.right > boxRect.left &&
                    fileRect.top < boxRect.bottom &&
                    fileRect.bottom > boxRect.top;
                item.classList.toggle('selected', isSelected);
            });
        };

        const onMouseUp = () => {
            selection.style.display = 'none';
            desktop.removeEventListener('mousemove', onMouseMove);
            desktop.removeEventListener('mouseup', onMouseUp);
        };

        desktop.addEventListener('mousemove', onMouseMove);
        desktop.addEventListener('mouseup', onMouseUp);
    });

    openFile.forEach(win => dragElement(win));
});


















function putToFront(el) {
    el.style.zIndex = ++ZCount;
}

function dragElement(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragHandle = el.querySelector('.drag') || el;

    dragHandle.onmousedown = dragMouseDown;

    function dragMouseDown(ev) {
        ev.preventDefault();

        putToFront(el);

        pos3 = ev.clientX;
        pos4 = ev.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(ev) {
        ev.preventDefault();

        pos1 = pos3 - ev.clientX;
        pos2 = pos4 - ev.clientY;
        pos3 = ev.clientX;
        pos4 = ev.clientY;

        el.style.top = (el.offsetTop - pos2) + 'px';
        el.style.left = (el.offsetLeft - pos1) + 'px';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}