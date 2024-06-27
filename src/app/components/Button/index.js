import { Typography } from '@mui/material';

const style = require('./button.module.css');

/**
 * Templated Button component
 * @param {React.ComponentProps} props
 * @returns {JSX.Element}
 */
export function Button(props) {
  return (
    <button {...props} className={style.Button}>
      <Typography variant='body1' {...props}>{props.children}</Typography>
    </button>
  );
}
