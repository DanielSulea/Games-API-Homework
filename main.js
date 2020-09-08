var root = 'https://games-app-siit.herokuapp.com/games/';
$(function(){
    initEvents();
    doFetch();
   
});

function initEvents() {
    let $updateGame = $('#updateGame');
    $updateGame.on('click', doPut);
}

function doFetch() {
    fetch(root, {
        method: 'GET'
    }).then(function(response){
        return response.json();
    }).then(function(jsonResp) {
        console.log(jsonResp);
        var html = jsonResp.map(function(game) {
            return `
                <div class="game">
                    <p><img src="${game.imageUrl} " alt="Avatar" style="width:100%"></p>
                    <p><b>${game.title}</b></p>
                    <p>${game.description}</p>
                </div>
            `;
        });
        //console.log(html);
        document.querySelector('#gameDetails');
    }); 
}

function doPut() {
fetch(root + '5f56540caa9f8d0020a5b401', {
    method:'PUT',
    body:JSON.stringify({
        title: 'new title'
    })
}).then(function(response){
    //debugger
    return response.json();
}).then(function(resp) {
    console.log(resp); 
});
}