function isOnVisibleSpace(element) {
  const bodyHeight = window.innerHeight;
  const elemRect = element.getBoundingClientRect();
  const offset = elemRect.top;
  if (offset < 0) return false;
  if (offset > bodyHeight) return false;
  return true;
}

let listenedElements = [];
window.onscroll = function () {
  listenedElements.forEach(item => {
    const result = isOnVisibleSpace(item.el);
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
  let el = document.getElementById(elementId);
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

onVisibleSpaceListener(
  'icecream',
  el => {
    document.getElementById('icecream').classList.add('animate__rotateIn');
  },
  el => {},
);

onVisibleSpaceListener(
  'icecoffee',
  el => {
    document.getElementById('icecoffee').classList.add('animate__rotateIn');
  },
  el => {},
);

onVisibleSpaceListener(
  'milkshakes',
  el => {
    document.getElementById('milkshakes').classList.add('animate__rotateIn');
  },
  el => {},
);

onVisibleSpaceListener(
  'chicago',
  el => {
    document.getElementById('chicago').classList.add('animate__backInLeft');
  },
  el => {},
);

onVisibleSpaceListener(
  'los-angeles',
  el => {
    document.getElementById('los-angeles').classList.add('animate__backInDown');
  },
  el => {},
);

onVisibleSpaceListener(
  'new-york',
  el => {
    document.getElementById('new-york').classList.add('animate__backInRight');
  },
  el => {},
);
