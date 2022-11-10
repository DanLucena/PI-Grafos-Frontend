import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { CollaboratorCard } from "./CollaboratorCard";
import { IoIosArrowBack } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { ICollaborator } from "../interfaces/Collaborator";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";

const ZOOM_LEVEL = 13;

const MapComponent = () => {
  const [apiCollaborators, setApiCollaborators] = useState<ICollaborator[]>();
  const [formsState, setFormsState] = useState<string>("");
  const [coordinates, setCoordinates] = useState<any>([]);
  const [position, setPosition] = useState(null);
  const [selectedCollaborator, setSelectedCollaborator] =
    useState<ICollaborator>();

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
  }

  async function savePosition() {
    if (!position) return;
    setCoordinates([...coordinates, position]);
    await saveInDatabase(position, selectedCollaborator);
    setPosition(null);
  }

  async function getCoordinates() {
    return await axios.get(`http://localhost:3333/coordinates/get-all`, {
      params: {
        userId: selectedCollaborator?.id,
      },
    });
  }

  useEffect(() => {
    getAllCollaborators();
  }, [formsState]);

  useEffect(() => {
    if (!selectedCollaborator) return;
    getCoordinates().then((result) => {
      setCoordinates(result.data);
    });
  }, [selectedCollaborator]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function selectCollaborator(collaborator: ICollaborator) {
    setSelectedCollaborator(collaborator);
    setFormsState("selected");
  }

  async function createCollaborator(data: FieldValues) {
    try {
      await axios.post(`http://localhost:3333/collaborators/create`, data, {
        headers: { token: localStorage.getItem("token") },
      });
      setFormsState("");
    } catch (e) {
      console.log(e);
    }
  }

  async function getAllCollaborators() {
    try {
      const collaborators = await axios.get(
        `http://localhost:3333/collaborators/all`,
        {
          headers: { token: localStorage.getItem("token") },
        }
      );
      setApiCollaborators(collaborators.data);
    } catch (e) {
      console.log(e);
    }
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
          <div className="flex w-96 flex-col">
            <div className="flex h-20 w-full flex-col items-center justify-center bg-lime-500">
              <div className="mb-2 flex w-full items-center">
                <IoIosArrowBack
                  size="1.5rem"
                  className="ml-2 cursor-pointer "
                  onClick={() => {
                    setFormsState("");
                    setCoordinates([]);
                    setSelectedCollaborator(undefined);
                    setPosition(null);
                  }}
                  color={"white"}
                />
                <h1 className="ml-auto mr-3 text-2xl text-white drop-shadow-md">
                  {selectedCollaborator?.name}
                </h1>
              </div>
            </div>
            {coordinates.map((item: any, index: any) => (
              <div
                className="mb-2 flex flex-col bg-neutral-200 px-2 py-2"
                key={index}
              >
                <span>Coordinate - {index}</span>
                <button className="mt-4 rounded bg-white py-2">
                  Add coordinate adjacency
                </button>
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
          <div className="w-96 px-2 shadow-md">
            <h1 className="mt-2 mb-5 flex justify-center text-xl">
              Collaborators
            </h1>
            <button
              onClick={() => setFormsState("create")}
              className="mb-2 w-full rounded border-2 font-semibold hover:border-lime-500 hover:bg-lime-500 hover:text-white"
            >
              +
            </button>
            {apiCollaborators?.map((collaborator: ICollaborator) => {
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
        {coordinates.map((position: any, index: any) => (
          <Marker position={position} key={index}></Marker>
        ))}
        <LocationMarker />
      </MapContainer>
      {renderedComponents(formsState)}
    </div>
  );
};

export default MapComponent;
