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
    if (data?.scheduleData) {
      // 通知のボディ作成
      let no = 1;
      let notificationBody = '';
      for (let schedule of data.scheduleData) {
        // ブッキング可能なスケジュールのみ通知対象
        if (schedule.BookingButtonTitle === 'ブッキング') {
          notificationBody += [
            `${no}：${getMonthDayWeek(schedule.CFSCutOffDate)}`,
            ` - ${schedule.HubCityName} ${getMonthDayWeek(schedule.HubETA)}`,
            ` - ${getMonthDayWeek(schedule.FinalDestinationETATo)}\n`,
          ].join();

          ++no;
        }
      }

      if (notificationBody) {
        let title = `ブッキング可能 / ${params.OriginCFSLocationName} → ${params.FinalDestinationLocationName}`;
        // ユーザーへ通知
        let notification = new Notification(title, {
          body: notificationBody,
          requireInteraction: true, // ユーザーが明示的に解除するまで通知を閉じない
        });

        // 通知をクローズしたタイミングでタイマーを発行する
        notification.onclose = () => {
          setTimeout(checkShip, 1000 * 10);
        };
        return;
      }
    }

    setTimeout(checkShip, 1000 * 10);
  } catch (e) {
    console.error(e);
    setTimeout(checkShip, 1000 * 60);
  }
}

function getMonthDayWeek(targetDate) {
  const weeks = ['日', '月', '火', '水', '木', '金', '土'];

  let date = new Date(targetDate);
  return `${date.getMonth() + 1}/${date.getDate()}/(${weeks[date.getDay()]})`;
}
