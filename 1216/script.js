const loadweather = function () {
    const result = document.querySelector('.box');
    // 読み込み中は「読み込み中…」を表示
    result.innerHTML = '読み込み中…';
    // fetchで APIにアクセス
    fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json')
        .then(function (response) {
            //取得したJSONをオブジェクトに変換するメソッド.json()
            return response.json();
        })
        .then(function (json) {
            // document.body.textContent = JSON.stringify(json);
            // 今日の天気（愛知県西部）
            // 天気：晴れ
            // 最高気温：12℃
            // 最低気温：12℃
            // 降水確率（午前）：0 %
            // 降水確率（午後）：0 %
            console.log(json[0].timeSeries[0].areas[0].weathers[0]);//晴れ
            console.log(json[0].timeSeries[2].areas[0].temps[0]);//最高気温_12
            console.log(json[0].timeSeries[2].areas[0].temps[1]);//最低気温_12
            console.log(json[0].timeSeries[1].areas[0].pops[0]);//降水確率(午前)_0
            console.log(json[0].timeSeries[1].areas[0].pops[1]);//降水確率(午後)_0
            result.innerHTML = `
        <ul>
            <li>天気：${json[0].timeSeries[0].areas[0].weathers[0]}</li>
            <li>最高気温：${json[0].timeSeries[2].areas[0].temps[0]}</li>
            <li>最低気温：${json[0].timeSeries[2].areas[0].temps[1]}</li>
            <li>降水確率(午前)：${json[0].timeSeries[1].areas[0].pops[0]}</li>
            <li>降水確率(午後)：${json[0].timeSeries[1].areas[0].pops[1]}</li>
        </ul>`
        })
        .catch();
}

// ボタンを押す
const button = document.querySelector('.loadBtn');
button.addEventListener('click', function () {
    console.log('おされた');
    loadweather();
})


// JSONを解析
// 必要な情報だけ取り出す
// HTMLに表示する
// async / awaitで書き直す