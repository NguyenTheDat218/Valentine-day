/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
    var currentDate = new Date();
    var differenceInSeconds = Math.floor((currentDate - date) / 1000);

    var days = Math.floor(differenceInSeconds / (3600 * 24));
    var remainingSeconds = differenceInSeconds % (3600 * 24); // Số giây còn lại sau khi tính toán ngày
    var hours = Math.floor(remainingSeconds / 3600);
    var minutes = Math.floor((remainingSeconds % 3600) / 60);
    var seconds = remainingSeconds % 60;

    // Thêm số 0 phía trước nếu cần
    function addLeadingZero(number) {
        return number < 10 ? "0" + number : number;
    }

    days = addLeadingZero(days);
    hours = addLeadingZero(hours);
    minutes = addLeadingZero(minutes);
    seconds = addLeadingZero(seconds);

    var result = `Giờ <span class="digit">${hours}</span> Phút <span class="digit">${minutes}</span> Giây <span class="digit">${seconds}</span>`;

    $("#clock").html(result);
}


