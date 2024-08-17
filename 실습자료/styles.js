function copyLink() {
    const url = window.location.href; // 현재 페이지의 URL 가져오기
    navigator.clipboard.writeText(url) // 클립보드에 URL 복사
        .then(() => {
            showNotification("링크가 복사되었습니다!"); // 알림 표시
        })
        .catch(err => {
            console.error("링크 복사 실패: ", err); // 복사 실패 메시지
        });
}

function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message; // 알림 메시지 설정
    notification.style.display = "block"; // 알림 표시

    setTimeout(() => {
        notification.style.display = "none"; // 3초 후 알림 숨김
    }, 3000);
}