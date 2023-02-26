import React from 'react';
import ReactDOM from 'react-dom/client';
import { marked } from 'marked'
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentText: "# Welcome to my Markdown Parser\n## My name is Bradley Reynolds!\n### I am an aspiring self-taught frontend developer\nHere is an example of **bold text**\n\nHere is an example of *italicized text*\n\nThis is an example of a quoteblock:\n>Do or do not, there is no try.\n\nHere is an example of an ordered list:",
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange = (e) => {
    this.setState({
      currentText: e.target.value
    })

  }
  
  render () {
    return (
      <div>
        <div className='App'>
          <div className='text-con'>
            <h2 className='text-head'>Type Markdown Here:</h2>
            <p>For a cheatsheet on Markdown, click <a href='#cheatsheet'>here</a>.</p>
            <textarea className="text-area" value={this.state.currentText} onChange={this.onChange} />
          </div>
          <div className='parsed-con'>
            <h2 className='parsed-head'>Parsed Markdown:</h2>
            <div className="parsed-area" dangerouslySetInnerHTML={{ __html: marked.parse(this.state.currentText) }} />
          </div>
          <div id='cheatsheet' className='cheatsheet'>
            <h2 className='cheat-head'>Markdown cheatsheet</h2>
            <table className='cheat-table'>
              <tr className='cheat-row'>
                <td className='cheat-data'>Element</td>
                <td className='cheat-data'>Markdown Syntax</td>
              </tr>
              <tr className='cheat-row'>
                <td className='cheat-data'>Heading</td>
                <td className='cheat-data'># H1<br />## H2<br />### H3</td>
              </tr>
              <tr className='cheat-row'>
                <td className='cheat-data'>Bold</td>
                <td className='cheat-data'>**bold text**</td>
              </tr>
              <tr className='cheat-row'>
                <td className='cheat-data'>Italic</td>
                <td className='cheat-data'>*italicized text*</td>
              </tr>
              <tr className='cheat-row'>
                <td className='cheat-data'>Blockquote</td>
                <td className='cheat-data'>&gt; blockquote</td>
              </tr>
              <tr className='cheat-row'>
                <td className='cheat-data'>Ordered List</td>
                <td className='cheat-data'>1. First item <br />2. Second item <br />3. Third item</td>
              </tr>
              <tr className='cheat-row'>
                <td className='cheat-data'>Unordered List</td>
                <td className='cheat-data'>- First item <br />- Second item <br />- Third item</td>
              </tr>
              <tr className='cheat-row'>
                <td className='cheat-data'>Code</td>
                <td className='cheat-data'>`code`</td>
              </tr>
              <tr className='cheat-row'>
                <td className='cheat-data'>Horizontal Rule</td>
                <td className='cheat-data'>---</td>
              </tr>
              <tr className='cheat-row'>
                <td className='cheat-data'>Link</td>
                <td className='cheat-data'>[title](https://www.example.com)</td>
              </tr>
              <tr className='cheat-row'>
                <td className='cheat-data'>Image</td>
                <td className='cheat-data'>![alt text](image.jpg)</td>
              </tr>
            </table>
          </div>
        </div>
      </div>)
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

