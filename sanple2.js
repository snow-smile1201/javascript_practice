// 変数の巻き上げ（ホイスティング）
var str = "webcamp"

function foo () {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()
// 最初に宣言したwebcampの出力され、その後に再宣言されたdmm webcampが出力されることが期待されるが、
// 関数内の変数の巻き上げが起こり「dmm webcampが最初に宣言された」として処理される。不具合の原因となる。



