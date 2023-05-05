import Link from "./Link";

function Sidebar(){

    const links = [
        {path: '/accordion', label: 'Accordion'},
        {path: '/', label: 'Dropdown'},
        {path:'/buttons', label: 'Buttons'},
        {path:'/modal', label: 'Modal'},
        {path:'/table', label: 'Table'},
        {path:'/counter', label: 'Counter'},

    ]

    const renderedLinks = links.map(link => {
        return <Link  
        className="mb-3" 
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        key={link.label} 
        to={link.path}>
        {link.label}</Link>
    })


    return <div className="sticky top-0  flex flex-col items-start">{renderedLinks}</div>
}

export default Sidebar;