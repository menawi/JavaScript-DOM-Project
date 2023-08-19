---
created: 08-18-2023
last-reviewed: <%+ tp.file.last_modified_date("MM-DD-Y")%>
stage: 
--- 
#red 

[action::"How do you write constructor functions such that the methods passed in it are automatically available to all sub-instances of the class?]
[[_Understand Inheritance - answer]]




```javascript
function Player() {
    this.createPlayer = function() {
        // createPlayer logic here
    }
    return this
}

const playerInstance = new Player()

const playerSubInst = playerInstance.createPlayer

Player.prototype.move = function() {
    this.movePlayer = function() {
        // eventlistener stuff here
    }
    return this
}

playerSubInst.movePlayer()
```

Now, here's the explanation and corrected code:

In JavaScript, if you want to make sure that all the special actions (methods) you give to a group of players (instances) are available to their friends too, you need to do it the right way.

First, you need to create a main rulebook (constructor function) for all the players. This rulebook will have the special actions written down, like creating a player and moving around. But instead of writing those actions on the players themselves, you should put them in a special place called the "prototype" of the rulebook.

Here's how you do it:

```javascript
// This is like the main rulebook for all players
function Player() {
    // Nothing special here for now
}

// These are the special actions written in the rulebook
Player.prototype.createPlayer = function() {
    // Special action: creating a player
};

Player.prototype.move = function() {
    // Special action: moving around
};

// Now, let's make a player from the rulebook
const playerInstance = new Player();

// And let's make a friend of that player
function PlayerFriend() {
    // Nothing special here for now
}

// Set up the friend's rulebook to be a copy of the player's rulebook
PlayerFriend.prototype = Object.create(playerInstance);

// Now, the friend can do the same special actions as the player
const playerFriendInst = new PlayerFriend();

playerFriendInst.createPlayer(); // Friend can create players too!
playerFriendInst.move(); // Friend can move around like the player!
```

This is like saying that all the players have a big book of special actions, and their friends can also have a smaller book that they borrow from the player's big book. That way, everyone knows how to do the special actions.

To make sure you understand and get better at this, you can read about:

1. **Constructor Functions and Prototypes**: Learn how to create special rulebooks (constructors) and how to put actions in their prototype for sharing.
2. **Inheritance**: Understand how friends (sub-instances) can borrow actions from the main player (instance) through their rulebooks (prototypes).
3. **Object-Oriented Programming (OOP)**: This is like the big picture of how objects (players and friends) and their actions (methods) work together.

Practice by writing simple examples and seeing how the actions get shared between players and their friends. This way, you'll become a super JavaScript player! 🚀🎮

```yaml
- Goal: Understand how to create constructor functions in JavaScript to share methods among instances.

- Steps:

  1. Learn about Constructor Functions and Prototypes:
     - Understand what constructor functions are.
     - Explore how to define methods using constructor functions.
     - Learn about the concept of prototypes and how they relate to instances.

  2. Grasp the Concept of Inheritance:
     - Understand what inheritance means in programming.
     - Learn how instances can inherit methods from a common prototype.
     - Explore how to set up the prototype chain for inheritance.

  3. Study Object-Oriented Programming (OOP) Basics:
     - Learn the fundamental principles of OOP.
     - Understand how objects and methods interact in an OOP context.
     - Explore the concepts of encapsulation, inheritance, and polymorphism.

  4. Practice with Simple Examples:
     - Write basic constructor functions for creating instances.
     - Define methods on prototypes to share among instances.
     - Create instances and observe method sharing.
     - Experiment with inheritance by creating sub-instances that borrow methods.

  5. Apply Learning to Real Projects:
     - Work on small JavaScript projects that involve creating objects with shared methods.
     - Implement inheritance in a practical project to reinforce the concept.
     - Practice organizing code using constructor functions and prototypes.

  6. Review and Refine:
     - Reflect on your understanding of constructor functions, prototypes, and inheritance.
     - Revise your practice code and projects based on lessons learned.
     - Seek out additional resources or tutorials if you encounter challenges.

  7. Share and Discuss:
     - Engage in coding communities or forums to share your insights and ask questions.
     - Discuss the concepts of constructor functions and inheritance with peers.
     - Teach others what you've learned to solidify your own understanding.

- Resources:
   - Online tutorials and articles about constructor functions, prototypes, and inheritance in JavaScript.
   - JavaScript programming courses that cover object-oriented programming.
   - Interactive coding platforms where you can practice writing constructor functions and prototypes.
   - JavaScript coding challenges and exercises focused on OOP concepts.

- Milestones:
   - Understanding the basics of constructor functions and prototypes.
   - Successfully creating instances with shared methods.
   - Implementing inheritance through prototypes.
   - Completing small projects that showcase your understanding.
   - Feeling confident in explaining the concepts to others.

- Reward:
   - A deeper understanding of object-oriented programming in JavaScript.
   - Enhanced coding skills for building more organized and maintainable applications.
   - The ability to create reusable code patterns through constructor functions and prototypes.

```