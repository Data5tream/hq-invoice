import type { UploadData } from '@/types';

const convertData = (rawData: Array<UploadData>, rate: number) => {
  const convertedData: Array<any> = [];

  rawData.forEach(raw => {
    const ele = convertedData.find(ele => ele.name === raw.project);
    if (ele) {
      ele.totalTime += raw.duration;
      ele.value += raw.duration * rate;
      ele.set.push(raw);
    } else {
      convertedData.push({ name: raw.project, totalTime: raw.duration, value: raw.duration * rate, set: [raw] });
    }
  });

  return convertedData.sort((a, b) => a.name === b.name ? 0 : a.name > b.name ? 1 : -1);
};

export default convertData;
