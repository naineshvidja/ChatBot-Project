const userMessage = [
    ["hi", "hey", "hello"],
    ["can you help me with something"],
    ["sure", "yes", "no"],
    ["are you genious", "are you nerd", "are you intelligent"],
    ["i hate you", "i dont like you"],
    ["how are you", "how is life", "how are things", "how are you doing"],
    ["I am fine","fine","good"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
  
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what do you call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "ok", "okay", "nice", "welcome"],
    ["thanks", "thank you"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["you are funny"],
    ["i dont know"],
    ["boring"],
    ["im tired"],
    ["cns","cryptography and network security"],
    ["ai","artificial intelligence"],
    ["mad","mobile application development"],
    ["internals","when are the internals","midsem"],
    ["time table","What is the time table","what is our daily schedule","lectures"]
  ];
  const botReply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["Sure you can ask anything!","I am here to help"],
    ["Okay"],
    ["Yes I am! "],
    ["I'm sorry about that. But I like you dude."],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    ["Good to hear"],
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["I am always young."],
    ["I am just a bot", "I am a bot. What are you?", "I am not a human"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Briyani", "Burger", "Sushi", "Pizza"],
    ["Dude!"],
    ["Yes?"],
    ["Glad to hear it"],
    ["Say something interesting"],
    ["Sorry for that. Let's chat!"],
    ["Take some rest, Dude!"],
    ["CNS Syllabus : <a href='https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3161606.pdf' target='_blank'>Here</a> <br>Reading Material CNS : <a href='https://darshan.ac.in/gtu-study-material/2170709-Information-and-Network-Security' target='_blank'>Here</a>"],
    ["AI Syllabus : <a href='https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3170716.pdf' target='_blank'>Here</a> <br>Reading Material AI :  <a href='https://darshan.ac.in/gtu-study-material/3170716-Artificial-Intelligence' target='_blank'>Here</a>"],
    ["MAD Syllabus : <a href='https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3170726.pdf' target='_blank'>Here</a> <br>Reading Material MAD : <a href='https://darshan.ac.in/gtu-study-material/3170726-Mobile-Application-Development' target='_blank'>Here</a>"],
    ["Internal's Schedule : <a href='file:///N:/Projects/Chat%20Bot/Exam.Schedule_sem_VI.pdf' target='_blank'>Here</a>"],
    ["Click <a href='file:///N:/Projects/Chat%20Bot/TYIT2_TT.pdf' target='_blank'>here</a> to see it"]
  ];
  
  const alternative = [
    "Ask something else...",
    "Hey, I'm listening..."
  ];
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation."
      ],
      ["Good Night", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    
    //User Message
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    //Bot Message
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    
    //Scroll to bottom of the chat
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
  }
