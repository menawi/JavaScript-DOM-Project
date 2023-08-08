


```js
       right: function () {
            //console.log(containerWidth);

            player.positionX += movementUnit;
            if (player.positionX < (containerWidth - (playerElementWidth + movementUnit))) { // Check if the small box is still inside the container
                playerElement.style.left = player.positionX + 'px'; // Move the small box to the right
            } else if ((player.positionX - movementUnit) >= (containerWidth - (playerElementWidth + movementUnit))) {
                // If the small box exceeds the right boundary of the container, adjust its position to be just inside the boundary.
                player.positionX = Math.floor(containerWidth - playerElementWidth);
                playerElement.style.left = player.positionX + 'px';
            }
        },
```


1. Increment `player.positionX`:
   - `player.positionX += movementUnit;`
   - This line increments the `player.positionX` by the specified `movementUnit`, indicating that the small box should move to the right.

2. Check if the small box is still inside the container:
   - `if (player.positionX < (containerWidth - (playerElementWidth + movementUnit))) {`
   - The condition inside this `if` statement checks if the new `player.positionX` (after adding `movementUnit`) is less than the container's right boundary.
   - `(containerWidth - (playerElementWidth + movementUnit))` calculates the position beyond which the small box will go outside the container's right boundary.
   - If the condition is true, the small box is still inside the container, and it can be moved to the right.

3. Move the small box to the right:
   - `playerElement.style.left = player.positionX + 'px';`
   - If the condition in the previous step is true, the line above is executed.
   - This updates the `left` style property of the `playerElement`, effectively moving the small box to the right.

4. Adjust the position if the small box is about to exceed the container's right boundary:
   - `else if ((player.positionX - movementUnit) >= (containerWidth - (playerElementWidth + movementUnit))) {`
   - The condition inside this `else if` statement checks if the new `player.positionX - movementUnit` (before adding `movementUnit`) is greater than or equal to the container's right boundary.
   - This checks if the small box is about to go beyond the container's right boundary after moving.
   - If the condition is true, the following code block is executed.

5. Set the small box's position to just inside the right boundary:
   - `player.positionX = Math.floor(containerWidth - playerElementWidth);`
   - This line sets the `player.positionX` to the value of `containerWidth - playerElementWidth`, which ensures that the small box is just inside the container's right boundary.
   - The `Math.floor()` function is used to ensure that the value is an integer.

6. Update the small box's style to move it inside the boundary:
   - `playerElement.style.left = player.positionX + 'px';`
   - After setting the `player.positionX`, this line updates the `left` style property of the `playerElement`, effectively moving the small box to the adjusted position inside the container's right boundary.

