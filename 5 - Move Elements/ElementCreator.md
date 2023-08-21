
#DOMPROJ 
[action::Apply this ]
```yml 
Name: ElementCreator
Constructor Function:
Name: "GameContainer"
  Method: "createGameContainer"
    Parameters: none
    Operations: 
      - create:
          variable: const
          name: "gameContainer"
          type: html element "div"
        - set: 
          target: "gameContainer"
          attribute: class
          value: "Game-Container"
        - set: 
          target: "gameContainer"
          attribute: id 
          value: "Game-Container-One"
        - append: 
            parent: document.body
            child: "gameContainer"
    Return: 
      scope: "createGameContainer"
        value: div "gameContainer"
      scope: "GameContainer"
        value: this

# ---

Lesson Breakdown: 
Constructor Function:
  Operations:
    - Create a div element:
      Assign class 
      Assign id
    - Append the div element:
      To the document body
    - Inner Scope Return:
      The div element
    - Main Function Scope Return: 
      what: `this` keyword 
      why: to allow for method chaining
Instances:
    - Create a Main Instance of the Constructor Function
    - Create a Sub Instance of the Constructor Function
    - Create a Variable Instance of the Sub Instance

# ---
# This YAML file defines a prototype for a StyleContainer object that extends the GameContainer object. The StyleContainer object is used to create a container with custom CSS styles. The prototype contains a method called "createStyleContainer" that creates an array of style keys and assigns the corresponding style values from an "activeStyles" object variable. The "createStyleContainer" method returns the StyleContainer object to allow for method chaining.

Prototype:
  Name: "StyleGameContainer"
  Extends: "GameContainer"

  # Create a constant variable called "container" and assign it the value of the "createGameContainer" method from the GameContainer constructor function.
  - Var:
      variable: const
      name: "container"
      value: this.createGameContainer()
      description: "The createGameContainer method from the GameContainer Constructor Function."

  # Create a constant variable called "Object" and assign it an object with key-value pairs representing CSS style names and values.
  - Var: 
      variable: const
      value: Object 
      contents: 
        - key: "css-style-name"
          value: "css-style-value"

  # Create a method called "createStyleContainer" that takes no parameters.
  - Method: "styleContainer"
      Parameters: none
      Operations: 
        # Create an array called "styleKeys" and assign it the value of the keys in the "Object" variable using the "Object.keys()" method.
        - Create array:
            name: "styleKeys"
            how: "Use the Object.keys() method on the Object variable."
            value: "Key-value pairs."

        # Loop through the "styleKeys" array and assign the corresponding style values from the "activeStyles" object variable.
        - Loop through array:
            array: "styleKeys"
            how: "forEach"
            operations: "For each style key, assign style value from 'activeStyles' Object variable."

  # Return the StyleContainer object to allow for method chaining.
  - Return: this
      description: "To allow for method chaining."
Instances:
  - Apply "styleGameContainer" method to the Variable Instance of the StyleContainer object.
              

```