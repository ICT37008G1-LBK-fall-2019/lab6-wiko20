function removeChildren(elem) {
    let children = elem.children;

    while(children.length > 0) {
        elem.removeChild(children.item(0));
    }
}

let container = document.querySelector('#container');
removeChildren(container);

