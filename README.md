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

```
/ccc/            =>  Background #CCCCCC    Foreground #333333
/f7f7f7/         =>  Background #F7F7F7    Foreground #080808
/e9ebee-3b5998/  =>  Background #E9EBEE    Foreground #3B5998
/493434-ddd/     =>  Background #493434    Foreground #DDDDDD
```

#### `[text]` Image message

```
/.class-name/          =>  .class-name
/Hello world.../       =>  Hello world...
/This%20is%20cool%21/  =>  This is cool!
```

You may use any of these symbols in your message: `-` `.` `_` `~` `:` `?` `[` `]` `@` `!` `$` `&` `'` `(` `)` `*` `+` `,` `;` `=` `.`

***Note:** Other symbols might break your message and the rest of the options.*

#### `[filter]` Color filter

You can apply a color filter to the image and make it pop. Just choose one of the built in color filters adding its name at the end of the URL.

* Sepia
* ...

#### `[type]` Image file type

```
/483x254/e9ebee-3b5998.gif
/483x254/e9ebee-3b5998/.class-name.jpg
/483x254/e9ebee-3b5998/.class-name/sepia.png
```
