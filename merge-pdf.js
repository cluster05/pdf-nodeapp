const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

(async () => {
  merger.add('documents/pdf/sample1.pdf');  
  merger.add('documents/pdf/sample2.pdf');  

  await merger.save('documents/pdf/sample3.pdf'); 
})();