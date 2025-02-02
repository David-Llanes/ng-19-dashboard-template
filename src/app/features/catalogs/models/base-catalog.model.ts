import { Statuses } from '@app/core/lib/types/globals';

export interface BaseCatalog {
  id: number;
  description: string;
  status: Statuses;
}
