# **WorkAround Explorer**
**WorkAround** is a _research organization_ that provides _data_ on ***salary*** trends in the tech industry. ***Open*** up `salaryData.js` to see the _data_ they have collected. You’ll notice that they have also created a few _functions_ for filtering that _data_ to get subsets of _data_ by ***role*** and by ***company***.

***WorkAround*** now wants to release a ***new web application*** called ***WorkAround Explorer*** to make their _data_ more easily viewable. This _web app_ should allow ***users*** to choose specific `roles` and `companies` in the tech industry to see the following information:

_-_ The `salary` for the chosen `role` at the chosen `company`;
_-_ The `industry average` for the chosen `role`;
_-_ The `average salary` at the chosen `company` across all `roles`;
_-_ The `industry average salary` across all `roles` and all `companies`;
_-_ After the `user` selects a `role` from the first column and a `company` from the  second, the _relevant data_ is shown in the third column.

Much of the `user interface` has already been designed by _front-end developers_, however, the ***core data and functionality*** are either missing or need to be connected together using _modules_. 
_My task is to help my team members out by using my import and export expertise!_

# ***Tasks***
_Mark the tasks as complete by checking them off_
## **Render the radio buttons using the salaryData module**

**1.** These first four tasks will focus on rendering the `<input>` _elements_ using the `names` of the `companies` and the different `roles` available in the collected `salary` _data_.

Open `salaryData.js` where we will find the collected data in the variable `salaryData`. Below are four _functions_ for filtering down this _data_.

We need to:
_-_ `Export` the _four functions_ from `salaryData.js` using **ES6** named `export` syntax.
_-_ `Export` the `salaryData` _array_ as the `default export`.
**Note**: In most _web browsers_, we can access the developer console to get some helpful `errors` by right-clicking anywhere on the page and selecting `“Inspect”`

**Hint:**
_-_ To `export` multiple _values_ using named `export` _syntax_, we may write:
```
export { valueA, valueB, valueC };
To export a default value, you may write:

export default valueD;
```

**2.** Open up `main.js` and take a look at the _function_ `renderInputButtons()`. This _function_ accepts an _array_ of `labels` that are used to create individual `radio-style <input>` _elements_. The _function_ also accepts a _string_ that is used as the `name` for that `input` group.

Currently, this _function_ is being called twice with the variables `companies` and `roles` as the first arguments. However, each of these variables are assigned _empty arrays_.

Instead, we will use the `getRoles()` and `getCompanies()` _functions_ from `salaryData.js` to initialize these variables.

First, at the top of `main.js`, use **ES6** named `import` syntax to `import getRoles` and `getCompanies from salaryData.js`. Check the file system to determine the _relative path_ from `main.js`.

**NOTE:** After completing this task, some of the columns in the mini _browser_ may stop rendering. Don’t worry though, we’ll fix this in a later step!

**Hint:** The syntax for importing named values looks like this:
```
import { valueA, valueB, valueC } from 'path/to/module.js';
The relative path from main.js to salaryData.js is './modules/salaryData.js'.
```

**3.** Now, replace the _empty arrays_ assigned to `companies` and `roles` with _function_ calls to `getCompanies()` and `getRoles()`, respectively.

**Hint:**
Our code should now look like this:
```
const companies = getCompanies();
const roles = getRoles();
 
renderInputButtons(companies, 'company');
renderInputButtons(roles, 'role');
```

**4.** As mentioned before, even if we correctly completed the previous two tasks, the `radio-style <input>` _elements_ still will not `render` and some of the columns have disappeared. This is because we are now required to specify that `main.js` is using modules.

In `index.html`, add a type attribute to `<script src='main.js'>` with the correct value to indicate that the `main.js` `script` is using _modules_.

After completing this task, all three columns should `render` again and we should see the `radio-style <input>` _elements_ rendered in our application!

**Hint:**
Every `script` that uses modules must have a `type="module"` attribute, like so:
```
<script type="module" src="myModule.js">
```

## **Create the workAroundModule**

**5.** Great job! We now have `radio-style <input>` _elements_ for the different `companies` and `roles` represented in the `salary dataset`. Try selecting a combination of `company` and `role` and we’ll see that the data isn’t being calculated. Instead, all four values are showing up as **$0**.

Open up `workAroundModule.js` where we will find ***four functions*** that each calculate a different _data value_ that we want to ***display***. They are currently incomplete.

To complete these ***four functions***, we will need some _data_ from `salaryData.js`.

_-_ `Import` the _functions_ `getDataByRole()` and `getDataByCompany()` from `salaryData.js` using named `import` syntax.
_-_ `Import salaryData from salaryData.js` using the `default` `import` syntax.
**Note:** The reason these _functions_ are in a separate _module_ from `salaryData.js` is to achieve separation of concerns. `salaryData.js` is concerned only with providing access to _raw data_ while `workAroundModule.js` is concerned with digging into the _data_ to find precise values.

**Hint:** The syntax for importing named and `default` values looks like this:
```
// Named import syntax:
import { valueA, valueB, valueC } from 'path/to/module.js';
 
// Default import syntax:
import moduleResources from '/path/to/module.js';
The relative path from workAroundModule.js to salaryData.js is './salaryData.js'.
```

**6.** Each of the incomplete _functions_ in `workAroundModule.js` contains an _empty array_ (`[]`) that needs to be replaced. We will need to use the appropriate imported _data/functions_ from the `salaryData.js` _module_ to replace these _arrays_.

**Hint:**
_-_ The _empty array_ in `getAverageSalaryByRole()` should be replaced with `getDataByRole(role)`;
_-_ The _empty array_ in `getAverageSalaryByCompany()` should be replaced with `getDataByCompany(company)`;
_-_ The _empty array_ in `getSalaryAtCompany()` should be replaced with `getDataByCompany(company)`;
_-_ The _empty array_ in `getIndustryAverageSalary()` should be replaced with `salaryData`.

**7.** As a final step, to make these _functions_ available to `main.js`, `export` the _four functions_ using named `export` syntax.

**Hint:** We can `export` multiple values using named `export` syntax like so:
```
export { valueA, valueB, valueC };
Or you can put the keyword export in front of the value you want to export:

export const foo = () => {};
```

## **Calculate and render the data when the user input changes**

**8.** We are all _set up_ now to use the _functions_ defined in `workAroundModule.js` to ***calculate*** and `render` the _data_ based on the user’s `input` _selections_.

In `main.js`, `import` the ***four functions*** from `workAroundModule.js`.

**Hint:**
The _functions_ in `workAroundModule.js` are named `exports`. We can use this syntax to `import` them.
```
import { valueA, valueB, valueC } from 'path/to/module';
The relative path from main.js to workAroundModule.js is './modules/workAroundModule.js'
```

**9.** And finally, take a look at `updateResults()` This function is called any time the `user` ***selects*** one of the `radio input` _elements_.

At the top of the definition of `updateResults()`, the `company` and `role` selected by the `user` are extracted from the `<input>` _elements_. These values can be used in combination with the imported _functions_ from `workAroundModule.js` to ***calculate*** the ***four variables*** below:
```
const averageSalaryByRole = 0;
const averageSalaryByCompany = 0;
const salary = 0;
const industryAverageSalary = 0;
```
As we can see, they are all assigned to **0** rather than the appropriate ***calculated data***. Replace each **0** with a call to the appropriate imported _function_ from `workAroundModule.js` using either _(or both)_ `company` and `role` as arguments.

# **Extra Challenge**

**10.** Congrats! We’ve helped `WorkAround` build their `WorkAround` Explorer application using a modular approach. The end result is a well-organized `program` with clear boundaries for each of its separate concerns.

Often, programmers will create a set of generic `“utility”` _functions_ that can be applied to any `program`, regardless of the context. In this case, it would be useful to have a _function_ that can _properly format a number_, like so:
```
const result = formatNumber(1234567.89);
// result = "1,234,567.89"
```

***As an extra challenge:***

Create a _new file_ in the `modules/ directory` called `utilities.js`.
Define and `export` a _function_ in `utilities.js` called `formatNumber()`. This _function_ should have a _number parameter_ and should return a _string_ representation of that number value with a comma `(,)` character between every ***3rd digit***.
`Import` this _function_ into `main.js` and use it to format the ***four data values*** rendered to the _screen_.

**Hint:** Our code in `modules/utilities.js` might look like this:
```
/* modules/utilities.js */
export const formatNumber = number => {
  // Get rid of the decimals and convert to a string.
  let numStr = String(Math.floor(number));
 
  // Starting 3 from the end, add a comma every 3 digits.
  for (let i = numStr.length - 3; i > 0; i -= 3) {
    numStr = numStr.slice(0, i) + ',' + numStr.slice(i);
  }
 
  // And return!
  return numStr;
}
```