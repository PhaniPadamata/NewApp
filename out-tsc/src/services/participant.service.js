import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ParticipantService = /** @class */ (function () {
    function ParticipantService() {
        this.clientLogo = "";
        this.tagLine = "";
        this.locationAgenda = [];
        this.participants = [];
        this.contacts = [];
        this.dates = [];
        this.companies = [];
        this.visitLocations = [];
        this.dateWise = [];
    }
    ParticipantService.prototype.getParticipants = function () {
        return this.participants;
    };
    ParticipantService.prototype.setParticipants = function (part) {
        this.participants = part;
    };
    ParticipantService.prototype.getLocationContacts = function () {
        return this.contacts;
    };
    ParticipantService.prototype.setLocationContacts = function (contacts) {
        //console.log(contacts);
        this.contacts = contacts;
    };
    ParticipantService.prototype.getAgenda = function () {
        return this.locationAgenda;
    };
    ParticipantService.prototype.setAgenda = function (agenda) {
        this.locationAgenda = agenda;
    };
    ParticipantService.prototype.getClientLogo = function () {
        return this.clientLogo;
    };
    ParticipantService.prototype.setClientLogo = function (logo) {
        this.clientLogo = logo;
    };
    ParticipantService.prototype.getDates = function () {
        return this.dates;
    };
    ParticipantService.prototype.setDates = function (dates) {
        this.dates = dates;
    };
    ParticipantService.prototype.getCompanies = function () {
        return this.companies;
    };
    ParticipantService.prototype.setCompanies = function (companies) {
        this.companies = companies;
    };
    ParticipantService.prototype.getVisitLocations = function () {
        return this.visitLocations;
    };
    ParticipantService.prototype.setVisitLocation = function (visitLocations) {
        this.visitLocations = visitLocations;
    };
    ParticipantService.prototype.getTagLine = function () {
        return this.tagLine;
    };
    ParticipantService.prototype.setTagLine = function (tagLine) {
        this.tagLine = tagLine;
    };
    ParticipantService.prototype.getDateWiseAgenda = function () {
        return this.dateWise;
    };
    ParticipantService.prototype.setDateWiseAgenda = function (dates) {
        this.dateWise = dates;
    };
    ParticipantService = tslib_1.__decorate([
        Injectable()
    ], ParticipantService);
    return ParticipantService;
}());
export { ParticipantService };
//# sourceMappingURL=participant.service.js.map