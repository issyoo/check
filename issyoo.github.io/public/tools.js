export function toast(string){
var mainBox = document.createElement("span");
mainBox.textContent = string;
document.body.appendChild(mainBox);
}
export default { toast };
