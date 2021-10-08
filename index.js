const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
 
app.use(express.static('public'));
 
app.get('/', (req, res) => {
    res.send('Hello World!');
});
 
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

let magSensor = new Magnetometer({frequency: 60});

magSensor.addEventListener('reading', e => {
  console.log("Magnetic field along the X-axis " + magSensor.x);
  console.log("Magnetic field along the Y-axis " + magSensor.y);
  console.log("Magnetic field along the Z-axis " + magSensor.z);
})
magSensor.addEventListener('error', event => {
  console.log(event.error.name, event.error.message);
})
magSensor.start();