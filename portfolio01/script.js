const aboutBtn = document.getElementById('aboutMe');
const aboutInside = document.getElementById('aboutInside');
const closeBtn = document.getElementById('close');
const minimise = document.getElementById('minimise');
const closeBtn2 = document.getElementById('close2');
const closeBtn3 = document.getElementById('close3');
const closeBtn4 = document.getElementById('close4');
const minimise2 = document.getElementById('minimise2');
const minimise3 = document.getElementById('minimise3');
const minimise4 = document.getElementById('minimise4');
const dragInside = document.querySelectorAll('.aboutInside');

const files = document.querySelectorAll('.file');

const projectsBtn = document.getElementById('projects');
const projectsInside = document.getElementById('projectsInside');

const contact = document.getElementById('contact');
const contactInside = document.getElementById('contactInside');
const menuContact = document.getElementById('menuContact');

const menuProject1 = document.getElementById('menuProject1');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const cat = document.getElementById('cat');
const inside = document.getElementById('inside');

const btns = document.querySelectorAll('.btn');
const menuBtn = document.querySelectorAll('.menuBtn');
const winBtn = document.getElementById('windows');
const menuAbout = document.getElementById('menuAbout');
const menuProjects = document.getElementById('menuProjects');

const project1Btn = document.getElementById('project1Btn');
const plannerApp = document.getElementById('plannerApp');

const selection = document.getElementById('selection');
const section = document.getElementById('section');

let ZCount = 1;

document.addEventListener('DOMContentLoaded', function () {

    let startX, startY;

    let sound = new Audio('/audio/click.wav');
    let startup = new Audio('/audio/startup.mp3');
    let skype = new Audio('/audio/skype.wav');

    closeBtn.addEventListener('click', () => {
        aboutInside.style.display = 'none';
        menuAbout.style.display = 'none';
    });

    closeBtn2.addEventListener('click', () => {
        projectsInside.style.display = 'none';
        menuProjects.style.display = 'none';
    });

    closeBtn3.addEventListener('click', () => {
        plannerApp.style.display = 'none';
        menuProject1.style.display = 'none';
    });

    closeBtn4.addEventListener('click', () => {
        contactInside.style.display = 'none';
        // menuContact.style.display = 'none';
    });


    minimise.addEventListener('click', () => {
        aboutInside.style.display = 'none';
        menuAbout.style.display = 'inline-block';
    });

    minimise2.addEventListener('click', () => {
        projectsInside.style.display = 'none';
        menuProjects.style.display = 'inline-block';
    });

    minimise3.addEventListener('click', () => {
        plannerApp.style.display = 'none';
        menuProject1.style.display = 'inline-block';
    });

    minimise4.addEventListener('click', () => {
        contactInside.style.display = 'none';
        // menuContact.style.display = 'inline-block';
    });



    aboutBtn.addEventListener('dblclick', () => {
        aboutInside.style.display = 'block';
        menuAbout.style.display = 'inline-block';
        putToFront(aboutInside);
    });

    contact.addEventListener('dblclick', () => {
        skype.volume = 0.4;
        skype.play();
        putToFront(contactInside);
    });


    files.forEach(f => {
        f.addEventListener('click', () => {
            files.forEach(file => file.classList.remove('selected'));
            f.classList.add('selected');
        });
    })


    projectsBtn.addEventListener('dblclick', () => {
        projectsInside.style.display = 'block';
        menuProjects.style.display = 'inline-block';
        putToFront(projectsInside);
    });


    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            sound.play();
        });
    })

    menuBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            sound.play();
        });
    })

    winBtn.addEventListener('click', () => {
        startup.volume = 0.3;
        startup.play();
    });

    menuAbout.addEventListener('click', () => {
        if (aboutInside.style.display === 'block') {
            aboutInside.style.display = 'none';
        } else {
            aboutInside.style.display = 'block';
            putToFront(aboutInside);
        }
    });

    menuProjects.addEventListener('click', () => {
        if (projectsInside.style.display === 'block') {
            projectsInside.style.display = 'none';
        } else {
            projectsInside.style.display = 'block';
            putToFront(projectsInside);
        }
    });

    menuProject1.addEventListener('click', () => {
        if (plannerApp.style.display === 'block') {
            plannerApp.style.display = 'none';
        } else {
            plannerApp.style.display = 'block';
            putToFront(plannerApp);
        }
    });

    project1Btn.addEventListener('dblclick', () => {
        plannerApp.style.display = 'block';
        menuProject1.style.display = 'inline-block';
        putToFront(plannerApp);
    });

    page1.addEventListener('click', () => {
        page1.classList.add('active');
        page2.classList.add('noActive');

        cat.style.display = 'block';
        inside.style.display = 'none';
    });

    page2.addEventListener('click', () => {
        page1.classList.remove('active');
        page2.classList.add('active');
        page2.classList.remove('noActive');

        cat.style.display = 'none';
        inside.style.display = 'block';
    });


    section.addEventListener('mousedown', (e) => {
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
        };

        const onMouseUp = () => {
            selection.style.display = 'none';
            section.removeEventListener('mousemove', onMouseMove);
            section.removeEventListener('mouseup', onMouseUp);
        };

        section.addEventListener('mousemove', onMouseMove);
        section.addEventListener('mouseup', onMouseUp);
    });







    if (aboutInside) dragElement(aboutInside);
    if (projectsInside) dragElement(projectsInside);
    if (plannerApp) dragElement(plannerApp);
    if (contactInside) dragElement(contactInside);
});


function putToFront(e) {
    e.style.zIndex = ++ZCount;
}


function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const drag = elmnt.querySelector('.drag');
    if (drag) {
        drag.onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        putToFront(elmnt);

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
        elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
