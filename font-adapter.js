class FontAdapter {
  constructor(options) {
    this.container = document.querySelector(options.container || "#adapter");
    this.textarea = this.container.querySelector("[data-range='textarea']");
    this.textarea.value =
      options.text || "example text, use propery textareaText to change it";
    this.sizeRange = this.container.querySelector("[data-range='size']");
    this.spacingRange = this.container.querySelector("[data-range='spacing']");
    this.heightRange = this.container.querySelector("[data-range='height']");
    this.fontSelect = this.container.querySelector("[data-range='font']");
    this.sansSerif = options.sansSerif || false;

    this.init();
  }
  init() {
    this.sizeListener();
    this.spacingListener();
    this.heightListener();
    this.checkFonts();
  }
  sizeListener() {
    if (this.sizeRange) {
      this.sizeRange.addEventListener("input", () => {
        this.textarea.style.fontSize = `${this.sizeRange.value}px`;
      });
    }
  }
  spacingListener() {
    if (this.spacingRange) {
      this.spacingRange.addEventListener("input", () => {
        this.textarea.style.letterSpacing = `${this.spacingRange.value}px`;
      });
    }
  }
  heightListener() {
    if (this.heightRange) {
      this.heightRange.addEventListener("input", () => {
        this.textarea.style.lineHeight = `${this.heightRange.value}px`;
      });
    }
  }
  checkFonts() {
    if (this.fontSelect) {
      this.fontSelect.addEventListener("input", () => {
        this.textarea.style.fontFamily = `${this.fontSelect.value}${
          this.sansSerif ? ", sans-serif" : ""
        }`;
        console.log(
          `${this.fontSelect.value}${this.sansSerif ? ", sans-serif" : ""}`
        );
      });
    }
  }
}
