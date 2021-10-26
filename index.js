function Contact(name, number){
    this.name = name;
    this.number = number;
    this.print = function(){
        var x = this.name
        var y = this.number
        console.log(x+":"+y)
    }
}
var a = new Contact("David", 12345);
var b = new Contact("Amy", 987654321)
a.print();
b.print();