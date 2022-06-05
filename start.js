const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [];
/*
0:고양이 ISTJ
1:물개 INFJ
2:곰 ISFJ
3:기린 INTJ
4:판다 ISFP
5:뱀 INTP
6:여우 ESFJ
7:악어 ENTJ
8:토끼 ENTP
9:고슴도치 INFP
10:말 ENFP
11:쥐 ESTJ
12:사슴 ISTP
13:강아지 ESFP
14:호랑이 ESTP
15:돼지 ENFJ
*/
function calResult(){
  var pointArray = [
    { name: 'cat', value: 0, key: 0},
    { name: 'seal', value: 0, key: 1},
    { name: 'bear', value: 0, key: 2},
    { name: 'giraffe', value: 0, key: 3},
    { name: 'panda', value: 0, key: 4},
    { name: 'snake', value: 0, key: 5},
    { name: 'fox', value: 0, key: 6},
    { name: 'croco', value: 0, key: 7},
    { name: 'rabbit', value: 0, key: 8},
    { name: 'gosum', value: 0, key: 9},
    { name: 'horse', value: 0, key: 10},
    { name: 'mouse', value: 0, key: 11},
    { name: 'deer', value: 0, key: 12},
    { name: 'dog', value: 0, key: 13},
    { name: 'tiger', value: 0, key: 14},
    { name: 'pig', value: 0, key: 15},
  ]

    for(let i = 0; i < endPoint; i++){
      var target = qnaList[i].a[select[i]];
      for (let j = 0; j < target.typelength; j++ ){
        for (let k = 0; k < pointArray.length; k++){
          if (target.type[j] === pointArray[k].name){
            pointArray[k].value += 1;
          }
        }
      }
    }

    var resultArray = pointArray.sort (function (a, b){
      if (a.value > b. value){
        return -1;
      }
      if(a.value < b. value){
        return 1;
      }
        return 0;
    });
    let resultword = resultArray[0].key;
    return resultword;
}
function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.jpg';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}
function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}
function addAnswer(answerText, qIdx, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      select[qIdx] = idx;
      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    },450)
  }, false);
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
