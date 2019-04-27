import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';
var cartComponent = /** @class */ (function () {
    function cartComponent(data) {
        this.data = data;
    }
    cartComponent = tslib_1.__decorate([
        Component({
            selector: 'the-cart',
            templateUrl: "cart.component.html",
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], cartComponent);
    return cartComponent;
}());
export { cartComponent };
//# sourceMappingURL=cart.component.js.map