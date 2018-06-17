
var calcu = "";
var result;
var flag = false;

console.log('ace'.slice(0,-1));

$(document).ready(function(){
    var $textbox = $('.textbox');
    $('.button').click(function(){
        var text = $(this).attr('value');
        if(!isNaN(text) || text === '+' || text === '-' || text === '*' || text === '/' || text === '%' || text === '.'){
            if(flag === false){
                calcu += text;
                $textbox.val(calcu);
            }
            else{
                calcu = text;
                $textbox.val(calcu);
                flag = false;
            }
        }
        else if(text === 'ac'){
            calcu = "";
            $textbox.val(calcu);
        }
        else if(text === 'ce'){
            calcu = calcu.slice(0,-1);
            $textbox.val(calcu);
        }
        else if(text === '='){
            result = eval(calcu);
            $textbox.val(result);
            flag = true;
        }
    })
})