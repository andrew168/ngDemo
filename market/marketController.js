/**
 * Created by Andrewz on 5/5/2017.
 */
angular.module("ShopApp")
    .controller('MarketController', MarketController);
MarketController.$inject = [];
function MarketController() {
    // 内部变量
    var self = this,
        label = "Welcome to Market!";
    self.label = label;
}
