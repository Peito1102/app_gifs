import type { FC } from "react";

interface Props {
    searches: string[];
    onTermClick: (term: string) => void;
}

//otra forma de definir el componente con FC (Functional Component) de React
export const PreviousSearches: FC<Props> = ({ searches , onTermClick}) => {
  return (
    <div className="previous-searches">
        <h2>Búsquedas previas</h2>
        <ul className="previous-searches-list">
            {
                searches.map((search, index) => (
                    <li key={index} className="previous-searches-item" onClick={() => onTermClick(search)}>
                        {search}
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}
