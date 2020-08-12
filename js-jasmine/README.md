# Project Structure

Challenges:
1. understand what the code is doing
  - nested if statements
    first if statement reduces the quality
      * changes the quality of backstage passes based on sell in dates
    second if statement changes the sell in dates
      * changes the quality of backstage passes to 0 after sellin
      * increases the quality of brie by 1

2. Implement tests and then refactor each piece of code
  * Testing plan:
  1. Create a test for each product case
    * this acts as a guard to ensure that nothing changes
  
  2. refactor the code to remove the verbose if statements

  3. Start to extract the products:
    1. Sulfuras
    * one item
    2. Aged brie
    3. Backstage passes
    4.
  
  4. Add in Conjured products


## Test Progression
1. test one normal product 
  * before sellin
  * after sellin
  * quality = 0
2. test one sulfuras
  * before selling
  * quality > 0
3. test one aged brie
  * before sellin
  * after sellin
  * quality = 50
4. test backstage pass
  * before sellin (11 days)
  * before sellin (7 days)
  * before sellin (3 days)
  * after sellin
  * quality = 50

5. Conjured