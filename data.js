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

const qnaList = [{
    q: '1. 좋아하는 이성을 보았을 때 나는?',
    a: [
      { answer: '저 사람 완전 내 스타일! 전화번호를 얻고 연락을 시도한다.',
          type: [6,7,8,10,11,13,14,15] },
      {
        answer: '와 대박... 마음 속으로 감탄하며 힐끗힐끗 쳐다본다.',
        type: [0,1,2,3,4,5,9,12]
      },
    ]
  },
  {
    q: '2. 연인에게 어떤 일에 대해 설명할 때 나는?',
    a: [{
        answer: '오늘 부장님이 퇴근할 때쯤 오래 걸리는 일을 주고 가는 거 있지?',
        type: [1,3,5,7,8,9,10,15]
      },
      {
        answer: '오늘 6시 쯤에 김충연 부장이 나보고 서류를 다시 해오라는 거야.',
        type: [0,2,4,6,11,12,13,14]
      },
    ]
  },
  {
    q: '3. 연인이 속상한 일이 생겼다고 말해온다면?',
    a: [{
        answer: '그랬구나. 그래서 그 이후로 어떻게 됐는데?',
        type: [0, 3,5,7,8,11,12,14]
      },
      {
        answer: '걔가 진짜 잘못했네. 네가 많이 속상했겠다.',
        type: [1,2,4,6,9,10,13,15]
      },
    ]
  },
  {
    q: '4. 연인과 내일 만난다고 할 때 나는?',
    a: [{
        answer: '11시에는 밥 먹고, 1시 영화 볼 거니까 식당 미리 알아봐야지!',
        type: [0,1,2,3,6,7,11,15]
      },
      {
        answer: '내일은 내일의 내가 하겠지! 내 할 일을 한다.',
        type: [4,5,8,9,10,12,13,14]
      },
    ]
  },
  {
    q: '5. 좋아하는 사람에게 연락하려고 할 때 나는?',
    a: [{
        answer: '고민하는 시간마저 낭비! 뭐하냐고 물어본다.',
        type: [4,5,8,9,10,12,13,14]
      },
      {
        answer: '이렇게 보낼까? 아냐 수정하자. 썼다 지웠다를 반복한다.',
        type: [0,1,2,3,6,7,11,15]
      },
    ]
  },
  {
    q: '6. 연인을 칭찬할 때 나는?',
    a: [{
        answer: '너는 눈이 호수같아. 엄청 맑아서 거울을 보는 것 같아.',
        type: [1,3,5,7,8,9,10,15]
      },
      {
        answer: '너는 눈이 진짜 또렷하고 빛나서 예쁜 것 같아.',
        type: [0,2,4,6,11,12,13,14]
      },
    ]
  },
  {
    q: '7. 연인과의 약속에 늦었을 때 나는?',
    a: [{
        answer: '늦어서 미안해... <사과 후 이유 말하기>',
        type: [1,2,4,6,9,10,13,15]
      },
      {
        answer: '오는 길에 버스가 너무 막히는거야. <이유 말한 뒤 사과> ',
        type: [0, 3,5,7,8,11,12,14]
      },
    ]
  },
  {
    q: '8. 연인과의 데이트 장소로 적합한 곳은?',
    a: [{
        answer: '특별한 사람과는 특별한 곳에! 밖을 선호한다.',
        type: [6,7,8,10,11,13,14,15]
      },
      {
        answer: '치킨 먹으면서 넷플릭스 콜? 집을 선호한다.',
        type: [0,1,2,3,4,5,9,12]
      },
    ]
  },
  {
    q: '9. 계속된 면접 불합격으로 힘든 연인에게 주고 싶은 말은?',
    a: [{
        answer: '<인생사 새옹지마> 라잖아. 더 큰 미래가 널 기다릴테니 너무 걱정 마.',
        type: [1,2,4,6,9,10,13,15]
      },
      {
        answer: '지금까지 어느 기업에 이력서를 넣었어? 면접 준비 같이 해 볼까?',
        type: [0, 3,5,7,8,11,12,14]
      },
    ]
  },
  {
    q: '10. 내일 1주년일 때, 나는?',
    a: [{
        answer: '이미 선물과 편지를 준비한 이후이다.',
        type: [0,1,2,3,6,7,11,15]
      },
      {
        answer: '어제 주문한 케이크를 받으러 갈 시간을 확인하 편지를 쓴다.',
        type: [4,5,8,9,10,12,13,14]
      },
    ]
  },
  {
    q: '11. 연락 중 연인이 피곤하다고 보내오면 나는?',
    a : [{
      answer: '어제 집에 늦게 들어왔다고 했지, 피곤할 만 하네.',
      type: [0,2,4,6,11,12,13,14]
      },
      {
        answer: '왜 피곤하지? 무슨 일 있나? 어디 다친거 아니야?',
        type: [1,3,5,7,8,9,10,15]
      },
    ]
  },
  {
    q: '12. 연인과의 연락 방식 중 더 선호하는 것은? ',
    a: [{
        answer: '목소리를 들어야 마음이 닿지, <전화>',
        type: [6, 7 ,8,10,11,13,14,15]
      },
      {
        answer: '말실수하면 어떡해, <문자>',
        type: [0,1,2,3,4,5,9,12]
      },
    ]
  }
]

const infoList = [{
    name: '내가 시작한 사랑이니까 내가 지켜! <고양이>',
    desc: '고양이 내용  '
  },
  {
    name: '우리 오늘은 이거 하러 갈까?, <물개>',
    desc: '물개 내용 '
  },
  {
    name: '네가 좋다면 그렇게 하자, <곰>',
    desc: '곰내용 '
  },
  {
    name: '이건 어때? 난 어때? 독특한 매력을 가진 <기린>',
    desc: '기린 내용 '
  },
  {
    name: '못 보던 옷이네, 새로 산 거지! <판다>',
    desc: '판다 내용'
  },
  {
    name: '기념일에 무슨 이벤트 할까, 이벤트 플래너 <뱀>',
    desc: '뱀 내용 '
  },
  {
    name: '어 오늘 머리 바꿨네 잘 어울린다, 센스가 뛰어난 <여우>',
    desc: '여우 내용 '
  },
  {
    name: '나 정말 네가 좋아! <악어>',
    desc: '악어 내용'
  },
  {
    name: '응, 네 말이 다 맞아! <토끼>',
    desc: '토끼 내용'
  },
  {
    name: '요술램프가 있다면, 네게 모든 소원을 쓸게! <고슴도치>',
    desc: '고슴도치 내용 '
  },
  {
    name: '우리 이렇게 손 잡고 가자! <말>',
    desc: '말내용  '
  },
  {
    name: '난 네가 좋아 너무 좋아, 애교만땅 <쥐>',
    desc: '쥐 내용 '
  }
]
