
var patt1 = new RegExp("晴");
var patt2 = new RegExp("阴");
var patt3 = new RegExp("多云");
var patt4 = new RegExp("雨");

// patt1.test('今天是个晴天');
// console.log(patt1.test('今天是个晴天'));

//获取三天天气预报的相关信息
$.ajax({
    type: 'GET',
    url: "https://free-api.heweather.com/s6/weather/forecast?location=huzhou&key=721b70a1f2ab41e585e266fa03461b3f",
    success: function (result_forecasr) {
        $('#city').text(result_forecasr.HeWeather6[0].basic.location);
        $.each(result_forecasr.HeWeather6[0].daily_forecast, function (index, entry) {
            if (patt1.test(entry.cond_txt_d)){
                $('#cond_txt_d' + index).html('<embed id="cond_txt_d_icon0" src="weather/晴.svg" type="image/svg+xml" height="50px" width="50px" />'+'<sup>'+entry.cond_txt_d+'</sup>');              
            }
            if (patt2.test(entry.cond_txt_d)) {
                $('#cond_txt_d' + index).html('<embed id="cond_txt_d_icon0" src="weather/阴.svg" type="image/svg+xml" height="50px" width="50px" />' + entry.cond_txt_d);
            }
            if (patt3.test(entry.cond_txt_d)) {
                $('#cond_txt_d' + index).html('<embed id="cond_txt_d_icon0" src="weather/多云.svg" type="image/svg+xml" height="50px" width="50px" />' + entry.cond_txt_d);
            }
            if (patt4.test(entry.cond_txt_d)) {
                $('#cond_txt_d' + index).html('<embed id="cond_txt_d_icon0" src="weather/大雨.svg" type="image/svg+xml" height="50px" width="50px" />' + entry.cond_txt_d);
            }
            $('#tmp_min' + index).text(entry.tmp_min + '°');
            $('#tmp_max' + index).text(entry.tmp_max + '°');
            $('#wind_dir' + index).text(entry.wind_dir);
            $('#wind_sc' + index).text(entry.wind_sc + '级');
            $('#uv_index' + index).html('<div style="display:inline-block;width:50px;height:50px;border-radius:100%;text-align:center;background-color:#894699;padding-top:10px;font-weight:bold;">' + entry.uv_index+'</div>');
        });
    }
});

//实况天气的获取
$.ajax({
    type: 'GET',
    url: "https://free-api.heweather.com/s6/weather/now?location=huzhou&key=721b70a1f2ab41e585e266fa03461b3f",
    success: function (result_now) {
        $('#temp-now').text(result_now.HeWeather6[0].now.tmp + '°');
        if (patt1.test(result_now.HeWeather6[0].now.cond_txt)) {
            $('#temp-icon').html('<embed src="weather/晴.svg" type="image/svg+xml" style="max-width:80px;max-height: 80px;" />');
        }
        if (patt2.test(result_now.HeWeather6[0].now.cond_txt)) {
            $('#temp-icon').html('<embed src="weather/阴.svg" type="image/svg+xml" style="max-width:80px;max-height: 80px;" />');
        }
        if (patt3.test(result_now.HeWeather6[0].now.cond_txt)) {
            $('#temp-icon').html('<embed src="weather/多云.svg" type="image/svg+xml" style="max-width:80px;max-height: 80px;" />');
        }
        if (patt4.test(result_now.HeWeather6[0].now.cond_txt)) {
            $('#temp-icon').html('<embed src="weather/大雨.svg" type="image/svg+xml" style="max-width:80px;max-height: 80px;" />');
        }
        $('#temp-text-now').text(result_now.HeWeather6[0].now.cond_txt);
        $('#hum_now').text(result_now.HeWeather6[0].now.hum + '%');
        $('#wind_now').text(result_now.HeWeather6[0].now.wind_dir + result_now.HeWeather6[0].now.wind_sc + '级');
    }
});

//空气质量相关信息的获取
$.ajax({
    type: 'GET',
    url: "https://free-api.heweather.com/s6/air/now?location=huzhou&key=721b70a1f2ab41e585e266fa03461b3f",
    success: function (result_air) {
        $('#aqi').text(result_air.HeWeather6[0].air_now_city.aqi);
        $('#qlty').text(result_air.HeWeather6[0].air_now_city.qlty);
    }
});

//每个小时天气
// $.ajax({
//     type: 'GET',
//     url: "https://free-api.heweather.com/s6/weather/hourly?location=hangzhou&key=721b70a1f2ab41e585e266fa03461b3f",
//     success: function (result_hourly) {
//         console.log(result_hourly);
//     }
// });
