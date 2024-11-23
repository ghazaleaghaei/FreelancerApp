import Dashboard from "../../../Svg/Dashboard";
import Stat from "../../Shared/Stat";
import Collections from "../../../Svg/Collections"
import Price from "../../../Svg/Price"

function Stats({ projects }) {
    const numOfProjects = projects?.length;
    const numOfAcceptedProjects = projects?.map((project) => project.status === 2).length;
    const numOfProposal = projects?.reduce((acc, curr) => curr.proposals?.length + acc, 0);
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-4 my-8">
            <Stat
                title="projects"
                value={numOfProjects}
                icon={<Dashboard class="w-20 aspect-square fill-color1 p-2 bg-indigo-300 rounded-full flex-none" />}
            />
            <Stat
                title="assigned projects"
                value={numOfAcceptedProjects}
                icon={<Price class="w-20 aspect-square fill-green-800 p-2 bg-green-200 rounded-full flex-none" />}
            />
            <Stat
                title="requests"
                value={numOfProposal}
                icon={<Collections class="w-20 aspect-square fill-color2 p-2 bg-blue-200 rounded-full flex-none" />}
            />
        </div>
    )
}
export default Stats
