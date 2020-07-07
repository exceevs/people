document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tap-target');
  var instances = M.TapTarget.init(elems);
});
$(document).ready(function() {
  $('input#input_text, textarea#textarea2').characterCounter();
});

$(document).ready(function() {
  $('.tabs').tabs();
});


function FetchData() {
  document.getElementById("login").innerHTML = '<i class="material-icons left">sync</i>Произвести расчет';
}

//==================================================================================================================================================
// LOGIN============================================================================================================================================
//==================================================================================================================================================
document.getElementById("login").addEventListener("click", fe$login);

function fe$login() {
  var vhod = {};
  vhod._1_ = document.getElementById("_1_").value;
  vhod._2_ = document.getElementById("_2_").value;
  vhod._3_ = vhod._1_ * vhod._2_ * 365
  //    vhod._3_ = document.getElementById("_3_").value;
  //    vhod._4_ = document.getElementById("_4_").value;

  for (var key in vhod) {
    if (vhod.hasOwnProperty(key)) {
      if (vhod[key].length === 0) {
        console.log(vhod[key]);
        document.getElementById("login").innerHTML = '<i class="material-icons left">sync_problem</i> \
                                                                    Заполните все поля числовыми значениями. Дробная часть отделяется точкой';
        setTimeout(FetchData, 5000);
        return
      }
    }
  }

  if (vhod._1_ < 100) {
    console.log(vhod[key]);
    document.getElementById("login").innerHTML = '<i class="material-icons left">sync_problem</i> \
                                                                    Минимальное количество ТС – 100';
    setTimeout(FetchData, 5000);
    return
  }

  var data = {};
  data._10_ = 1
  data._12_ = Math.ceil(vhod._1_ * 1 / 60)
  data._14_ = Math.ceil(vhod._3_ * 8 / 1811 / 60)
  data._16_ = Math.ceil(vhod._1_ * 4 * 1.13 / 400)
  data._18_ = Math.ceil(vhod._1_ * 4 * 1.13 / 600)
  data._19_ = Math.ceil(vhod._3_ * 12 / 1811 / 60)
  data._20_ = 1
  data._21_ = Math.ceil(vhod._1_ / 150)
  data._22_ = Math.ceil(vhod._1_ / 150)
  data._13_ = Math.ceil(data._14_ / 20)

  if (data._12_ + data._13_ + data._14_ > 30) {
    data._11_ = 1
  } else {
    data._11_ = 0
  }

  if (data._16_ + data._18_ + data._19_ > 8) {
    data._15_ = 1
  } else {
    data._15_ = 0
  }

  data._30_ = Math.ceil(1811 * 60 / 8 / 365)
  data._31_ = Math.ceil(1811 * 60 / 12 / 365)

  data._23_ = (data._10_ + data._11_ + data._12_ + data._13_ + data._14_ + data._15_ + data._16_ + data._18_ + data._19_ + data._20_ + data._21_ + data._22_)

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      if (isNaN(data[key])) {
        document.getElementById("login").innerHTML = '<i class="material-icons left">sync_problem</i> \
                                                                    Ошибка в расчетах. Проверьте, что в полях указаны только числовые значения.\
                                                                    Дробные значения вводите через точку';
        setTimeout(FetchData, 6000);
        return
      }
    }
  }

  document.getElementById("login").innerHTML = '<i class="material-icons left">check</i>Значения обновлены';
  var opt_funct = document.getElementById("_10_");
  opt_funct.innerHTML = '<b>' + data._10_ + '</b>';
  var opt_funct = document.getElementById("_11_");
  opt_funct.innerHTML = '<b>' + data._11_ + '</b>';
  var opt_funct = document.getElementById("_12_");
  opt_funct.innerHTML = '<b>' + data._12_ + '</b>';
  var opt_funct = document.getElementById("_13_");
  opt_funct.innerHTML = '<b>' + data._13_ + '</b>';
  var opt_funct = document.getElementById("_14_");
  opt_funct.innerHTML = '<b>' + data._14_ + '</b>';
  var opt_funct = document.getElementById("_15_");
  opt_funct.innerHTML = '<b>' + data._15_ + '</b>';
  var opt_funct = document.getElementById("_16_");
  opt_funct.innerHTML = '<b>' + data._16_ + '</b>';
  var opt_funct = document.getElementById("_18_");
  opt_funct.innerHTML = '<b>' + data._18_ + '</b>';
  var opt_funct = document.getElementById("_19_");
  opt_funct.innerHTML = '<b>' + data._19_ + '</b>';
  var opt_funct = document.getElementById("_20_");
  opt_funct.innerHTML = '<b>' + data._20_ + '</b>';
  var opt_funct = document.getElementById("_21_");
  opt_funct.innerHTML = '<b>' + data._21_ + '</b>';
  var opt_funct = document.getElementById("_22_");
  opt_funct.innerHTML = '<b>' + data._22_ + '</b>';
  var opt_funct = document.getElementById("_23_");
  opt_funct.innerHTML = '<b>' + data._23_ + '</b>';
  var opt_funct = document.getElementById("_30_");
  opt_funct.innerHTML = '<b>' + data._30_ + '</b>';
  var opt_funct = document.getElementById("_31_");
  opt_funct.innerHTML = '<b>' + data._31_ + '</b>';
};
