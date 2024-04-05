interface ButtonAdvancedProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    fontSize?: string;
}

type ButtonBasicProps = React.PropsWithChildren<{
    fontSize?: string;
    type: "button" | "reset" | "submit";
    onClick: () => void;
}>;

type ButtonMediumProps = React.ComponentProps<"button"> & {
    fontSize?: string;
};

const Button = ({ children, fontSize, type = "button", ...props }: ButtonAdvancedProps) => (
    <button
        style={{
            fontSize,
        }}
        type={type}
        {...props}
    >
        {children}
    </button>
);

export default Button;
