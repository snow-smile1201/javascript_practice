var nickname = "Taro"
console.log(nickname)
nickname = "Jiro"
console.log(nickname)

var str = "webcanp"

function foo(){
  console.log(str)
  var y = "hello"
}


for (let i = 0; i < 10; i++) {
  console.log(i);
}

function fooo () {
  let x = "webcamp";
  {
    let y = "hello webcamp"
  }
  console.log(x);
  console.log(yy);
}

foo();
console.log(y);
//yはfunction foo()の中で宣言されているため、関数の外部から呼び出すことはできない。


console.log(i);

// 15行目はブロック内から呼び出されているため、呼び出される。
// 23行目は{ }ブロック外のため、呼び出すことができない。



fooo();
console.log(yy);
// yはブロック内で宣言した変数のため、ブロック外から呼び出すことができない
