// 問題表示
const quiz = [
    {
        question: 'ゲーム史上、最も売れたゲーム機はどれ？',
        answers: [ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
        correct: 'ニンテンドーDS'
    }, {
      question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
      answers: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
      correct: 'MOTHER2'
    }, {
      question: 'ファイナルファンタジーⅣの主人公の名前は？',
      answers: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
      correct: 'セシル'
    }
  ];
  
  const quizLength = quiz.length;
  let quizIndex = 0;
  let score = 0;


// 定数の宣言
const $btn = document.getElementsByTagName('button'); 

const btnLength = $btn.length;

// ボタンに答えを表示
const setupIndex = () => {
    document.getElementById('question').textContent = quiz[quizIndex].question;
    
    let btnIndex = 0;  //ボタンの数
    
    while(btnIndex < btnLength) {
        $btn[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
        btnIndex++;
    };
};
setupIndex();


// 正解なのかの処理
const juge = e => {
    if(quiz[quizIndex].correct === e.target.textContent ){
    
        score++;
    }else {
   
    };

    quizIndex++;

    if(quizIndex < quizLength){
// 問題数がまだあればこちらを実行
setupIndex();
    }else {
// 問題数がなければこちらを実行
        alert('終了！あなたのスコアは' + score + '/' + quizLength + 'です');
    }

};

// クリックされた時、の処理
let answersIndex = 0;

while(answersIndex < btnLength){
    $btn[answersIndex].addEventListener('click', e => {
        juge(e);
    });
    answersIndex++;
}

