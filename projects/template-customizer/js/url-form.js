class UrlForm extends HTMLElement {

  // attributes and variables

  get config() {
    return this._config;
  }

  set config(obj) {
    this._config = obj;
    location.hash = btoa(JSON.stringify(this.config));
    this.dispatchEvent(new CustomEvent('url-form-changed', {
      detail: this._config
    }));
  }

  get inputs() {
    return Array.from(this.querySelectorAll('[name]'));
  }

  // lifecycle callbacks

  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener('change', this._handleChange);
    this.addEventListener('keyup', this._handleChange);
    this.observer = new MutationObserver(() => { this.fillInputs() });
    this.observer.observe(this, { childList: true });
  }

  // methods

  _handleChange(e) {
    let c = {};
    this.inputs.forEach(d => {
      if(d.type == "radio") {
        if(d.checked) c[d.name] = d.value;
      } else {
        c[d.name] = d.value;
      }
    });

    this.config = c;
  }

  fillInputs() {
    if(location.hash.length > 0) {
      let c = JSON.parse(atob(location.hash.substring(1)));
      this.inputs.forEach(d => {
        if(d.type == "radio") {
          if(c[d.name] == d.value) d.checked = true;
        } else {
          d.value = c[d.name];
        }
      });

      this._config = c;
    }
  }
}

customElements.define('url-form', UrlForm);
