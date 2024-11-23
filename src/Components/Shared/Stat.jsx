function Stat({ icon, title, value }) {
    return (
        <div class="w-full h-fit p-6 rounded bg-color2/10 flex gap-8 xl:px-3">
            {icon}
            <div class="flex flex-col gap-4">
                <span class="text-xl">{title}</span>
                <strong class="font-bold text-2xl">{value}</strong>
            </div>
        </div>

    )
}
export default Stat
