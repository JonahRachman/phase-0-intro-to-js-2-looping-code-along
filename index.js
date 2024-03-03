function writeCards(arrayName, giftType) {
    const arrayCard = []
    for (let i = 0; i < arrayName.length; i++) {
        arrayCard.push(`Thank you, ${arrayName[i]}, for the wonderful ${giftType} gift!`);
    }
    return arrayCard
}

function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}