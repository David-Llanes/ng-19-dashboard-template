export interface ResponseDTO<T> {
  data: T | T[];
  success: boolean;
  message: string;
  innerExceptionMessage: string;
}

export enum Statuses {
  Inactive = 0,
  Active = 1,
  Deleted = 2,
}
