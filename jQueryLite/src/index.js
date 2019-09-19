import DOMNodeCollection from './dom_node_collection';
Window.prototype.$l = function(selector) {
  
  if (selector instanceof HTMLElement) {
    let argsArr = [selector];
    return new DOMNodeCollection(argsArr);
  } else {
    const selected = document.querySelectorAll(selector);
    let arr = Array.from(selected);
    return new DOMNodeCollection(arr);
  }
  
};

