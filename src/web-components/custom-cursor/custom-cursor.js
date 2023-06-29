import "./custom-cursor.scss";
import deviceType from "/src/deviceType";

const template = document.createElement("template");
template.innerHTML = /* html */ `
    <style></style>
    <slot>
        <div part="state default"></div>
        <div part="state hover"></div>
    </slot>
`;

class CustomCursor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.config = {
      mutationObserver: true,
    };
  }

  connectedCallback() {
    this.position = [0, 0];

    this.handlePointerMoveRef = this.handlePointerMove.bind(this);
    this.handleMouseDownRef = this.handleMouseDown.bind(this);
    this.handleMouseUpRef = this.handleMouseUp.bind(this);
    this.handleMouseEnterRef = this.handleMouseEnter.bind(this);
    this.handleMouseLeaveRef = this.handleMouseLeave.bind(this);

    window.addEventListener("pointermove", this.handlePointerMoveRef);
    window.addEventListener("mousedown", this.handleMouseDownRef);
    window.addEventListener("mouseup", this.handleMouseUpRef);

    this.addListeners();

    if (this.config.mutationObserver) {
      this.observer = new MutationObserver(this.addListeners.bind(this));

      this.observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    this.setVisibility();
    window.addEventListener("resize", this.setVisibility.bind(this));
  }

  handlePointerMove(evt) {
    this.position[0] = evt.clientX;
    this.position[1] = evt.clientY;

    this.style.transform = `translate3d(${this.position[0]}px, ${this.position[1]}px, 0)`;
  }

  handleMouseDown() {
    // we use an attribute instead of a class,
    // because the classList is reserved for states only
    this.setAttribute("mousedown", "");
  }

  handleMouseUp() {
    this.removeAttribute("mousedown", "");
  }

  disconnectedCallback() {
    window.removeEventListener("pointermove", this.handlePointerMoveRef);
    window.removeEventListener("mousedown", this.handleMouseDownRef);
    window.removeEventListener("mouseup", this.handleMouseUpRef);

    this.removeListeners();

    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    document.body.classList.remove("has-cursor");
  }

  addListeners() {
    let hover_elements = Array.from(document.querySelectorAll("[data-cursor]"));
    hover_elements.forEach((el) => {
      if (el.dataset.cursorReady) {
        return;
      }

      el.setAttribute("data-cursor-ready", "");

      el.addEventListener("mouseenter", this.handleMouseEnterRef);
      el.addEventListener("mouseleave", this.handleMouseLeaveRef);
    });
  }

  removeListeners() {
    let hover_elements = Array.from(document.querySelectorAll("[data-cursor]"));
    hover_elements.forEach((el) => {
      el.removeAttribute("data-cursor-ready");

      el.removeEventListener("mouseenter", this.handleMouseEnterRef);
      el.removeEventListener("mouseleave", this.handleMouseLeaveRef);
    });
  }

  handleMouseEnter(evt) {
    this.className = evt.target.dataset.cursor || "hover"; // here we use className to make sure every other state is removed
  }

  handleMouseLeave(evt) {
    this.classList.remove(evt.target.dataset.cursor);
  }

  setState(state) {
    this.className = state;
  }

  setVisibility() {
    const type = deviceType();
    if (type == "desktop") {
      document.body.classList.add("has-cursor");
      document.body.classList.remove("no-cursor");
    } else {
      document.body.classList.remove("has-cursor");
      document.body.classList.add("no-cursor");
    }
  }
}

window.customElements.define("custom-cursor", CustomCursor);
