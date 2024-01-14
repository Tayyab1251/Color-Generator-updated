const getColor = ()=>{

    let randomNumber =Math.floor(Math.random()*16777215);

    // console.log(randomNumber);

    let colorCode = "#" + randomNumber.toString(16);

    // console.log(colorCode)

    document.body.style.backgroundColor = colorCode;

    document.getElementById("color-code-section").innerText=colorCode;
    document.getElementById("copy-button").innerText = "Copy";
    document.getElementById("copy-button").classList.remove("copied");
    
    // document.getElementById("call-to-action").style.backgroundColor = colorCode;
}
getColor();

const copyMe = ()=>{

    let copyText = document.getElementById("color-code-section");

    navigator.clipboard.writeText(copyText.innerText)
    document.getElementById("copy-button").innerText = "Copied!✅";
    document.getElementById("copy-button").classList.add("copied");

    // alert("Color code copied !!");

}
