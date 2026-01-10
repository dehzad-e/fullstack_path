# Margins

## Center a div horizontally

```css
img {
    display: block;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
}
```

# Padding

```html
<html>
    <head>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        // MARGIN
        <div class="card">
            // PADDING
            A purely peer-to-peer version of electronic cash would allow online
            payments to be sent directly from one party to another without going through a
            financial institution. Digital signatures provide part of the solution, but the main
            benefits are lost if a trusted third party is still required to prevent double-spending.  
            // PADDING   
        </div> 
        //MARGIN
    </body>
</html>
```

```css
.card {
    color: #222222;
    background: lightgray;
    width: 300px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    
    padding: 50px;
}
```


# Borders

```css
.card {
    border: 8px solid blue;
    border-radius: 100px;
}
```

# The Box Model


# Notes

- `text-align: center;`  can align everything that is `display: inline;` center not only texts.
- `Block` vs `inline` elements
    - `block` takes up one  line
    - `inline` many fits in one line
        - `felxbox` is block element.

# File Path

# Utility Classes

```html
<html>
    <head>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <div class="card border-blue">
            <img
                src="images/per.png"
                alt="Per Harald Borgen smiling at the camera with a colorful background"
                class="avatar border-blue">
            <div class="border-blue">
                <h3>Per Harald Borgen</h3>
                <p>Frontend Developer</p>
                <h4>Oslo, Norway</h4>
            </div>
        </div>
    </body>
</html>
```

```css
body {
    margin: 20px;
}

.avatar {
    width: 150px;
}

.card {
    padding: 20px;
    display: flex;
}

.border-blue {
    border: 1px dotted blue;
}
```

# Fonts

## Custom Font

1. Download the font file (.ttf)
2. Move it to the project’s folder
3. Use it like below:

```html
<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>The Godfather</h1>
        <script src="index.js"></script>
    </body>
</html>
```

```css
@font-face {
    src: url("Corleone.ttf");
    font-family: Corleone;
}

h1 {
    font-family: Corleone;
}
```

## Text Shadow

```css
h1 {
    font-size: 80px;
    text-shadow: -5px 5px 50px black;
    /*            ➡️   ⬇️  blur color */
}
```

- Use the blur effect when the text and the background have similar colors so the text stands out.

# Group Selector

```css
h1, h2, h3, h4, p {
    text-shadow: 0px 0px 1px black; 
}
```

# Flexbox

- `justify-content`: controls the main axis
    - `flex-direction: row;` —> horizontal axis
    - *start, center, end, space-around, space-evenly, space-between*

![image.png](attachment:ff0afc2e-3b8b-4af4-9c9c-e00ee6648572:image.png)

- `align-items`: controls the cross axis
    - `flex-direction: column;` —> horizontal axis
    - *start, center, end*


# `box-sizing: border-box;`

- Makes an element’s width and height include its padding and border, so the total size stays exactly as specified.

```jsx
input {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
}
```