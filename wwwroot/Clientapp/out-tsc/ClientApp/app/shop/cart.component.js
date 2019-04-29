import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';
var cartComponent = /** @class */ (function () {
    function cartComponent(data, router) {
        this.data = data;
        this.router = router;
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else {
            this.router.navigate(["checkout"]);
        }
    }
    cartComponent = tslib_1.__decorate([
        Component({
            selector: 'the-cart',
            templateUrl: "cart.component.html",
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], cartComponent);
    return cartComponent;
}());
export { cartComponent };
//# sourceMappingURL=cart.component.js.map