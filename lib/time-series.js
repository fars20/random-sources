/**
 * This function generates  a random time series for
 * a given time interval with given precession,standard deviation, etc....
 */
import { generateRandomNumbers } from './random-sd';
import { getUnixTime,addMilliseconds,parseISO,getTime } from 'date-fns';

export const generateTimeSeries = ({
    from,
    to,
    precession, // in milliseconds
    sd
  }) => {

  const milliSecondsFrom = getTime(parseISO(from));
  const milliSecondsTo = getTime(parseISO(to));
  const duration = milliSecondsTo - milliSecondsFrom;
  const numberOfSamples = duration/precession;

  const timeArray = new Array(Math.floor(numberOfSamples))
    .fill(1)
    .map((i,index) =>{
      return addMilliseconds(parseISO(from),index*precession);
  });

  const randomNumbers = generateRandomNumbers({
    sd,
    length: timeArray.length
  });

  return timeArray.map((time,index)=>{
    return [time,randomNumbers[index]];
  });
};
