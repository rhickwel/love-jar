
let categories = {
    'Messages': [
        'I will always choose u, even at the days we don\'t understand each other.',
        'You\'re my favorite. My favorite pair of eyes to look into. My favorite void to listen to. My favorite name to appear on my phone, My favorite way to spend an afternoon. You\'re my favorite everything',
        'Thank you for giving me such wonderful memories, thank you for loving me back, thank you for showing me wisdom that changed me as a person, and thank you for everything.',
        'Every time I see your cute face, a million sparks rush through me. My heart becomes filled with so much love that I can\'t even breathe. I see you in my every thought, in my every dream, just like the most precious rose. You are all I have ever wanted and more.',
        'I know I don\'t show it sometimes, but I\'m grateful for you. For every little thing you do. I need you to know that I appreaciate you always. 24/7. I can\'t stress enough how you\'ve changed my life, and I\'ll sped forever and a day trying to thank you.',
        'I am so in love with you that when we are apart from each other, my heart aches. I count the days, hours, minutes, seconds till we would see each other again. I check my phone a hundred times just in case I missed your chats and calls. I look at your pictures every minute and every second so that I couse see your cute face. Every detail of the last time we were together runs through my head, what you were wearing, every word you spoke, how you smelled, the feeling of your skin, the smile you gave me, the food we ate, and the stories we shared. Yup, I am in love with you no doubt about it.',
        'The very thought of you would fill me with joy and happiness. I would always look forward to the next time I could see that beautiful face or hear you sweet voice.',
        'I want to improve myself as best I could in every way because I didn\'t want to offer you anything less.',
        'I love you so much and felt loved by you in a way that seemed the world would be a much darker place if we didn\'t have each other.'
        ],
    'Random videos': [],
    'Random pictures': []
}

// load random images
for (let i = 1; i <= 52; i++) {
    categories['Random pictures'].push('./assets/images/random-pictures/img' + i + '.jpg');
}

// load videos
for(let i = 1; i <= 2; i++) {
    categories['Random videos'].push('./assets/videos/vid' + i + '.mp4');
}

// get the modal
var modal = document.getElementById("myModal");

// get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let tag = document.getElementById('tag');
let modalTitle = document.getElementById("modal-title");
let modalContent;

function openModal() {
    let randomCategory = Object.keys(categories)[Math.floor(Math.random() * Object.keys(categories).length)];
    modalTitle.textContent = randomCategory;    

    switch(randomCategory) {
        case 'Messages':
            tag.setAttribute('class', 'circle red');
            break;
        case 'Random pictures':
            tag.setAttribute('class', 'circle green');
            break;
        case 'Random videos':
            tag.setAttribute('class', 'circle blue');
            break;

    }

    let randomItem = categories[randomCategory][Math.floor(Math.random() * categories[randomCategory].length)];
    switch(randomCategory) {
        case 'Messages':
            modalContent = document.createElement('p');
            modalContent.textContent = randomItem;
            modalContent.setAttribute('class', 'modal-content-paragraph')

            break;
        case 'Random pictures':
            modalContent = document.createElement('a');
            modalContent.href = randomItem;
            modalContent.target = "_blank";
    
            let img = document.createElement('img');
            img.src = randomItem;
            img.setAttribute('class', 'modal-content-img')
            
            modalContent.appendChild(img);

            break;
        case 'Random videos':
            modalContent = document.createElement('div');

            let video = document.createElement('video');
            video.controls = true;
            video.autoplay = true;
            video.setAttribute('class', 'modal-content-video');
            
            let source = document.createElement('source');
            source.src = randomItem;
            source.type = 'video/mp4';
            
            video.appendChild(source);
            modalContent.appendChild(video);

            break;
    }

    const modalMain = document.querySelector('.modal-main');
    modalMain.innerHTML = '';
    modalMain.appendChild(modalContent);
    

    modal.style.display = "block";
}

function pauseVideo() {
    const video = document.querySelector('.modal-content-video');
    if (video) {
        video.pause();
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    pauseVideo();
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        pauseVideo();
        modal.style.display = "none";
    }
}