import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
/* custom components */
import {IAttnList} from './attnlist';

@Injectable()
export class AttnListService{
    private _attnlistUrl = 'assets/attn\_list/attnlist.json';

    constructor(private _http: Http) {}

    getAttnItems(): Observable<IAttnList[]> {
        return this._http.get(this._attnlistUrl)
            .map((response: Response) => <IAttnList[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAttnItem(id: string): Observable<IAttnList> {
        return this.getAttnItems()
            .map((attnlists: IAttnList[]) => attnlists.find(a => a.attnMo === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
