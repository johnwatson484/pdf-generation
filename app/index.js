const PdfPrinter = require('pdfmake')
const fs = require('fs')
const statement = require('./mock-statement-data')
const fonts = require('./fonts')
const styles = require('./styles')
const generateContent = require('./generate-content')

const printer = new PdfPrinter(fonts)

const docDefinition = {
  pageSize: 'A4',
  content: generateContent(statement),
  styles
}

const pdfDoc = printer.createPdfKitDocument(docDefinition)
pdfDoc.pipe(fs.createWriteStream('app/pdfs/payment-statement.pdf'))
pdfDoc.end()
