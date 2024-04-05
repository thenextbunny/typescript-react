import { useReducer } from "react";
import Input from "../components/Input";
import { act } from "react-dom/test-utils";

type State = {
    name: string;
    email: string;
};

type Action = {
    type: "setName" | "setEmail";
    payload: string;
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "setName":
            return {
                ...state,
                name: action.payload,
            };
        case "setEmail":
            return {
                ...state,
                email: action.payload,
            };
        default:
            return state;
    }
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { name: "", email: "" });

    return (
        <>
            <h2>useReducer</h2>
            <div>
                <Input
                    label="Name"
                    id="reducer-name"
                    value={state.name}
                    onChange={({ target }) =>
                        dispatch({
                            type: "setName",
                            payload: target.value,
                        })
                    }
                />
                <Input
                    label="Email"
                    id="reducer-email"
                    value={state.email}
                    onChange={({ target }) =>
                        dispatch({
                            type: "setEmail",
                            payload: target.value,
                        })
                    }
                />
            </div>
        </>
    );
};

export default UseReducer;
