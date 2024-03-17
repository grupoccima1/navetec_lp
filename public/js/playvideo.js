document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('videoPlayer');
    var playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function () {
        video.style.display = 'block'; // Mostrar el video
        if (video.requestFullscreen) {
            video.requestFullscreen().then(() => {
                video.play();
            });
        } else if (video.mozRequestFullScreen) { /* Firefox */
            video.mozRequestFullScreen().then(() => {
                video.play();
            });
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            video.webkitRequestFullscreen().then(() => {
                video.play();
            });
        } else if (video.msRequestFullscreen) { /* IE/Edge */
            video.msRequestFullscreen().then(() => {
                video.play();
            });
        }
    });

    video.addEventListener('ended', function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
        video.style.display = 'none'; // Ocultar el video al finalizar
    });
});
