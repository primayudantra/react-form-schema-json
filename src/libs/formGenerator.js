import React 					from 'react';
import InputText 			from '../form/inputText';
import InputPassword 	from '../form/inputPassword';
import InputOption 		from '../form/inputOption';


function switchCase(obj, idx) {
	switch(obj.type)
	{
	case 'inputText':
		return <InputText 		data={obj} key={idx}/>;
	case 'inputPassword':
		return <InputPassword data={obj} key={idx}/>;
	case 'inputOption':
		return <InputOption 	data={obj} key={idx}/>;
	default:
		return <div key={idx}>Error</div>;
	}
}


export default switchCase;
