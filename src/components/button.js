import './button.scss';
export default function Button({label,size,value,onClick}){
    return(
        <div className='btn'>
            <button data-size={size} value={value} onClick={onClick}>{label}</button>
        </div>
    );
}