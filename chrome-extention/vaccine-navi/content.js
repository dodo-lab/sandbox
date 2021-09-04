$(function () {
  editScreen();
});

function editScreen() {
  let before1Day = createBeforeDate(1);
  let before3Day = createBeforeDate(3);
  let before14Day = createBeforeDate(14);

  let items = $('.m-searchlist-item');
  if (items.length) {
    for (let item of items) {
      // 最終更新日の文字列抽出
      let lastUpdate = $(item)
        .find('.m-searchlist-item__body')
        .children('div:first')
        .find('p')
        .html()
        .replace('最終更新日 : ', '');

      // 正規表現で年月日を抽出
      let m = lastUpdate.match(/(\d+)年(\d+)月(\d+)日/);
      // Webページ上に表示する日付
      let displayLastUpdate = `${m[2]}/${m[3]}`;

      // Webページに挿入
      $(item)
        .children('.m-searchlist-item__head')
        .find('.m-searchlist-item__data')
        .append(`<div>:${displayLastUpdate}</div>`);

      // 最終更新日からの経過日によって病院の背景色を変更
      let itemDate = new Date(m[1], m[2] - 1, m[3]);
      if (itemDate >= before1Day) {
        $(item).css('background-color', '#87CEFA');
      } else if (itemDate >= before3Day) {
        $(item).css('background-color', '#9ACD32');
      } else if (itemDate <= before14Day) {
        $(item).css('background-color', 'grey');
      }
    }
  } else {
    // 画面構築中で対象DOMが参照できない場合はリトライ
    setTimeout(editScreen, 100);
  }
}

function createBeforeDate(beforeDay) {
  let date = new Date();
  date.setDate(date.getDate() - beforeDay);
  date.setHours(0, 0, 0, 0);
  return date;
}
