// import { HttpClient, HttpParams } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { environment } from '@env/environment';
// import { CustomStore } from 'devextreme/common/data';
// import { LoadOptions } from 'devextreme/data';
// import { firstValueFrom, Observable } from 'rxjs';

// import { BaseCatalog } from '../models/base-catalog.model';
// import { KeyValueDTO, SelectBoxData } from '../models/selectbox-data';
// import { SelectBoxDataAdapter } from '../adapters/selectbox-data.adapter';

// type LoadOptionsKeys = keyof LoadOptions;

// export abstract class CatalogsNewService<T extends BaseCatalog> {
//   protected http = inject(HttpClient);
//   protected baseUrl = environment.CATALOGS_NEW_BASE_URL;
//   protected abstract endpoint: string;

//   getDataSource(): CustomStore<T, T['id']> {
//     return new CustomStore<T, T['id']>({
//       key: 'id',
//       byKey: (key, extraOperations) => {
//         const params = this.createHttpParams(extraOperations as LoadOptions);
//         return firstValueFrom(this.getByKey(key, params));
//       },
//       load: loadOptions => {
//         const params = this.createHttpParams(loadOptions);
//         return firstValueFrom(this.get(params));
//       },
//       insert: values => firstValueFrom(this.post(values)),
//       update: (key, values) => firstValueFrom(this.patch(key, values)),
//       remove: key => firstValueFrom(this.delete(key)),
//     });
//   }

//   protected get apiUrl(): string {
//     return `${this.baseUrl}/${this.endpoint}`;
//   }

//   protected getByKey(key: T['id'], params?: HttpParams): Observable<T> {
//     return this.http.get<T>(`${this.apiUrl}/${key}`, { params });
//   }

//   protected get(params?: HttpParams): Observable<T[]> {
//     return this.http.get<T[]>(this.apiUrl, { params });
//   }

//   protected post(data: T): Observable<T> {
//     return this.http.post<T>(this.apiUrl, data);
//   }

//   protected put(id: T['id'], data: T): Observable<T> {
//     return this.http.put<T>(`${this.apiUrl}/${id}`, data);
//   }

//   protected patch(id: T['id'], data: T): Observable<T> {
//     const patchOperations = Object.keys(data).map(key => ({
//       op: 'replace',
//       path: `/${key}`,
//       value: data[key as keyof T],
//     }));

//     return this.http.patch<T>(`${this.apiUrl}/${id}`, patchOperations, {
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }

//   protected delete(id: T['id']): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }

//   protected getById(id: T['id']): Observable<T> {
//     return this.getByKey(id);
//   }

//   async getSelectBoxData(): Promise<SelectBoxData[]> {
//     if (!this.endpoint) return [];

//     try {
//       const data = await firstValueFrom(
//         this.http.get<KeyValueDTO[]>(`${this.apiUrl}/keyvalue`)
//       );

//       return data
//         .slice(0, 30)
//         .map(item => SelectBoxDataAdapter.fromApi(item))
//         .sort((a, b) => b.status - a.status);
//     } catch (error) {
//       console.error(`Error loading options for ${this.endpoint}:`, error);
//       return [];
//     }
//   }

//   private isNotEmpty(value: unknown): boolean {
//     return value !== undefined && value !== null && value !== '';
//   }

//   private createHttpParams(options: LoadOptions): HttpParams {
//     let params = new HttpParams();
//     const paramNames = [
//       'skip',
//       'take',
//       'requireTotalCount',
//       'requireGroupCount',
//       'sort',
//       'filter',
//       'totalSummary',
//       'group',
//       'groupSummary',
//     ];

//     paramNames
//       .filter(paramName => this.isNotEmpty(options[paramName as LoadOptionsKeys]))
//       .forEach(paramName => {
//         params = params.set(
//           paramName,
//           JSON.stringify(options[paramName as LoadOptionsKeys])
//         );
//       });
//     return params;
//   }
// }
