document.addEventListener('DOMContentLoaded', () => {
  const apContainer = document.createElement('div')
  apContainer.id = 'aplayer'
  document.body.append(apContainer)
  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [
      {
        name: '星宿计时',
        artist: '杉田朗/洛天依',
        url: 'https://cdn.jsdelivr.net/gh/YunYouJun/cdn/audio/star-timer.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/bg/stars-timing-0.jpg',  
      },
    ],
  })
})

