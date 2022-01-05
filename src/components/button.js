import './button.scss';
export default function Button({label}){
    return(
        <div className='btn'>
            <button>{label}</button>
        </div>
    );
}