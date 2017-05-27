angular.module("ShopApp")
    .controller('DemoController', DemoController);
DemoController.$inject = ['$state', 'DataService'];
function DemoController($state, DataService) {
    // 内部变量
    var self = this;
    self.data = DataService;
    self.items = DataService.items;
    self.add = DataService.add;
    self.subtract = DataService.subtract;

    self.gotoMarket = gotoMarket;
    self.gotoCart = gotoCart;
    function gotoMarket() {
        $state.go('market');
    }

    function gotoCart() {
        $state.go('cart');
    }
}
