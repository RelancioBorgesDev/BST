import {Node} from './Node.js';

export class Tree {
    constructor(){
        this.root = null
    }

    insert(valor){
        if(this.root === null){
            this.root = new Node(valor);
        }else{
            this.root.insert(valor);
        }
    }
}

