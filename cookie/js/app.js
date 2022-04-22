(()=>{
  const btnOpen = document.getElementById('btnOpen');
  const btnHideToday = document.getElementById('btnHideToday');
  const btnClose = document.getElementById('btnClose');
  const dimmed = document.getElementsByClassName('dimmed')[0];
  const popup = document.getElementsByClassName('popup-area')[0];

  const ACTIVE_CLASS = 'is-active';

  function openPopup() {
    dimmed.classList.add(ACTIVE_CLASS);
    popup.classList.add(ACTIVE_CLASS);
  }

  function closePopup() {
    dimmed.classList.remove(ACTIVE_CLASS);
    popup.classList.remove(ACTIVE_CLASS);
  }

  function setCookie(name, value) {
    // 테스트용으로 초 단위만 설정.
    var today = new Date();
    // today.setHours(23);
    // today.setMinutes(59);
    today.setSeconds(59);
    document.cookie = name + '=' + value + '; path=/; expires=' + today.toUTCString() + ';'
    console.log('세팅 시작 : ', today.toUTCString());
  }

  function closePopupToday() {
    setCookie("popupInfo", "close");
    closePopup();
  }

  const cookie = document.cookie;
  console.log('1. load: ', cookie);
  console.log(cookie.indexOf("popupInfo=close"));
  // indexOf : 일치하는 값이 없으면 -1을 반환합니다.
  // => 쿠키 설정 안되어 있으면 -1 반환. 쿠키 이미 설정되어 있으면 0 반환.

  (cookie.indexOf("popupInfo=close") > -1 ) ? closePopup() : openPopup();

  btnOpen.addEventListener('click', openPopup);
  btnClose.addEventListener('click', closePopup);
  btnHideToday.addEventListener('click', closePopupToday);
})()
