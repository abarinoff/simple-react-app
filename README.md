### Setting up and initializing Yarn

    sudo npm install -g yarn
    yarn init --yes
    
### Setting up initial .gitignore entries

    touch .gitignore 
    echo node_modules >> .gitignore
    
### Adding initial dev dependencies: Webpack, Babel, SASS

    yarn add --dev webpack babel-core babel-preset-react babel-preset-es2015 babel-loader node-sass style-loader css-loader sass-loader

### Adding initial prod dependencies: React

    yarn add react react-dom
    
