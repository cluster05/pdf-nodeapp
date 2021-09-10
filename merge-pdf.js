const PDFMerger = require("pdf-merger-js");

const merger = new PDFMerger()

async function merge(){
    merger.add("docs/sample1.pdf")
    merger.add("docs/sample2.pdf")
    
    await merger.save("mergedpdf.pdf")
}

merge()

