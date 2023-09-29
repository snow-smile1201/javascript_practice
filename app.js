// 変数名は let で宣言;
let hello = "Hello world";
alert(hello);
// 四則演算はそのまま;
alert("4 + 3 =" + (4 + 3));
alert("4 * 3 =" + (4 * 3));
alert("12 / 3 =" + ( 12 / 3));
alert("10 - 10 =" + ( 10 - 10));
// 文字列を結合することも可能;
alert('Hello' + 'World');
// 変数同士を結合することも可能;
let str1 = "HeLLo";
let str2 = "WOrlD";
alert(str1 + str2);

//条件分岐;
let orange = 100;
let apple = 100;

if (orange < apple){
  alert("みかんの値段がりんごより安い")
} else if(orange == apple){
  alert("みかんとりんごが同じ値段")
} else{
  alert("みかんの値段がりんごより高い")
}