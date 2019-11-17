import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ParticipantsPage } from './participants.page';
var routes = [
    {
        path: '',
        component: ParticipantsPage
    }
];
var ParticipantsPageModule = /** @class */ (function () {
    function ParticipantsPageModule() {
    }
    ParticipantsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ParticipantsPage]
        })
    ], ParticipantsPageModule);
    return ParticipantsPageModule;
}());
export { ParticipantsPageModule };
//# sourceMappingURL=participants.module.js.map