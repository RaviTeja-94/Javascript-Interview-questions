let counter = 1;

function expensiveFunction() {
    document.querySelector(".result").innerHTML = `<b style ="color:#ffaa00"> np. of times an expensive call is made ${counter++}</b>`;
}

function throttle(fn, delay) {
    let flag = true;
    return function () {
        let context = this;
        let args = arguments;
        if (flag) {
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }

    }

}



const throttledExpensiveFunction = throttle(expensiveFunction, 1000);

window.addEventListener("resize", throttledExpensiveFunction);