import { MapContainer, Marker, TileLayer, useMapEvents, Tooltip, Polyline } from "react-leaflet";
import { CollaboratorCard } from "./CollaboratorCard";
import { IoIosArrowBack } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import {BsTrash} from 'react-icons/bs'
import { truncateString } from "../utils";
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const ZOOM_LEVEL = 13;

interface ICollaborator {
  id: number;
  name: string;
  email: string;
  cellphone: string;
  cpf: string;
  balance: number;
  companyId: number;
}

const MapComponent = () => {
  const [apiCollaborators, setApiCollaborators] = useState<ICollaborator[]>();
  const [formsState, setFormsState] = useState<string>("");
  const [coordinates, setCoordinates] = useState<any>([]);
  const [route, setRoute] = useState<any>([]);
  const [position, setPosition] = useState(null);
  const [update, setUpdate] = useState<any>(null);
  const [selectedCollaborator, setSelectedCollaborator] = useState<ICollaborator>();

  const createRoutineMachineLayer = () => {
    // @ts-ignore
    const instance = L.Routing.control({
      waypoints: route.map((item:any) => L.latLng(item[0], item[1])),
      lineOptions: {
        styles: [{ color: "#6FA1EC", weight: 4 }]
      },
      show: false,
      addWaypoints: false,
    });
    return instance;
  };

  const RoutingMachine = createControlComponent(createRoutineMachineLayer);

  function LocationMarker() {
    const map = useMapEvents({
      click(e: any) {
        if (!selectedCollaborator) return;
        setPosition(e.latlng);
      },
    });

    return position === null ? null : <Marker position={position}></Marker>;
  }

  async function saveInDatabase(position: any, collaborator: any) {
    await axios.post(`http://localhost:3333/coordinates/create`, {
      x: position.lat.toString(),
      y: position.lng.toString(),
      email: collaborator.email,
    });
    setUpdate(update + 1);
  }

  async function calculateValue(collaboratorId?: number) {
    const result = await axios.post(`http://localhost:3333/coordinates/calculate`, {
      collaboratorId: collaboratorId
    });
    setRoute(result.data.route);
    setUpdate(update + 1);
  }

  async function savePosition() {
    if (!position) return;
    setCoordinates([...coordinates, position]);
    await saveInDatabase(position, selectedCollaborator);
    setPosition(null);
    calculateValue(selectedCollaborator?.id);
  }

  async function getCoordinates() {
    return await axios.get(`http://localhost:3333/coordinates/get-all`, {
      params: {
        userId: selectedCollaborator?.id,
      },
    });
  }

  async function deleteCoordinate(id: number) {
    await axios.post(`http://localhost:3333/coordinates/delete`, {
      id
    });
    setUpdate(update + 1);
  }

  useEffect(() => {
    getAllCollaborators().then((result) => {
      setApiCollaborators(result.data);
      const balance = result.data.find((collaborator: any) => collaborator.id == selectedCollaborator?.id);
      setSelectedCollaborator(balance);
    });
  }, [formsState, update]);

  useEffect(() => {
    if (!selectedCollaborator) return;
    getCoordinates().then((result) => {
      setCoordinates(result.data);
    });
  }, [selectedCollaborator, update]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function selectCollaborator(collaborator: ICollaborator) {
    setSelectedCollaborator(collaborator);
    setFormsState("selected");
    await calculateValue(collaborator.id);
  }

  async function createCollaborator(data: FieldValues) {
    try {
      await axios.post(`http://localhost:3333/collaborators/create`, data, {
        headers: { token: localStorage.getItem("userToken") },
      });
      setFormsState("");
    } catch (e) {
      console.log(e);
    }
  }

  async function getAllCollaborators() {
    return await axios.get(
        `http://localhost:3333/collaborators/all`,
        {
          headers: { token: localStorage.getItem("userToken") },
        }
      );
  }

  function totalCost(collaborators?: ICollaborator[]) {
    let total = 0;
    collaborators?.forEach((collaborator: ICollaborator) => {
      total += collaborator.balance;
    });

    return total;
  }

  function renderedComponents(params: string) {
    switch (params) {
      case "create":
        return (
          <div className="w-96">
            <div className="mt-4 flex w-full flex-col items-center justify-center px-3">
              <div className="flex w-full">
                <IoIosArrowBack
                  size="1.5rem"
                  className="ml-2 cursor-pointer "
                  onClick={() => setFormsState("")}
                />
                <h1 className="flex flex-1 justify-center text-xl">
                  Create new collaborator
                </h1>
              </div>
              <form
                className="flex w-full flex-col"
                onSubmit={handleSubmit(
                  async (data) => await createCollaborator(data)
                )}
              >
                <div className="mt-5 flex flex-col">
                  <label className="mb-2 font-medium" htmlFor="">
                    Name
                  </label>
                  {errors.name && <p>Enter a name.</p>}
                  <input
                    type="text"
                    className="mb-5 h-10 rounded border-2 pl-3"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                  <label className="mb-2 font-medium" htmlFor="">
                    Collaborator Email
                  </label>
                  {errors.email && <p>Enter a email.</p>}
                  <input
                    type="text"
                    className="mb-5 h-10 rounded border-2 pl-3"
                    placeholder="email@email.com"
                    {...register("email", { required: true })}
                  />
                  <label className="mb-2 font-medium" htmlFor="">
                    CPF
                  </label>
                  {errors.cpf && <p>Enter a CPF.</p>}
                  <input
                    type="text"
                    className="mb-5 h-10 rounded border-2 pl-3"
                    placeholder="111.111.111-11"
                    {...register("cpf", { required: true })}
                  />
                  <label className="mb-2 font-medium" htmlFor="">
                    Cellphone
                  </label>
                  {errors.cellphone && <p>Enter a cellphone.</p>}
                  <input
                    type="text"
                    className="mb-5 h-10 rounded border-2 pl-3"
                    placeholder="(61) 91234-3213"
                    {...register("cellphone", { required: true })}
                  />
                  <div className="mt-3 flex gap-2">
                    <button className="h-10 w-full rounded bg-lime-500 text-white">
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
      case "selected":
        return (
          <div className="flex h-screen w-96 flex-col overflow-y-scroll">
            <div className="flex h-20 w-full flex-col items-center justify-center bg-lime-500">
              <div className="flex h-20 w-full items-center">
                <IoIosArrowBack
                  size="1.5rem"
                  className="ml-2 cursor-pointer "
                  onClick={() => {
                    setFormsState("");
                    setCoordinates([]);
                    setSelectedCollaborator(undefined);
                    setPosition(null);
                    setRoute([]);
                  }}
                  color={"white"}
                />
                <h1 className="ml-auto mr-3 text-2xl text-white drop-shadow-md">
                  {truncateString(selectedCollaborator?.name as string)}
                </h1>
              </div>
              <span className="mb-2">Monthly transit cost: <span className="font-semibold">R$ {selectedCollaborator?.balance.toFixed(2)}</span></span>
            </div>
            <button className="ml-auto w-6/12 h-8 bg-yellow-300 mb-2 rounded-b-lg" onClick={async () => await calculateValue(selectedCollaborator?.id)}>Calculate cost</button>
            {coordinates.map((item: any, index: any) => (
              <div
                className="mb-2 flex bg-neutral-200 px-2 py-2 items-center justify-between"
                key={index}
              >
                <span>Coordinate - {item.id}</span>
                <BsTrash className="cursor-pointer" onClick={async () => await deleteCoordinate(item.id)}/>
              </div>
            ))}
            <button
              onClick={() => savePosition()}
              className="mx-auto mt-2 rounded bg-lime-500 py-2 px-3 text-white"
            >
              Add coordinate
            </button>
          </div>
        );
      default:
        return (
          <div className="w-96 h-screen px-2 shadow-md overflow-y-scroll flex flex-col">
            <h1 className="mt-2 mb-5 flex justify-center text-xl">
              Collaborators
            </h1>
            <button
              onClick={() => setFormsState("create")}
              className="mb-2 w-full rounded border-2 font-semibold hover:border-lime-500 hover:bg-lime-500 hover:text-white"
            >
              +
            </button>
            {apiCollaborators?.sort((a, b)=>  {return a.id - b.id}).map((collaborator: ICollaborator) => {
              return (
                <CollaboratorCard
                  key={collaborator.id}
                  name={collaborator.name}
                  balance={collaborator.balance}
                  email={collaborator.email}
                  id={collaborator.id}
                  cellphone={collaborator.cellphone}
                  cpf={collaborator.cpf}
                  companyId={collaborator.companyId}
                  selectCollaborator={selectCollaborator}
                />
              );
            })}
            <div className="mt-auto">
              Total Cost: <span className="font-semibold">R$ {totalCost(apiCollaborators).toFixed(2)}</span>
            </div>
          </div>
        );
    }
  }

  return (
    <div className="flex h-full w-full">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={ZOOM_LEVEL}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaG9iYmF0bWFuIiwiYSI6ImNrZzgzZ2JzbDBkYnEycW15NTV3bzBsbGgifQ.33I4ABckf8ciQZ2NCd1MEw"></TileLayer>
        <LocationMarker />
        <RoutingMachine />
      </MapContainer>
      {renderedComponents(formsState)}
    </div>
  );
};

export default MapComponent;
