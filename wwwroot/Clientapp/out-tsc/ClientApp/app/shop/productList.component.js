import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';
var productListComponent = /** @class */ (function () {
    function productListComponent(data) {
        this.data = data;
        this.products = [];
    }
    productListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function (success) {
            if (success) {
                _this.products = _this.data.products;
            }
        });
    };
    productListComponent.prototype.addProduct = function (product) {
        this.data.addToOrder(product);
    };
    productListComponent = tslib_1.__decorate([
        Component({
            selector: 'product-list',
            templateUrl: "./productList.component.html",
            styleUrls: ["productList.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], productListComponent);
    return productListComponent;
}());
export { productListComponent };
//# sourceMappingURL=productList.component.js.map