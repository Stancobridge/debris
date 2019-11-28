/**
 * Module for working with html fragment 
 */

 class FragmentElement {
    
    constructor() {
        this.doc = '';
    }

    // Create fragment element
    create() {
        return document.createDocumentFragment()
    }

    // build html element from string and return it as node
    // when second parameter is passed, it must be a node, fragment or
    // real dom element, the new created element will be appended to 
    // the element in second parameter as a new child element
    buildElement(htmlString, into) {

        if(htmlString == '' || typeof htmlString != "string") return;

        let element = document.createElement('div');

        element.innerHTML = htmlString;

        const {childNodes} = element;

        console.log(childNodes[0].nodeName)

        if(childNodes.length > 1) {
            // handle Mutiple document creation

            
            
        } else if(childNodes.length == 1) {
            // handle single insertion
            return childNodes[0];
        }

    }

    removeElement(element) {
        return element.remove()
    }
 }


 module.exports.FragmentElement = FragmentElement