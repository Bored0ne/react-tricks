// This is a trick to allow someone to keep typing in an input and
// have that input cause an effect {delay} number of millis after they are done typing.
const queue = [];
export function queueCall(key, callback, delay = 2000) {
    if (queue[key]) {
        clearTimeout(queue[key]);
    }
    queue[key] = setTimeout(callback, delay);
}
