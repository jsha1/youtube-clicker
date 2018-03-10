console.log('you\'r in the world of content.js');
window.addEventListener ("load", myMain, false);

var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if( MutationObserver ){
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer){
                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                    callback();
            });
            // have the observer observe foo for changes in children
            obs.observe( obj, { childList:true, subtree:true });
        }
        else if( eventListenerSupported ){
            obj.addEventListener('DOMNodeInserted', callback, false);
            //obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    };
})();

function myMain(){
    // Observe a specific DOM element:
    observeDOM( document.getElementsByClassName('video-ads')[0] ,function(){ 
    console.log('dom changed');
    //document.getElementById('movie_player').click();

    let skip = document.getElementsByClassName("videoAdUiSkipButton")[0];
    if(skip){
      skip.click();
    }
  });
}
