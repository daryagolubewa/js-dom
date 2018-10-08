## И снова DOM.

Продолжим работу с DOM-элементами. Выполним несколько заданий. Под каждый релиз создайте папку, скопируйте в нее соответствующий приведенный код (html, css, js), чтобы у вас каждая папка выглядела как небольшой подпроект. Выполняйте каждый релиз в отдельном файле.


### Релиз 0.

```html
<h1>Report Card</h1>

<p>Student Name: <span class="student">Your Name Here</span></p>

<ul>
  <li>Physics, <span class="grade">D</span></li>
  <li>Calculus 2, <span class="grade">F+</span></li>
  <li>English Literature, <span class="grade">E</span></li>
</ul>

<p><span class="student">Your Name Here</span> is <span id="status">barely passing.<span></p>
```

__Beginning__
* Найдите элемент с id статуса и измените сообщение на что-то теплое и поднятое.
* Найдите тег h1 для «Звездной записи моей работы». “A Stellar Record of My Performance”.
* Измените все элементы с классом `student` на свое имя.


_Intermediate_
* Найдите все элементы с классом `grade`. Пройдите через все из них и измените их содержимое на «5 +»..
* Создайте функцию, которая принимает элемент HTML в качестве аргумента и печатает прописными буквами его содержимое?

_Challenging_
Выберите любой элемент и установите для `contentEditable` значение `true`. Теперь нажмите на элемент. Что случилось?

### Релиз 1.

_HTML_
```html
<h1>Dinosaurs are cool.</h1>
<button class="change-text">Change Text</button>
```

_JS_
```javascript
var h1 = document.querySelector('h1');
var button = document.querySelector('.change-text');

button.addEventListener('click', function () {
  h1.innerText = 'I AM A DINOSAUR!!!';
});
```

Take the JavaScript that you wrote during the previous pair practice session.
Add a <button> to the HTML markup of the page.
Add an event listener to that button.
When the button is clicked, all of your JavaScript from the previous session should execute.
Extensions
Here is MDN’s master list of DOM events. Most of them are rare birds. Can you add additional events to the page?

If that list overwhelms you, here is a artisinal, hand-crafted list:

-`mouseenter`
-`mouseleave`
-`dblclick`
-`keydown`
-`keyup`


### Релиз 2. Changing Styles Programmatically


We can also modify the CSS styling of any element on the page using JavaScript.

There are three approaches:

We can directly manipulate the style of the element.
We can add or remove classes from the element.
You can modify the stylesheet itself with JavaScript.
We’re only going to talk about the first two today.

_HTML_
```html
<div class="box"></div>
<button class="change-style">Change Style</button>
<button class="add-class">Add Class</button>
```
_CSS_
```css
.box {
  background-color: black;
  width: 200px;
  height: 200px;
}

.border {
  border: 10px solid green;
}
```
_JS_
```javascript
var box = document.querySelector('.box');
var changeStyleButton = document.querySelector('.change-style');
var addClassButton = document.querySelector('.add-class');

changeStyleButton.addEventListener('click', function () {
  box.style.backgroundColor = 'red';
});

addClassButton.addEventListener('click', function () {
  box.classList.add('border');
});
```

* Add a button that changes the width of the box to 400px.
* Add a button that removes the border class from the box. (Hint: the method is called remove instead of add.)



### Релиз 3. Getting User Input from Forms
Скопируйте код (html, css, js) по [ссылке](https://codepen.io/team/turing/pen/akwjjr) к себе в папку.

Выполните задания:
* Add an input field with the id of “very-important-message” along with a button. When the user clicks on the button, it should set the innerText of the box to contents of the input field.
* Add two inputs one for a CSS property and one for a value. When the user clicks the button, it should adjust that property on the box.

![Пример](css-modifier.gif)


### Релиз 4. JS-таблица.
Напишите js-функцию, которая создает таблицу, перед этим принимая от пользователя 2 числа: количество строк и колонок в таблице. Так же функция должна заполнить каждую ячейку таблицы номерами строки и колонки (Строка-1, Колонка-1; Строка-3, Колонка-2; ...)

_HTML_
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset=utf-8 />
  <title>Change the content of a cell</title>
  <style type="text/css">
  body {margin: 30px;}
</style>  
</head><body>
  <table id="myTable" border="1">
  </table><form>
    <input type="button" onclick="createTable()" value="Create the table">
  </form></body></html>
```
