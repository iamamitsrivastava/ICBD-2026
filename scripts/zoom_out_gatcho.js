const { Jimp } = require('jimp');
const path = require('path');

async function processImage() {
    try {
        const inputPath = path.join(process.cwd(), 'public/images/al-ryanne-gatcho.png');
        const outputPath = path.join(process.cwd(), 'public/images/al-ryanne-gatcho-v2.png');
        const image = await Jimp.read(inputPath);

        const w = image.bitmap.width;
        const h = image.bitmap.height;

        // Find the color of the background (e.g., pixel near top-left)
        const bgColor = image.getPixelColor(10, 10);

        // We want to "zoom out" by making the canvas 25% larger,
        // filling the extra space with the background color.
        const newW = Math.floor(w * 1.25);
        const newH = Math.floor(h * 1.25);

        // We create a new empty image with this background color
        let newImage;
        try {
            newImage = new Jimp({ width: newW, height: newH, color: bgColor });
        } catch(e) {
            // fallback for older jimp versions
            newImage = new Jimp._Jimp(newW, newH, bgColor);
        }

        // Paste the original image centered horizontally, and pushed slightly down vertically
        // so his head has more room above it (which gets cropped into the circle).
        const offsetX = Math.floor((newW - w) / 2);
        const offsetY = Math.floor((newH - h) * 0.65); // pushed down so 65% of the extra space is above him

        newImage.composite(image, offsetX, offsetY);

        await newImage.write(outputPath);
        console.log('Successfully zoomed out and saved to ' + outputPath);
    } catch (err) {
        console.error('Error:', err);
    }
}

processImage();
