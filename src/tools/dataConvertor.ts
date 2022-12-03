import type { PreparedData, UploadData } from '@/types';

const convertData = (rawData: Array<UploadData>, rate: number): Array<PreparedData> => {
  const convertedData: Array<PreparedData> = [];

  rawData.forEach(raw => {
    const ele = convertedData.find(ele => ele.name === raw.project);
    // round number to 2 decimal points
    const duration = Number(raw.duration.toFixed(2));
    if (ele) {
      ele.totalTime += duration;
      ele.value += duration * rate;
      ele.sets.push(raw);
    } else {
      convertedData.push({ name: raw.project, totalTime: duration, value: duration * rate, sets: [raw] });
    }
  });

  return convertedData.sort((a, b) => a.name === b.name ? 0 : a.name > b.name ? 1 : -1);
};

export default convertData;
