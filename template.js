

function postIt(post, i, k) {

    return /*html*/`<div class="post-it-main-container">
    <div class="post-it-header">
        <img class="three-points" src="./img/3 Punkte.svg" alt="">
        <div class="post-it-header-container-right">
            <img class="profile-pic-small story-ring" src="${post['profilePic']}" alt="">
            <span class="post-it-header-profile-name"><b>${post['autor']}</b></span>
        </div>
        
    </div>
    <div class="post-it-img-container">
        <img class="post-it-img" src="${post['image']}" alt="">
    </div>
    
    <div class="comment-section">
        <div class="comment-section-icons">
            <div class="comment-section-icons-left">
                <img class="comment-section-icon-heart comment-section-icons-size" src="./img/Herz.svg" alt="">
                <img class="comment-section-icon-heart comment-section-icons-size" src="./img/sprechblase.svg" alt="">
                <img class="comment-section-icon-heart comment-section-icons-size" src="./img/flieger-icon.svg" alt="">
            </div>
            <div class="comment-section-icons-right">
                <img class="comment-section-icon-heart comment-section-icons-size" src="./img/viereck.icon.svg" alt="">
            </div>    
        </div>
        <div class="comment-section-like"><b>${post['likes']}</b></div>
        <div class="comment-section-username-and-description"><b>${post['autor']}</b> ${post['description']}</div>
        <div id="comment-section-comtens(${i})" class="comment-section-comtens">${post['comments']}</div>
        <div class="comment-section-time">${post['times']}</div>
        <div class="comment-section-input"> 
            <img class="comment-section-icon-smilie" src="./img/smilie.svg" alt=""><input id="comment-section-input-field${i}" class="comment-section-input-field" placeholder="Kommentieren...">
            <button onclick="addComment(${i})" class="comment-section-button">
            <b>Posten</b></button>
        </div>
       
    </div>
</div>`
}



function headPostContent(headPost) {
    
    return /*html*/`<div class="head-Post-Content-container">
                <img class="head-Post-profile-pic-small story-ring" src="${headPost['profilePic']}" alt="">
                <span class="head-Post-header-profile-name">${headPost['autor']}</span>
             </div>`;

}


function containerRightSide() {

    return /*html*/` <div class="my-profiel-container">
                <div class="my-profiel-for- pic-and-name-container">
                    <img class="my-profiel-pic" src="./img/IMG_2765.JPG" alt="">
                    <div class="my-profiel-name-container">
                        <span class="my-profiel-usernmae"><b>chrsitan_smile_</b></span>
                        <span class="my-profiel-name">Christian Gewandt</span>
                    </div>
                </div>
                <button  class="my-profiel-button">Wechseln</button>
             </div>
             <div class="suggestions-for-you-container">
                <span class="suggestions-for-you">Vorschläge für dich</span>
                <span class="view-all">Alle ansehen</span>
             </div>
             <div id="profile-suggestions-container" class="profile-suggestions-container">
                
             </div>
             `;
}


function recommendationHtml(recommendation, j) {

    return/*html*/ `
                    <div class="profile-suggestions">
                        <img class="profile-suggestions_pic" src="${recommendation['image']}" alt="">
                        <div class="profile-suggestions-name-container">
                            <span class="profile-suggestions-username">${recommendation['username']}</span>
                            <span class="profile-suggestions-name">${recommendation['subtext']}</span>
                        </div>
                        <div id="follow-or-followed${j}" >
                            <div onclick="followed(${j})" class="follow">Folgen</div> 
                        </div>
                    </div>
    `;

}




function leftSide() {

    return /*html*/`    
                    <div class="left-side-container">
                        <div class="left-side-top-container">
                            <div class="left-side-logo-container">
                                <img  class="left-side-logo" src="./img/Instacam.svg" alt="">
                            </div>
                            <div class="left-side-content-container">
                                <img class="left-side-icon" src="./img/startseite.png" alt="">
                            <div class="left-side-content">Startseite</div>
                            </div>
                            <div class="left-side-content-container">
                                <img class="left-side-icon" src="./img/suche.png" alt="">
                            <div class="left-side-content">Suche</div>
                            </div>
                            <div class="left-side-content-container">
                                <img class="left-side-icon" src="./img/kompass.png" alt="">
                            <div class="left-side-content">Entdekcen</div>
                            </div>
                            <div class="left-side-content-container">
                                <img class="left-side-icon" src="./img/video.png" alt="">
                            <div class="left-side-content">Reels</div>
                            </div>
                            <div class="left-side-content-container">
                                <img class="left-side-icon" src="./img/flieger-icon.svg" alt="">
                            <div class="left-side-content">Nachrichten</div>
                            </div>
                            <div class="left-side-content-container">
                                <img class="left-side-icon" src="./img/Herz.svg" alt="">
                                <div class="left-side-content">Benachrichtigungen</div>
                            </div>
                            <div class="left-side-content-container">
                                <img class="left-side-icon" src="./img/tab.png" alt="">
                            <div class="left-side-content">Erstellen</div>
                            </div>
                            <div class="left-side-content-container">
                                <img class="left-side-icon left-side-profil-pic" src="./img/IMG_2765.JPG" alt="">
                                <div class="left-side-content">Profil</div>
                            </div>
                        </div>
                        <div class="left-side-content-bottom-container">
                        <div class="left-side-content-container more-container">
                                <img class="left-side-icon" src="/img/Mehr.png" alt="">
                                <div class="left-side-content">Mehr</div>
                            </div>
                        </div>
                    </div>
            `;
}



function mobileMenueHtml() {

   return /*html*/`

    <div class="mobile-menue-container">
      <img class="mobile-menue-icon" src="./img/startseite.png">
      <img class="mobile-menue-icon" src="./img/kompass.png">
      <img class="mobile-menue-icon" src="img/video.png">
      <img class="mobile-menue-icon" src="img/tab.png">
      <img class="mobile-menue-icon" src="./img/flieger-icon.svg">
      <img class="mobile-menue-icon mobile-menue-icon-profile-pic" src="./img/IMG_2765.JPG" >
    </div>
    `
    
    
}