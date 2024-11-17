import Dashboard from "../../../Svg/Dashboard";
import Collections from "../../../Svg/Collections"
import Price from "../../../Svg/Price"
import Stat from "../Owner/Stat";

function Stats({ proposals }) {
    const numOfProposals = proposals?.length;
    const acceptedProposals = proposals?.filter((proposal) => proposal.status === 2);
    const balance = acceptedProposals?.reduce((acc, curr) => curr.price + acc, 0);
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-4 my-8">
            <Stat
                title="requests"
                value={numOfProposals}
                icon={<Dashboard class="w-20 aspect-square fill-color1 p-2 bg-indigo-300 rounded-full flex-none" />}
            />
            <Stat
                title="accepted proposals"
                value={acceptedProposals?.length}
                icon={<Price class="w-20 aspect-square fill-green-800 p-2 bg-green-200 rounded-full flex-none" />}
            />
            <Stat
                title="wallet"
                value={`${balance}$`}
                icon={<Collections class="w-20 aspect-square fill-color2 p-2 bg-blue-200 rounded-full flex-none" />}
            />
        </div>
    )
}
export default Stats
