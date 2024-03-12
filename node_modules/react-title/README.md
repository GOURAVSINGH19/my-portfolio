# react-title
a title mixin for react

## Features
* change title for component

## Examples

```js
import React, { PropTypes } from 'react'
import mixin from 'es6-react-mixins'
import title from 'react-title'

//step 2. default title by param
class App extends mixin(title('Welcome')) {
    render () {
        return (
            <div>hello</div>
        )
    }
    componentWillUpdate(nextProps, nextState) {
        super.componentWillUpdate()
        //step 3. dynamic title by state
        this.title(`Welcome to ${nextState.app.name}`)
    }
}

//step 1. default title by props
React.render(<App title='Hello'/>, document.body)
```
