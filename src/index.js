class A {
    constructor() {
        this.msg = "hello";
    }

    get message() {
        return this.msg;
    }
}

const a = new A();
console.log(a.message);
