const speakers = [
  {
    Name: "Kacie",
    Web3Dao: "LearnWeb3",
    Summary: "Kacie won his first hackathon after 2 months of web3!",
    Image: {
      url: "./Images/web3.gif",
      alt: "Web3 BOSS",
    },
  },
  {
    Name: "K42",
    Web3Dao: "Web3 creator/developer",
    Summary: "Its all data waves, lets surf the network",
    Image: {
      url: "./Images/K42.gif",
      alt: "Web3 BOSS",
    },
  },
  {
    Name: "Metalisa",
    Web3Dao: "Web3 creator/developer",
    Summary: "Metalist is an amazing artist and a bright soul",
    Image: {
      url: "./Images/Eye.png",
      alt: "Web3 BOSS",
    },
  },
  {
    Name: "Datadigit",
    Web3Dao: "Web3 user",
    Summary: "Datadigit spends 142 ETH a day!",
    Image: {
      url: "./Images/Viking.png",
      alt: "Web3 BOSS",
    },
  },
  {
    Name: "Vik",
    Web3Dao: "Dao creator",
    Summary: "Vik is a owner of a VVC and a DAO creator",
    Image: {
      url: "./Images/vik.png",
      alt: "Web3 BOSS",
    },
  },
  {
    Name: "Web3 whale",
    Web3Dao: "Lets buy NFTS",
    Summary: "I buy NFTS",
    Image: {
      url: "./Images/whale.png",
      alt: "Web3 BOSS",
    },
  },
];

function createSpeakerCard({ Name, Web3Dao, Summary, Image }) {
  return `
  <div class="speaker">
    <img
      class="speaker-image"
      src="${Image.url}"
      alt="Speaker 1"
    />
    <div class="speaker-body">
      <div class="speaker-name">${Name}</div>
      <p class="speaker-occupation">${Web3Dao}</p>
      <p class="speaker-about">${Summary}</p>
    </div>
  </div>
  `;
}

function showSpeakers(speakers) {
  const speakersContainerEl = document.querySelector("#speakers");

  if (!speakersContainerEl) return;

  speakersContainerEl.innerHTML = "";

  speakers.forEach((speaker) => {
    speakersContainerEl.innerHTML += createSpeakerCard(speaker);
  });
}

const init = () => {
  const button = document.querySelector(".see-more");
  const isMobile = window.innerWidth < 768;
  const displayedSpeakers = isMobile ? speakers.slice(0, 2) : speakers;

  showSpeakers(displayedSpeakers);

  if (!button) return;

  button.addEventListener("click", () => {
    showSpeakers(speakers);
    button.style.display = "none";
  });
};

window.onload = init;
