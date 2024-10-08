// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
    // TODO: # 有特別的意思嗎？是OOP中的private member。
    #items;
    #max_size;

    constructor(max_size) {
        // TODO
        this.#max_size = max_size;
        this.#items = [];
    }

    // 在 stack 頂部加入元素i
    push(element) {
        // TODO
        if(this.size() >= this.#max_size) {
            console.warn("Your stack is bigger than maximum size!\nInput operation fails.");
            return;
        }
        this.#items.push(element);
    }

    // 移除並回傳 stack 頂部的元素
    pop() {
        // TODO
        return this.#items.pop();
    }

    // 回傳 stack 頂部的元素，但不移除它
    peek() {
        // TODO
        return this.#items[this.size() - 1];
    }

    // 檢查 stack 是否為空
    isEmpty() {
        // TODO
        return this.size() == 0;
    }

    // 回傳 stack 中元素的個數
    size() {
        // TODO
        return this.#items.length;
    }

    // 清空 stack
    clear() {
        // TODO
        while (this.size() > 0){
            this.pop();
        }
    }

    // 印出 stack 內容
    print() {
        // TODO
        console.log(this.#items.join(' '));
    }
}
