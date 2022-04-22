(()=>{
  const title = document.querySelector('.sub-title');
  const input = document.querySelectorAll('input[type="radio"]');
  const sample = document.querySelectorAll('.sample');
  const btn = document.querySelectorAll('.btn');
  const code = document.querySelector('.code');

  const CLASSNAME = {
    HIDE: 'is-hide',
    ACTIVE: 'is-active',
    ADD: 'btn-add',
    START: 'btn-start',
    STOP: 'btn-stop',
    TARGET: 'target',
    CHILD: 'child'
  }

  const observer = new MutationObserver (function(mutations) {
    console.log(mutations);
  });

  function stopObservation() {
    observer.disconnect();
  }

  function startObservation(target, option) {
    const optionObject = new Object();

    switch (option) {
      case 'characterData':
        optionObject.characterData = 'true';
        optionObject.subtree = 'true';
        optionObject.characterDataOldValue = 'true';
        break;
      case 'subtree':
        optionObject.attributes = 'true';
        optionObject.subtree = 'true';
        optionObject.attributeOldValue = 'true';
        break;
      default:
        optionObject[`${option}`] = true;
        break;
    }

    observer.observe(target, optionObject);
  }

  function findElement(arrayName, className) {
    return Array.from(arrayName).find(item => item.classList.contains(className));
  }

  function initCode() {
    let initTarget = findElement(sample, CLASSNAME.ACTIVE);
    const initOption = initTarget.dataset.option;
    initTarget = findElement(initTarget.children, CLASSNAME.TARGET);
    showCode(initTarget.outerHTML);
    startObservation(initTarget, initOption);
  }

  function activeSample(targetId) {
    let target, child;
    sample.forEach((item) => {
      item.classList.add(CLASSNAME.HIDE);
      item.classList.remove(CLASSNAME.ACTIVE);
    })

    Array.from(sample).filter((item) => {
      if (targetId === item.dataset.option) {
        target = item;
        item.classList.remove(CLASSNAME.HIDE);
        item.classList.add(CLASSNAME.ACTIVE);
      }
    });

    child = findElement(target.children, CLASSNAME.TARGET);
    showCode(child.outerHTML);
  }

  function showCode(contents) {
    code.innerText = contents;
  }

  function createElement() {
    const element = document.createElement('span');
    element.classList.add('child');
    element.innerHTML = "I'm child";
    return element;
  }

  function handleInput(e) {
    const targetId = e.target.id;
    title.innerHTML = `&middot; ${targetId}`;
    activeSample(targetId);
  }

  function handleBtn(e) {
    let target, code, child;
    const btnTarget = e.target;
    const parent = btnTarget.parentElement;
    const parentOption = parent.dataset.option;
    target = findElement(parent.children, CLASSNAME.TARGET);

    function inputCode(target) {
      code = target.outerHTML;
      showCode(code);
    }

    switch (parentOption) {
      case 'attributes':
        startObservation(target, parentOption);
        target.classList.toggle('red');
        inputCode(target);
        break;
      case 'childList':
        startObservation(target, parentOption);
        if (btnTarget.classList.contains(CLASSNAME.ADD)) {
          child = createElement();
          target.append(child);
        } else {
          child = findElement(target.children, CLASSNAME.CHILD);
          (child !== undefined) ? target.removeChild(child) : null;
        }
        inputCode(target);
        break;
      case 'characterData':
        startObservation(target, parentOption);
        if (btnTarget.classList.contains(CLASSNAME.START)) {
          target.innerText = '';
          target.setAttribute('contenteditable', 'true');
        } else {
          stopObservation();
        }
        inputCode(target);
        break;
      case 'subtree':
        startObservation(target, parentOption);
        child = findElement(target.children, 'input-box');
        child = child.children[0];
        (child.type === 'date') ? child.type = 'number' : child.type = 'date';
        inputCode(target);
        break;
    }
  }

  initCode();

  Array.from(input).forEach((item)=>{ item.addEventListener('click', handleInput) });
  Array.from(btn).forEach((item)=>{ item.addEventListener('click', handleBtn) });
})();
