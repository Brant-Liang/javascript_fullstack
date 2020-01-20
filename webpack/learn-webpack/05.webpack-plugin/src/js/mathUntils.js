import { template } from "babel-core"

function add(num1, num2) {
    return num1 + num2
}
function mul(num1, num2) {
    return num1 * num2
}

export const age = 18
export const name = 'lc'
export default {
   add,
   mul
}