const { Jimp } = require('jimp');
const path = require('path');

async function processImage() {
    try {
        const inputPath = path.join(process.cwd(), 'public/images/al-ryanne-gatcho.png');
        const outputPath = path.join(process.cwd(), 'public/images/al-ryanne-gatcho-v3.png');
        const image = await Jimp.read(inputPath);

        const w = image.bitmap.width; // 682
        const h = image.bitmap.height; // 1024

        // Grab background color from top leftish area
        const bgColor = image.getPixelColor(10, 10);

        // Make a square canvas equal to the image's height.
        // This ensures the entire height fits in a 1:1 circle perfectly!
        const size = h; 

        let newImage;
        try {
            // Try new API
            newImage = new Jimp({ width: size, height: size, color: bgColor });
        } catch(e) {
            // Fallback for older Jimp API
            newImage = new Jimp._Jimp(size, size, bgColor);
        }

        // Center horizontally
        const offsetX = Math.floor((size - w) / 2);
        
        // They requested it "a little up".
        // If we want the face higher, we place the image closer to the top.
        // Let's place it slightly down from the top edge so the head isn't touching the border.
        const offsetY = Math.floor(size * 0.05); // 5% from top

        newImage.composite(image, offsetX, offsetY);

        await newImage.write(outputPath);
        console.log('Successfully saved squared image to: ' + outputPath);
    } catch (err) {
        console.error('Error:', err);
    }
}

processImage();
