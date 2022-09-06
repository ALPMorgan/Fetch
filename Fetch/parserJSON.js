onmessage = async function (e) {
    console.log(`[ParserJSON-${e.data[1]}]: Получены данные!`);

    for (let [key, value] of Object.entries(e.data[0])) {

        console.log(`[ParserJSON-${e.data[1]}].Принято: ключ: ${key} значение: ${value}`)


        if (typeof value === "object") {
            console.log(`[ParserJSON-${e.data[1]}].Запускаем новый [ParserJSON] с ключом ${key}`);
            let worker = new Worker('parserJSON.js');
            worker.postMessage([value, e.data[1] + "." + key]);

            worker.onmessage =() => {
                console.log(`[ParserJSON-${e.data[1]}].Принято`);
            }
        } else {
            console.log(`%c ${key} : ${value}`, 'background: #222; color: #bada55')
        }

        postMessage(true);
    }
}