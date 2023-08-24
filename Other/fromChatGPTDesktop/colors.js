const colors = {
  a: "#4a4a4a",
};

//  -----------------------
// ---------- Method Chaining ----------

// Create a function that returns an object that contains members that return functions that create an HTML DOM element, append it, and add styles to it.
// I will use this to create a SINGLE instance of the Object, and then use it to create multiple DOM elements.
// I want to be able to call ANY and ALL methods that apply to the main INSTANCE of the object to the subinstances as well.
// For example, if there is a method that changes the color of the main instance, I want to be able to call that method on the subinstances as well WITHOUT calling it on the main instance.
// Understood?
