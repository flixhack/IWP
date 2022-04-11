msgBoard = {
    name: "IWP chat",
    msgHistory: [],
    callBacks: [],
    putMessage(string) {msgBoard.msgHistory.push(string)},
    printMessages() {console.log("Message history of " + msgBoard.name + ":");msgBoard.msgHistory.forEach(element => {console.log(element);});},    
    register(f){
        
    },
    f(name, msg){console.log("Message board: " + name + "\nMessage: " + msg);}
};


msgBoard.putMessage("Hej, dette er en test");
msgBoard.putMessage("Hej IWP");
msgBoard.printMessages();