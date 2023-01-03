class Command {
    #arg1;
    #arg2;
    getArg1() { return this.#arg1 }
    getArg2() { return this.#arg2 }

    constructor(arg1, arg2) {
        this.#arg1 = arg1;
        this.#arg2 = arg2;
    }
    execute(db, callback) {}
}

module.exports = Command;