

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
    <form id="myForm" action="">
	<input type="inProduct" />
	<input type="inPrice" />
	<input type="file" />
    </form>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}




var FormComp = React.createClass({
 
 
    getInitialState: function () {
      return {sProduct: '',sPrice: '',sImage:''};
    },
 
 
	 handleChange(e) {
		// If you are using babel, you can use ES 6 dictionary syntax
		// let change = { [e.target.name] = e.target.value }
		let change = {}
		change[e.target.name] = e.target.value
		this.setState(change)
	  },

  
    handleClick:function(){
        var fullName = this.state.sProduct + ' ' + this.state.sPrecio;
        alert(fullName)
         axios.post('http://www.siga.ipn.mx', {
			firstName: 'Fred',
			lastName: 'Flintstone'
		  })
		  .then(function (response) {
			console.log(response);
		  })
		  .catch(function (error) {
			console.log(error);
		  });
    },
 
    render:function(){
        return(
            <div>
                <h2>Registro de productos</h2>
                <hr />
 
                <label>Producto: </label>
                <input type="text" name="sProduct" value = {this.state.sProduct} onChange={this.handleChange}  />
                <br />
 
                <label>Precio: </label>
                <input type="text" name="sPrecio" value = {this.state.sPrecio} onChange={this.handleChange}  />
                <br />
                
                <label>Imagen: </label>
                <input type="file" name="sImagen" value = {this.state.sImagen} onChange={this.handleChange}  />
                <br />
 
                <input type="button" onClick={this.handleClick} value="Submit" />
 
                <hr />
 
                {/*<h3>Your full product is </h3> {this.state.sProduct}
                <h3>Your price is </h3> {this.state.sPrecio}*/}
            </div>
        );
    }
})




ReactDOM.render(
  <FormComp />,
  document.getElementById('root')
);
