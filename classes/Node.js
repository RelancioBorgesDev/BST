export class Node {
    constructor(value){
        this.value = value;
        this.right = this.left = null;
    }
    
    insert(valor){
        if(valor < this.value){
            if(this.left == null){
                this.left = new Node(valor)
                return this
            }else{
                this.left.insert(valor)
            }
        }else{
            if(this.right == null){
                this.right = new Node(valor)
                return this
            }else{
                this.right.insert(valor)
            }
        }

        return console.log(this)
    }

    findLeaves(){
        if(this.left != null) this.left.findLeaves();
        if(this.right != null) this.right.findLeaves();

        if(this.left == null && this.right == null)  console.log("Leaves: " + this.value);
    }

    showLeavesLevelAndValue(level){
        if(this.left != null) this.left.showLeavesLevelAndValue(level+1);
        if(this.right != null) this.right.showLeavesLevelAndValue(level+1);

        if(this.left == null && this.right == null) console.log("Valor: " + this.value + " -> Nivel: " + level);
        
    }

    showAllNodesLevelAndValue(level){
        if(this.left != null) this.left.showAllNodesLevelAndValue(level + 1);
        if(this.right != null) this.right.showAllNodesLevelAndValue(level + 1);

        return console.log("Valor: " + this.value + " -> Nivel: " + level);
    }

    valueExists(value){
        let haveValue = false;
        if(this.value == value){
            return true;
        }
        if(this.left != null && !haveValue) haveValue = this.left.haveValue(value);
        if(this.right != null && !haveValue) haveValue = this.right.haveValue(value);

        return haveValue;
    }
}