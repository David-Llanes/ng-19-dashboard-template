import { Statuses } from '@app/core/lib/types/globals';
import { KeyValueDTO, SelectBoxData } from '../models/selectbox-data';

export class SelectBoxDataAdapter {
  static fromApi(data: KeyValueDTO): SelectBoxData {
    return {
      id: data.id,
      code: data.code ?? '',
      description: data.description,
      status: data.status,
      disabled: data.status !== Statuses.Active,
    };
  }

  static fromApiArray(dataArray: KeyValueDTO[]): SelectBoxData[] {
    return dataArray.map(data => SelectBoxDataAdapter.fromApi(data));
  }
}
