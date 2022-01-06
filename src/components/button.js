import './button.scss';
export default function Button({label,size,value}){
    return(
        <div className='btn'>
            <button data-size={size} value={value}>{label}</button>
        </div>
    );
}