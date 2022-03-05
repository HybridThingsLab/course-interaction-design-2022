### Serial API to communicate between P5.js and Arduino
The [Serial API](https://web.dev/serial/) provides a way for websites to read from and write to a serial device with JavaScript. Currently this feature is an "experimental" feature in Google Chrome. To experiment with the Serial API locally on all desktop platforms, without an origin trial token, enable the ```experimental-web-platform-features``` flag opening [chrome://flags](chrome://flags) in your browser.

![serialAPI](docs/serialAPI.jpg)


### Funken - Serial protocol toolkit Library
We use the amazing [Funken library](https://github.com/astefas/Funken) to send all kind of variables (also text, numbers...) and also multiple of them back and forth. Find further informations to install additional Arduino Libraries [here](https://www.arduino.cc/en/Guide/Libraries).

# Examples

## 01 send a sensor value from Arduino to p5.js
live demo [01_serial_read_singleValue](https://hybridthingslab.github.io/course-interaction-design-2021/Block_III/Arduiuno_p5js/p5js/01_serial_read_singleValue)

|[code p5.js](https://github.com/HybridThingsLab/course-interaction-design-2021/tree/master/Block_III/Arduiuno_p5js/p5js/01_serial_read_singleValue)|[code Arduino](https://github.com/HybridThingsLab/course-interaction-design-2021/tree/master/Block_III/Arduiuno_p5js/Arduino/01_serial_write_singleValue)|
:-------------------------:|:-------------------------:
![01_01](docs/01_p5js.jpg)|![01_02](docs/01_Arduino.jpg)

## 02 send a value from p5.js to Arduino
live demo [02_serial_write_singleValue](https://hybridthingslab.github.io/course-interaction-design-2021/Block_III/Arduiuno_p5js/p5js/02_serial_write_singleValue)

|[code p5.js](https://github.com/HybridThingsLab/course-interaction-design-2021/tree/master/Block_III/Arduiuno_p5js/p5js/02_serial_write_singleValue)|[code Arduino](https://github.com/HybridThingsLab/course-interaction-design-2021/tree/master/Block_III/Arduiuno_p5js/Arduino/02_serial_read_singleValue)|
:-------------------------:|:-------------------------:
![02_01](docs/02_p5js.jpg)|![02_02](docs/02_Arduino.jpg)

## 03 send two sensor values from Arduino to p5.js
live demo [03_serial_read_multipleValues](https://hybridthingslab.github.io/course-interaction-design-2021/Block_III/Arduiuno_p5js/p5js/03_serial_read_multipleValues)

|[code p5.js](https://github.com/HybridThingsLab/course-interaction-design-2021/tree/master/Block_III/Arduiuno_p5js/p5js/03_serial_read_multipleValues)|[code Arduino](https://github.com/HybridThingsLab/course-interaction-design-2021/tree/master/Block_III/Arduiuno_p5js/Arduino/03_serial_write_multipleValues)|
:-------------------------:|:-------------------------:
![03_01](docs/03_p5js.jpg)|![03_02](docs/03_Arduino.jpg)

## 04 send two values from p5.js to Arduino
live demo [04_serial_write_multipleValues](https://hybridthingslab.github.io/course-interaction-design-2021/Block_III/Arduiuno_p5js/p5js/04_serial_write_multipleValues)

|[code p5.js](https://github.com/HybridThingsLab/course-interaction-design-2021/tree/master/Block_III/Arduiuno_p5js/p5js/04_serial_write_multipleValues)|[code Arduino](https://github.com/HybridThingsLab/course-interaction-design-2021/tree/master/Block_III/Arduiuno_p5js/Arduino/04_serial_read_multipleValues)|
:-------------------------:|:-------------------------:
![04_01](docs/04_p5js.jpg)|![04_02](docs/04_Arduino.jpg)

## 05 send multiple values back and forth p5.js and Arduino
live demo [05_serial_write_read_multipleValues](https://hybridthingslab.github.io/course-interaction-design-2021/Block_III/Arduiuno_p5js/p5js/05_serial_write_read_multipleValues)

|[code p5.js](https://github.com/HybridThingsLab/course-interaction-design-2021/tree/master/Block_III/Arduiuno_p5js/p5js/05_serial_write_read_multipleValues)|[code Arduino](https://github.com/HybridThingsLab/course-interaction-design-2021/tree/master/Block_III/Arduiuno_p5js/Arduino/05_serial_write_read_multipleValues)|
:-------------------------:|:-------------------------:
![05_01](docs/05_p5js.jpg)|![05_02](docs/05_Arduino.jpg)

## 06 send messages from p5.js to Arduino / LCD screen
live demo [06_serial_write_to_LCD](https://hybridthingslab.github.io/course-interaction-design-2021/Block_III/Arduiuno_p5js/p5js/06_serial_write_to_LCD)

|[code p5.js](https://github.com/HybridThingsLab/course-interaction-design-2021/tree/master/Block_III/Arduiuno_p5js/p5js/06_serial_write_to_LCD)|[code Arduino](https://github.com/HybridThingsLab/course-interaction-design-2021/tree/master/Block_III/Arduiuno_p5js/Arduino/06_serial_read_to_LCD)|
:-------------------------:|:-------------------------:
![06_01](docs/06_p5js.jpg)|![06_02](docs/06_Arduino.jpg)