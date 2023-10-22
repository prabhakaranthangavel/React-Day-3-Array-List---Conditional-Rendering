function Hello(props) {
    console.log(props);
  
    return (
      <>
        <h1>Hello {props.name}</h1>
        <p>You are {props.age} years old</p>
      </>
    )
  }

export default Hello