const marked = require("marked");
const { JSDOM } = require("jsdom");

// const mdHTML = marked(content);
// const { window } = new JSDOM(mdHTML);
// const link = window.document.querySelector('a');
// const linkText = link.textContent;
// const linkURL = link.href.includes('http://');

//************************
// Web Scraping and Parsing HTML in Node.js with jsdom
//************************

// got(vgmUrl).then(response => {
//     const dom = new JSDOM(response.body);
//       dom.window.document.querySelectorAll('a').forEach(link => {
//       console.log(link.href);
//     });
//   }).catch(err => {
//     console.log(err);
//   });

// const isMidi = (link) => {
//     // Return false if there is no href attribute.
//     if(typeof link.href === 'undefined') { return false }
//     return link.href.includes('.mid');
//   };

// Create an Array out of the HTML Elements for filtering using spread syntax.
// const nodeList = [...dom.window.document.querySelectorAll('a')];
