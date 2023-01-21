// type OptionsProps = {

// };

export type CarProps = {
  [key: string]: string;
  name: string;
  id: string;
  color: string;
};

export type CarData = {
  name: string;
  id: string;
  color: string;
};

export type GetCarsResponse = {
  data: CarData[];
  totalCount: number;
};

export type EnginResponse = {
  velocity: number;
  distance: number;
};
