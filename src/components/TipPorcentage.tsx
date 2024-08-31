
import { tipOptions } from "../database/TipsData"

type TipPorcentageProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
}
const TipPorcentage = ({setTip} : TipPorcentageProps) => {
    const agregarTip = (e : React.MouseEvent<HTMLInputElement>) =>{
        const target = e.target as HTMLInputElement
        setTip(+target.value)
    }
    return (
        <div className="my-5">
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {tipOptions.map(tip => (
                    <li key={tip.id} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center ps-3">
                            <input id={tip.id} type="radio" value={tip.value} name="tip" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                            onClick={agregarTip}
                            />
                            <label htmlFor={tip.id} className="w-full py-3 px-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{tip.label}</label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TipPorcentage