import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

export default function ErrorModal({ title, message, onConfirm }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>
            {title}
          </h2>
        </header>
        <div className={classes.content}>
          {message}
        </div>
        <footer className={classes.actions}>
          <Button onClick={onConfirm}>
            Okay
          </Button>
        </footer>
      </Card>
    </>
  )
}