import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgendaPage } from './agenda.page';
var AgendaPageModule = /** @class */ (function () {
    function AgendaPageModule() {
    }
    AgendaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild([
                    {
                        path: '',
                        component: AgendaPage
                    }
                ])
            ],
            declarations: [AgendaPage]
        })
    ], AgendaPageModule);
    return AgendaPageModule;
}());
export { AgendaPageModule };
//# sourceMappingURL=agenda.module.js.map