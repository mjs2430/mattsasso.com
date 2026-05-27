var pre = document.querySelector('pre');
var preview = document.querySelector("#preview");
var data = {};
var p = document.querySelector("#preview");
      var f = document.querySelector("form");

window.addEventListener("dragover", _noop)
window.addEventListener("drop", _handleDrop);
window.addEventListener("keyup", _handleChange);
    f.addEventListener("submit", _handleSubmit);

function _noop(e) {
  e.preventDefault();
}

function _handleDrop(e) {
  e.preventDefault();
  data.img = e.dataTransfer.getData('url');
  redraw();
}

function _handleChange(e) {
  let t = e.target;
  if(t.name) {
    data[t.name] = t.value;
    redraw();
  }
}

function redraw() {
  let t = document.querySelector('#code');
  let c = t.content;
  let channels = ['apple', 'soundcloud', 'stitcher', 'google', 'libsyn'];

  c.querySelector('.title').textContent = data.headline;
  c.querySelector('.summary').textContent = data.summary;
  
  channels.forEach(channel => {
    let ele = c.querySelector(`[data-sub=${channel}]`);
    let link = data[channel];

    if(link) {
      ele.href = link;
      ele.removeAttribute('remove');
    } else {
      ele.setAttribute('remove', true);
    }
  });


  preview.innerHTML = t.innerHTML;

  // Remove on the clone not the template itself
  let missing = preview.querySelectorAll('[remove]');
  missing.forEach(ele => {
    ele.parentNode.removeChild(ele);
  });

  pre.textContent = preview.innerHTML.replace(/^[ \n]+$/gm, "");
}

  $("button").click(function() {
	  $("pre").css("display", "block");
  } );

function _handleSubmit(e) {
        e.preventDefault();
        document.querySelector("#email-input").value = p.innerHTML.replace(/\n/g, " ").replace(/\s\s+/g, " ").trim();

        var w = window.open('', 'formpopup', 'width=400,height=400,toolbar=0,scrollbars=0,resizeable=0,statusbar=0,menubar=0,top=10,left=10');
        this.target = 'formpopup';
        this.submit();
      }

      // Debounce helper (https://gist.github.com/pilgreen/a507539938677ea099db)
      function debounce(func, wait, immediate) { var timeout; return function() { var context = this, args = arguments; var later = function() { timeout = null; if (!immediate) func.apply(context, args); }; var callNow = immediate && !timeout; clearTimeout(timeout); timeout = setTimeout(later, wait); if (callNow) func.apply(context, args); }; };