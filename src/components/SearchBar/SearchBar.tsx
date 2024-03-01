// Creating an object to specify the type of each prop, this ensure we dont pass the wrong type down the line
type Props = {
  placeholder: string;
};

// "React.FC" stand for functional component so here I am defining that this is a functional component and I am deifning props directly in our parameters
export const SearchBar = ({ placeholder }: Props) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-white rounded-[20px] p-4 m-auto"
    ></input>
  );
};
