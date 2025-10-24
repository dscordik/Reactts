import type { ReactNode } from 'react';

interface BtnProps{
    children:ReactNode,
    onClick: () => void
}

const Button = (props:BtnProps) => {
    const { children,...otherProps } = props;
    return (
        <button{...otherProps}>
            {children}
        </button>
    );
};

export default Button;