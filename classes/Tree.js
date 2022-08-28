import {Node} from './Node.js';

export class Tree {
    constructor(){
        this.root = null
    }

    insert(valor){
        this.root === null ? this.root = new Node(valor): this.root.insert(valor);
    }

    findLeaves(){
        this.root != null ? this.root.findLeaves() : ""
    }

    showLeavesLevelAndValue(){
        this.root != null ? this.root.showLeavesLevelAndValue(1): ""
    }

    showAllNodesLevelAndValue(){
        this.root != null ? this.root.showAllNodesLevelAndValue(1): ""
    }

    valueExists(value){
        this.root != null ? this.root.valueExists(1): ""
    }
}

