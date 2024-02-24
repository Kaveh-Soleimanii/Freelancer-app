import useToggleProjectStatus from './useToggleProjectStatus';
import Loading from "../../ui/Loading"
import Toggle from '../../ui/Toggle';
function ToggleProjectStatus({ project }) {
    const {status} = project;
    const { isUpdatting, toggleProjectStatus } = useToggleProjectStatus();

    const toogleHandler = () => {
        const newStatus = status === "OPEN" ? "CLOSE" : "OPEN";
        toggleProjectStatus({
            id: project._id,
            data: { status:newStatus },
        },)
    }
    return (
        <div className="w-[5rem]">
            {
                isUpdatting ? (
                <Loading height={20} width={50}/>
                ) : (
                <Toggle 
                enabled={status === "OPEN" ? true : false} 
                label={status === "OPEN" ? "باز" : "بسته"} 
                onChange={toogleHandler}/>
                )
            }
        </div>
    )
}

export default ToggleProjectStatus