# Interact.Widgets

## Installation
- Install the packages that are needed to build the widgets. 
    >`npm install`

## Configure
- Adjust the `interact.config.json` file to adjust the build folder. 

## Develop
- Add new component
    > `npm run add-component`

- Every change will trigger a rebuild of the components, this is not a production build.
    > `npm run watch-components`

## Build & Deploy
- Build widgets to build folder
    > `npm run build-components`

- Copy the widgets from the build folder to `public/components` of the interact server. 

# Interact Tools (Optional)

## Install Interact Tools
 > `npm install @vintecc/interact-tools -g`

### interact-tools Options
```shell
Options:
        init                     Initialise repository.
        add-component            Adds a Interact component template to your project.
        build-components         Builds the components into a standalone JS file.
        watch-components         Watches your source files and auto compiles Interact Components.
        help                     Show argument list
```

## Create our first component
1. Initialise repository
    > `interact-tools init`

2. Add widget to project
    > `interact-tools add-component`

3. Build widget
    > `interact-tools build-components`

4. Copy the widget from the build folder to `public/components` of the interact server. 

