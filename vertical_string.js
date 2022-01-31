function showVerticalMessage(message) {
    const maxLenth = 10;
    const lowerLetter = 'м'
    const checkedLetter = 0;
    let myMessage = '';

    if (message[checkedLetter] == lowerLetter) {
        myMessage = message[checkedLetter].toUpperCase() + message.slice(1,maxLenth);
    } else myMessage = message.slice(0,maxLenth);

        for (let substr of myMessage) {
            console.log(substr + '\n')
        }
}

// showVerticalMessage('фарафон')
showVerticalMessage('марафон')
// showVerticalMessage('Фарафон123123123')

