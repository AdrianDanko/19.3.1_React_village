function VillageItem(props)
{const styleObj = {fontSize:props.size,color:props.color}
if(props.type==='building'){
return ( 
  
   <i className="fa-solid fa-building" style={styleObj}></i>
  
)

}
if(props.type==='car-side'){
    return ( 
    
      <i className="fa-solid fa-car-side"style={styleObj}></i> 

    )
}
if(props.type==='home'){
    return ( 
      
      <i className="fa-solid fa-house-chimney-window"style={styleObj}></i> 
        
    )
}
if(props.type==='tree'){
    return ( 
        
      <i className="fa-solid fa-tree"style={styleObj}></i> 
        
    )
}
if(props.type==='city'){
    return ( 
        
      <i className="fa-solid fa-city"style={styleObj}></i> 
     
    )
}
if(props.type==='car'){
  return ( 
      
    <i className="fa-solid fa-car"style={styleObj}></i> 
    
  )
}
}

export default VillageItem