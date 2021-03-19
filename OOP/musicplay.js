class AudioPlayer {
  constructor(selector = '.audioPlayer', audio = []) {
    this.playerElem = document.querySelector(selector);
    this.audio = audio;
    this.currentAudio = null;
    this.createPlayerElements();
    this.audioContext = null;
  }

  createPlayerElements() {
    this.audioElem = document.createElement('audio');
    const playListElem = document.createElement('div');
    playListElem.classList.add('playlist');
    const playElem = document.createElement('button');
    playElem.classList.add('play');
    playElem.innerHTML = '<i class="fa fa-play"></i>';
    this.visualiserElem = document.createElement('canvas');
    this.playerElem.appendChild(this.audioElem);
    this.playerElem.appendChild(playListElem);
    this.playerElem.appendChild(this.visualiserElem);

    this.createPlayListElements(playListElem);
  }

  createPlayListElements(playListElem) {
    this.audio.forEach(audio => {
        const audioItem = document.createElement('a');
        audioItem.href = audio.url;
        audioItem.innerHTML = `<i class="fa fa-play"></i>${audio.name}`;
        this.setEventListener(audioItem);
        playListElem.appendChild(audioItem);
    });
  }
}

const audioPlayer = new AudioPlayer('.audioPlayer', [
  {url: 'songs/Slow.mp3', name: 'Slow'}
]);