## Usage

### Options

#### `[size]` Image size
You can specify the size of the image you expect specifying only the width, both the width and height, or even get an image with normalized aspect ratio based on the given dimensions.

```
/483/       =>  AR 1:1        Width 483px    Height 483px
/483x254/   =>  AR 483:254    Width 483px    Height 254px
/483x254*/  =>  AR 15:8       Width 480px    Height 256px
```

#### `[color]` Text box background and foreground color
By default when you choose a theme the message will be shown in a white box with black text but you can customize this by adding the color you prefer in the URL just like the examples show.

If you specify only one color this will be taken as the background color and the application will choose a contrasting color as the foreground automatically.

```
/ccc/            =>  Background #cccccc    Foreground #333333
/f7f7f7/         =>  Background #f7f7f7    Foreground #080808
/e9ebee-3b5998/  =>  Background #e9ebee    Foreground #3b5998
/493434-ddd/     =>  Background #493434    Foreground #dddddd
```

#### `[text]` Image message
You can change the default message (image size) in the placeholder just adding a text message as a URL option but have in mind that this doesn't accept any symbol because they might break the URL.

```
/.class-name/          =>  .class-name
/Hello world.../       =>  Hello world...
/This%20is%20cool%21/  =>  This is cool!
```

You may use any of these symbols in your message: `_` `-` `+` `=` `.` `,` `:` `;` `?` `@` `!` `$` `&` `'` `"` `(` `)` `*` `+` `=` `.`

***Note:** Other symbols might break your message and the rest of the options.*

#### `[filter]` Color filter
You can apply a color filter to the image and make it pop. Just choose one of the built in color filters adding its name at the end of the URL.

* Lark
* Mayfair
* Brannan
* Reyes
* Rise
* Inkwell
* Juno
* Hudson
* Hefe
* Slumber
* Valencia
* Nashville
* Crema
* Xpro2
* Sutro
* Ludwig
* Sierra
* Toaster
* Aden
* Willow
* Walden
* Perpetua
* Lofi
* Nineteen Seventy Seven
* Amaro
* Earlybird
* Kelvin

```
/483x254/e9ebee-3b5998/Rise
/483x254/e9ebee-3b5998/.class-name/nashville
/483x254/e9ebee-3b5998/.class-name/NineteenSeventySeven
```

#### `[type]` Image file type
The returned images can also be of a certain image file type like `.gif`, `.jpg`, or `.png`.

```
/483x254/e9ebee-3b5998.gif
/483x254/e9ebee-3b5998/.class-name.jpg
/483x254/e9ebee-3b5998/.class-name/sepia.png
```
