const sendButton = document.querySelector("#mail-button");
const inputName = document.querySelector("#input_name");
const inputMail = document.querySelector("#input_mail");
const inputSubject = document.querySelector("#input_subject");
const inputContent = document.querySelector("#content");

const urlMail = "http://localhost:5000"

sendButton.addEventListener("click", () =>{
    console.log("bruh")
    sendData();
})

async function sendMail(){
    console.log("email called")
        const res = await fetch(urlMail + "sendMail",
        {
            method: "GET"
        })
        console.log(res)
    }
async function sendData(){
    console.log("called")
    if (inputMail.value === "") {return}
    const res = await fetch(urlMail,
    {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name: inputName.value,
            email: inputMail.value,
            subject: inputSubject.value,
            content: inputContent.value
        })
    })
}
