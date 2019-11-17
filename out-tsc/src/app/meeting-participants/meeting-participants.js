import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
var MeetingParticipantsPage = /** @class */ (function () {
    function MeetingParticipantsPage(modalController, params) {
        this.modalController = modalController;
        this.params = params;
        this.team = "PwC";
        this.name = "";
        this.college = "";
        this.country = "";
        this.image = "";
        this.aboutcodevita = "";
        this.isAvailable = false;
        this.aboutme = "";
        this.other = "";
        this.pwcParticipants = [];
        this.tcsParticipants = [];
        var data = this.params.data.details;
        this.name = data.name;
        this.isAvailable = data.isAvailable;
        console.log(this.isAvailable);
        this.college = data.college;
        this.country = data.designation;
        this.image = data.image;
        if (this.image == "") {
            this.image = "assets/images/user.png";
        }
        this.aboutcodevita = data.aboutcodevita;
        this.aboutme = data.aboutme;
        this.other = data.other;
    }
    MeetingParticipantsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeetingParticipantsPage');
    };
    MeetingParticipantsPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    MeetingParticipantsPage = tslib_1.__decorate([
        Component({
            templateUrl: 'meeting-participants.html',
            styles: ["\n  .custom-cv-part-header{\n        color: #0087d3;\n        font-weight: 500;\n        letter-spacing: 0.3px;\n        text-align: left;\n    }\n    .segment-cv{\n        font-size:2rem !important;\n         color:rgba(255, 255, 255, 0.7) !important;\n    }\n    .segment-cv-color{\n        color:rgba(255, 255, 255, 0.7) !important;\n    }\n    .segment-md .segment-button.segment-activated{\n        color: #ffffff !important;\n        border-color:#cbc500 !important;\n    }\n    .modal-back{\n      font-size: 20px;\n    }\n    .profile-image{\n       \n    }\n    .profile-grid{\n      padding: 0px !important;\n       background: #FDFAFA;\n    }\n    .rounded-img{\n      border-radius: 100%;\n      margin: 0 auto;\n      height: 180px;\n      padding-top:10px;\n    }\n    .name-text{\n      font-size: 20px;\n      text-align: center;\n      margin: 0 auto;\n      font-family: roboto;\n      font-weight: 500;\n      color: #0087d3;\n      letter-spacing: 0.3px;\n \n    }\n    .cs-card-header{\n      background: #FDFAFA;\n    }\n    .country-text{\n     color: #545454 !important;\n     letter-spacing: 0.3px;\n     margin: 0 auto;\n    }\n    .college-text{\n        padding: 5px;\n        font-size: 15px;\n        text-align: center;\n        margin: 0 auto;\n    }\n    .aboutcodevita-text{\n      font-style:italic;\n      text-align:justify;\n      font-weight:500;\n      font-size: 15px;\n    }\n    .no-information{\n      margin: 0 auto;\n      margin-top: 50%;\n      font-size: 20px;\n      font-weight: 500;\n      color: #0087d3;\n    }\n    .aboutme-text{\n      font-size: 16px;\n      color: black !important;\n      letter-spacing: 0.5px;\n      font-weight: 400;\n      text-align:justify;\n    }\n  "]
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController, NavParams])
    ], MeetingParticipantsPage);
    return MeetingParticipantsPage;
}());
export { MeetingParticipantsPage };
//# sourceMappingURL=meeting-participants.js.map