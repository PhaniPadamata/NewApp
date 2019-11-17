import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';
import { ModalController } from '@ionic/angular';
import { MeetingParticipantsPage } from '../meeting-participants/meeting-participants';
var ParticipantsPage = /** @class */ (function () {
    function ParticipantsPage(partService, modalCtrl) {
        this.partService = partService;
        this.modalCtrl = modalCtrl;
        this.clientName = "";
        this.participantGroups = [];
        this.participantGroups = partService.getParticipants();
        console.log(partService.getParticipants());
        var client = partService.getCompanies();
        //let client = ["Standard Life","TCS"];
        this.clientName = client[0];
    }
    ParticipantsPage.prototype.ionViewDidLoad = function () {
    };
    ParticipantsPage.prototype.openProfile = function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(item);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: MeetingParticipantsPage,
                                componentProps: { details: item }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ParticipantsPage.prototype.ngOnInit = function () {
    };
    ParticipantsPage = tslib_1.__decorate([
        Component({
            selector: 'app-participants',
            templateUrl: './participants.page.html',
            styleUrls: ['./participants.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ParticipantService, ModalController])
    ], ParticipantsPage);
    return ParticipantsPage;
}());
export { ParticipantsPage };
//# sourceMappingURL=participants.page.js.map