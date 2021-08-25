class Node{
    data;
    left;
    right;
    height;
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVL{
    #root = null;

    // O(1)
    height(){
        return this.#height(this.#root);
    }
    #height(node){
        if(node ==  null){
            return 0;
        }
        return node.height;
    }

    insert(value){
        this.#root = this.#insert(this.#root, value);
    }
    #insert(node, value){
        if(node==null){
            let nn = new Node(value);
            return nn;
        }

        if(value > node.data){
            node.right = this.#insert(node.right, value);
        }
        else{
            node.left = this.#insert(node.left, value);
        }

        node.height = Math.max(this.#height(node.left), this.#height(node.right)) + 1;

        node = this.#avlBalance(node);
        return node;
    }

    delete(target){
        this.#root = this.#delete(target, this.#root);
    }
    #delete(target, node){
        if(node == null){
            return null;
        }

        if(target < node.data){
            node.left = this.#delete(target, node.left);
        }
        else if(target > node.data){
            node.right = this.#delete(target, node.right);
        }
        else{
            if(node.left == null && node.right == null){
                return null;
            }
            else if(node.left ==  null){
                return node.right;
            }
            else if(node.right == null){
                return node.left;
            }
            else{
                let nextVal = this.#findNext(node.right);
                node.value = nextVal;
                node.right = this.#delete(nextVal, node.right);
            }
        }
        node.height =  Math.max(this.#height(node.left), this.#height(node.right)) + 1;
        node = this.#avlBalance(node);
        return node;
    }

    #findNext(node){
        if(node.left == null){
            return node.data;
        }
        return this.#findNext(node.left);
    }

}
