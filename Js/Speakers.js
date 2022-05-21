/* eslint-disable linebreak-style */
const speakers = [
  {
    Name: 'Kacie',
    Web3Dao: 'LearnWeb3',
    Summary: 'Kacie won his first hackathon after 2 months of web3! Smash!',
    Image: {
      url: './Images/web3.gif',
      alt: 'Web3 BOSS',
    },
  },
  {
    Name: 'K42',
    Web3Dao: 'Web3 creator/developer',
    Summary: 'Its all data waves, lets surf the network! We rise together, forever!',
    Image: {
      url: './Images/K42.gif',
      alt: 'Web3 BOSS',
    },
  },
  {
    Name: 'Metalisa',
    Web3Dao: 'Web3 creator/developer',
    Summary: 'Metalisa is an amazing artist and a bright soul, he can levitate!',
    Image: {
      url: './Images/Eye.png',
      alt: 'Web3 BOSS',
    },
  },
  {
    Name: 'Datadigit',
    Web3Dao: 'Web3 user',
    Summary: 'Datadigit spends 142 ETH a day, it is all digital baby!',
    Image: {
      url: './Images/Viking.png',
      alt: 'Web3 BOSS',
    },
  },
  {
    Name: 'Vik',
    Web3Dao: 'Dao creator',
    Summary: 'Vik is a owner of a VVC and a DAO creator, he loves volcanoes and cold water',
    Image: {
      url: './Images/vik.png',
      alt: 'Web3 BOSS',
    },
  },
  {
    Name: 'Web3 whale',
    Web3Dao: 'Lets buy NFTS',
    Summary: 'I buy NFTS, and that is all!',
    Image: {
      url: './Images/whale.png',
      alt: 'Web3 BOSS',
    },
  },
];

function createSpeakerCard({
  Name, Web3Dao, Summary, Image,
}) {
  return `
  <div class="speaker">
    <img
      class="speaker-image"
      src="${Image.url}"
      alt="Speaker 1"
    />
    <div class="speaker-body">
      <div id="speaker-name1" class="speaker-name">${Name}</div>
      <p id="speaker-occupation" class="speaker-occupation">${Web3Dao}</p><hr class="line2">
      <p id="speaker-about1" class="speaker-about">${Summary}</p>
    </div>
  </div>
  `;
}

function showSpeakers(speakers) {
  const speakersContainerEl = document.querySelector('#speakers');

  if (!speakersContainerEl) return;

  speakersContainerEl.innerHTML = '';

  speakers.forEach((speaker) => {
    speakersContainerEl.innerHTML += createSpeakerCard(speaker);
  });
}

const init = () => {
  const button = document.querySelector('.see-more');
  const isMobile = window.innerWidth < 768;
  const displayedSpeakers = isMobile ? speakers.slice(0, 2) : speakers;

  showSpeakers(displayedSpeakers);

  if (!button) return;

  button.addEventListener('click', () => {
    showSpeakers(speakers);
    button.style.display = 'none';
  });
};

window.onload = init;
