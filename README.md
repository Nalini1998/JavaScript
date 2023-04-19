# Notion
* Here is the codespace for my JavaScript Project;
* **JavaScript (JS)** is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.

## Requirement
* This module requires no modules outside of Node.JS core.
* I will update the module requires below as soon as whenever on our demand:
  - [Views](...)
  - [Panels](...)

## Installation
- Install as you would normally install a contributed module of itself. 

## Configuration
The module has no menu or modifiable settings. There is no configuration. When
enabled, the module will prevent the links from appearing. To get the links
back, disable the module and clear caches.

## Information for developers
The Search API provides a lot of ways for developers to extend or customize the
framework.

## Troubleshooting
If the menu does not display, check the following:
- Are the "Access administration menu" and "Use the administration pages and
  help" permissions enabled for the appropriate roles?
- Does html.tpl.php of your theme output the `$page_bottom` variable?

## FAQ

**Q: I want to prevent robots from indexing my custom error pages by
setting the robots meta tag in the HTML head to "noindex".**
**A:** There is no need to. **Customerror** returns the correct HTTP
status codes (403 and 404). This will prevent robots from indexing the
error pages.

**Q: I want to customize the custom error template output.**
**A:** In your theme template folder for your site, copy the template
provided by the **Customerror** module
(i.e. `templates/customerror.html.twig`) and then make your
modifications there.

**Q: I want to have a different template for my 404 and 403 pages.**
**A:** Copy `customerror.html.twig` to
`customerror--404.html.twig` and `customerror--403.html.twig`. You
do not need a `customerror.html.twig` for this to work.

### Contributing
- Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
- Please make sure to update tests as appropriate.

## License
* [MIT](https://choosealicense.com/licenses/mit/)

* More about MIT License:
  Copyright (c) 2021 Othneil Drew (https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/LICENSE.txt)

- Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

- The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**
Copyright (c) _20 April 2023_ _Minh Thuong Vo_**
