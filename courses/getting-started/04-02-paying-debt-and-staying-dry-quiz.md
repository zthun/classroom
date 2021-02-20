# Paying DEBT and Staying DRY

<details>
  <summary>What does each letter in DEBT stand for? What are they for?</summary>

| Letter | Meaning       | Description                                                                          |
| ------ | ------------- | ------------------------------------------------------------------------------------ |
| D      | Deployment    | How is the product given to the end user?                                            |
| E      | Environment   | What tools do I need to develop this product?                                        |
| B      | Build & Debug | What tools are needed to build this product. How do I debug it when things go wrong. |
| T      | Test          | How are we testing the product?                                                      |

</details>

<details>
  <summary>What are the different levels of testing?</summary>

| Testing     | Description                                                                   |
| ----------- | ----------------------------------------------------------------------------- |
| Unit        | Used for individual units of behavior in code. Generally owned by developers. |
| Integration | Similar to unit tests, but does not mock out external dependencies.           |
| E2E         | Full automated testing from how the user uses the product.                    |
| Manual      | A human behind the screen pretending to be an end user.                       |

</details>

<details>
  <summary>What is DRY?  Why is it important?</summary>

DRY stands for Don't Repeat Yourself. It's very important because it keeps code maintainable for the next person to read, it makes your code less buggy, and it makes it easier to follow.

</details>
