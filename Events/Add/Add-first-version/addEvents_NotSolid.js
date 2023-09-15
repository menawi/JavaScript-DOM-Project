function attributeModifier(selector, event, attribute, value) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((e) => {
    e.addEventListener(event, () => {
      if (e.hasAttribute(attribute)) {
        const currentAttributeValue = e.getAttribute(attribute);
        console.log(
          `${e} has attribute ${attribute} with current value of ${currentAttributeValue}`
        );
        e.setAttribute(attribute, currentAttributeValue + " " + value);
      } else {
        e.setAttribute(attribute, value);
      }
    });
  });
}

attributeModifier(".box", "click", "class", "bg-blue");
