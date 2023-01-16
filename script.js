
function load() {
    render();
    headPost();
    renderRecommendations();
    mobileMenue();
}



function render() {
    

   
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('content-post-container').innerHTML += postIt(post, i);
        document.getElementById(`comment-section-comtens(${i})`).innerHTML = '';

        
    for (let k = 0; k < post['comments'].length; k++) {
        const comment = post['comments'][k];
         
        document.getElementById(`comment-section-comtens(${i})`).innerHTML +=/*html*/ `<div class="comment-section-comtens-card"><b>chrsitan_smile_: </b>${comment}
                                                                                                            <div class="comment-section-comtens-card-button">
                                                                                                                <button onclick="deleteComment(${i})">X</button>
                                                                                                            </div>
                                                                                                       </div>`;
        }

    }

    document.getElementById('sidebar-container').innerHTML = leftSide();
    
}


function headPost() {

    for (let l = 0; l < posts.length; l++) {
        const headPost = posts[l];
        
        document.getElementById('head-post-container').innerHTML += headPostContent(headPost);
    }

    
}

function addComment(i) {
    let post = posts[i]
    let input = document.getElementById(`comment-section-input-field${i}`);
    post['comments'].push(input.value);
    document.getElementById(``);
    render();
    save();
    
}



function deleteComment(i) {
    let post = posts[i]
    post['comments'].splice(i, 1); 
    render();
    save();
}




function renderRecommendations() {

    document.getElementById('right-info-container').innerHTML = containerRightSide();

    for (let j = 0; j < recommendations.length; j++) {
        const recommendation = recommendations[j];

        document.getElementById('profile-suggestions-container').innerHTML += recommendationHtml(recommendation, j);
         
    }
  
}  



function save() {
    let postComment = JSON.stringify(posts);
    localStorage.setItem('posts', postComment);
}


function loadPosts(l) {
    let postComment = localStorage.getItem('posts');
    posts[l] = JSON.parse(postComment);
}



function mobileMenue() {

    document.getElementById('mobile-menue').innerHTML = mobileMenueHtml() ;
}




function followed(i) {

     document.getElementById(`follow-or-followed${i}`).innerHTML = `<div onclick="follow(${i})" class="follow">Gefolgt</div>`;
}


function follow(i) {

    document.getElementById(`follow-or-followed${i}`).innerHTML = `<div onclick="followed(${i})" class="follow">Folgen</div>`;
}



