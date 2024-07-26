document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mainContent = document.querySelector('.main-content');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        if (sidebar.classList.contains('open')) {
            mainContent.style.marginLeft = '250px';
        } else {
            mainContent.style.marginLeft = '60px';
        }
    });


    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock(); // initial call to display clock immediately

    

    const grid = GridStack.init({
        cellHeight: 80,
        verticalMargin: 10,
        resizable: { handles: 'all'}, // do all sides for testing
        sizetocontent:true,
    });
    let items = [
        {x: 0, y: 0, w: 3, h: 6,gs_min_w:3, content: `<div class="google-slide-container">
<iframe src="focus-timer-master/timer.html" name="targetframe" allowTransparency="true" scrolling="yes" frameborder="0" >
    </iframe>                </div><button class="remove-button">--------</button>
   `},
        {x: 10, y: 0, w: 4, h: 5, noMove: true, noResize: true, locked: true, content: `
                <div class="google-slide-container">
                   <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTEitHpxPEStmzYEgstqn7Vncd7Rc9ihN6tF7XlV75GM8TCrs4gvmGUY4Q49RsYzIuJaEdSN9VwEtA0/embed?start=false&loop=true&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div><button class="remove-button">--------</button>

            `},
            {x: 8, y: 2, w: 4, h: 4, content: `<div class="google-slide-container">
                <iframe src="quotes.html" name="targetframe" allowTransparency="true" scrolling="yes" frameborder="0" ></iframe>

    </div><button class="remove-button">--------</button>
`},
        // {x: 8, y: 0, w: 2, h: 2, minW: 2, noResize: true, content: '<p class="card-text text-center" style="margin-bottom: 0">Drag me!<p class="card-text text-center"style="margin-bottom: 0"><ion-icon name="hand" style="font-size: 300%"></ion-icon><p class="card-text text-center" style="margin-bottom: 0">...but don\'t resize me!'},
        // {x: 10, y: 0, w: 2, h: 2, content: '4'},
        {x: 0, y: 2, w: 4, h: 3, content: `                <div class="spotify-container">
                    <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWMOmoXKqHTD" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div><button class="remove-button">--------</button>
                `},
        {x: 3, y: 0, w: 5, h: 4, content: `<div class="google-slide-container">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23C0CA33&mode=AGENDA&showTz=0&showTitle=0&showNav=0&showPrint=0&title&src=Y21pbGluZDMzQGdtYWlsLmNvbQ&src=bnRtYTRmZ3ZlYWdiMWVqZGtyNzZmdmc2dmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZmFtaWx5MTU1Mzg4MTY3NDU1NzgwMTA5MzZAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IuaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAyNDA3NzU2MDQxMjA5NTA1MTIxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23A79B8E&color=%23C0CA33&color=%237986CB&color=%230B8043&color=%23202124" 
    style="border: 2px solid #ddd; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); width: 100%; height: 600px; display: block;" 
    width="800" height="600" frameborder="0" scrolling="no">
</iframe>
     </div><button class="remove-button">--------</button>
            `},

        {x: 4, y:2 , w: 4, h: 10, content: `    <div class="google-slide-container">
                        <iframe src="issue.html" name="targetframe" allowTransparency="true" scrolling="yes" frameborder="0" ></iframe>

            </div><button class="remove-button">--------</button>
    `},
    
    {x: 3, y: 0, w: 5, h: 2, content: ` <div class="google-slide-container">
                        <iframe src="https://www.google.com/logos/2010/pacman10-i.html" name="targetframe" allowTransparency="true" scrolling="yes" frameborder="0" ></iframe>

            </div><button class="remove-button">--------</button>
    `},// emoji game ?
    {x: 8, y: 4, w: 4, h: 8, content: `<div class="notion-container">
                    <iframe src="https://v2-embednotion.com/91557fd0005941a480212349cd26b5b2" style="width: 100%; height: 100%; border: none;"></iframe>
                </div><button class="remove-button">--------</button>
                `},
    {x: 8, y: 4, w: 2, h: 2, content: '10'},
    {x: 8, y: 4, w: 2, h: 2, content: '10'},
      ];
      grid.load(items);

//TESTING



//



document.getElementById('addTimerButton').addEventListener('click', addPomodoroTimerWidget);
document.getElementById('addSlideButton').addEventListener('click', addGoogleSlideWidget);
document.getElementById('addSpotifyButton').addEventListener('click', addSpotifyWidget);
document.getElementById('addNotionButton').addEventListener('click', addNotionWidget);
document.getElementById('addFormButton').addEventListener('click', addGoogleFormWidget);
document.getElementById('addMeetButton').addEventListener('click', addGoogleMeetWidget);
document.getElementById('addSheetButton').addEventListener('click', addGoogleSpreadsheetWidget);
document.getElementById('addQuote').addEventListener('click', addquote);
document.getElementById('addChat').addEventListener('click', addchat);
document.getElementById('IssueTracker').addEventListener('click', addIssueTracker);
document.getElementById('sendMessageButton').addEventListener('click', sendMessage);
document.getElementById('toggleChatButton').addEventListener('click', toggleChat);

function addIssueTracker() {
    const newWidget = document.createElement('div');
    newWidget.className = 'grid-stack-item';
    newWidget.setAttribute('gs-min-w', '4');
    newWidget.setAttribute('gs-min-h', '10');

    newWidget.innerHTML = `
            <div class="grid-stack-item-content">
                        <div class="google-slide-container">
                        <iframe src="issue.html" name="targetframe" allowTransparency="true" scrolling="yes" frameborder="0" >

            </div>
    <button class="remove-button">Remove</button>
            </div>

    `;
    grid.addWidget(newWidget, { width: 4, height: 6 });

    initRemoveButton(newWidget);
}
function addquote() {
    const newWidget = document.createElement('div');
    newWidget.className = 'grid-stack-item';
    newWidget.setAttribute('gs-min-w', '4');
    newWidget.setAttribute('gs-min-h', '4');

    newWidget.innerHTML = `
            <div class="grid-stack-item-content">
                        <div class="google-slide-container">
                        <iframe src="quotes.html" name="targetframe" allowTransparency="true" scrolling="yes" frameborder="0" ></iframe>

            </div>
            <button class="remove-button">--------</button>
            </div>

    `;
    grid.addWidget(newWidget, { width: 4, height: 6 });

    initRemoveButton(newWidget);
}

function addGoogleMeetWidget() {
    const newWidget = document.createElement('div');
    newWidget.className = 'grid-stack-item';
    newWidget.setAttribute('gs-min-w', '6');
    newWidget.setAttribute('gs-min-h', '5');

    newWidget.innerHTML = `
        <div class="grid-stack-item-content">
            <div class="google-slide-container">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23C0CA33&mode=AGENDA&showTz=0&showTitle=0&showNav=0&showPrint=0&title&src=Y21pbGluZDMzQGdtYWlsLmNvbQ&src=bnRtYTRmZ3ZlYWdiMWVqZGtyNzZmdmc2dmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZmFtaWx5MTU1Mzg4MTY3NDU1NzgwMTA5MzZAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IuaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAyNDA3NzU2MDQxMjA5NTA1MTIxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23A79B8E&color=%23C0CA33&color=%237986CB&color=%230B8043&color=%23202124" 
    style="border: 2px solid #ddd; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); width: 100%; height: 600px; display: block;" 
    width="800" height="600" frameborder="0" scrolling="no">
</iframe>
     </div>
            <button class="remove-button">--------</button>
        </div>
    `;
    grid.addWidget(newWidget, { width: 4, height: 6 });

    initRemoveButton(newWidget);
}

function addGoogleSpreadsheetWidget() {
    const newWidget = document.createElement('div');
    newWidget.className = 'grid-stack-item';
    newWidget.setAttribute('gs-min-w', '6');
    newWidget.setAttribute('gs-min-h', '5');

    newWidget.innerHTML = `
        <div class="grid-stack-item-content">
            <div class="google-slide-container">
               <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQP3OrdLBjsENa5DTdWg-Bptl5fazSxvSHhk4EzcT7v7-AV-q7KABRD8Y5Ny61wFnOVLvrbat3QdGue/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            </div>
            <button class="remove-button">--------</button>
        </div>
    `;
    grid.addWidget(newWidget, { width: 4, height: 6 });

    initRemoveButton(newWidget);
}
function addchat() {
    const newWidget = document.createElement('div');
    newWidget.className = 'grid-stack-item';
    newWidget.setAttribute('gs-min-w', '3');
    newWidget.setAttribute('gs-min-h', '7');

    newWidget.innerHTML = `
            <div class="grid-stack-item-content">
                        <div class="google-slide-container">
<iframe src="chatbot.html" name="targetframe" allowTransparency="true" scrolling="yes" frameborder="0" >
    </iframe>                </div>
    <button class="remove-button">--------</button>
            </div>

    `;
    grid.addWidget(newWidget, { width: 4, height: 6 });

    initRemoveButton(newWidget);
}



    function addGoogleFormWidget() {
        const newWidget = document.createElement('div');
        newWidget.className = 'grid-stack-item';
        newWidget.setAttribute('gs-min-w', '4');
        newWidget.setAttribute('gs-min-h', '7');
    
        newWidget.innerHTML = `
            <div class="grid-stack-item-content">
                <div class="google-slide-container">
                   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdCWaNw8TsclvZ4uYATWZZlfItr3vcNcr7vI-KE0Lxa0eqhdw/viewform?embedded=true" width="640" height="1501" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>      </div>
                <button class="remove-button">--------</button>
            </div>
        `;
        grid.addWidget(newWidget, { width: 4, height: 6 });
    
        initRemoveButton(newWidget);
    }


    function addPomodoroTimerWidget() {
        const newWidget = document.createElement('div');
        newWidget.className = 'grid-stack-item';
        newWidget.setAttribute('gs-min-w', '3');
        newWidget.setAttribute('gs-min-h', '6');

        newWidget.innerHTML = `
        <div class="grid-stack-item-content">
                        <div class="google-slide-container">
<iframe src="focus-timer-master/timer.html" name="targetframe" allowTransparency="true" scrolling="yes" frameborder="0" >
    </iframe>                </div>
    <button class="remove-button">--------</button>
            </div>

        `;
        grid.addWidget(newWidget, { width: 2, height: 2 });

        initPomodoroTimerWidget(newWidget);
    }

    function addGoogleSlideWidget() {
        const newWidget = document.createElement('div');
        newWidget.className = 'grid-stack-item';
                newWidget.setAttribute('gs-min-w', '4');
        newWidget.setAttribute('gs-min-h', '5');
        newWidget.innerHTML = `
            <div class="grid-stack-item-content">
                <div class="google-slide-container">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTEitHpxPEStmzYEgstqn7Vncd7Rc9ihN6tF7XlV75GM8TCrs4gvmGUY4Q49RsYzIuJaEdSN9VwEtA0/embed?start=false&loop=true&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
                <button class="remove-button">--------</button>
            </div>
        `;
        grid.addWidget(newWidget, { width: 2, height: 2 });

        initRemoveButton(newWidget);
    }

    function addSpotifyWidget() {
        const newWidget = document.createElement('div');
        newWidget.className = 'grid-stack-item';
        newWidget.setAttribute('gs-min-w', '3');
        newWidget.setAttribute('gs-min-h', '5');
        newWidget.innerHTML = `
            <div class="grid-stack-item-content">
                <div class="spotify-container">
                    <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWMOmoXKqHTD" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <button class="remove-button">--------</button>
            </div>
        `;
        grid.addWidget(newWidget, { width: 2, height: 2 });

        initRemoveButton(newWidget);
    }

    function addNotionWidget() {
        const newWidget = document.createElement('div');
        newWidget.className = 'grid-stack-item';
        newWidget.setAttribute('gs-min-w', '4');
        newWidget.setAttribute('gs-min-h', '6');

        newWidget.innerHTML = `
            <div class="grid-stack-item-content">
                <div class="notion-container">
                    <iframe src="https://v2-embednotion.com/91557fd0005941a480212349cd26b5b2" style="width: 100%; height: 100%; border: none;"></iframe>
                </div>
                <button class="remove-button">--------</button>
            </div>
        `;
        grid.addWidget(newWidget, { width: 4, height: 3 });

        initRemoveButton(newWidget);
    }











//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






    function initPomodoroTimerWidget(container) {
        const minutesInput = container.querySelector('#minutes');
        const timerDisplay = container.querySelector('#timer-display');
        const startButton = container.querySelector('#start');
        const pauseButton = container.querySelector('#pause');
        const resetButton = container.querySelector('#reset');
        const removeButton = container.querySelector('.remove-button');

        let timer;
        let time;
        let isPaused = false;

        function updateDisplay() {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            timerDisplay.innerHTML = `${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
        }

        function startTimer() {
            time = parseInt(minutesInput.value) * 60;
            updateDisplay();

            timer = setInterval(() => {
                if (!isPaused) {
                    time--;
                    updateDisplay();

                    if (time <= 0) {
                        clearInterval(timer);
                        timerDisplay.innerHTML = 'Time’s up!';
                    }
                }
            }, 1000);
        }

        function pauseTimer() {
            isPaused = !isPaused;
            pauseButton.innerHTML = isPaused ? 'Resume' : 'Pause';
        }

        function resetTimer() {
            clearInterval(timer);
            timerDisplay.innerHTML = '25:00';
            minutesInput.value = '25';
            isPaused = false;
            pauseButton.innerHTML = 'Pause';
        }

        startButton.addEventListener('click', startTimer);
        pauseButton.addEventListener('click', pauseTimer);
        resetButton.addEventListener('click', resetTimer);
        removeButton.addEventListener('click', () => grid.removeWidget(container));
    }

    function initRemoveButton(container) {
        const removeButton = container.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            grid.removeWidget(container);
        });
    }














    
});
