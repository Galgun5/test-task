import React from 'react';
import classes from './Loader.module.sass'

const Loader = () => {

    return (
        <div className={classes.container}>
            <div className={classes.flex}>
                <div className={classes.loader}>
                </div>
            </div>
            <div className={classes.loadText}>
                Loading...
            </div>
        </div>
    )
}
export default Loader