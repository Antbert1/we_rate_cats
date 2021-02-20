// Compress the uploaded image
export function compressToLimit(image) {
    var fileSize = image.bitmap.data.length;
    if (fileSize > 100000) return (100000 / fileSize) * 100;
    else return 100;
}
