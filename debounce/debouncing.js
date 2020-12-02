let counter = 1;

function getSugestions() {
    document.querySelector(".result").innerHTML = `<b style ="color:#ffaa00"> get suggestions fired: ${counter++}</b>`;
}

function debounce(fn, delay) {
    let timer;
    return function () {

        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);

    }
}

const getSugestionsUsingDebounce = debounce(getSugestions, 500);