function SelectPricing({name,id,children}){
    return(
            <select name={name} id={id} className='select-pricing'>
                {children}
            </select>
    )
}
export default SelectPricing;