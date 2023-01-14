const sendButton = document.querySelector("#mail-button");
const input = document.querySelector("input");

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
    if (input.value === "") {return}
    const res = await fetch(urlMail,
    {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            parcel: input.value,
            email: "olitarpar@hotmail.com"
        })
    })
}
