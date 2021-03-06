import React, { Component, Fragment } from 'react';
// import { createPortal } from "react-dom";

// const BoundaryHOC = ProtectedComponent => class Boundary extends Component {
//   state = {
//     hasError:false
//   }
//   componentDidCatch = () => {
//     this.setState({
//       hasError: true
//     });
//   };
//   render(){
//     const { hasError } = this.state;
//     if(hasError){
//       return <ErrorFallback />;
//     }else{
//       return <ProtectedComponent />;
//     }
//   }
// }

// class ErrorMaker extends Component{
//   state = {
//     friends: ["jisu","flynn","daal","kneeprayer"]
//   }
//   componentDidMount = () => {
//     setTimeout(() => {
//       this.setState({
//         friends: 1
//       });
//     }, 2000);
//   };
//   render(){
//     const { friends } = this.state;
//     return friends.map(friend => ` ${friend} `);
//   }
// }

// const PErrorMaker = BoundaryHOC(ErrorMaker);

// class Portals extends Component{
//   render(){
//     return createPortal(<Message />, document.getElementById("touchMe"));
//   }
// }

// const PPortals = BoundaryHOC(Portals);

// const Message = () => "Just touched it!";

// class FragmentReturn extends Component{
//   render(){
//     return(
//       <Fragment>
//         <header />
//         <div />
//         <footer />
//       </Fragment>
//     )
//   }
// }

// class StringReturnType extends Component{
//   render(){
//     return 'test string return';
//   }
// }

// const ErrorFallback = () => "Sorry sommething went wrong";

const MAX_PIZZAS = 20;

const eatPizza = (state, props) => {
  const { pizzas } = state;
  if(pizzas < MAX_PIZZAS){
    return{
      pizzas: pizzas + 1
    }
  }else{
    return null;
  }
};

class Controlled extends Component{
  state = {
    pizzas: 0
  };
  render(){
    const { pizzas } = this.state;
    return (
      <button onClick={this._handleClick}>{`I have aten ${ pizzas } ${ pizzas === 1 ? "pizza" : "pizzas" }`}</button>
    );
  }
  _handleClick = () => {
    this.setState(eatPizza);
  };
}

class App extends Component {
  // componentDidCatch = (error, info) => {
  //   console.log(`catched ${error} the info I have is ${JSON.stringify(info)}`);

  render(){
    // const { hasError } = this.state;
    return (
      <Fragment>
        <Controlled />
        {/* <FragmentReturn />
        <StringReturnType />
        <PPortals />
        <PErrorMaker /> */}
      </Fragment>
    );
  }
}

// export default BoundaryHOC(App);
export default App;
