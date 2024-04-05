interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

const Input = ({ id, label, name, ...props }: InputProps) => (
    <div
        style={{
            margin: "1rem 0",
        }}
    >
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id || name} {...props} />
    </div>
);

export default Input;
