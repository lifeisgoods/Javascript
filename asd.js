class Codelab extends React.Component{
    render(){
      let text='hi i am codelab';
      let stylegg={
        backgroundColor:'aqua'
      }
      return(
      <div style={stylegg}>{text}</div>
      );
    }
  }
  
  class App extends React.Component{
    render(){
      return(
      <Codelab/>
      );
    }
  }
  
  ReactDOM.render(<App/>,document.getElementById('root'));

  