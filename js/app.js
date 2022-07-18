const mainChat = document.getElementById("mainChats");
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");

let op1 = false;
let op2 = false;
let op3 = false;
let op11 = false;
let op12 = false;
let op13 = false;
let op21 = false;
let op22 = false;
let send = false;

function ranNum() {
  return Math.floor(Math.random() * 1000);
}

function addResponse(id, content, classN) {
  const node = document.createElement("p");
  const textNode = document.createTextNode(content);
  node.appendChild(textNode);
  node.setAttribute("class", classN);
  node.setAttribute("id", id);
  addOtherRes(node, content);
  mainChat.appendChild(node);
  mainChat.scrollTop = mainChat.scrollHeight;
}

function res11() {
  if (op11 === false) {
    let resBot =
      "We will look into our payment gateaway and get back to you via e-mail.";
    let idB = ranNum();
    addResponse(idB, resBot, "mssgBot");

    chatClosed();
  }
}

function res12() {
  if (op12 === false) {
    let resBot = "We will rectify that soon, try logging in an hour time.";
    let idB = ranNum();
    addResponse(idB, resBot, "mssgBot");

    chatClosed();
  }
}

function res13() {
  if (op13 === false) {
    let resBot =
      "The server is currently expriencing congestion. Just hold on and try again later.";
    let idB = ranNum();
    addResponse(idB, resBot, "mssgBot");

    chatClosed();
  }
}

function res21() {
  if (op21 === false) {
    let resBot =
      "Our team is going to mail you a reset code to your e-mail soon.";
    let idB = ranNum();
    addResponse(idB, resBot, "mssgBot");

    chatClosed();
  }
}

function res22() {
  if (op22 === false) {
    let resBot =
      "Plese kindly retry and stop spamming the bot.";
    let idB = ranNum();
    addResponse(idB, resBot, "mssgBot");

    chatClosed();
  }
}

function addOtherRes(node, content) {
  switch (content) {
    case "Payment hanged during processing?":
      return node.setAttribute("onclick", "res11()");
      break;
    case "I can't view my payment reciept.":
      return node.setAttribute("onclick", "res12()");
      break;
    case "Server is not responding.":
      return node.setAttribute("onclick", "res13()");
      break;
    case "Yes.":
      return node.setAttribute("onclick", "res21()");
      break;
    case "No, I haven't.":
      return node.setAttribute("onclick", "res22()");
      break;

    default:
      break;
  }
}

function chatClosed() {
  op1 = op2 = op3 = op11 = op12 = op13 = op21 = op22 = true;

  let mainChatsEl = mainChat.children;

  for (const el in mainChatsEl) {
    if (Object.hasOwnProperty.call(mainChatsEl, el)) {
      const element = mainChatsEl[el];
      element.classList.add("disabled");
    }
  }

  setTimeout(() => {
    let res = "Chat Closed.";
    let id = `r${ranNum()}`;
    addResponse(id, res, "mssgEnd");
  }, 2000);
}

//  FIRST RESPONSEs

r1.addEventListener("click", () => {
  if (op1 === false) {
    let resBot = "What kind of payment issue are you facing?";
    let idB = ranNum();
    addResponse(idB, resBot, "mssgBot");

    let res = "Payment hanged during processing?";
    let id = `r${ranNum()}`;
    addResponse(id, res, "mssgUser");

    let res2 = "I can't view my payment reciept.";
    let id2 = `r${ranNum()}`;
    addResponse(id2, res2, "mssgUser");

    let res3 = "Server is not responding.";
    let id3 = `r${ranNum()}`;
    addResponse(id3, res3, "mssgUser");

    r1.classList.add("disabled");

    op1 = true;
  } else {
    return null;
  }
});

//  SECOND RESPONSE

r2.addEventListener("click", () => {
  if (op2 === false) {
    let resBot = "Have you doubled check your login credentials?";
    let idB = ranNum();
    addResponse(idB, resBot, "mssgBot");

    let res = "Yes.";
    let id = `r${ranNum()}`;
    addResponse(id, res, "mssgUser");

    let res2 = "No, I haven't.";
    let id2 = `r${ranNum()}`;
    addResponse(id2, res2, "mssgUser");

    r2.classList.add("disabled");

    op2 = true;
  } else {
    return null;
  }
});

//  THIRD RESPONSE

r3.addEventListener("click", () => {
  if (op3 === false) {
    let resBot = "What's the name of your supervisor?";
    let idB = ranNum();
    addResponse(idB, resBot, "mssgBot");

    document.getElementById("chatMgt").style.display = "flex";

    r3.classList.add("disabled");

    op3 = true;
  } else {
    return null;
  }
});

const sendBtn = document.getElementById("sendBtn");
const textArea = document.getElementById("textArea");

textArea.addEventListener("keyup", () => {
  if (textArea.value.length > 7) {
    sendBtn.classList.remove("disabled");
    send = true;
  }
});

sendBtn.addEventListener("click", () => {
  if (send) {
    let resBot = `We will inform ${textArea.value} shortly and contact you via your e-mail.`;
    let idB = ranNum();
    addResponse(idB, resBot, "mssgBot");

    document.getElementById("chatMgt").style.display = "none";

    setTimeout(() => {
      chatClosed();
    }, 2000);
  } else {
    return null;
  }
});

// let mainChatsEl = mainChat.children;

// for (const els in mainChatsEl) {
//   if (Object.hasOwnProperty.call(mainChatsEl, els)) {
//     const element = mainChatsEl[els];
//     element.addEventListener('click', () => console.log(true))
//   }
// }
