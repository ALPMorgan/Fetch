onmessage = async function (e) {
    console.log(`[API-${e.data[1]}] Получено сообщение от головного скрипта`);
    await fetch(e.data[0])
        .then(response => response.json())
        .then(response => {
            console.log(`[API-${e.data[1]}] Ответ отправлен в головной скрипт`);
            postMessage([response, e.data[1]])
        })
}