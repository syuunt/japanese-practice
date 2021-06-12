var en = document.getElementById("en"); //document.getElementByIdを使ってHTMLのbtnというIDを取得
var ja = document.getElementById("ja"); //document.getElementByIdを使ってHTMLのbtnというIDを取得
var next = document.getElementById("next"); //document.getElementByIdを使ってHTMLのbtnというIDを取得
var back = document.getElementById("back"); //document.getElementByIdを使ってHTMLのbtnというIDを取得

var eng=["Hello","How are you?","I’m so pleased to meet you."]
var jap=["こんにちは","お元気ですか？","お会いできてとてもうれしいです。","これは新しい本です。","この辞書は新しい。","あれは大切な本ですか? - はい、そうです。","あの本は大切ですか? - いいえ、大切ではありません。","これは長くない。","あれは美しい花ではない。","この牛乳はあまり美味しくない。","これはお茶ですか、それともコーヒーですか? - コーヒーです。"];


var num = 1;
document.getElementById("number").textContent=num;
document.getElementById("eng").textContent=eng[num-1];

var num_min = 1;
var num_max = 11;

var voicee = "mp3/en/" + num + "e.mp3";
var voicej = "mp3/ja/" + num + "j.mp3";

next.addEventListener('click', function () {   //もしbtn(再生)をクリックしたら..
  //最大値越え防止
  if (num == num_max) {
    num = num_max;
    voicee = "mp3/en/" + num + "e.mp3";
    voicej = "mp3/ja/" + num + "j.mp3";
  } else {
    num = num + 1;
    voicee = "mp3/en/" + num + "e.mp3";
    voicej = "mp3/ja/" + num + "j.mp3";
    document.getElementById("number").textContent=num;
    document.getElementById("eng").textContent=eng[num-1];
    document.getElementById("jap").textContent="　";
  }
});


back.addEventListener('click', function () {   //もしbtn(再生)をクリックしたら..
  //１以下になるのを防ぐ
  if (num == num_min) {
    num = num_min;
    voicee = "mp3/en/" + num + "e.mp3";
    voicej = "mp3/ja/" + num + "j.mp3";
  } else {
    num = num - 1;
    voicee = "mp3/en/" + num + "e.mp3";
    voicej = "mp3/ja/" + num + "j.mp3";
    document.getElementById("number").textContent=num;
    document.getElementById("eng").textContent=eng[num-1];
    document.getElementById("jap").textContent="　";
  }
});



ja.addEventListener('click', function () {   //もしbtn(再生)をクリックしたら..
  document.getElementById("jap").textContent=jap[num-1];
  audio.src = voicej;
  audio.play(); //audioを再生
});



en.addEventListener('click', function () {   //もしbtn(再生)をクリックしたら..
  audio.src = voicee;
  audio.play(); //audioを再生
});




