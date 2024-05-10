const ranges=document.querySelectorAll(".settings input")
const copyButton=document.getElementById("copy-styles")
const preview=document.getElementById("preview")
const styles=document.getElementById("styles")

ranges.forEach((e)=>{
    e.addEventListener("input",generateStyles)
})
function generateStyles(){
    const xshadow=document.getElementById("x-shadow").value
    const yshadow=document.getElementById("y-shadow").value
    const blurRadius=document.getElementById("blur-r").value
    const SpreadRadius=document.getElementById("spread-r").value
    const borderRadius=document.getElementById("border-r").value
    const shadowOpacity=document.getElementById("shadow-opacity").value
    const inset=document.getElementById("inset-shadow").checked 
    const shadowColor=document.getElementById("shadow-color").value

    const boxShadow=`${inset ? "inset " : ""} ${xshadow}px ${yshadow}px ${blurRadius}px ${SpreadRadius}px ${hexToRGBA(shadowColor,shadowOpacity)}`
    preview.style.boxShadow=boxShadow;
    preview.style.borderRadius=`${borderRadius}px`;

    styles.textContent=`box-shadow:${boxShadow};\nborder-radius:${borderRadius}px;`
}
function hexToRGBA(shadowColor, shadowOpacity) {
    const r = parseInt(shadowColor.substr(1, 2), 16);
    const g = parseInt(shadowColor.substr(3, 2), 16);
    const b = parseInt(shadowColor.substr(5, 2), 16);

    return `rgba(${r}, ${g}, ${b}, ${shadowOpacity})`;
}
function copyStyles(){
    styles.select();
    document.execCommand("copy");
    copyButton.innerText="Copied!"
    setTimeout(()=>{
        copyButton.innerText="Copy Styles"
    },500)
    
}
generateStyles();