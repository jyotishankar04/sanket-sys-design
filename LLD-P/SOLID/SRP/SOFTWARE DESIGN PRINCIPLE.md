## Let's Discuss the issues we have in this code



FILE: ```Problematic/Employee.java```
1. This class is doing too many things
- If u have too many things in the same code then you have too many reasons to change the same code

Reasons
- If the tax changes then computeSalary() function may change
- If data storage requirements change, we might need to update this function updateEmployeeDetails()
- If the report format changes we might need to change this function printPerformanceReport().

Because the above class is doing too many things, there are too many reasons to update the code present in the class.
This voilates Single Responsiblity Principle


# Single Responsiblity Principle 
it states that there should one and only one reason to update a piece of code
-EX - here this class should only do the crud operations only



# Monster Class
In the context of solid principles, a monster class is a class that does too many responsibilities.
Essentially, acting like a god class with large number of functionalities crammed into a single class.
