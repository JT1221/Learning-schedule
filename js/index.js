window.onload = function () {
  var vm = new Vue({
    el: "#app",
    data: {
      value: "",
      cult: 1,
      items: [
        { name: "做运动", check: true },
        { name: "学习编程", check: false },
        { name: "看书", check: false },
      ],
      newItem: [],
      // all:"",
    },
    methods: {
      // 删除数据
      add() {
        this.items.unshift({ name: this.value, check: false });
        // 清除数据
        this.value = "";
      },
      //删除数据
      remove(v) {
        // this.items.remove()

        var i = this.items.findIndex(function (item) {
          return item.name == v.name;
        });
        // console.log(i);
        this.items.splice(i, 1);
        this.filterItem(this.cult);
      },
      filterItem(n) {
        this.cult = n;
        // 筛选数据
        switch (n) {
          case 2:
            this.newItem = this.items.filter((item) => item.check);
            break;
          case 3:
            this.newItem = this.items.filter((item) => !item.check);
            break;
          default:
            this.newItem = this.items;
        }
        // console.log(this.cult);
      },
    },
    // 计算属性
    computed: {
      completed() {
        return this.items.filter((item) => item.check).length;
      },
    },
    // 钩子函数，默认调用的
    mounted() {
      this.filterItem(this.cult);
      // console.log(this.cult);
    },
  });
};
