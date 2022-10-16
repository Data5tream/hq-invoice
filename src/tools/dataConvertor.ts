import type { PreparedData, UploadData } from '@/types';

const convertData = (rawData: Array<UploadData>, rate: number): Array<PreparedData> => {
  const convertedData: Array<PreparedData> = [];

  rawData.forEach(raw => {
    const ele = convertedData.find(ele => ele.name === raw.project);
    if (ele) {
      ele.totalTime += raw.duration;
      ele.value += raw.duration * rate;
      ele.sets.push(raw);
    } else {
      convertedData.push({ name: raw.project, totalTime: raw.duration, value: raw.duration * rate, sets: [raw] });
    }
  });

  return convertedData.sort((a, b) => a.name === b.name ? 0 : a.name > b.name ? 1 : -1);
};

export default convertData;
