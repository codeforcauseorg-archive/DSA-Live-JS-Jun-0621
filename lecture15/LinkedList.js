class Node{
    data;
    next;
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{    
    #head;
    #tail;
    #size;
    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }

    addStart(data){
        let newNode = new Node(data);
        newNode.next = this.#head;
        this.#head = newNode;
        if(this.#tail == null){
            this.#tail = this.#head;
        }
        this.#size++;
    }

    deleteStart(){
        if(this.#head == null){
            return null;
        }
        let oldHead = this.#head;
        this.#head = this.#head.next;
        oldHead.next = null;
        if(this.#head == null){
            this.#tail = null;
        }
        this.#size--;
        return oldHead.data;
    }

    addEnd(data){
        if(this.#head == null){
            this.addStart(data);
            return;
        }
        let newNode = new Node(data);
        this.#tail.next = newNode;
        this.#tail = newNode;
        this.#size++;
        // if(this.#head == null){
        //     this.#head = this.#tail;
        // }
    }

    deleteEnd(){
        if(this.#head==null){
            return null;
        }

        if(this.#head == this.#tail){
            this.deleteStart();
            return;
        }

        let cur = this.#head;
        let temp = this.#tail;
        while(cur.next != this.#tail){
            cur = cur.next;
        }
        cur.next = null;
        this.#tail = cur;

        this.#size--;
        return temp.data;
    }

    size(){
        return this.#size;
    }

    getHead(){
        return this.#head;
    }

    getTail(){
        return this.#tail;
    }


    get(index){
        let cur = this.#head;

        while(index>0){
            cur = cur.next;
            index--;
        }

        return cur;
    }

    add(data, index){
        if(index==0){
            this.addStart(data);
            return;
        }

        if(index==this.#size){
            this.addEnd(data);
            return;
        }

        let cur = this.get(index-1);
        let newNode = new Node(data);

        let temp = cur.next;
        cur.next = newNode;
        newNode.next = temp;
        this.#size++;
    }

    delete(index){
        if(index==0){
            this.deleteStart();
            return;
        }

        if(index==this.#size-1){
            this.deleteEnd();
            return;
        }

        let cur = this.get(index-1);

        let temp = cur.next;
        cur.next = temp.next;
        temp.next = null;

        this.#size--;
        return temp.data;
    }

    display(){
        let cur = this.#head;
        while(cur != null){
            console.log(cur.data);
            cur = cur.next;
        }
    }
}

let linkedList = new LinkedList();

linkedList.addStart(2);
linkedList.addStart(3);
linkedList.addStart(4);
linkedList.addStart(5);
linkedList.addStart(6);



console.log(linkedList.deleteStart()); // 2
console.log(linkedList.deleteStart()); // 3

// console.log("-------------------------------");
// linkedList.display();

linkedList.addEnd(7);
linkedList.addEnd(8);
linkedList.addEnd(9);
linkedList.addEnd(10);

console.log(linkedList.deleteEnd()); // 10
console.log(linkedList.deleteEnd()); // 9


console.log("-------------------------------");
linkedList.display();

// console.log("-------------------------------");
// console.log(linkedList.get(2));

linkedList.add(10, 2);

console.log("-------------------------------");
linkedList.display();





