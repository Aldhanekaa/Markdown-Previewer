import './App.css';
import React from 'react';
import marked from 'marked';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Container />
      </div>
    )
  }
}
class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      popup: false
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick(e) {
    console.log(e)
    this.setState({
      popup: !this.state.popup
    })
  }
  render() {
    return (
      <div className={this.state.popup ? 'card popup' : 'card'}>
        <Toolbar onClick={this.onClick} />
        <CardContent />
      </div>
    )
  }
}

class Toolbar extends React.Component {
  render() {
    return (
      <header id="toolbar">
        <div className="bar">
          <span className="red-color"></span>
          <span className="yellow-color"></span>
          <span className="green-color" onClick={this.props.onClick}></span>
        </div>
        <p>index.md</p>
        <div id="e"></div>
      </header>
    )
  }
}

class CardContent extends React.Component {
  render() {
    return (
      <div className="cardContent">
        <Files />
        <CARD_CONTENT />
        <footer>
          <span>
            <i class="fab fa-github"></i> <a href="https://github.com/Aldhanekaa/Markdown-Previewer">Github Repo</a>.
          </span>
          <span id="copyright">©2020 by <a href="https://github.com/Aldhanekaa">Aldhaneka</a></span>
        </footer>
      </div>
    )
  }
}

const Files = (props) => {
  return (
    <header>
      <div class="editorFile file">
        <div>
          index.md
        </div>
        <div></div>
      </div>
      <div class="previewFile file">
        <div>index.md Preview</div>
        <div></div>
      </div>
    </header>
  )
}
class CARD_CONTENT extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: indexDefault
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    this.setState({
      markdown: e.target.value
    })
    console.log(this.state.markdown)
    console.log(marked('# heading+'));
  }
  render() {
    return (
      <div id="contents">
        <textarea name="" id="editor" cols="30" rows="10" value={this.state.markdown} onChange={this.onChange}>

        </textarea>
        <div id="preview" dangerouslySetInnerHTML={{
          __html: marked(this.state.markdown)
        }}></div>
      </div>
    )
  }
}

const indexDefault = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  console.log(firstLine + lastLine);
  return 'EE'
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
export default App;
