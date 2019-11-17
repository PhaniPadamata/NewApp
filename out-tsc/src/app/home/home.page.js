import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { ParticipantService } from '../../services/participant.service';
import { FirebaseDataProvider } from '../../providers/firebase-data/firebase-data';
import { Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(router, partCtrl, _fd, loadingCtrl, alertCtrl, toastCtrl) {
        this.router = router;
        this.partCtrl = partCtrl;
        this._fd = _fd;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.data = [];
        this.tagLine = "";
        //this.clientLogo = partCtrl.getClientLogo();
    }
    HomePage.prototype.ngOnInit = function () {
        console.log("in ngOnInit::::");
        //localStorage.setItem('client', 'standardlife');
        if (localStorage.getItem("client") == undefined) {
            console.log("in undefined::::");
            this.presentPrompt();
        }
        else {
            var client = localStorage.getItem("client");
            console.log("in else:client:::" + client);
            this.getAgendaData(client);
        }
    };
    HomePage.prototype.getAgendaData = function (client) {
        var _this = this;
        console.log('calling   ' + client);
        this._fd.getAgendaData(client).then(function (response) {
            _this.data = response;
            //localStorage.setItem('agenda',JSON.parse(this.data));
            //console.log(this.data);
            _this.partCtrl.setClientLogo(_this.data[0].clientLogo);
            _this.clientLogo = _this.partCtrl.getClientLogo();
            _this.partCtrl.setAgenda(_this.data[3].locations_agenda);
            _this.partCtrl.setParticipants(_this.data[1].menu);
            _this.partCtrl.setLocationContacts(_this.data[2].contactList);
            _this.partCtrl.setDates(_this.data[6].visitDates);
            _this.partCtrl.setCompanies(_this.data[4].companies);
            _this.partCtrl.setVisitLocation(_this.data[5].visitLocations);
            _this.partCtrl.setTagLine(_this.data[7].tagLine);
            _this.tagLine = _this.partCtrl.getTagLine();
            _this.partCtrl.setDateWiseAgenda(_this.data[8].Dates);
        }).catch(function (error) {
            // alert(error)
            if (error.status == 0) {
                console.log("There is no internet connection");
                _this.presentPrompt();
            }
            else if (error.status == undefined) {
                localStorage.removeItem("client");
                _this.presentPrompt();
            }
        });
    };
    HomePage.prototype.presentPrompt = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("in presentPrompt::::");
                        return [4 /*yield*/, this.alertCtrl.create({
                                message: 'Agenda',
                                inputs: [
                                    {
                                        name: 'client',
                                        placeholder: 'please enter agenda name',
                                        type: 'text',
                                        value: 'visit1',
                                        disabled: true
                                    }
                                ],
                                buttons: [
                                    {
                                        text: 'Login',
                                        handler: function (data) {
                                            var clientName = 'visit1';
                                            localStorage.setItem("client", clientName.toLowerCase());
                                            _this.getAgendaData(clientName.toLowerCase());
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.pushPage = function (page) {
        console.log('pushPage');
        switch (page) {
            case "agenda":
                this.router.navigateByUrl('/agenda');
                break;
            case "contacts":
                this.router.navigateByUrl('/contacts');
                break;
            case "participants":
                this.router.navigateByUrl('/participants');
                break;
        }
        // this.navCtrl.push(ContactsPage);
    };
    HomePage.prototype.agendaPage = function () {
        this.router.navigateByUrl('/agenda');
    };
    HomePage.prototype.contactsPage = function () {
        this.router.navigateByUrl('/contacts');
    };
    HomePage.prototype.participantsPage = function () {
        this.router.navigateByUrl('/participants');
    };
    HomePage.prototype.openTcsWebsite = function () {
        window.open("https://www.tcs.com/about-us#0", "_blank", "location=yes");
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ParticipantService, FirebaseDataProvider, LoadingController, AlertController, ToastController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map