let check = true;

$(function () {
  // 許可を求める
  Notification.requestPermission().then((permission) => {
    if (permission == 'granted') {
      console.log('許可');
      checkShip();
    } else if (permission == 'denied') {
      console.log('拒否');
    } else if (permission == 'default') {
      console.log('無視');
    }
  });

  // チェックの停止と開始のボタンを追加
  $('h2')
    .after(
      '<button type="button" class="btn btn-danger" id="stopCheckShip"><span>チェック停止</span></button>'
    )
    .after(
      '<button type="button" class="btn btn-primary" id="startCheckShip" style="display: none;" id="stopCheckShip"><span>チェック開始</span></button>'
    );

  // チェック停止クリック
  $('#stopCheckShip').click(() => {
    check = false;
    $('#startCheckShip').show();
    $('#stopCheckShip').hide();
  });

  // チェック開始クリック
  $('#startCheckShip').click(() => {
    check = false;
    $('#stopCheckShip').show();
    $('#startCheckShip').hide();
    checkShip();
  });
});

async function checkShip() {
  if (!check) {
    return;
  }

  // パラメータ
  let data = {
    CargoTypeID: 1,
    OriginCFSLocationName: 'OSAKA, JAPAN',
    FinalDestinationLocationName: 'LOS ANGELES, CA, UNITED STATES',
    DBBookingFlag: false,
  };

  fetch('https://web.logix.co.jp/api/ScheduleSearch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.scheduleData) {
        for (let schedule of data.scheduleData) {
          if (schedule.BookingButtonTitle === 'ブッキング') {
            let n = new Notification('セイノーロジックス', {
              body: 'ブッキング可能',
            });

            setTimeout(n.close.bind(n), 1000 * 10);
            setTimeout(checkShip, 1000 * 10);
            return;
          }
        }
      }

      setTimeout(checkShip, 1000 * 60);
    });
}
