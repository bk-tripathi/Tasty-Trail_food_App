import { Fragment } from 'react';
import ReactDOM from 'react-dom'
import classes from './Card.module.css'

const Backdrop = props =>{
    return <div className={classes.Backdrop} />
};


const ModalOverlay= props =>{
    return( <div className={classes.modal} >
        <div className={classes.content}>{props.children}</div>
    </div>
    );
};

const portalElement = do


const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop />, )}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
    </Fragment>
      
  )
}

export default Modal
