class DOMNodeCollection {
  constructor(elArr) {
    this.elArr = elArr;
  }

  html(string = null) {
    // debugger;
   if (string === null) {
      return this.elArr[0].innerHTML;
   } else {
     this.elArr.forEach (el => {
       el.innerHTML = string;
     })
   }
  }

  empty() {
    this.elArr.forEach(el => {
      el.innerHTML = "";
    })
  }

  append(arg) { 
    if (typeof arg === "string") {
      // debugger;
      this.elArr.forEach(el => {
        el.innerHTML += arg;
      })
    }


    if (arg instanceof HTMLElement) {
      arg = $l(arg);
    }


    if (arg instanceof DOMNodeCollection){
      this.elArr.forEach(el => {
        arg.elArr.forEach(argEl => {
          el.innerHTML += argEl.outerHTML;
        })
      })
    }
  
  }

  attr(name, value = null) {
    if (value === null) {
    return this.elArr[0].getAttribute(name);
    } else {
      this.elArr[0].setAttribute(name, value);
    }
  }

  addClass(value) {
    this.elArr.forEach(attr =>{
      attr.setAttribute('class', value)
    })
  }

  removeClass(name) {
    this.elArr.forEach(attr => {
      attr.classList.remove(name);
    })
  }

  children() {
    let childNodes = [];
    this.elArr.forEach(parentNode => {
      childNodes = childNodes.concat(parentNode.children);
    })
    return new DOMNodeCollection(childNodes);
  }

  parent() {
    let parents = [];
    this.elArr.forEach(childNode => {
      parents.push(childNode.parentNode);
    });
    // parentNode.push(this.elArr[0].parentNode);
    return new DOMNodeCollection(parents);
  }

  find(selector) {
    let allNodes = [];
    this.elArr.forEach(node => {
      // debugger;
      let foundNodes = Array.from(node.querySelectorAll(selector));
      if (foundNodes.length !== 0) {
        allNodes = allNodes.concat(foundNodes);
      }
    });
    return new DOMNodeCollection(allNodes);
  }

  remove() {
    this.elArr.forEach(node => {
      node.remove();
    })
  }
}

module.exports = DOMNodeCollection;