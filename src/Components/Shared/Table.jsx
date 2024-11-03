function Table({ children }) {
    return (
        <div class="max-w-7xl mx-auto overflow-x-auto">
            <table class="min-w-full table-auto">
                {children}
            </table>
        </div>
    )
}
export default Table;


function TableHeader({ children }) {
    return (
        <thead>
            <tr class="*:py-4">
                {children}
            </tr>
        </thead>
    )
}

function TableBody({ children }) {
    return <tbody class="bg-color1/10">
        {children}
    </tbody>
}

function TableRow({ children }) {
    return <tr class="*:p-4 text-center border border-color2/10">{children}</tr>
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
