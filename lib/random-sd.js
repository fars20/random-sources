/**
 * This function generates an array of random variables
 * with given length and standard deviation
 */
const { standardDeviation, mean} = require('simple-statistics');

/**
 *
 * @param sd - standard deviation
 * @param length
 * @return {randomNumbers[]}
 */
export const generateRandomNumbers = ({ sd,length }) => {
  const randomNumbers = new Array(length).fill(1).map(() => {
    return Math.random();
  });
  const defaultSD = standardDeviation(randomNumbers);
  const defaultMean = mean(randomNumbers);

  return randomNumbers.map((number)=>{
    return sd * (number - defaultMean) / defaultSD + defaultMean;
  });
};
