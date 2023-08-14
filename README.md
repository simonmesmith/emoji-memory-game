# Emoji Memory Game by ChatGPT

This was an experiment to get ChatGPT (GPT-4 version) to write an emoji memory game from scratch. 

* [Play the game](https://www.simonsmith.ca/emoji-memory-game/)
* [See the conversation](https://chat.openai.com/share/2c634dcb-0047-4d4b-99e8-baa70dee2ee7)

## Approach

I tried as best as possible to let ChatGPT write the code, while I provided feedback. 

I did, however, instruct it to use React with Tailwind. This is because I'm not very familiar with React or Tailwind (as I primarily program in Python, though I'm also familiar with HTML, CSS, and JavaScript). So it was easier for me to play the role of ChatGPT's robot arms, and I also wanted to learn about React and Tailwind from this experience.

## Takeaways

It took **about 50 minutes** to complete this, though I did have one false start before the successful conversation due to a Git conflict. (I had a GitHub repository remotely, ChatGPT initialized a separate repository locally, and it struggled to connect the two.)

Overall, this was a good experience, but I think it would be challenging for someone with less familiarity with programming, HTML, CSS, and JavaScript. Here are some takeaways:

* **ChatGPT can create complete full applications (although this one is simple)**. It's able to understand how to map requirements to a functioning application. And it's able to act on feedback.
* **It sometimes gives unclear instructions**. For example, it created a component called `GameBoard.js` and a function called `GameBoard` within it. It would tell me to write some code in "GameBoard," but it wasn't clear if it meant the GameBoard function or the GameBoard component more generally.
* **It may not create optimal architectures**. For this app, for example, it shoved pretty much everything into `GameBoard.js`. It probably would have been better to separate functionality into different components, like `ScoreBoard.js`, `Card.js`, `RestartButton.js`, etc. Similarly, the `GameBoard` function is pretty packed and should be refactored.
* **This said, it won't always take the same approach**. As mentioned above, I had a false start with a Git issue. During that attempt, ChatGPT _did_  separate functionality into different components.
* **It may not be great at design**. The board design in this game is pretty basic. Even when I asked for something nicer, ChatGPT didn't output CSS that made the board much more attractive. Perhaps this is because the current GPT-4 version of ChatGPT still doesn't have multimodality, so it can't see images, and I can't show it what the boring board looks like. Maybe when ChatGPT gets multimodality I can show it an example of a cool card, and have it copy that. It's also possible (perhaps even likely) that I didn't prompt it in the right way to get a better design.

## Future improvements

Overall, I think there's a lot of potential here, but it requires learning about ChatGPT's quirks and being sure to prompt it in a way that gets the best outcomes. For example, if I had told it initially that I wanted to separate distinct functionality into distinct components, it probably would have built the application that way.

Here are two ways I would improve this app further (with ChatGPT's help, of course):

* Refactor the `GameBoard.js` component into multiple components, and the `GameBoard` function into multiple functions
* Improve the design of the board and cards, and add some light animation

