let btn_one = document.getElementById("one");
let btn_two = document.getElementById("two");
let btn_three = document.getElementById("three");
let btn_four = document.getElementById("four");
let btn_five = document.getElementById("five");
let btn_six = document.getElementById("six");
let btn_seven = document.getElementById("seven");
let btn_eight = document.getElementById("eight");
let btn_nine = document.getElementById("nine");
let btn_zero = document.getElementById("zero");
let btn_dot = document.getElementById("dot");
let btn_clear = document.getElementById("clear");
let btn_del =  document.getElementById("del");
let btn_op = document.getElementsByClassName("op");
var display_operand = document.getElementById("operands");
var display_result = document.getElementById("result")

btn_one.addEventListener('click', function(){
    insert(1);
});
btn_two.addEventListener('click', function(){
    insert(2);
});
btn_three.addEventListener('click', function(){
    insert(3);
});
btn_four.addEventListener('click', function(){
    insert(4);
});
btn_five.addEventListener('click', function(){
    insert(5);
});
btn_six.addEventListener('click', function(){
    insert(6);
});
btn_seven.addEventListener('click', function(){
    insert(7);
});
btn_eight.addEventListener('click', function(){
    insert(8);
});
btn_nine.addEventListener('click', function(){
    insert(9);
});
btn_zero.addEventListener('click', function(){
    insert(0);
});
btn_dot.addEventListener('click', function(){
    if (!display_operand.innerHTML.includes(".") ){
        insert('.');
    }
    
});

for (var i = 0; i < btn_op.length; i++){
    
   btn_op[i].addEventListener('click', function(){
    if(display_operand.innerHTML != "" && display_result.innerHTML == ""){
        insert(this.id);
        printHistory();

        }else if(display_result.innerHTML != "" && display_operand.innerHTML != ""){
            
        var result = display_result.innerHTML + display_operand.innerHTML;
        
            if (this.id == "="){
                calOperation(result);
            }else{
                
                mooyi = eval(result);
                display_result.innerHTML = mooyi + this.id;
                display_operand.innerHTML = "";

            }

            }

    });
    
    

}

btn_clear.addEventListener('click', clear);
btn_del.addEventListener('click', back);

//functions start here

function insert(val){
    
    display_operand.innerHTML += val;
    
}

function printHistory(){
    display_result.innerHTML =  display_operand.innerHTML;
    display_operand.innerHTML = "";
    
}


function clear(){
    display_operand.innerHTML = "";
    display_result.innerHTML = "";

}

function back(){
    var str = display_operand.innerHTML;
    str = str.substring(-1, str.length-1);
    display_operand.innerHTML = str;
}


function calOperation(result){
    var result = eval(result);
    clear();
    insert(result);
    
}