import { Statuses } from '@app/core/lib/types/globals';

export interface KeyValueDTO {
  id: number;
  code: string;
  description: string;
  status: Statuses;
}

export interface SelectBoxData extends KeyValueDTO {
  disabled: boolean;
}
