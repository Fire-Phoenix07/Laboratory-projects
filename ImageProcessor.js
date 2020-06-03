// Объявление класса "Процессор обработки изображения"
class ImageProcessor {

    constructor(){
        this.image = null;
    }
//Фильтер "Градация серого"
    makeGray() {
        for (var pixel of this.image.values()) {
           var avg = pixel.getRed() * 0.3 + pixel.getGreen() * 0.59 + pixel.getBlue() * 0.11;
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
        }

        this._drawImage();
    }
//Фильтер "Сепия"
    sepia() {
        for (var pixel of this.image.values()) {
            var avg = pixel.getRed() * 0.3 + pixel.getGreen() * 0.59 + pixel.getBlue() * 0.11;
            pixel.setRed(avg + 100);
            pixel.setGreen(avg + 50);
            pixel.setBlue(avg);
        }

        this._drawImage();
    }
//Фильтер "Негатив"
    negativ() {
        for (var pixel of this.image.values()) {
            pixel.setRed(255 - pixel.getRed());
            pixel.setGreen(255 - pixel.getGreen());
            pixel.setBlue(255 - pixel.getBlue());
        }

        this._drawImage();
    }
//Фильтер "Добавление шума"
    addNoise() {
        for (var pixel of this.image.values()) {
            var rand =  (0.5 - Math.random()) * 100; // 100 - случайный фактор
            pixel.setRed(pixel.getRed()+rand);
            pixel.setGreen(pixel.getGreen() + rand);
            pixel.setBlue(pixel.getBlue()+rand);
        }

        this._drawImage();
    }

    _drawImage(){
        let canvas = document.getElementById("can");
        this.image.drawTo(canvas);
    }
}