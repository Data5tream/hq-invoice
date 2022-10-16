import { parse } from '@vanillaes/csv';

import type { UploadData } from '@/types';


/**
 * Parse the time string provided in the HQ CSVs
 *
 * @param timeStr
 */
const parseTime = (timeStr: string): number => {
  return Date.parse(`20${timeStr.substring(6, 8)}-${timeStr.substring(3, 5)}-${timeStr.substring(0, 2)} ${timeStr.substring(9, 14)}`);
};


/**
 * Parse the file binary into a data array
 *
 * Returns an array of our custom UploadData type
 *
 * @param rawData
 * @return {Array<UploadData>}
 */
const parser = (rawData: Array<number>): Array<UploadData> => {
  let binary = '';
  const bytes = new Uint8Array(rawData);
  const length = bytes.byteLength;
  for (let i = 0; i < length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  const data = parse(binary);

  const formatRow = data.shift();
  if (JSON.stringify(formatRow) !== '["Projekt","Aufgabe","Beschreibung","Startdatum","Enddatum","Arbeitszeit (hh:mm)"]') {
    console.log('format changed!!!');
    console.log(formatRow);
    return [];
  }

  return data.map(ele => ({
    project: ele[0],
    activity: ele[1],
    note: ele[2],
    startTime: parseTime(ele[3]),
    endTime: parseTime(ele[3]),
    duration: (parseTime(ele[4]) - parseTime(ele[3])) / 3600000,
  } as UploadData));
};

export default parser;
