import React, { Component} from 'react';

class InputOption extends Component{
	render(){
		return(
			<div className="row">
				<div className="col-md-5">
					<label>{this.props.data.label}</label>
				</div>
				<div className="col-md-5">
				<select className='form-control'>
					{this.props.data.options && this.props.data.options.map(function(data,idx){
						return <option value={data.value} key={idx}>{data.text}</option> ;
					})}
				</select>
				</div>
			</div>
		)
	}
}

export default InputOption;