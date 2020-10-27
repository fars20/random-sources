# random-sources

random-sources is a JavaScript library that provides various functions to generate random numbers and series of numbers generally useful as test data for various libraries and applications

## Install

`npm install @fars20/random-sources`

`yarn add @fars20/random-sources`


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

