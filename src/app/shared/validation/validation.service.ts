import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';

export abstract class ValidationService {
  private settings: any;
  constructor(protected _http: HttpClient) { }
  // public getJsonSchema(baseUrl: string) {
  //   return this._http.get(baseUrl).map(resp => resp().do(settings => {
  //     this.settings = settings;
  //   }).share();
  // }
  // public getJsonSchema(baseUrl: string) {
  //   return this._http.get(baseUrl).map((response: Response) => response.json());
  // }
}
