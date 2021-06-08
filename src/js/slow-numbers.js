let easing = {
    quadratic: function (x){
      return Math.sqrt(x);
    }
};

function range(start, stop, step){
  let array = [];
  for(let i = start; i < stop; i += step) array.push(i);
  return array;
}

function interpolation(fps, easing, finalValue){
  function scaleIt(value){return finalValue * value; }

  let x = range(0, 1, 1/fps),
      y = x.map(easing).map(scaleIt);

  return y;
}

function animateEl(values, duration, onAnimate){
  let frameIndex = 0,
      fps = values.length,
      id = setInterval(anime, duration/fps );

  function anime(){
    let current = values[frameIndex],
        isLastFrame = (frameIndex === fps - 1);

    onAnimate(current, frameIndex, values);

    if(isLastFrame){
      clearInterval(id);
    }else{
      frameIndex++;
    }
  }
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function unformat(content){
  let unlocalized = content.replace('.', '').replace(',', '.'),
      value = parseFloat(unlocalized);
  return value;
}

function format(value){
  return value.toString().replace('.', ',');
}

// -------------------------------------------------------- next code ------

function start(){
    let fps = 120,
        els = [].slice.call(document.querySelectorAll('.slow-number'));

    els.forEach(function(el){
        let content = (el.firstChild.textContent).trim(),
            decimalPlaces = content.split(',')[1] || '',
            value = unformat(content),
            values = interpolation(fps, easing.quadratic, value);

        animateEl(values, 1000, function (current, i, values){
          let isLast = (i === values.length - 1),
              value = round(current, decimalPlaces.length);
          el.firstChild.textContent = isLast? content : format(value);
        });
    });
}

// ===============================  next code ================

// функция определяет нахождение элемента в области видимости
// если элемент видно - возвращает true
// если элемент невидно - возвращает false
function isOnVisibleSpace(element) {
	let bodyHeight = window.innerHeight;
  let elemRect = element.getBoundingClientRect();
  let offset   = elemRect.top;// - bodyRect.top;
  if(offset<0) return false;
  if(offset>bodyHeight) return false;
  return true;
}

// глобальный объект с элементами, для которых отслеживаем их положение в зоне видимости
let listenedElements = [];
// обработчик события прокрутки экрана. Проверяет все элементы добавленные в listenedElements 
// на предмет попадания(выпадения) в зону видимости
window.addEventListener('scroll', function () {
    listenedElements.forEach(item => {
        // проверяем находится ли элемент в зоне видимости
        let result = isOnVisibleSpace(item.el);
    
        // если элемент находился в зоне видимости и вышел из нее
        // вызываем обработчик выпадения из зоны видимости
        if (item.el.isOnVisibleSpace && !result) {
            item.el.isOnVisibleSpace = false;
            item.outVisibleSpace(item.el);
            return;
        }
        // если элемент находился вне зоны видимости и вошел в нее
        // вызываем обработчик попадания в зону видимости
        if (!item.el.isOnVisibleSpace && result) {
            item.el.isOnVisibleSpace = true;
            item.inVisibleSpace(item.el);
            return;
        }
    });
});

// функция устанавливает обработчики событий 
// появления элемента в зоне видимости и
// выхода из нее
function onVisibleSpaceListener(elementId, cbIn, cbOut) {
	// получаем ссылку на объект элемента
  let el = document.getElementById(elementId);
  // добавляем элемент и обработчики событий 
  // в массив отслеживаемых элементов
  listenedElements.push({
  	el: el,
    inVisibleSpace: cbIn,
    outVisibleSpace: cbOut    
  });
}

// устанавливаем обработчики для элемента "anchor"
onVisibleSpaceListener("anchor", 
	el=>{
		// функция вызываемая при попадании элемента в зону видимости
    // тут вставляем код запуска анимации
        start();
	},
	el=>{
		// функция вызываемая при выпадении элемента из зоны видимости
    // тут вставляем код остановки анимации
    // el.innerHTML = "000000000000000000000000";
    // window.alert("элемент вне зоны видимости");
	}
);
