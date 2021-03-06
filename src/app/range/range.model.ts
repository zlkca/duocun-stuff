export interface IRange {
  id?: string;
  name?: string;
  lat?: number;
  lng?: number;
  radius?: number; // m
  created?: Date;
  modified?: Date;
}

export class Range implements IRange {
  id?: string;
  name?: string;
  lat?: number;
  lng?: number;
  radius?: number; // m
  created?: Date;
  modified?: Date;
}
