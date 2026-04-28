const fs = require('fs');
const pdf = require('pdf-parse');

async function readPdfs() {
    try {
        const data1 = await pdf(fs.readFileSync('DWResume.pdf'));
        console.log('--- DWResume.pdf ---');
        console.log(data1.text);
    } catch (e) {
        console.error('Error reading DWResume.pdf:', e);
    }
    try {
        const data2 = await pdf(fs.readFileSync('KobyMillerResume.pdf'));
        console.log('--- KobyMillerResume.pdf ---');
        console.log(data2.text);
    } catch (e) {
        console.error('Error reading KobyMillerResume.pdf:', e);
    }
}
readPdfs();
