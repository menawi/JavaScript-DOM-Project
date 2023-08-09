
//  Created 
function Button() {
    this.createButton = {
        buttonCreator: function () {
            // Create a new button element
            var button = document.createElement('button');

            // Append the button to the document body (you can change this as needed)
            document.body.appendChild(button);

            // Apply some default styles (you can change these styles)
            button.style.padding = '10px';
            button.style.border = '1px solid #ccc';
            button.style.backgroundColor = '#f0f0f0';

            // Return the created button
            return button;
        },

        divCreator: function () {
            // 
        }
    };

    this.modifyStyles = {
        styleModifier: function (button, styles) {
            // Modify the styles of the button based on the provided object
            for (var property in styles) {
                if (styles.hasOwnProperty(property)) {
                    button.style[property] = styles[property];
                }
            }
        }
    };
}

// Example usage:
var buttonObj = new Button();

// Create a button
var newButton = buttonObj.createButton.buttonCreator();

// Modify the styles of the button
var stylesToUpdate = {
    background: 'blue',
    height: '50px',
    width: '150px'
};
buttonObj.modifyStyles.styleModifier(newButton, stylesToUpdate);



{/* <button class="accordion">Section 1</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion">Section 2</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion">Section 3</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<script>
var acc = document.getElementsByClassName("accordion");
var i;

        
for (let i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function () {

		this.classList.toggle("active");
        let panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";

        } else {

            panel.style.display = "block"

        }

    });
} */}