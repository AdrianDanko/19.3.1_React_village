
//import './App.css';
import VilageItem from "./VillageItem";

const village_aray = [{ type: 'building', color: 'gray', size: '50px' },
{ type: 'car-side', color: 'red', size: '20px' },
{ type: 'home', color: '#000000', size: '30px' },
{ type: 'building', color: '#f0e130', size: '80px' },
{ type: 'tree', color: 'green', size: '40px' },
{ type: 'tree', color: 'green', size: '60px' },
{ type: 'tree', color: 'green', size: '15px' },
{ type: 'car', color: 'brown', size: '20px' },
{ type: 'car', color: '#2f4f4f', size: '20px' },
{ type: 'city', color: '#1e90ff', size: '95px' }];

function Village() {

  return village_aray.map ( (e)=> 
        
  <VilageItem  type={e.type} color={e.color} size={e.size}/>
    );
}

export default Village;
