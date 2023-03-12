let userName = prompt("Enter the name of the person that you want to hack");
let hackMessage = [
  "Initializing Hack tool...",
  "Hijacking user " + userName,
  userName + " loacted",
  "password:XXXXXXX",
  "number:+91XXXXXXXXXX",
  "Connecting to server 1...",
  "Match not found...",
  "Connection failed. Retrying...",
  "Match not found",
  "Connecting to server 2",
  "Connected Successfully...",
  "Connecting to Facebook...",
  "facebook hacked",
  "Trying Brute Force...",
  "217K passwords tried...",
  "Another 13K passwords tried...",
  "Match found...",
  "Instagram hacked",
  "getting device info...",
  "access granted to phone",
  "resetting passwords...",
  "Accessing Account...",
  "logs generated",
  "hacking status: pending...",
  "hacking status:<br> hacked! succesfully -_+",
  "Hacker Man - Ajay",
];

const takeTime = async (time) => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(true);
    }, time * 1500);
  });
};

const genHack = async (hackMessage) => {
  await takeTime(1);
  let randomHackCode = document.getElementById("genHackContainer");
  randomHackCode.innerHTML = randomHackCode.innerHTML + hackMessage + "<br>";
};

(async () => {
  for (let i = 0; i < hackMessage.length; i++) {
    await genHack(hackMessage[i]);
  }
})();
