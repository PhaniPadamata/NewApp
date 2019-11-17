import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
/*
  Generated class for the FirebaseDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var FirebaseDataProvider = /** @class */ (function () {
    function FirebaseDataProvider(http) {
        this.http = http;
        this.bearer_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBZ2VuZGEtQXBwIiwibmFtZSI6IkFnZW5kYSIsImlhdCI6MTUxNjIzOTAyMn0.IC1QbQbx3uiyVdxOJUqFTpPwCVmo8EbvObMf9Oa5dTE";
        this.url = "http://localhost:9090/visitdata";
        this.updateurl = "http://localhost:9090/visitdata";
        console.log('Hello FirebaseDataProvider Provider');
    }
    FirebaseDataProvider.prototype.getAgendaData = function (client) {
        var urlRest = this.url + "/" + client;
        var headers = new Headers();
        var bearerInfo = 'Bearer ' + this.bearer_token;
        // headers.append('Authorization', bearerInfo);
        //console.log("Header: " + headers.get("Authorization") + " VALUES : " + headers.values()) ;
        var options = new RequestOptions({ headers: headers });
        return this.http.get(urlRest, options)
            .pipe(map(function (res) { return res.json(); }))
            .toPromise();
        // return this.http.get("../assets/standardlife.json", options)
        // .pipe(map(res => res.json()))
        //    .toPromise();
    };
    FirebaseDataProvider.prototype.getUpdateStatus = function (client) {
        this.updateurl = this.updateurl + client + "update.json";
        console.log(this.updateurl);
        return this.http.get(this.updateurl)
            .pipe(map(function (res) { return res.json(); }))
            .toPromise();
    };
    FirebaseDataProvider = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], FirebaseDataProvider);
    return FirebaseDataProvider;
}());
export { FirebaseDataProvider };
//# sourceMappingURL=firebase-data.js.map