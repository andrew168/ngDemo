angular.module("ShopApp")
    .service('DataService', function ($timeout) {
        // 内部变量
        var self = this,
            item1 = {name: "海尔电视", price: 2000, quantity: 2};

        // 对外接口：数据
        self.item1 = item1;

        // 对外接口：处理函数

        // 内部具体实现
    });
