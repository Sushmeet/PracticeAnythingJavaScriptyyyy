# Variable Scope

> The scope variable defined in the showMeLocal() function has local scope, while the scope
  variable defined in the showMeGlobal() is the global variable. Even though the two variables
  have the same name, their scopes are different, and their values are different when
  accessed within the area of the program where they are defined.

# var keyword
> if you put var keyword then it wont atleast over ride the global variable. If u dont put var then it will
over ride the global variable.All of this behavior is normal and expected. However, it can all change
 if you leave off the keyword var in the variable definitions. JavaScript allows you to define variables
 without using the var keyword, but when you do, that variable automatically has global scope, even if defined within a function.

 # Block Scope
 > Javascript does not have block scope. It has function scope. which meants that if you declare a variabel within a block of code then
 the vairable is not accessible outside of that block.