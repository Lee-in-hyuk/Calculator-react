import "./display.scss"
export default function Display({input, onChange}){
    return(
        <div className="dp">
            <input type="text" onChange={onChange} value={input}/>
        </div>
    );
}