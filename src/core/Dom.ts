class Dom {

}
export function $() {
    return new Dom();
}
$.create = (tagName:string, className = '') => {
    const el = document.createElement(tagName);
    if(className) {
        el.classList.add(className)
    }
    return el
}