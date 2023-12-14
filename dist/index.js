import { concatenetion } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenetion(input.value, "hello there!");
    });
}
//# sourceMappingURL=index.js.map