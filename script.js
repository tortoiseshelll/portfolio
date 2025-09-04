const btns = document.querySelectorAll('.btn');
const tasks = document.querySelectorAll('.task');
const startBtn = document.getElementById('start');
const selection = document.getElementById('selection');
const desktop = document.getElementById('desktop-screen');
const files = document.querySelectorAll('.file');
const ps = document.querySelectorAll('.p');
const openFiles = document.querySelectorAll('.open-file');
const back = document.querySelector('.back');
const minimise = document.querySelectorAll('.minimise');
const close = document.querySelectorAll('.close');
const taskbtns = document.querySelectorAll('.task');
const documentsPage = document.getElementById('documents-page');
const forward = document.querySelector('.forward');
const topbar = document.getElementById('topbar');
const documentTask = document.getElementById('documents-task');
const documentsFile = document.getElementById('documents-file');
const documentfiles = document.getElementById('document-files');
const explorer = document.getElementById('explorer');

const p1folder = document.getElementById('project1folder');
const p2folder = document.getElementById('project2folder');
const projects = document.querySelectorAll('.project');
const project1page = document.getElementById('project1page');
const project2page = document.getElementById('project2page');
const todoapp = document.getElementById('todoapp');
const todopage = document.getElementById('todo-page');
const portfolio1btn = document.getElementById('portfolio1btn');
const portfolio1Page = document.getElementById('portfolio1-page');

const form = document.getElementById("contact-form");
const status = document.getElementById("status");


let time = document.getElementById('time');
let ZCount = 1;

emailjs.init("k0aQ_On8QwR3ieYZf");

document.addEventListener('DOMContentLoaded', function () {

    let startX, startY;

    let sound = new Audio('assets/audio/click.wav');
    let startup = new Audio('assets/audio/startup.mp3');

    setInterval(() => {
        let d = new Date();
        time.innerHTML = d.toLocaleTimeString();
    }, 1000);


    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_2wrkh5q", "template_cp6orma", form)
            .then(() => {
                status.innerText = "Thank you for contact!";
                form.reset();
            })
            .catch((error) => {
                status.innerText = "Failed to send:(";
            });
    });


    startBtn.addEventListener('click', () => {
        startup.volume = 0.3;
        startup.play();
    });

    explorer.classList.add('default');

    tasks.forEach(t => {
        t.addEventListener('click', () => {
            explorer.classList.remove('default');
            tasks.forEach(task => task.classList.remove('selected'));
            t.classList.add('selected');
            sound.play();
        });
    })

    btns.forEach(b => {
        b.addEventListener('click', () => {
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

            files.forEach(f => f.classList.remove('selected'));
            file.classList.add('selected');

            sound.play();
        });

        file.addEventListener('dblclick', () => {
            const id = file.dataset.id;

            const openFile = document.querySelector(`.open-file[data-id="${id}"]`);
            if (openFile) {
                openFile.style.display = 'block';
                putToFront(openFile);
            }

            const taskBtn = document.querySelector(`.task[data-id="${id}"]`);
            if (taskBtn) {
                taskBtn.style.display = 'flex';
            }
        });
    });

    taskbtns.forEach(taskbtn => {
        taskbtn.addEventListener('click', () => {

            const id = taskbtn.dataset.id;
            const openFile = document.querySelector(`.open-file[data-id="${id}"]`);
            if (openFile) {
                openFile.style.display = 'block';
                putToFront(openFile);
            }
        });
    });



    minimise.forEach(btn => {
        btn.addEventListener('click', () => {
            const openFile = btn.closest('.open-file');

            if (openFile) {
                openFile.style.display = 'none';
            }
        });
    });

    close.forEach(btn => {
        btn.addEventListener('click', () => {
            const openFile = btn.closest('.open-file');

            if (openFile) {
                openFile.style.display = 'none';

                const id = openFile.dataset.id;
                const taskBtn = document.querySelector(`.task[data-id="${id}"]`);
                if (taskBtn) {
                    documentfiles.style.display = 'flex';
                    project1page.style.display = 'none';

                    taskBtn.style.display = 'none';
                }
            };
        });
    });


    back.addEventListener('click', () => {
        documentfiles.style.display = 'flex';

        projects.forEach(project => {
            project.style.display = 'none';
        })
    });

    forward.addEventListener('click', () => {
        documentfiles.style.display = 'none';


    });


    p1folder.addEventListener('dblclick', () => {
        documentfiles.style.display = 'none';
        project1page.style.display = 'block';
    });

    p2folder.addEventListener('dblclick', () => {
        documentfiles.style.display = 'none';
        project2page.style.display = 'block';
    });

    project1page.addEventListener('dblclick', () => {
        todoapp.style.display = 'block';
        todopage.style.display = 'block';

        // lazy, fix that
        portfolio1Page.style.display = 'none';
    });

    portfolio1btn.addEventListener('dblclick', () => {
        todoapp.style.display = 'block';
        portfolio1Page.style.display = 'block';

        // lazy, fix that
        todopage.style.display = 'none';
    });




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
            files.forEach(item => {
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

    openFiles.forEach(win => dragElement(win));
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

