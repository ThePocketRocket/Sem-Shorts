// Remove botão "Shorts" do menu lateral
function removeShortVideosButton() {
    const shortButton = document.querySelectorAll('ytd-guide-entry-renderer')[1];
    if ((shortButton != undefined) && shortButton.children[0].children[0].children[2].textContent == 'Shorts') {
        shortButton.style.display = 'none';
    }
}

// Remove seletor de Shorts
function removeShortVideosSelector() {
    if (!window.location.href.startsWith("https://www.youtube.com/watch")) {
        const shorts = document.querySelectorAll('ytm-shorts-lockup-view-model-v2');
        shorts.forEach(short => {
            if (shorts){
                short.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
            }
        })
    }
}

// Remove seletor de Shorts dentro de páginas Watch
function removeShortVideosSelectorFromWatch() {
    const shortsSlider = document.querySelectorAll('ytd-reel-shelf-renderer');
    shortsSlider.forEach(short => {
        if(shortsSlider) {
            short.style.display = 'none';
        }
    })
}

// Remove Shorts em buscas
function removeShortVideosFromSearches() {
    if (window.location.href.startsWith('https://www.youtube.com/results')) {
        // Remove do conteúdo principal
        const shorts = document.querySelectorAll('a[href^="/shorts/"]');
        if (shorts) {
            shorts.forEach(short => {
                short.parentElement.parentElement.parentElement.style.display = 'none' ; 
            })
        }

        // Remove do conteúdo lateral
        const verticalShorts = document.querySelector('ytd-secondary-search-container-renderer');
        if (verticalShorts) {
            verticalShorts.style.display = 'none';
        }
    }
}

// Observa se houve alteração no corpo da página
const observer = new MutationObserver(() => {
    removeShortVideosButton();
    removeShortVideosSelector();
    removeShortVideosSelectorFromWatch();
    removeShortVideosFromSearches();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});