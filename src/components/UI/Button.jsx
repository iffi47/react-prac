import classes from './Button.module.css';

export default function Button({type, children, className,  ...props}) {
  return(
    <>
    <button className={`${className} ${classes.button}`} type={type || 'button'} {...props} >{children}</button>
    </>
  )
}