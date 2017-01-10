import React, { Component} from 'react';

class InputText extends Component{
	render(){
		return(
			<div className="row">
				<div className="col-md-5">
					<label>{this.props.data.label}</label>
				</div>
				<div className="col-md-5">
					<input type="text" placeholder={this.props.data.placeholder}/>
				</div>
			</div>
		)
	}
}

export default InputText;
