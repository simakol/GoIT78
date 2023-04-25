const path = require("path"); //вбудована бібліотека node js для роботи з шляхами у файловій системі

//require - це той же імпорт для common js модулів

const HtmlWebpackPlugin = require("html-webpack-plugin");
/*
дозволяє створювати HTML-файли на основі шаблонів та автоматично підключати в них JavaScript та CSS файли, які були згенеровані під час збирання проекту.

Цей плагін додає в HTML-файл теги для підключення створених Webpack-ом бандлів JavaScript та CSS файлів. Також, він може генерувати вихідний HTML з використанням шаблонів, дозволяючи передавати в шаблон будь-які значення, такі як заголовок сторінки, метатеги, посилання на зображення, тощо.
*/

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/*
дозволяє витягувати CSS код з бандлу та зберігати його в окремому файлі. Зазвичай, це робиться для того, щоб зменшити розмір бандлу та покращити швидкість завантаження сторінки.

Коли використовується MiniCssExtractPlugin, CSS код замість того, щоб бути включений в JavaScript бандл, буде винесений в окремий файл. Цей файл можна потім підключити до HTML сторінки, як будь-який інший зовнішній ресурс. За допомогою MiniCssExtractPlugin можна налаштувати ім'я та шлях до створеного CSS файлу, а також оптимізувати його вихідний код.
*/

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"), //__dirname - глобальна змінна, в яку записується абсолютний шлях до нашої папки в системі, метод resolve додає папку build до нашого проекту (створюється папка build)
    filename: "main.js",
  },
  // Як правило, плагіни виконуються після того, як Webpack завантажив та обробив всі модулі, але перед тим, як він згенерує готовий бандл.
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, //шукаємо шаблони всіх файлів, які закінчуються на .css
        use: [MiniCssExtractPlugin.loader, "css-loader"], //масив завантажувачів, які будуть обробляти наші файли, порядок обробки справа наліво
      },
      {
        test: /\.js$/, //вибираємо всі джс файли
        exclude: /node_modules/, //виключаємо всі файли з нод модулес
        use: ["babel-loader"], //транспіляція джс коду за допомогою бабела
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70,
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    static: ["public"],
    // or
    // static: true,
    // or
    // static: {
    //   directory: path.join(__dirname, "/public/"),
    // },
    port: 2121,
    open: true,
  },
  mode: "none",
  stats: "errors-only",
};
