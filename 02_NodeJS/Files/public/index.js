

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
         axios.post('/registrar', {
			inProducto: this.state.sProduct,
			inPrecio: this.state.sPrecio,
			inImagen: 'Flintstone'
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

























const Row = ({id, title, priority, type, complete}) => (
  <div className="row">
    <div>{id}</div>
    <div>{title}</div>
    <div>{priority}</div>
    <div>{type}</div>    
    <div>{complete}</div>    
  </div>
);

/*
  Table component written as an ES6 class
*/
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 403, title: 'Task 403', priority: 'High', type: 'Improvement', complete: 100}, 
        {id: 532, title: 'Task 532', priority: 'Medium', type: 'Improvement', complete: 30}, 
        {id: 240, title: 'Task 240', priority: 'High', type: 'Story', complete: 66},
      ],
    };
    
    // http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
    // bind the context for compareBy & sortBy to this component instance
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }
  
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }
    
  render() {
    const rows = this.state.data.map( (rowData) => <Row {...rowData} />);

    return (
      <div className="table">
        <div className="header">
          <div onClick={() => this.sortBy('id')} >ID</div>
          <div onClick={() => this.sortBy('title')}>Title</div>
          <div onClick={() => this.sortBy('priority')}>Priority</div>
          <div onClick={() => this.sortBy('type')}>Issue Type</div>
          <div onClick={() => this.sortBy('complete')}>% Complete</div>
        </div>
        <div className="body">
          {rows}
        </div>
      </div>
    );
    
  }
}

/*
 * Render the above component into the div#app
 */
ReactDOM.render(<Table />, document.getElementById('app'));
