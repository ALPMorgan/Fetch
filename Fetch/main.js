const first = document.getElementById('number1');
const second = document.getElementById('number2');

const input1 = document.getElementById('url1')
const input2 = document.getElementById('url2')

const btn = document.getElementById('start_workers')


if (window.Worker) {
    btn.addEventListener('click', () => {
        console.log("[HEAD] Запускаем Воркер [API]")
        responseAPI.postMessage(["https://random-data-api.com/api/v2/users", 1]);
        responseAPI.postMessage(["https://randomuser.me/api/", 2]);
    })
    const responseAPI = new Worker("worker.js");
    const parserJSON = new Worker("parserJSON.js")
    responseAPI.onmessage = function(e) {
        console.log('[HEAD] Получен ответ от [API]');
        parserJSON.postMessage(e.data);
    }
    parserJSON.onmessage = function (e) {
        console.log('[HEAD] Получен ответ от [ParserJSON]');
    }
} else {
    console.log('Your browser doesn\'t support web workers.');
}