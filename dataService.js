angular.module("ShopApp")
    .service('DataService', function ($timeout) {
        // 内部变量
        var self = this,
            item1 = {name: "海尔电视", price: 2000, quantity: 2, sum:0};

        // 对外接口：数据
        self.item1 = item1;
        self.totalAmount = 0; //这个既是内部使用，也是外部使用，因为他不是地址引用的对象， 只是简单的值变量

        // 对外接口：处理函数
        self.add = add;
        self.subtract = subtract;

        // 内部具体实现
        function add() {
            self.item1.quantity++;
            $timeout(update);
        }

        function subtract() {
            self.item1.quantity--;
            $timeout(update);
        }

        function update() {
            item1.sum = item1.price * item1.quantity;
            self.totalAmount = item1.sum;
        }

        $timeout(update);
    });
