export class Node {
    constructor(value){
        this.value = value;
        this.right = this.left = null;
    }
    
    insert(valor){
        if(valor < this.value){
            if(this.left == null){
                this.left = new Node(valor)
                return console.log(this)
            }else{
                this.left.insert(valor)
            }
        }else{
            if(this.right == null){
                this.right = new Node(valor)
                return console.log(this)
            }else{
                this.right.insert(valor)
            }
        }
    }
}