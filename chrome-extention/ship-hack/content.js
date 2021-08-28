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

  // 荷受地と仕向地の初期値設定
  $('#originCFS').val('OSAKA, JAPAN');
  $('#finalDestination').val('LOS ANGELES, CA, UNITED STATES');

  // チェック停止クリック
  $('#stopCheckShip').click(() => {
    check = false;
    $('#startCheckShip').show();
    $('#stopCheckShip').hide();
  });

  // チェック開始クリック
  $('#startCheckShip').click(() => {
    check = true;
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
  let params = {
    CargoTypeID: 1,
    OriginCFSLocationName: $('#originCFS').val(),
    FinalDestinationLocationName: $('#finalDestination').val(),
    DBBookingFlag: false,
  };

  try {
    // スケジュール検索のリクエスト
    let response = await fetch('https://web.logix.co.jp/api/ScheduleSearch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(params),
    });

    let data = await response.json();
    console.log(data);
    if (data?.scheduleData) {
      for (let schedule of data.scheduleData) {
        if (schedule.BookingButtonTitle === 'ブッキング') {
          // ユーザーへ通知
          let notification = new Notification('ブッキング可能', {
            body: [
              `荷受地：${params.OriginCFSLocationName}`,
              `仕向地：${params.FinalDestinationLocationName}`,
            ].join('\n'),
            requireInteraction: true, // ユーザーが明示的に解除するまで通知を閉じない
          });

          // 通知をクローズしたタイミングでタイマーを発行する
          notification.onclose = () => {
            setTimeout(checkShip, 1000 * 10);
          };
          return;
        }
      }
    }

    setTimeout(checkShip, 1000 * 10);
  } catch (e) {
    console.error(e);
    setTimeout(checkShip, 1000 * 60);
  }
}
