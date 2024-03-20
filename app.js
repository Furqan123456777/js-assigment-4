var string = prompt("Enter A value");

var len = string.length;

var msg = "It Is A   Palindrome ";

for(var i = 0 ; i < len/2 ; i++){
    if(string [i] != string[len - 1 - i] ){
        msg = "It IS A not Palindrome";

    }
}

console.log(string + msg);

