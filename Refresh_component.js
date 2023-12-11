import { React } from 'React';
import { useState , useEffect} from 'React';

export default Refresh = () =>{
	let [refresh,ChangeRefresh] = useState('visible');
	return (	
		<div style={{visibility:refresh}}>Loading...{ChangeRefresh('hidden')}</div>
	)
}