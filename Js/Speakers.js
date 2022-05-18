const speakers = [
  {
    Name: "Kacie Ahmed",
    Web3Dao: "LearnWeb3",
    Summary: "Kacie won his first hackathon after 2 months of web3!",
    Image: {
      url: "./Images/Kacie.jpg",
      alt: "Learnweb3 BOSS",
    },
  },
  {
    Name: "Kacie Ahmed",
    Web3Dao: "LearnWeb3",
    Summary: "Kacie won his first hackathon after 2 months of web3!",
    Image: {
      url: "./Images/Kacie.jpg",
      alt: "Learnweb3 BOSS",
    },
  },
  {
    Name: "Kacie Ahmed",
    Web3Dao: "LearnWeb3",
    Summary: "Kacie won his first hackathon after 2 months of web3!",
    Image: {
      url: "./Images/Kacie.jpg",
      alt: "Learnweb3 BOSS",
    },
  },
  {
    Name: "Kacie Ahmed",
    Web3Dao: "LearnWeb3",
    Summary: "Kacie won his first hackathon after 2 months of web3!",
    Image: {
      url: "./Images/Kacie.jpg",
      alt: "Learnweb3 BOSS",
    },
  },
  {
    Name: "Kacie Ahmed",
    Web3Dao: "LearnWeb3",
    Summary: "Kacie won his first hackathon after 2 months of web3!",
    Image: {
      url: "./Images/Kacie.jpg",
      alt: "Learnweb3 BOSS",
    },
  },
  {
    Name: "Kacie Ahmed",
    Web3Dao: "LearnWeb3",
    Summary: "Kacie won his first hackathon after 2 months of web3!",
    Image: {
      url: "./Images/Kacie.jpg",
      alt: "Learnweb3 BOSS",
    },
  },
];

function createSpeakerCard({ image, name, occupation, overview }) {
  return `
  <div class="speaker">
    <img
      class="speaker__image"
      src="${image}"
      alt="Speaker 1"
    />
    <div class="speaker__body">
      <div class="speaker__name">${name}</div>
      <p class="speaker__occupation">${occupation}</p>
      <p class="speaker__about">${overview}</p>
    </div>
  </div>
  `;
}

function showSpeakers(speakers) {
  const speakersContainerEl = document.querySelector("#speakers");

  if (!speakersContainerEl) return;

  speakersContainerEl.innerHTML = "";

  speakers.forEach((speaker) => {
    speakersContainerEl.innerHTML += gentateSpeakerCard(speaker);
  });
}

const init = () => {
  const moreBtnEl = document.querySelector(".section__more-btn");
  const isMobile = window.innerWidth < 768;
  const displayedSpeakers = isMobile ? speakers.slice(0, 2) : speakers;

  showSpeakers(displayedSpeakers);

  if (!moreBtnEl) return;

  moreBtnEl.addEventListener("click", () => {
    showSpeakers(speakers);
    moreBtnEl.style.display = "none";
  });
};

export default {
  init,
};
