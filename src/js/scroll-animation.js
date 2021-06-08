function isOnVisibleSpace(element) {
  var bodyHeight = window.innerHeight;
  var elemRect = element.getBoundingClientRect();
  var offset = elemRect.top;
  if (offset < 0) return false;
  if (offset > bodyHeight) return false;
  return true;
}

var listenedElements = [];
window.onscroll = function () {
  listenedElements.forEach(item => {
    var result = isOnVisibleSpace(item.el);
    if (item.el.isOnVisibleSpace && !result) {
      item.el.isOnVisibleSpace = false;
      item.outVisibleSpace(item.el);
      return;
    }
    if (!item.el.isOnVisibleSpace && result) {
      item.el.isOnVisibleSpace = true;
      item.inVisibleSpace(item.el);
      return;
    }
  });
};
function onVisibleSpaceListener(elementId, cbIn, cbOut) {
  var el = document.getElementById(elementId);
  listenedElements.push({
    el: el,
    inVisibleSpace: cbIn,
    outVisibleSpace: cbOut,
  });
}

onVisibleSpaceListener(
  'about-img',
  el => {
    document.getElementById('about-img').classList.add('animate__backInLeft');
  },
  el => {},
);

onVisibleSpaceListener(
  'about__descrp',
  el => {
    document.getElementById('about__descrp').classList.add('animate__backInRight');
  },
  el => {},
);

onVisibleSpaceListener(
  'about__label',
  el => {
    document.getElementById('about__label').classList.add('animate__backInDown');
  },
  el => {},
);

onVisibleSpaceListener(
  'about__title',
  el => {
    document.getElementById('about__title').classList.add('animate__backInDown');
  },
  el => {},
);
