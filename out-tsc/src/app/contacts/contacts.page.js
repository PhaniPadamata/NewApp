import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ParticipantService } from '../../services/participant.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
var ContactsPage = /** @class */ (function () {
    function ContactsPage(navCtrl, partCtrl, callNumber) {
        this.navCtrl = navCtrl;
        this.partCtrl = partCtrl;
        this.callNumber = callNumber;
        this.contactsList = [];
    }
    ContactsPage.prototype.getContactLists = function () {
        this.contactsList = this.partCtrl.getLocationContacts();
        console.log(this.contactsList);
    };
    ContactsPage.prototype.ngOnInit = function () {
        this.getContactLists();
    };
    ContactsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsPage');
    };
    ContactsPage.prototype.callContact = function (contact) {
        this.callNumber.callNumber(contact, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    ContactsPage = tslib_1.__decorate([
        Component({
            selector: 'app-contacts',
            templateUrl: './contacts.page.html',
            styleUrls: ['./contacts.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, ParticipantService, CallNumber])
    ], ContactsPage);
    return ContactsPage;
}());
export { ContactsPage };
//# sourceMappingURL=contacts.page.js.map