
function Test(){
    this.author;
    this.setAuthor = function(a){
        this.author = a;
    }
    this.add = function(x,y){
        return x+y;
    }
}

module.exports = Test;