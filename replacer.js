const elements = document.getElementsByTagName('*');

const replaceText = (element) => {

    var textNodes = Array.prototype.slice.call(element.childNodes).filter(node => node.nodeType === 3);

    textNodes.forEach(node => {
        
        const replacedText = node.nodeValue.replace(/virtue[ -]signa(l+)ing/gi, "caring about things I don't care about");

        if (replacedText !== node.nodeValue) {
            element.replaceChild(document.createTextNode(replacedText), node);
        }

    });

};

Array.prototype.slice.call(elements).forEach(replaceText);