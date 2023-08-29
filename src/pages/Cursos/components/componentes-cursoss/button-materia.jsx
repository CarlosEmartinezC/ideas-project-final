export function Selectorbotton  ({ text, onClick }) {

        return (
          <button className="selector-button" onClick={onClick}>
            {text}
          </button>
        );
      };