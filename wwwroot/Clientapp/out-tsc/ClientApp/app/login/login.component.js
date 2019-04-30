import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';
var loginComponent = /** @class */ (function () {
    function loginComponent(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
    loginComponent.prototype.onLogin = function () {
        var _this = this;
        this.data.login(this.creds)
            .subscribe(function (success) {
            if (success) {
                if (_this.data.order.items.length == 0) {
                    _this.router.navigate(["/"]);
                }
                else {
                    _this.router.navigate(["checkout"]);
                }
            }
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    loginComponent = tslib_1.__decorate([
        Component({
            selector: 'login',
            templateUrl: "./login.component.html",
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], loginComponent);
    return loginComponent;
}());
export { loginComponent };
//# sourceMappingURL=login.component.js.map