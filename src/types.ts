export interface UploadFile {
  tmpId: string,
  lastModified: number,
  name: string,
  size: number,
  type: string,
  sourceFile: File,
  previewSrc: string,
  previewError: number,
}

export interface UploadData {
  project: string,
  activity: string,
  note: string,
  startTime: number,
  endTime: number,
  duration: number,
}
