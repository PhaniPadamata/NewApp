import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ParticipantService } from '../../services/participant.service';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
var AgendaPage = /** @class */ (function () {
    function AgendaPage(router, modalCtrl, partCtrl) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.partCtrl = partCtrl;
        this.location = "";
        this.locationsAgenda = [];
        this.Dates = [];
        this.date = "";
        this.DateWise = [];
        var Locations = partCtrl.getVisitLocations();
        this.location = Locations[0];
        this.Dates = partCtrl.getDates();
        this.date = this.Dates[0];
        this.DateWise = partCtrl.getDateWiseAgenda();
    }
    AgendaPage.prototype.ngOnInit = function () {
        this.getLocationAgenda();
    };
    AgendaPage.prototype.getLocationAgenda = function () {
        this.locationsAgenda = this.partCtrl.getAgenda();
        console.log(this.locationsAgenda);
    };
    AgendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgendaPage');
    };
    AgendaPage.prototype.change = function (date) {
        console.log(date);
        this.content.scrollToTop();
        for (var i = 0; i < this.DateWise.length; i++) {
            if (this.DateWise[i].date == date) {
                this.date = this.DateWise[i].location;
            }
        }
    };
    tslib_1.__decorate([
        ViewChild(IonContent),
        tslib_1.__metadata("design:type", IonContent)
    ], AgendaPage.prototype, "content", void 0);
    AgendaPage = tslib_1.__decorate([
        Component({
            selector: 'app-agenda',
            templateUrl: 'agenda.page.html',
            styleUrls: ['agenda.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ModalController, ParticipantService])
    ], AgendaPage);
    return AgendaPage;
}());
export { AgendaPage };
//# sourceMappingURL=agenda.page.js.map