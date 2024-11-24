import { Form } from "../Form/Form";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { FormEvent, useState } from "react";

type Props = {
  closeModal: () => void;
  fetchDepartureAirport: (airportCode: string) => void;
  fetchArrivalAirport: (airportCode: string) => void;
  getFlightData: (flight_icao: string) => void;
};

export const FlightSearchModal = (props: Props) => {
  const [departureAirportValue, setDepartureAirportValue] = useState("");
  const [arrivalAirportValue, setArrivalAirportValue] = useState("");
  const [flightNumberValue, setFlightNumberValue] = useState("");

  const handleDepChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    setDepartureAirportValue(target.value);
  };

  const handleArrivalChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    setArrivalAirportValue(target.value);
  };

  const handleFlightNumChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    setFlightNumberValue(target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.fetchArrivalAirport(arrivalAirportValue);
    props.fetchDepartureAirport(departureAirportValue);
    props.getFlightData(flightNumberValue);
    props.closeModal();
  };

  return (
    <Modal>
      <button
        onClick={props.closeModal}
        className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"
      ></button>
      <h1 className="font-normal sm:text-[30px]">Track Flight</h1>
      <p className="mt-5 text-gray-500 mb-2"></p>
      <Form>
        <div className="flex justify-between mb-3">
          <div className="flex flex-col gap-2">
            <Form.TextInput
              labelText="Departure Aiport"
              placeholder="Ex: DEN"
              value={departureAirportValue}
              onChange={handleDepChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Form.TextInput
              labelText="Arrival Airport"
              placeholder="Ex: PDX"
              value={arrivalAirportValue}
              onChange={handleArrivalChange}
            />
          </div>
        </div>
        <Form.TextInput
          labelText="Flight Number"
          placeholder="Ex. AS1267"
          value={flightNumberValue}
          onChange={handleFlightNumChange}
        />
        <Button text="Search Flight" className="mt-4" onClick={handleSubmit} />
      </Form>
    </Modal>
  );
};
