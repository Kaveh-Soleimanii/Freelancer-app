import Table from "../../../ui/Table";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import toLocalDateShort from "../../../utils/toLocalDateShort"
import { MdAssignmentAdd } from "react-icons/md"
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";


function ProjectRow({ project, index , isLoading}) {

    const { status, title, budget, deadline } = project;
    const [open, setOpen] = useState(false);

    return (
        <Table.Row key={project.id}>
            <td>{index + 1}</td>
            <td>{truncateText(title, 30)}</td>
            <td>{toPersianNumbersWithComma(budget)}</td>
            <td>{toLocalDateShort(deadline)}</td>
            <td>
                <span className={
                    status === "OPEN" ? "badge badge--success" : "badge badge--danger"
                }
                >
                    {status === "OPEN" ? "باز" : "بسته"}
                </span>
            </td>
            <td>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title={`درخواست انجام پروژه ${title}`}
                >
                    <CreateProposal
                        projectId={project._id}
                        onClose={() => setOpen(false)} 
                        isLoading={isLoading}
                        />
                </Modal>
                <button onClick={() => setOpen(true)}>
                    <MdAssignmentAdd />
                </button>
            </td>
        </Table.Row>
    )
}

export default ProjectRow