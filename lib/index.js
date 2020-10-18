import { useState, useEffect } from 'react';
import { interval } from 'rxjs';


if (!window.source) {
  window.source = interval(1000);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(10) + 50);
}

export const useRandomNumber = ({ initial = 0, time }) => {

  const [number, setNumber] = useState({ number: initial });

  useEffect(() => {
    const subscriber = window.source
      .subscribe(val => setNumber({ number: getRandomInt(100) }));
    return () => {
      subscriber.unsubscribe();
      console.log("unmounted");
    }
  }, []);

  return number;
};

export const useRandomNumbersArray = ({
                                        interval = 1000,
                                        initial = 0,
                                      }) => {

  const number = useRandomNumber({
    initial,
    time: interval,
  });

  const [movingArray, setMovingArray] = useState(new Array(100).fill(1));

  useEffect(() => {
    const [ignore, ...newArray] = movingArray.concat(number.number);
    setMovingArray(newArray);
    return function () {

    }
  }, [number]);

  return movingArray;
};
