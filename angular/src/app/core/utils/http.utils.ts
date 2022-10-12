import { HttpHeaders, HttpParams } from "@angular/common/http";

export class HttpUtils {
    static createHttpParams(obj: any): HttpParams {
        let params = new HttpParams();
        for(let key in obj) {
            if(Array.isArray(obj[key])) {
                for(let item of obj[key]) {
                    params = params.append(key, item);
                }
            } else if (obj[key] != null) {
                params = params.append(key, obj[key]);
            }
        }
        return params;
    }
    
    static getTotal(headers: HttpHeaders): number {
        return parseInt(headers.get('X-Total-Count') ?? '0');
    } 
}
