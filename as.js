let element = document.getElementById('text');
const recognization = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognization.lang = "en-GB";
recognization.continuous = true;

document.onclick = () => {
    recognization.start();
};

recognization.onresult = (events) => {
    let value=""

    for (const result of events.results) {
            let textValue = result[0].transcript.trim()+ "  ";
            value = value +  textValue
            element.innerHTML = value ; 
                
         
        
    }
};

