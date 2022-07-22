const PdfPrinter = require('pdfmake')
const fs = require('fs')
const statement = require('./mock-statement-data')
const fonts = require('./fonts')
const styles = require('./styles')
const getStatementContent = require('./get-statement-content')

const printer = new PdfPrinter(fonts)

const docDefinition = {
  pageSize: 'A4',
  content: getStatementContent(statement),
  styles
}

const pdfDoc = printer.createPdfKitDocument(docDefinition)
pdfDoc.pipe(fs.createWriteStream('app/pdfs/basics.pdf'))
pdfDoc.end()
