import { useState } from "react";
import { Form } from "../Form/Form";
import { Modal } from "../Modal/Modal";

type Props = {
  closeModal: () => void;
};

export const FlightSearchModal = (props: Props) => {
  const [isAirportSearch, setIsAirportSearch] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAirportSearch(e.target.checked);
  };

  return (
    <Modal>
      <button
        onClick={props.closeModal}
        className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"
      ></button>
      <h1 className="font-normal sm:text-[30px]">Search Flights</h1>
      <p className="mt-5 text-gray-500 mb-2"></p>
      <Form>
        <label htmlFor="dep-airport" className="mb-2 flex items-center">
          <input
            name="airport"
            id="dep-airport"
            type="checkbox"
            className="mr-2"
            checked={isAirportSearch}
            onChange={handleCheckboxChange}
          />
          Search By Dep. Airport Instead
        </label>
        {!isAirportSearch ? (
          <Form.TextInput labelText="Flight Number" placeholder="Ex. AS1267" />
        ) : (
          <Form.TextInput labelText="Departure Airport" placeholder="Ex. PDX" />
        )}
      </Form>
    </Modal>
  );
};
