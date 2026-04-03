/* eslint-disable @typescript-eslint/no-require-imports */
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../public/GUIDELINES.pdf');

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream(outputPath));

doc.fontSize(25).text('Submission Guidelines', {
    align: 'center'
});

doc.moveDown();

doc.fontSize(12).text(`
1. Prepare Abstract
Submit an abstract of 250-300 words with 5-6 keywords. Follow APA 7th Edition style.

2. Submit for Review
Send your abstract via email to the conference committee. All submissions undergo double-blind peer review.

3. Wait for Acceptance
Notifications of acceptance will be sent via email by the specified date.

4. Full Paper Submission
Upon acceptance, submit the full paper (max 6000 words) adhering to formatting guidelines.

5. Registration
Complete the registration process after your paper is accepted to confirm your participation.
`, {
    align: 'left'
});

doc.end();

console.log('PDF generated at ' + outputPath);
