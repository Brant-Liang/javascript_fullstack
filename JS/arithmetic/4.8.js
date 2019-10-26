let loadLength = [10, 30, 50, 80, 90, 92, 120];
let posi = -1;
let day = 0;
let tempLength = 30;
let posiList = []
while (posi < loadLength.length - 1) {
    tempLength = 30;
    if (posi === -1) {
        posi++;
        tempLength -= loadLength[0]
        continue;
    }
    else {
        while (tempLength >= loadLength[posi + 1] - loadLength[posi] && tempLength > 0) {
            tempLength -= (loadLength[posi + 1] - loadLength[posi]);
            posi++;
        }
        posiList.push(posi);
        day++;
    }
}
console.log(day);
console.log(posiList);
