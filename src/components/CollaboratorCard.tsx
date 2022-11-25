import React from "react";


interface ICollaborator {
  id: number;
  name: string;
  email: string;
  cellphone: string;
  cpf: string;
  balance: number;
  companyId: number;
}

interface IProps {
  name: string;
  balance: number;
  email: string;
  id: number;
  cellphone: string;
  cpf: string;
  companyId: number;
  selectCollaborator: (collaborator: ICollaborator) => void;
}

const CollaboratorCard = (props: IProps) => {
  return (
    <div
      className="mb-2 h-20 w-full cursor-pointer rounded bg-lime-500 p-2"
      onClick={() => props.selectCollaborator(props)}
    >
      <p className="font-normal text-white">{props.name}</p>
      <p className="text-xs">
        Email: <span>{props.email}</span>
      </p>
      <p className="text-xs font-semibold">
        Value: <span>R$ {props.balance.toFixed(2)}</span>
      </p>
    </div>
  );
};

export { CollaboratorCard };
