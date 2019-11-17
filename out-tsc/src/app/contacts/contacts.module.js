import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ContactsPage } from './contacts.page';
var ContactsPageModule = /** @class */ (function () {
    function ContactsPageModule() {
    }
    ContactsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild([
                    {
                        path: '',
                        component: ContactsPage
                    }
                ])
            ],
            declarations: [ContactsPage],
            providers: [CallNumber]
        })
    ], ContactsPageModule);
    return ContactsPageModule;
}());
export { ContactsPageModule };
//# sourceMappingURL=contacts.module.js.map