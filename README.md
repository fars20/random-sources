![alt text](https://cdn.pixabay.com/photo/2012/04/05/01/24/dice-25637_1280.png)

# random-sources

random-sources is a JavaScript library that provides various functions to generate random numbers and series of numbers generally useful as test data for various libraries and applications

## Install

`npm install @fars20/random-sources@0.2.0`

`yarn add @fars20/random-sources@0.2.0`


## Usage

```javascript

import { generateTimeSeries } from 'random-sources';

const series = generateTimeSeries({
  from: "2019-09-18T20:00:00Z",
  to: "2019-09-18T22:00:20Z",
  precession: 1000, //optional
  sd: 1 //optional
});

// [['2019-09-18T20:00:00Z',1.5467],....]

series.forEach( dataPoint => {

  const [time,number] = dataPoint;
  console.log(time.toString(),number);
  
});
```

