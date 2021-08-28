class MinHeap{
    #data;
    constructor(){
        this.#data = [];
    }

    size(){
        return this.#data.length;
    }

    #left(idx){
        return 2*idx + 1;
    }

    #right(idx){
        return 2*idx + 2;
    }

    #parent(idx){
        return parseInt((idx-1)/2);
    }

    insert(value){
        this.#data.push(value);

        let idx = this.size() -1;

        while(idx > 0){
            let parent = this.#parent(idx);
            if(this.#data[idx] < this.#data[parent]){
                [this.#data[idx], this.#data[parent]] = [this.#data[parent],  this.#data[idx]];
                idx = parent;
            }
            else{
                break;
            }
        }
    }

    remove(){
        let value = this.#data[0];

        this.#data[0] = this.#data[this.size() -1];
        this.#data.pop();

        let idx = 0;
        while(idx < this.size()){
            let left = this.#left(idx);
            let right = this.#right(idx);

            let minIdx = idx;
            
            if(left < this.size() && this.#data[left] < this.#data[minIdx]){
                minIdx = left;
            }

            if(right < this.size() && this.#data[right] < this.#data[minIdx]){
                minIdx = right;
            }

            if(idx != minIdx){
                [this.#data[idx], this.#data[minIdx]] = [this.#data[minIdx],  this.#data[idx]];
                idx = minIdx;
            }
            else{
                break;
            }
        }
        return value;
    }

}

let heap = new MinHeap();

heap.insert(6);
heap.insert(23);
heap.insert(7);
heap.insert(78);
heap.insert(12);
heap.insert(52);
heap.insert(13);
heap.insert(35);

while(heap.size()>0){
    console.log(heap.remove());
}