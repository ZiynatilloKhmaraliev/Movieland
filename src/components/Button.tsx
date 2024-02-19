
interface Props{

children:string;
onClick:()=>void;
color:string;

}
const Button = ({children,onClick,color}:Props) => {
  return (
    <button type="button" onClick={onClick} className={"btn btn-"+color}>{children}</button>
  )
}

export default Button