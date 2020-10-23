import { erf } from 'mathjs';

/**
 * This file contains functions to create
 * Gaussian distribution and density functions
 */


/**
 *
 * @param sd - standard deviation
 * @param m - mean
 * @return {function(*): *} Gaussian probability density function
 */
export const createGaussianPDF = ({sd,m}) => {
  return (x) => {
    const exp =  (-0.5)*(x-m/sd)*(x-m/sd);
    return (1/(sd*Math.sqrt(2*Math.PI)))*Math.exp(exp);
  }
}

/**
 *
 * @param sd - standard deviation
 * @param m - mean
 * @return {function(*): *} Gaussian cumulative probability distribution function
 * based on this answer https://stackoverflow.com/a/41638885/1871386
 */
export const createGaussianCDF = ({sd,m}) => {
  return (x) => {
    return (1 - erf((m - x ) / (Math.sqrt(2) * sd))) / 2;
  }
}
