## **Getting Started**

In order to run **SPERA STYLE GUIDE** on your local machine all what you need to do is to have the prerequisites stated below installed on your machine and follow the installation steps down below.

### **Prerequisites**

- Node.js
- Yarn or NPM
- Git

### **Installing & Local Development**

Start by typing the following commands in your terminal in order to get **SPERA STYLE GUIDE** full package on your machine and starting a local development server with live reload feature.

```
> git clone git@bitbucket.org:pbluekei/spera-bo-front.git
> cd spera-bo-front
> npm install
> npm run start || yarn start
```

### **Deployment**

1. Build command
   Used to generate the final result of compiling src files into `root` folder. This can be achieved by running the following command:

```
> npm run build || yarn build
```

### **Built With**

- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Eslint](https://eslint.org/)
- [Sass](http://sass-lang.com/)
- [Postcss](http://postcss.org/)
- [Stylelint](https://stylelint.io/)
- [Bootstrap](http://getbootstrap.com/)

### **Files/Folders Structure**

Here is a brief explanation of the template folder structure and some of its main files usage:

```
src                          # Contains all template source files.
└── assets                   # Contains images, icons and fonts.
|   └── fonts                # Contains fonts files.
|   └── icons                # Contains svg/png icons.
|   └── images               # Contains all template images/svg.
|
└── scripts                  # Contains all JavaScript files.
|   └── index.js             # Indicator file.
|
└── scss                     # Contains all SCSS files.
|   └── components           # Contains all template components.
|   └── pages                # Contains all template pages.
|   └── templates            # Contains all group of template components.
|   └── utils                # Contains helper classes.
|   └── index.scss           # Indicator file.
|
└── views                    # All Handlebars files WHICH will be later transpile into HTML files.
|   └── components           # Contains all template components structures.
|   └── pages                # Contains all template pages structures.
|   └── templates            # Contains all group of template components structures.
|   └── index.hbs            # Indicator file.
|
webpack
└── .babelrc                  # Babel ES6 Transpiler.
└── webpack.common.js         # Contains Webpack config object.
└── webpack.config.dev.js     # Contains Webpack Development config code.
└── webpack.config.prod.js    # Contains Webpack Production build config code.
|
.browserslistrc               # Supported Browsers.
.editorconfig                 # Keep same coding styles between code editors.
.eslint                       # JavaScript Linting.
.gitignore                    # Ignored files in Git.
package.json                  # Package metadata.
README.md                     # Manual file.

```

### **Authors**

Bluekei Soft Inc. Team
