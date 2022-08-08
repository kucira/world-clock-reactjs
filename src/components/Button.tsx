type Props = {
  label?: string;
  styleContainer?: string;
  onClick?: any;
  style?: any;
};

export default function Button({ label = '', styleContainer = '', style = '', onClick }: Props) {
  return (
    <div className={`${styleContainer} flex space-x-2 justify-center`}>
      <button
        type="button"
        onClick={onClick}
        className={`${style} inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-800 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
      >
        {label}
      </button>
    </div>
  );
}
