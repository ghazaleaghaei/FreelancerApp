import Dashboard from "../../../Svg/Dashboard";
import Collections from "../../../Svg/Collections"
import Price from "../../../Svg/Price"
import Stat from "../../Shared/Stat";

function Stats({ proposals, users, projects }) {

    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-4 my-8">
            <Stat
                title="users"
                value={users}
                icon={<Dashboard class="w-20 aspect-square fill-color1 p-2 bg-indigo-300 rounded-full flex-none" />}
            />
            <Stat
                title="proposals"
                value={proposals}
                icon={<Price class="w-20 aspect-square fill-green-800 p-2 bg-green-200 rounded-full flex-none" />}
            />
            <Stat
                title="projects"
                value={projects}
                icon={<Collections class="w-20 aspect-square fill-color2 p-2 bg-blue-200 rounded-full flex-none" />}
            />
        </div>
    )
}
export default Stats
