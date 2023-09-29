// 繰り返し処理（While＝＞条件が真の時、際限なく繰り返す）；
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}
alert("2を掛け続けて" + max +"を超えるのに必要だった回数は"+ count +"回です");

// （for＝＞決められた回数だけ繰り返す）
let i;
let numb = 0;

for(i = 1; i < 11; i++){
  numb = numb + i;
}

alert('1から10まで足し算した結果は' +  numb + "です!")