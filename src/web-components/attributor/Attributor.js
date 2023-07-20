import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class Attributor {
  static init(options = {}) {
    this.items = [];

    this.functions = options.functions;

    this.processDom();

    if (options.mutationObserver) {
      this.observer = new MutationObserver(this.processDom.bind(this));

      this.observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }
  }

  static processDom() {
    this.createItemsFromDomAttributes();
    this.processItems();
  }

  static reset() {
    this.items = [];

    this.functions = {};

    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  static createItemsFromDomAttributes() {
    const elements = document.querySelectorAll("[data-anim]:not([data-ready])");
    for (let i = 0; i < elements.length; i++) {
      const item = {};

      // dom element
      item.target = elements[i];

      // data-delay
      item.delay = item.target.dataset.delay * 1000 || 0;

      // data-scroll
      item.scroll_trigger = item.target.dataset.scroll;
      if (item.scroll_trigger == "") {
        item.scroll_trigger = "top bottom";
      }
      if (!item.target.dataset.noScroll && !item.scroll_trigger) {
        item.scroll_trigger = "top bottom";
      }

      // data-remove-class
      item.remove_class = item.target.dataset.removeClass;
      if (item.remove_class == "") {
        item.remove_class = true;
      }

      // data-fn
      item.custom_function_name = item.target.dataset.fn;

      // data-add-class
      item.add_class = item.target.dataset.addClass;

      // data-add-class-target
      item.add_class_target = document.querySelector(
        item.target.dataset.addClassTarget
      );

      this.items.push(item);
    }
  }

  static processItems() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      // prevents processing multiple time the same elements
      if (typeof item.target.dataset.ready != "undefined") {
        continue;
      }
      item.target.setAttribute("data-ready", "");

      const add_class_target = item.add_class_target || item.target;

      // no scrolltrigger items
      if (!item.scroll_trigger) {
        if (item.add_class) {
          setTimeout(() => {
            add_class_target.classList.add(item.add_class);
          }, item.delay);
        } else if (item.custom_function_name) {
          setTimeout(() => {
            if (this.functions?.[item.custom_function_name]) {
              this.functions?.[item.custom_function_name](item);
            }
          }, item.delay);
        }
      }
      // scrolltriggered items
      else if (item.scroll_trigger) {
        ScrollTrigger.create({
          trigger: item.target,
          start: item.scroll_trigger,
          end: 0,
          onEnter: () => {
            setTimeout(() => {
              if (item.add_class) {
                add_class_target.classList.add(item.add_class);
              }
            }, item.delay);
          },
          onLeaveBack: () => {
            if (item.remove_class) {
              add_class_target.classList.remove(item.add_class);
            }
          },
          onToggle: (self) => {
            if (
              item.custom_function_name &&
              this.functions?.[item.custom_function_name] &&
              ((self.direction == 1 && self.isActive == true) ||
                (self.direction == -1 && self.isActive == false))
            ) {
              this.functions?.[item.custom_function_name](self);
            }
          },
        });
      }
    }
  }
}

if (process.env.NODE_ENV == "development") {
  window.Attributor = Attributor;
}
