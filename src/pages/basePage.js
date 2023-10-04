import React from 'react';
// import './basepage.css';


const basePage = (WrappedComponent) => {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          flipped: false
        };
      }
  
      handleFlip = () => {
        this.setState(prevState => ({
          flipped: !prevState.flipped
        }));
      }
      render() {
        const { flipped } = this.state;
        console.log(flipped)
  return (
    <div className={`base-page ${flipped ? 'flipped' : ''}`}>
    <table style={{ height: "100vh", width: "100vw" }}>
      <tr style={{ height: "10vh" }}>
        <td style={{borderRight: "2px solid black", borderBottom: "2px solid black", width: "10%", 
            "fontSize": "larger", "fontFamily": "cursive"}} >2023</td>
        <td style={{borderBottom: "2px solid black", width: "80%"}}></td>
        <td style={{borderLeft: "2px solid black", borderBottom: "2px solid black", width: "10%"}}></td>
      </tr>
      <tr style={{ height: "80vh" }}>
        <td style={{borderRight: "2px solid black", width: "10%",}}></td>
        <td style={{ width: "80%",}}>
          <div className="page-content" style={{height: "100%"}}>
            <WrappedComponent {...this.props} handleFlip={this.handleFlip} />
          </div>
        </td>
        <td style={{borderLeft: "2px solid black", width: "10%",}}></td>
      </tr>
      <tr style={{ height: "10vh" }}>
        <td style={{borderRight: "2px solid black", borderTop: "2px solid black", width: "10%"}}></td>
        <td style={{borderTop: "2px solid black", width: "80%"}}></td>
        <td style={{borderLeft: "2px solid black", borderTop: "2px solid black", width: "10%"}}></td>
      </tr>
    </table>
  </div>
  )
}
    }
}

export default basePage;