import React, { useEffect, useState } from "react";
import Input from "../components/Input";

type Data = {
    id: string;
    nome: string;
    preco: number;
    status: string;
    pagamento: string;
    parcelas: null | number;
    data: string;
};

const UseState = () => {
    const [data, setData] = useState<null | Data[]>(null);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    useEffect(() => {
        if (!start || !end) return;

        fetch(`https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`)
            .then((response) => response.json())
            .then((data) => setData(data as Data[]))
            .catch((error) => console.log(error));
    }, [start, end]);

    return (
        <>
            <h2>useState</h2>
            <Input
                id="start"
                label="Start date"
                type="date"
                onChange={({ currentTarget }) => setStart(currentTarget.value)}
                value={start}
            />
            <Input
                id="end"
                label="End date"
                type="date"
                onChange={({ currentTarget }) => setEnd(currentTarget.value)}
                value={end}
            />
            {data && data.length && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Status</th>
                            <th>Pagamento</th>
                            <th>Parcelas</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>
                                    {item.preco.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </td>
                                <td>{item.status}</td>
                                <td>{item.pagamento}</td>
                                <td>{item.parcelas ?? "NA"}</td>
                                <td>{item.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default UseState;
