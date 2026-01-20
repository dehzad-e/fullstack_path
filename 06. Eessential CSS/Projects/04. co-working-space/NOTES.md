# Co Working Space Project Notes
# Margin Auto on Flex Children

- You should use `display: flex;` on the parent element for this to work.
- Note the `role='img'` and `aria-label=""` in the HTML file.
    - We use it if we use an image as a background image for a div for accessibility purposes.

```html
<!doctype html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <div class="meme-container" role="img" aria-label="A cheeky smiling dog with text saying 'when the cat gets blamed for something you did'.">
            <div class="meme-text">
                <h1>
                    When the cat gets blamed for something you did
                </h1>
            </div>
        </div>
    </body>
</html>
```

```css
html, body {
    margin: 0;
    padding: 0;
}

.meme-container {
    display: flex;
    width: 400px;
    height: 400px;
    background-image: url('husky.jpeg');
    background-size: cover;
    margin: 30px auto;
    box-shadow: 1px 1px 5px #999; 
}

.meme-text {
    background-color: black;
    padding: 10px 20px;
    color: white;
    width: 250px;
    margin-top: auto;
    margin-left: auto;
}

h1 {
   font-size: 18px; 
}
```